# FocusMe - Personalized Productivity Timer

A smart Pomodoro timer that adapts to your work style and helps you stay focused with intelligent insights, localization, and adaptive UI themes.

## ✨ Features

- **🎯 Smart Pomodoro Timer**: Customizable work/break intervals with intelligent session management
- **🌍 Multi-language Support**: Available in English, Spanish, French, German, and Japanese
- **🎨 Adaptive Themes**: 5 beautiful themes (Light, Dark, Ocean, Forest, Sunset) that adapt to your preferences
- **📊 Progress Tracking**: Detailed analytics and insights into your productivity patterns
- **🔐 Secure Authentication**: Email/password authentication powered by Supabase
- **⚙️ Personalized Settings**: Customize timer durations, automation, and notifications
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🔔 Smart Notifications**: Audio notifications and visual cues for session transitions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/focusme.git
cd focusme
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Go to SQL Editor and run the contents of \`supabase.sql\` to set up the database schema

### 4. Configure Environment Variables

1. Copy the environment template:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Fill in your Supabase credentials:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

### 5. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

\`\`\`
focusme/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication page
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Dashboard page
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard components
│   ├── providers/         # Context providers
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── docs/                  # Documentation
├── supabase.sql          # Database schema
└── README.md             # This file
\`\`\`

## 🎨 Themes

FocusMe includes 5 carefully crafted themes:

- **Light**: Clean and minimal for daytime productivity
- **Dark**: Easy on the eyes for late-night sessions
- **Ocean**: Calming blues for deep focus
- **Forest**: Natural greens for balanced work
- **Sunset**: Warm oranges for creative sessions

## 🌍 Localization

Currently supported languages:
- 🇺🇸 English
- 🇪🇸 Spanish (Español)
- 🇫🇷 French (Français)
- 🇩🇪 German (Deutsch)
- 🇯🇵 Japanese (日本語)

The app automatically detects your browser language or you can manually select your preferred language in settings.

## 📊 Analytics & Insights

FocusMe tracks your productivity patterns:

- Daily and weekly session counts
- Total focus time and averages
- Session completion rates
- Historical data and trends
- Personalized recommendations (coming soon)

## ⚙️ Customization

### Timer Settings
- Work session duration (1-60 minutes)
- Short break duration (1-30 minutes)
- Long break duration (1-60 minutes)
- Sessions until long break (2-10 sessions)

### Automation
- Auto-start breaks after work sessions
- Auto-start work after breaks
- Notification sounds on/off

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- Render
- DigitalOcean App Platform
- Any platform supporting Node.js

## 🛠️ Development

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run type-check\` - Run TypeScript type checking

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Language**: TypeScript

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Make your changes and test thoroughly
4. Commit your changes: \`git commit -m 'Add amazing feature'\`
5. Push to the branch: \`git push origin feature/amazing-feature\`
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/yourusername/focusme/issues) page
2. Create a new issue with detailed information
3. Join our [Discord community](https://discord.gg/focusme) for help

## 🙏 Acknowledgments

- [Pomodoro Technique](https://francescocirillo.com/pages/pomodoro-technique) by Francesco Cirillo
- [Supabase](https://supabase.com) for the amazing backend-as-a-service
- [Vercel](https://vercel.com) for seamless deployment
- [Tailwind CSS](https://tailwindcss.com) for beautiful styling
- [Radix UI](https://radix-ui.com) for accessible components

---

**Happy focusing! 🎯**
\`\`\`
