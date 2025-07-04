"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useLocale } from "@/hooks/use-locale"
import { useLocaleContext } from "@/components/providers/locale-provider"
import type { UserPreferences } from "./dashboard"
import { Save } from "lucide-react"

interface SettingsPanelProps {
  open: boolean
  onClose: () => void
  preferences: UserPreferences
  onUpdatePreferences: (preferences: UserPreferences) => void
}

export function SettingsPanel({ open, onClose, preferences, onUpdatePreferences }: SettingsPanelProps) {
  const { t } = useLocale()
  const { locale, setLocale } = useLocaleContext()
  const [localPreferences, setLocalPreferences] = useState(preferences)

  const handleSave = () => {
    onUpdatePreferences(localPreferences)
    onClose()
  }

  const updatePreference = (key: keyof UserPreferences, value: any) => {
    setLocalPreferences((prev) => ({ ...prev, [key]: value }))
  }

  const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
    { value: "ja", label: "日本語" },
  ]

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>{t("settings.title")}</SheetTitle>
          <SheetDescription>{t("settings.description")}</SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Language Settings */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t("settings.language")}</h3>
            <div className="space-y-2">
              <Label>{t("settings.selectLanguage")}</Label>
              <Select value={locale} onValueChange={setLocale}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Timer Settings */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t("settings.timer")}</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t("settings.workDuration")}</Label>
                <Input
                  type="number"
                  min="1"
                  max="60"
                  value={localPreferences.work_duration}
                  onChange={(e) => updatePreference("work_duration", Number.parseInt(e.target.value))}
                />
              </div>

              <div className="space-y-2">
                <Label>{t("settings.breakDuration")}</Label>
                <Input
                  type="number"
                  min="1"
                  max="30"
                  value={localPreferences.break_duration}
                  onChange={(e) => updatePreference("break_duration", Number.parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t("settings.longBreakDuration")}</Label>
                <Input
                  type="number"
                  min="1"
                  max="60"
                  value={localPreferences.long_break_duration}
                  onChange={(e) => updatePreference("long_break_duration", Number.parseInt(e.target.value))}
                />
              </div>

              <div className="space-y-2">
                <Label>{t("settings.sessionsUntilLongBreak")}</Label>
                <Input
                  type="number"
                  min="2"
                  max="10"
                  value={localPreferences.sessions_until_long_break}
                  onChange={(e) => updatePreference("sessions_until_long_break", Number.parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Automation Settings */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{t("settings.automation")}</h3>

            <div className="flex items-center justify-between">
              <Label>{t("settings.autoStartBreaks")}</Label>
              <Switch
                checked={localPreferences.auto_start_breaks}
                onCheckedChange={(checked) => updatePreference("auto_start_breaks", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>{t("settings.autoStartWork")}</Label>
              <Switch
                checked={localPreferences.auto_start_work}
                onCheckedChange={(checked) => updatePreference("auto_start_work", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>{t("settings.notificationSound")}</Label>
              <Switch
                checked={localPreferences.notification_sound}
                onCheckedChange={(checked) => updatePreference("notification_sound", checked)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            {t("settings.cancel")}
          </Button>
          <Button onClick={handleSave} className="focus-gradient">
            <Save className="w-4 h-4 mr-2" />
            {t("settings.save")}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
