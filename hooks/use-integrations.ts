"use client"

import { useEffect } from "react"
import { lingo } from "@/lib/integrations/lingo"
import { tambo } from "@/lib/integrations/tambo"
import { autumn } from "@/lib/integrations/autumn"
import { useLocaleContext } from "@/components/providers/locale-provider"

export function useIntegrations() {
  const { locale } = useLocaleContext()

  useEffect(() => {
    // Initialize Tambo theme adaptation
    const hour = new Date().getHours()
    const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening"

    tambo.adaptTheme({
      timeOfDay,
      focusLevel: 7,
      sessionCount: 1,
    })

    // Track page view with Autumn
    autumn.track("page_view", {
      page: "dashboard",
      locale,
      timeOfDay,
    })

    console.log(`🚀 Integrations initialized for locale: ${locale}`)
  }, [locale])

  const trackSession = (type: string, duration: number, completed: boolean) => {
    autumn.track("session_complete", {
      type,
      duration,
      completed,
      timestamp: Date.now(),
    })
    console.log(`📊 Tracked session: ${type} (${duration}min, completed: ${completed})`)
  }

  const adaptThemeForSession = (sessionType: string) => {
    tambo.adaptTheme({
      timeOfDay: new Date().getHours() < 18 ? "day" : "night",
    })
    console.log(`🎨 Adapted theme for session: ${sessionType}`)
  }

  return {
    trackSession,
    adaptThemeForSession,
    lingo,
    tambo,
    autumn,
  }
}
