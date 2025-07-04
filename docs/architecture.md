# Technical Architecture

## 🏗️ System Overview

FocusMe is built as a modern, scalable web application using a serverless architecture that prioritizes performance, security, and user experience.

### Architecture Principles

- **🎯 User-Centric Design**: Every technical decision prioritizes user experience
- **⚡ Performance First**: Optimized for speed and responsiveness
- **🔒 Security by Design**: Built-in security at every layer
- **📈 Scalable Foundation**: Architecture that grows with user base
- **🌍 Global Accessibility**: Designed for international users from day one

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
  - Server-side rendering for optimal performance
  - Built-in optimization for images, fonts, and scripts
  - API routes for serverless functions
  
- **Language**: TypeScript
  - Type safety and better developer experience
  - Enhanced IDE support and refactoring capabilities
  
- **Styling**: Tailwind CSS + CSS Variables
  - Utility-first approach for rapid development
  - Custom CSS variables for dynamic theming
  - Responsive design with mobile-first approach
  
- **UI Components**: Radix UI + Custom Components
  - Accessible, unstyled components as foundation
  - Custom styled components for brand consistency
  - Keyboard navigation and screen reader support

### Backend & Database
- **Backend-as-a-Service**: Supabase
  - PostgreSQL database with real-time subscriptions
  - Built-in authentication and authorization
  - Row-level security for data protection
  - Automatic API generation from database schema
  
- **Authentication**: Supabase Auth
  - Email/password authentication
  - JWT tokens for secure session management
  - Built-in security features (rate limiting, etc.)

### State Management
- **Global State**: React Context API
  - Lightweight solution for app-wide state
  - Theme, locale, and user preferences
  - Minimal complexity, maximum performance
  
- **Server State**: Native fetch with React 18 features
  - Leverages React's built-in data fetching patterns
  - Optimistic updates for better UX
  - Error boundaries for graceful error handling

### Deployment & Infrastructure
- **Hosting**: Vercel (Primary) / Render (Alternative)
  - Edge network for global performance
  - Automatic deployments from Git
  - Built-in analytics and monitoring
  
- **CDN**: Vercel Edge Network
  - Global content delivery
  - Automatic image optimization
  - Static asset caching

## 🏛️ System Architecture

