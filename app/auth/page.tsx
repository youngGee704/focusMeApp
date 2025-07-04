"use client"

import { useState } from "react"
import { AuthForm } from "@/components/auth/auth-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocale } from "@/hooks/use-locale"
import { Brain, Timer, Target, Zap } from "lucide-react"

export default function AuthPage() {
  const { t } = useLocale()
  const [activeTab, setActiveTab] = useState("signin")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary animate-float">
              <Brain className="w-5 h-5" />
              <span className="text-sm font-medium">Smart Productivity</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Focus<span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              A personalized Pomodoro timer that adapts to your work style and helps you stay focused with intelligent
              insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className="flex items-center gap-3 p-4 rounded-lg bg-card border animate-bounce-gentle"
              style={{ animationDelay: "0s" }}
            >
              <Timer className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Smart Timer</h3>
                <p className="text-sm text-muted-foreground">Adaptive Pomodoro</p>
              </div>
            </div>
            <div
              className="flex items-center gap-3 p-4 rounded-lg bg-card border animate-bounce-gentle"
              style={{ animationDelay: "0.2s" }}
            >
              <Target className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Adaptive UI</h3>
                <p className="text-sm text-muted-foreground">Personalized themes</p>
              </div>
            </div>
            <div
              className="flex items-center gap-3 p-4 rounded-lg bg-card border animate-bounce-gentle"
              style={{ animationDelay: "0.4s" }}
            >
              <Zap className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Smart Insights</h3>
                <p className="text-sm text-muted-foreground">Track your progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Form */}
        <Card className="w-full max-w-md mx-auto focus-glow">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to FocusMe</CardTitle>
            <CardDescription>Start your focused work journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <AuthForm mode="signin" />
              </TabsContent>
              <TabsContent value="signup">
                <AuthForm mode="signup" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
