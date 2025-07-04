"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/providers/auth-provider"
import { useTheme } from "@/components/providers/theme-provider"
import { useLocale } from "@/hooks/use-locale"
import { Settings, LogOut, Brain, Sun, Moon, Palette } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  onSettingsClick: () => void
}

export function Header({ onSettingsClick }: HeaderProps) {
  const { user, signOut } = useAuth()
  const { theme, setTheme } = useTheme()
  const { t } = useLocale()

  const themeOptions = [
    { value: "light", label: t("themes.light"), icon: Sun },
    { value: "dark", label: t("themes.dark"), icon: Moon },
    { value: "ocean", label: t("themes.ocean"), icon: Palette },
    { value: "forest", label: t("themes.forest"), icon: Palette },
    { value: "sunset", label: t("themes.sunset"), icon: Palette },
  ] as const

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg focus-gradient">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">FocusMe</h1>
            <p className="text-sm text-muted-foreground">
              {t("dashboard.welcome")}, {user?.email?.split("@")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Palette className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {themeOptions.map((option) => {
                const Icon = option.icon
                return (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setTheme(option.value as any)}
                    className={theme === option.value ? "bg-accent" : ""}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {option.label}
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={onSettingsClick}>
            <Settings className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={signOut}>
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