\`\`\`
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   User Device   │    │   Vercel Edge   │    │    Supabase     │
│                 │    │                 │    │                 │
│  ┌───────────┐  │    │  ┌───────────┐  │    │  ┌───────────┐  │
│  │ React App │  │◄──►│  │  Next.js  │  │◄──►│  │PostgreSQL │  │
│  │           │  │    │  │    App    │  │    │  │ Database  │  │
│  └───────────┘  │    │  └───────────┘  │    │  └───────────┘  │
│                 │    │                 │    │                 │
│  ┌───────────┐  │    │  ┌───────────┐  │    │  ┌───────────┐  │
│  │   PWA     │  │    │  │    API    │  │    │  │   Auth    │  │
│  │  Service  │  │    │  │  Routes   │  │    │  │  Service  │  │
│  │  Worker   │  │    │  └───────────┘  │    │  └───────────┘  │
│  └───────────┘  │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
\`\`\`

## 📊 Database Schema

### Core Tables

#### **users** (Managed by Supabase Auth)
- Handles authentication and basic user information
- Automatic user management with JWT tokens
- Built-in security features

#### **user_preferences**
\`\`\`sql
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key to auth.users)
- work_duration: INTEGER (25 minutes default)
- break_duration: INTEGER (5 minutes default)
- long_break_duration: INTEGER (15 minutes default)
- sessions_until_long_break: INTEGER (4 default)
- auto_start_breaks: BOOLEAN
- auto_start_work: BOOLEAN
- notification_sound: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
\`\`\`

#### **sessions**
\`\`\`sql
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key)
- type: VARCHAR ('work', 'break', 'long_break')
- duration: INTEGER (in minutes)
- completed: BOOLEAN
- created_at: TIMESTAMP
\`\`\`

#### **user_analytics** (Future)
\`\`\`sql
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key)
- event_type: VARCHAR
- event_data: JSONB
- created_at: TIMESTAMP
\`\`\`

### Security Model

#### Row Level Security (RLS)
- All tables have RLS enabled
- Users can only access their own data
- Policies enforce data isolation at database level

#### Authentication Flow
1. User signs up/in through Supabase Auth
2. JWT token issued with user claims
3. All API requests include JWT in Authorization header
4. Supabase validates token and enforces RLS policies

## 🎨 Frontend Architecture

### Component Structure
\`\`\`
components/
├── auth/              # Authentication components
│   ├── auth-guard.tsx # Route protection
│   └── auth-form.tsx  # Sign in/up forms
├── dashboard/         # Main app components
│   ├── dashboard.tsx  # Main dashboard container
│   ├── header.tsx     # App header with navigation
│   ├── timer-section.tsx    # Pomodoro timer
│   ├── stats-section.tsx    # Analytics display
│   └── settings-panel.tsx   # User preferences
├── providers/         # Context providers
│   ├── auth-provider.tsx    # Authentication state
│   ├── theme-provider.tsx   # Theme management
│   └── locale-provider.tsx  # Internationalization
└── ui/               # Reusable UI components
    ├── button.tsx    # Button component
    ├── card.tsx      # Card component
    └── ...           # Other UI components
\`\`\`

### State Management Strategy

#### Context Providers
- **AuthProvider**: User authentication state and methods
- **ThemeProvider**: Theme selection and CSS variable management
- **LocaleProvider**: Language selection and translation management

#### Data Flow
1. **Authentication**: Supabase Auth → AuthProvider → Components
2. **User Preferences**: Database → React State → Components
3. **Timer State**: Local Component State (not persisted)
4. **Session Data**: Local State → Database on completion

### Performance Optimizations

#### Code Splitting
- Automatic route-based code splitting with Next.js
- Dynamic imports for heavy components
- Lazy loading of non-critical features

#### Caching Strategy
- Static assets cached at CDN level
- API responses cached with appropriate headers
- Client-side caching for user preferences

#### Bundle Optimization
- Tree shaking to eliminate unused code
- Minification and compression
- Modern JavaScript for supported browsers

## 🌐 Internationalization (i18n)

### Translation Architecture
- **Storage**: JSON files with nested key structure
- **Loading**: Static imports for optimal performance
- **Fallback**: English as default language
- **Context**: React Context for global translation access

### Supported Languages
- English (en) - Default
- Spanish (es)
- French (fr)
- German (de)
- Japanese (ja)

### Implementation
\`\`\`typescript
// Translation structure
const translations = {
  en: {
    'auth.signIn': 'Sign In',
    'timer.start': 'Start',
    // ... more translations
  },
  es: {
    'auth.signIn': 'Iniciar Sesión',
    'timer.start': 'Iniciar',
    // ... more translations
  }
}

// Usage in components
const { t } = useLocale()
return <button>{t('timer.start')}</button>
\`\`\`

## 🎨 Theming System

### CSS Variables Approach
- Dynamic theme switching without page reload
- Consistent color system across all components
- Support for custom themes and user preferences

### Theme Structure
\`\`\`css
:root {
  --primary: 262 83% 58%;
  --secondary: 210 40% 96%;
  --background: 0 0% 100%;
  /* ... more variables */
}

.theme-ocean {
  --primary: 199 89% 48%;
  --secondary: 187 85% 53%;
  /* ... ocean theme overrides */
}
\`\`\`

### Available Themes
- **Light**: Default light theme
- **Dark**: High contrast dark theme
- **Ocean**: Blue-based calming theme
- **Forest**: Green-based natural theme
- **Sunset**: Orange-based warm theme

## 🔒 Security Considerations

### Authentication Security
- JWT tokens with appropriate expiration
- Secure HTTP-only cookies (where applicable)
- CSRF protection through SameSite cookies
- Rate limiting on authentication endpoints

### Data Protection
- Row Level Security at database level
- Input validation and sanitization
- SQL injection prevention through parameterized queries
- XSS protection through React's built-in escaping

### Privacy
- Minimal data collection
- No tracking without consent
- Data retention policies
- GDPR compliance considerations

## 📈 Scalability & Performance

### Current Capacity
- **Users**: Designed to handle 10,000+ concurrent users
- **Database**: PostgreSQL with connection pooling
- **API**: Serverless functions with automatic scaling
- **CDN**: Global edge network for static assets

### Monitoring & Analytics
- **Performance**: Vercel Analytics for Core Web Vitals
- **Errors**: Built-in error boundaries and logging
- **Usage**: Privacy-focused analytics for feature usage
- **Uptime**: Automated monitoring and alerting

### Future Scaling Considerations
- Database read replicas for global performance
- Redis caching layer for frequently accessed data
- Microservices architecture for complex features
- Mobile apps with shared backend infrastructure

## 🚀 Deployment Pipeline

### Development Workflow
1. **Local Development**: `npm run dev` with hot reloading
2. **Type Checking**: TypeScript compilation and linting
3. **Testing**: Unit tests and integration tests (future)
4. **Build**: Next.js production build with optimizations

### Deployment Process
1. **Git Push**: Code pushed to main branch
2. **Automatic Build**: Vercel builds and optimizes
3. **Preview Deployment**: Staging environment for testing
4. **Production Deploy**: Automatic deployment after approval
5. **Monitoring**: Real-time performance and error monitoring

### Environment Management
- **Development**: Local environment with test database
- **Staging**: Preview deployments for testing
- **Production**: Live environment with production database
- **Environment Variables**: Secure management through platform

---

This architecture provides a solid foundation for FocusMe's current needs while maintaining flexibility for future growth and feature additions. The focus on performance, security, and user experience ensures that the application can scale effectively as the user base grows.
