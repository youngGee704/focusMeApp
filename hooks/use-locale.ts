"use client"

import { useLocaleContext } from "@/components/providers/locale-provider"

const translations = {
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
  es: {
    // Auth
    "auth.tagline": "Productividad Inteligente",
    "auth.description":
      "Un temporizador Pomodoro personalizado que se adapta a tu estilo de trabajo y te ayuda a mantenerte enfocado.",
    "auth.welcome": "Bienvenido a FocusMe",
    "auth.subtitle": "Comienza tu jornada de trabajo enfocado",
    "auth.signIn": "Iniciar Sesión",
    "auth.signUp": "Registrarse",
    "auth.email": "Correo",
    "auth.emailPlaceholder": "Ingresa tu correo",
    "auth.password": "Contraseña",
    "auth.passwordPlaceholder": "Ingresa tu contraseña",
    "auth.error": "Error",
    "auth.success": "Éxito",
    "auth.signInSuccess": "¡Sesión iniciada exitosamente!",
    "auth.signUpSuccess": "¡Cuenta creada exitosamente!",
    "auth.unexpectedError": "Ocurrió un error inesperado",
    "auth.features.timer": "Temporizador Inteligente",
    "auth.features.timerDesc": "Pomodoro Adaptativo",
    "auth.features.adaptive": "UI Adaptativa",
    "auth.features.adaptiveDesc": "Temas personalizados",
    "auth.features.insights": "Insights",
    "auth.features.insightsDesc": "Rastrea tu progreso",

    // Dashboard
    "dashboard.welcome": "Bienvenido de vuelta",

    // Timer
    "timer.work": "Sesión de Trabajo",
    "timer.break": "Descanso Corto",
    "timer.longBreak": "Descanso Largo",
    "timer.session": "Sesión",
    "timer.start": "Iniciar",
    "timer.pause": "Pausar",
    "timer.resume": "Reanudar",
    "timer.stop": "Detener",
    "timer.skip": "Saltar",

    // Stats
    "stats.title": "Tu Progreso",
    "stats.description": "Rastrea tu productividad y patrones de enfoque",
    "stats.todayWork": "Trabajo de Hoy",
    "stats.completedSessions": "sesiones completadas",
    "stats.todayTime": "Tiempo de Hoy",
    "stats.focusTime": "tiempo de enfoque",
    "stats.weekTime": "Tiempo de la Semana",
    "stats.thisWeek": "esta semana",
    "stats.average": "Promedio",
    "stats.sessionsPerDay": "sesiones por día",
    "stats.recentSessions": "Sesiones Recientes",
    "stats.last10Sessions": "Tus últimas 10 sesiones completadas",

    // Settings
    "settings.title": "Configuración",
    "settings.description": "Personaliza tu experiencia FocusMe",
    "settings.language": "Idioma",
    "settings.selectLanguage": "Seleccionar Idioma",
    "settings.timer": "Configuración del Temporizador",
    "settings.workDuration": "Duración del Trabajo (min)",
    "settings.breakDuration": "Duración del Descanso (min)",
    "settings.longBreakDuration": "Duración del Descanso Largo (min)",
    "settings.sessionsUntilLongBreak": "Sesiones Hasta Descanso Largo",
    "settings.automation": "Automatización",
    "settings.autoStartBreaks": "Auto-iniciar descansos",
    "settings.autoStartWork": "Auto-iniciar sesiones de trabajo",
    "settings.notificationSound": "Sonido de notificación",
    "settings.save": "Guardar Cambios",
    "settings.cancel": "Cancelar",

    // Themes
    "themes.light": "Claro",
    "themes.dark": "Oscuro",
    "themes.ocean": "Océano",
    "themes.forest": "Bosque",
    "themes.sunset": "Atardecer",
  },
  fr: {
    // Auth
    "auth.tagline": "Productivité Intelligente",
    "auth.description":
      "Un minuteur Pomodoro personnalisé qui s'adapte à votre style de travail et vous aide à rester concentré.",
    "auth.welcome": "Bienvenue sur FocusMe",
    "auth.subtitle": "Commencez votre parcours de travail concentré",
    "auth.signIn": "Se Connecter",
    "auth.signUp": "S'inscrire",
    "auth.email": "Email",
    "auth.emailPlaceholder": "Entrez votre email",
    "auth.password": "Mot de passe",
    "auth.passwordPlaceholder": "Entrez votre mot de passe",
    "auth.error": "Erreur",
    "auth.success": "Succès",
    "auth.signInSuccess": "Connexion réussie!",
    "auth.signUpSuccess": "Compte créé avec succès!",
    "auth.unexpectedError": "Une erreur inattendue s'est produite",
    "auth.features.timer": "Minuteur Intelligent",
    "auth.features.timerDesc": "Pomodoro Adaptatif",
    "auth.features.adaptive": "UI Adaptative",
    "auth.features.adaptiveDesc": "Thèmes personnalisés",
    "auth.features.insights": "Insights",
    "auth.features.insightsDesc": "Suivez vos progrès",

    // Dashboard
    "dashboard.welcome": "Bon retour",

    // Timer
    "timer.work": "Session de Travail",
    "timer.break": "Pause Courte",
    "timer.longBreak": "Pause Longue",
    "timer.session": "Session",
    "timer.start": "Démarrer",
    "timer.pause": "Pause",
    "timer.resume": "Reprendre",
    "timer.stop": "Arrêter",
    "timer.skip": "Passer",

    // Stats
    "stats.title": "Vos Progrès",
    "stats.description": "Suivez votre productivité et vos habitudes de concentration",
    "stats.todayWork": "Travail d'Aujourd'hui",
    "stats.completedSessions": "sessions terminées",
    "stats.todayTime": "Temps d'Aujourd'hui",
    "stats.focusTime": "temps de concentration",
    "stats.weekTime": "Temps de la Semaine",
    "stats.thisWeek": "cette semaine",
    "stats.average": "Moyenne",
    "stats.sessionsPerDay": "sessions par jour",
    "stats.recentSessions": "Sessions Récentes",
    "stats.last10Sessions": "Vos 10 dernières sessions terminées",

    // Settings
    "settings.title": "Paramètres",
    "settings.description": "Personnalisez votre expérience FocusMe",
    "settings.language": "Langue",
    "settings.selectLanguage": "Sélectionner la Langue",
    "settings.timer": "Paramètres du Minuteur",
    "settings.workDuration": "Durée de Travail (min)",
    "settings.breakDuration": "Durée de Pause (min)",
    "settings.longBreakDuration": "Durée de Pause Longue (min)",
    "settings.sessionsUntilLongBreak": "Sessions Avant Pause Longue",
    "settings.automation": "Automatisation",
    "settings.autoStartBreaks": "Démarrage auto des pauses",
    "settings.autoStartWork": "Démarrage auto des sessions de travail",
    "settings.notificationSound": "Son de notification",
    "settings.save": "Sauvegarder",
    "settings.cancel": "Annuler",

    // Themes
    "themes.light": "Clair",
    "themes.dark": "Sombre",
    "themes.ocean": "Océan",
    "themes.forest": "Forêt",
    "themes.sunset": "Coucher de Soleil",
  },
  de: {
    // Auth
    "auth.tagline": "Intelligente Produktivität",
    "auth.description":
      "Ein personalisierter Pomodoro-Timer, der sich an Ihren Arbeitsstil anpasst und Ihnen hilft, fokussiert zu bleiben.",
    "auth.welcome": "Willkommen bei FocusMe",
    "auth.subtitle": "Beginnen Sie Ihre fokussierte Arbeitsreise",
    "auth.signIn": "Anmelden",
    "auth.signUp": "Registrieren",
    "auth.email": "E-Mail",
    "auth.emailPlaceholder": "E-Mail eingeben",
    "auth.password": "Passwort",
    "auth.passwordPlaceholder": "Passwort eingeben",
    "auth.error": "Fehler",
    "auth.success": "Erfolg",
    "auth.signInSuccess": "Erfolgreich angemeldet!",
    "auth.signUpSuccess": "Konto erfolgreich erstellt!",
    "auth.unexpectedError": "Ein unerwarteter Fehler ist aufgetreten",
    "auth.features.timer": "Intelligenter Timer",
    "auth.features.timerDesc": "Adaptiver Pomodoro",
    "auth.features.adaptive": "Adaptive UI",
    "auth.features.adaptiveDesc": "Personalisierte Themes",
    "auth.features.insights": "Einblicke",
    "auth.features.insightsDesc": "Verfolgen Sie Ihren Fortschritt",

    // Dashboard
    "dashboard.welcome": "Willkommen zurück",

    // Timer
    "timer.work": "Arbeitssitzung",
    "timer.break": "Kurze Pause",
    "timer.longBreak": "Lange Pause",
    "timer.session": "Sitzung",
    "timer.start": "Starten",
    "timer.pause": "Pausieren",
    "timer.resume": "Fortsetzen",
    "timer.stop": "Stoppen",
    "timer.skip": "Überspringen",

    // Stats
    "stats.title": "Ihr Fortschritt",
    "stats.description": "Verfolgen Sie Ihre Produktivität und Fokus-Muster",
    "stats.todayWork": "Heutige Arbeit",
    "stats.completedSessions": "abgeschlossene Sitzungen",
    "stats.todayTime": "Heutige Zeit",
    "stats.focusTime": "Fokuszeit",
    "stats.weekTime": "Wochenzeit",
    "stats.thisWeek": "diese Woche",
    "stats.average": "Durchschnitt",
    "stats.sessionsPerDay": "Sitzungen pro Tag",
    "stats.recentSessions": "Letzte Sitzungen",
    "stats.last10Sessions": "Ihre letzten 10 abgeschlossenen Sitzungen",

    // Settings
    "settings.title": "Einstellungen",
    "settings.description": "Passen Sie Ihre FocusMe-Erfahrung an",
    "settings.language": "Sprache",
    "settings.selectLanguage": "Sprache auswählen",
    "settings.timer": "Timer-Einstellungen",
    "settings.workDuration": "Arbeitsdauer (min)",
    "settings.breakDuration": "Pausendauer (min)",
    "settings.longBreakDuration": "Lange Pausendauer (min)",
    "settings.sessionsUntilLongBreak": "Sitzungen bis lange Pause",
    "settings.automation": "Automatisierung",
    "settings.autoStartBreaks": "Pausen automatisch starten",
    "settings.autoStartWork": "Arbeitssitzungen automatisch starten",
    "settings.notificationSound": "Benachrichtigungston",
    "settings.save": "Änderungen speichern",
    "settings.cancel": "Abbrechen",

    // Themes
    "themes.light": "Hell",
    "themes.dark": "Dunkel",
    "themes.ocean": "Ozean",
    "themes.forest": "Wald",
    "themes.sunset": "Sonnenuntergang",
  },
  ja: {
    // Auth
    "auth.tagline": "スマート生産性",
    "auth.description":
      "あなたの作業スタイルに適応し、集中力を維持するのに役立つパーソナライズされたポモドーロタイマー。",
    "auth.welcome": "FocusMeへようこそ",
    "auth.subtitle": "集中した作業の旅を始めましょう",
    "auth.signIn": "サインイン",
    "auth.signUp": "サインアップ",
    "auth.email": "メール",
    "auth.emailPlaceholder": "メールアドレスを入力",
    "auth.password": "パスワード",
    "auth.passwordPlaceholder": "パスワードを入力",
    "auth.error": "エラー",
    "auth.success": "成功",
    "auth.signInSuccess": "サインインに成功しました！",
    "auth.signUpSuccess": "アカウントが正常に作成されました！",
    "auth.unexpectedError": "予期しないエラーが発生しました",
    "auth.features.timer": "スマートタイマー",
    "auth.features.timerDesc": "アダプティブポモドーロ",
    "auth.features.adaptive": "アダプティブUI",
    "auth.features.adaptiveDesc": "パーソナライズされたテーマ",
    "auth.features.insights": "インサイト",
    "auth.features.insightsDesc": "進捗を追跡",

    // Dashboard
    "dashboard.welcome": "おかえりなさい",

    // Timer
    "timer.work": "作業セッション",
    "timer.break": "短い休憩",
    "timer.longBreak": "長い休憩",
    "timer.session": "セッション",
    "timer.start": "開始",
    "timer.pause": "一時停止",
    "timer.resume": "再開",
    "timer.stop": "停止",
    "timer.skip": "スキップ",

    // Stats
    "stats.title": "あなたの進捗",
    "stats.description": "生産性と集中パターンを追跡",
    "stats.todayWork": "今日の作業",
    "stats.completedSessions": "完了したセッション",
    "stats.todayTime": "今日の時間",
    "stats.focusTime": "集中時間",
    "stats.weekTime": "今週の時間",
    "stats.thisWeek": "今週",
    "stats.average": "平均",
    "stats.sessionsPerDay": "1日あたりのセッション",
    "stats.recentSessions": "最近のセッション",
    "stats.last10Sessions": "最後の10回の完了したセッション",

    // Settings
    "settings.title": "設定",
    "settings.description": "FocusMeの体験をカスタマイズ",
    "settings.language": "言語",
    "settings.selectLanguage": "言語を選択",
    "settings.timer": "タイマー設定",
    "settings.workDuration": "作業時間（分）",
    "settings.breakDuration": "休憩時間（分）",
    "settings.longBreakDuration": "長い休憩時間（分）",
    "settings.sessionsUntilLongBreak": "長い休憩までのセッション数",
    "settings.automation": "自動化",
    "settings.autoStartBreaks": "休憩を自動開始",
    "settings.autoStartWork": "作業セッションを自動開始",
    "settings.notificationSound": "通知音",
    "settings.save": "変更を保存",
    "settings.cancel": "キャンセル",

    // Themes
    "themes.light": "ライト",
    "themes.dark": "ダーク",
    "themes.ocean": "オーシャン",
    "themes.forest": "フォレスト",
    "themes.sunset": "サンセット",
  },
}

export function useLocale() {
  const { locale } = useLocaleContext()

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[locale]

    for (const k of keys) {
      value = value?.[k]
      if (!value) break
    }

    // If translation not found, try English as fallback
    if (!value && locale !== "en") {
      let fallback: any = translations.en
      for (const k of keys) {
        fallback = fallback?.[k]
        if (!fallback) break
      }
      value = fallback
    }

    // If still no translation, return a readable version of the key
    if (!value) {
      const lastKey = keys[keys.length - 1]
      return lastKey.charAt(0).toUpperCase() + lastKey.slice(1).replace(/([A-Z])/g, " $1")
    }

    return value
  }

  return { t, locale }
}
