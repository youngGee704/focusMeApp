"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale } from "@/hooks/use-locale"
import type { Session } from "./dashboard"
import { Timer, Target, TrendingUp, Calendar } from "lucide-react"

interface StatsSectionProps {
  sessions: Session[]
}

export function StatsSection({ sessions }: StatsSectionProps) {
  const { t } = useLocale()

  const today = new Date().toDateString()
  const thisWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

  const todaySessions = sessions.filter((s) => new Date(s.created_at).toDateString() === today && s.completed)

  const weekSessions = sessions.filter((s) => new Date(s.created_at) >= thisWeek && s.completed)

  const workSessionsToday = todaySessions.filter((s) => s.type === "work").length
  const totalMinutesToday = todaySessions.reduce((acc, s) => acc + s.duration, 0)
  const totalMinutesWeek = weekSessions.reduce((acc, s) => acc + s.duration, 0)
  const averageSessionsPerDay = weekSessions.length / 7

  const stats = [
    {
      title: t("stats.todayWork"),
      value: workSessionsToday,
      description: t("stats.completedSessions"),
      icon: Timer,
      color: "text-primary",
    },
    {
      title: t("stats.todayTime"),
      value: `${Math.round(totalMinutesToday)}m`,
      description: t("stats.focusTime"),
      icon: Target,
      color: "text-green-500",
    },
    {
      title: t("stats.weekTime"),
      value: `${Math.round(totalMinutesWeek / 60)}h`,
      description: t("stats.thisWeek"),
      icon: Calendar,
      color: "text-blue-500",
    },
    {
      title: t("stats.average"),
      value: averageSessionsPerDay.toFixed(1),
      description: t("stats.sessionsPerDay"),
      icon: TrendingUp,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t("stats.title")}</h2>
        <p className="text-muted-foreground">{t("stats.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {sessions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>{t("stats.recentSessions")}</CardTitle>
            <CardDescription>{t("stats.last10Sessions")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {sessions.slice(0, 10).map((session) => (
                <div key={session.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        session.type === "work"
                          ? "bg-primary"
                          : session.type === "break"
                            ? "bg-green-500"
                            : "bg-blue-500"
                      }`}
                    />
                    <span className="capitalize">
                      {session.type === "work"
                        ? t("timer.work")
                        : session.type === "break"
                          ? t("timer.break")
                          : t("timer.longBreak")}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {session.duration}m • {new Date(session.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
