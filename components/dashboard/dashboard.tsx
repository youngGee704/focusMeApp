"use client"

import { useState, useEffect } from "react"
import { Header } from "./header"
import { TimerSection } from "./timer-section"
import { StatsSection } from "./stats-section"
import { SettingsPanel } from "./settings-panel"
import { useAuth } from "@/components/providers/auth-provider"
import { supabase } from "@/lib/supabase"
import { useIntegrations } from "@/hooks/use-integrations"

export interface UserPreferences {
  work_duration: number
  break_duration: number
  long_break_duration: number
  sessions_until_long_break: number
  auto_start_breaks: boolean
  auto_start_work: boolean
  notification_sound: boolean
}

export interface Session {
  id: string
  user_id: string
  type: "work" | "break" | "long_break"
  duration: number
  completed: boolean
  created_at: string
}

export function Dashboard() {
  const { user } = useAuth()
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<UserPreferences>({
    work_duration: 25,
    break_duration: 5,
    long_break_duration: 15,
    sessions_until_long_break: 4,
    auto_start_breaks: false,
    auto_start_work: false,
    notification_sound: true,
  })
  const [sessions, setSessions] = useState<Session[]>([])

  const { trackSession, adaptThemeForSession } = useIntegrations()

  useEffect(() => {
    if (user) {
      loadUserPreferences()
      loadUserSessions()
    }
  }, [user])

  const loadUserPreferences = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase.from("user_preferences").select("*").eq("user_id", user.id).single()

      if (data && !error) {
        setPreferences(data)
      } else {
        // Create default preferences if they don't exist
        const { error: insertError } = await supabase
          .from("user_preferences")
          .insert([{ user_id: user.id, ...preferences }])

        if (!insertError) {
          console.log("Created default preferences for user")
        }
      }
    } catch (error) {
      console.log("Using default preferences")
    }
  }

  const loadUserSessions = async () => {
    if (!user) return

    const { data, error } = await supabase
      .from("sessions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50)

    if (data && !error) {
      setSessions(data)
    }
  }

  const updatePreferences = async (newPreferences: UserPreferences) => {
    if (!user) return

    const { error } = await supabase.from("user_preferences").upsert([{ user_id: user.id, ...newPreferences }])

    if (!error) {
      setPreferences(newPreferences)
    }
  }

  const addSession = async (session: Omit<Session, "id" | "user_id" | "created_at">) => {
    if (!user) return

    const { data, error } = await supabase
      .from("sessions")
      .insert([{ user_id: user.id, ...session }])
      .select()
      .single()

    if (data && !error) {
      setSessions((prev) => [data, ...prev])
      // Track with Autumn
      trackSession(session.type, session.duration, session.completed)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header onSettingsClick={() => setShowSettings(true)} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <TimerSection preferences={preferences} onSessionComplete={addSession} />
        <StatsSection sessions={sessions} />
      </main>

      <SettingsPanel
        open={showSettings}
        onClose={() => setShowSettings(false)}
        preferences={preferences}
        onUpdatePreferences={updatePreferences}
      />
    </div>
  )
}
