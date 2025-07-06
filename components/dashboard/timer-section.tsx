"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "@/hooks/use-locale"
import { Play, Pause, Square, SkipForward } from "lucide-react"
import type { UserPreferences, Session } from "./dashboard"

interface TimerSectionProps {
  preferences: UserPreferences
  onSessionComplete: (session: Omit<Session, "id" | "user_id" | "created_at">) => void
}

type TimerState = "idle" | "running" | "paused"
type SessionType = "work" | "break" | "long_break"

export function TimerSection({ preferences, onSessionComplete }: TimerSectionProps) {
  const { t } = useLocale()
  const [state, setState] = useState<TimerState>("idle")
  const [sessionType, setSessionType] = useState<SessionType>("work")
  const [timeLeft, setTimeLeft] = useState(preferences.work_duration * 60)
  const [sessionCount, setSessionCount] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  const totalTime =
    sessionType === "work"
      ? preferences.work_duration * 60
      : sessionType === "break"
        ? preferences.break_duration * 60
        : preferences.long_break_duration * 60

  const progress = ((totalTime - timeLeft) / totalTime) * 100

  useEffect(() => {
    setTimeLeft(totalTime)
  }, [totalTime])

  useEffect(() => {
    if (state === "running" && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSessionComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [state, timeLeft])

  const handleSessionComplete = () => {
    setState("idle")

    // Play notification sound if enabled
    if (preferences.notification_sound) {
      const audio = new Audio("/notification.mp3")
      audio.play().catch(() => {}) // Ignore errors if audio can't play
    }

    // Record the completed session
    onSessionComplete({
      type: sessionType,
      duration: totalTime / 60,
      completed: true,
    })

    // Determine next session type
    if (sessionType === "work") {
      const newSessionCount = sessionCount + 1
      setSessionCount(newSessionCount)

      if (newSessionCount % preferences.sessions_until_long_break === 0) {
        setSessionType("long_break")
        setTimeLeft(preferences.long_break_duration * 60)
      } else {
        setSessionType("break")
        setTimeLeft(preferences.break_duration * 60)
      }

      if (preferences.auto_start_breaks) {
        setState("running")
      }
    } else {
      setSessionType("work")
      setTimeLeft(preferences.work_duration * 60)

      if (preferences.auto_start_work) {
        setState("running")
      }
    }
  }

  const handleStart = () => {
    setState("running")
  }

  const handlePause = () => {
    setState("paused")
  }

  const handleStop = () => {
    setState("idle")
    setTimeLeft(totalTime)
  }

  const handleSkip = () => {
    handleSessionComplete()
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getSessionTypeLabel = () => {
    switch (sessionType) {
      case "work":
        return t("timer.work")
      case "break":
        return t("timer.break")
      case "long_break":
        return t("timer.longBreak")
    }
  }

  const getSessionTypeColor = () => {
    switch (sessionType) {
      case "work":
        return "text-primary"
      case "break":
        return "text-green-500"
      case "long_break":
        return "text-blue-500"
    }
  }

  return (
    <div className="text-center space-y-8">
      <Card className="max-w-md mx-auto focus-glow">
        <CardContent className="p-8 space-y-6">
          <div className="relative">
            <div className="w-48 h-48 mx-auto relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-muted-foreground/20"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className={`timer-circle ${getSessionTypeColor()}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold">{formatTime(timeLeft)}</div>
                  <div className="text-sm text-muted-foreground mt-1">{Math.round(progress)}%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {state === "idle" && (
              <Button onClick={handleStart} className="focus-gradient">
                <Play className="w-4 h-4 mr-2" />
                {t("timer.start")}
              </Button>
            )}

            {state === "running" && (
              <>
                <Button onClick={handlePause} variant="outline">
                  <Pause className="w-4 h-4 mr-2" />
                  {t("timer.pause")}
                </Button>
                <Button onClick={handleStop} variant="outline">
                  <Square className="w-4 h-4 mr-2" />
                  {t("timer.stop")}
                </Button>
                <Button onClick={handleSkip} variant="outline">
                  <SkipForward className="w-4 h-4 mr-2" />
                  {t("timer.skip")}
                </Button>
              </>
            )}

            {state === "paused" && (
              <>
                <Button onClick={handleStart} className="focus-gradient">
                  <Play className="w-4 h-4 mr-2" />
                  {t("timer.resume")}
                </Button>
                <Button onClick={handleStop} variant="outline">
                  <Square className="w-4 h-4 mr-2" />
                  {t("timer.stop")}
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
