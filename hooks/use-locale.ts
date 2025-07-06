"use client"

import { useLocaleContext } from "@/components/providers/locale-provider"
import { useState, useEffect } from "react"
import { lingo } from "@/lib/integrations/lingo"

// Base English translations
const baseTranslations = {
  en: {
    // Auth
    "auth.tagline": "Smart Productivity",
    "auth.description":
      "A personalized Pomodoro timer that adapts to your work style and helps you stay focused with intelligent insights.",
    "auth.welcome": "Welcome to FocusMe",
    "auth.subtitle": "Start your focused work journey",
    "auth.signIn": "Sign In",
    "auth.signUp": "Sign Up",
    "auth.email": "Email",
    "auth.emailPlaceholder": "Enter your email",
    "auth.password": "Password",
    "auth.passwordPlaceholder": "Enter your password",
    "auth.error": "Error",
    "auth.success": "Success",
    "auth.signInSuccess": "Successfully signed in!",
    "auth.signUpSuccess": "Account created successfully!",
    "auth.unexpectedError": "An unexpected error occurred",
    "auth.features.timer": "Smart Timer",
    "auth.features.timerDesc": "Adaptive Pomodoro",
    "auth.features.adaptive": "Adaptive UI",
    "auth.features.adaptiveDesc": "Personalized themes",
    "auth.features.insights": "Insights",
    "auth.features.insightsDesc": "Track your progress",

    // Dashboard
    "dashboard.welcome": "Welcome back",

    // Timer
    "timer.work": "Work Session",
    "timer.break": "Short Break",
    "timer.longBreak": "Long Break",
    "timer.session": "Session",
    "timer.start": "Start",
    "timer.pause": "Pause",
    "timer.resume": "Resume",
    "timer.stop": "Stop",
    "timer.skip": "Skip",

    // Stats
    "stats.title": "Your Progress",
    "stats.description": "Track your productivity and focus patterns",
    "stats.todayWork": "Today's Work",
    "stats.completedSessions": "completed sessions",
    "stats.todayTime": "Today's Time",
    "stats.focusTime": "focus time",
    "stats.weekTime": "Week's Time",
    "stats.thisWeek": "this week",
    "stats.average": "Average",
    "stats.sessionsPerDay": "sessions per day",
    "stats.recentSessions": "Recent Sessions",
    "stats.last10Sessions": "Your last 10 completed sessions",

    // Settings
    "settings.title": "Settings",
    "settings.description": "Customize your FocusMe experience",
    "settings.language": "Language",
    "settings.selectLanguage": "Select Language",
    "settings.timer": "Timer Settings",
    "settings.workDuration": "Work Duration (min)",
    "settings.breakDuration": "Break Duration (min)",
    "settings.longBreakDuration": "Long Break Duration (min)",
    "settings.sessionsUntilLongBreak": "Sessions Until Long Break",
    "settings.automation": "Automation",
    "settings.autoStartBreaks": "Auto-start breaks",
    "settings.autoStartWork": "Auto-start work sessions",
    "settings.notificationSound": "Notification sound",
    "settings.save": "Save Changes",
    "settings.cancel": "Cancel",

    // Themes
    "themes.light": "Light",
    "themes.dark": "Dark",
    "themes.ocean": "Ocean",
    "themes.forest": "Forest",
    "themes.sunset": "Sunset",
  },
}

export function useLocale() {
  const { locale } = useLocaleContext()
  const [translations, setTranslations] = useState<Record<string, string>>(baseTranslations.en)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadTranslations = async () => {
      if (locale === "en") {
        setTranslations(baseTranslations.en)
        return
      }

      setLoading(true)
      try {
        // Try to get translations from Lingo.dev first, with fallback
        const localeTranslations = await lingo.getTranslations(locale)
        setTranslations({ ...baseTranslations.en, ...localeTranslations })
        console.log(`✅ Loaded ${locale} translations`)
      } catch (error) {
        console.error(`❌ Failed to load ${locale} translations:`, error)
        // Keep English as fallback
        setTranslations(baseTranslations.en)
      } finally {
        setLoading(false)
      }
    }

    loadTranslations()
  }, [locale])

  const t = (key: string): string => {
    const value = translations[key]

    if (!value) {
      // If translation not found, return a readable version of the key
      const lastKey = key.split(".").pop() || key
      const readable = lastKey.charAt(0).toUpperCase() + lastKey.slice(1).replace(/([A-Z])/g, " $1")
      console.warn(`⚠️ Missing translation for key: ${key}`)
      return readable
    }

    return value
  }

  return { t, locale, loading }
}
