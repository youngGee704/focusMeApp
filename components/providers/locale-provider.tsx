"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Locale = "en" | "es" | "fr" | "de" | "ja"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    const savedLocale = localStorage.getItem("focusme-locale") as Locale
    if (savedLocale) {
      setLocale(savedLocale)
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.split("-")[0] as Locale
      if (["en", "es", "fr", "de", "ja"].includes(browserLang)) {
        setLocale(browserLang)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("focusme-locale", locale)
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocaleContext() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocaleContext must be used within a LocaleProvider")
  }
  return context
}
