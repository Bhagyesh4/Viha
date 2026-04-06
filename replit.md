# Assurance Ledger | Enterprise Suite

## Overview

A comprehensive enterprise management application for insurance professionals, featuring an Executive Dashboard, CRM (leads management), Policy management, HRMS, Payroll, and Task tracking.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 (using new `@theme` directives)
- **Icons**: Lucide React
- **Animations**: Motion (formerly Framer Motion)
- **Charts**: Recharts
- **AI**: Google Gemini API (`@google/genai`)
- **Package Manager**: npm

## Project Structure

```
/
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # Main application component (all views)
│   ├── types.ts          # TypeScript interfaces
│   ├── mockData.ts       # Mock data for all views
│   ├── index.css         # Tailwind CSS imports and theme
│   └── lib/
│       └── utils.ts      # cn() utility for Tailwind class merging
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration (port 5000, allowedHosts: true)
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## User Roles

The app supports 4 roles accessed via the login screen:
- **Super Admin** - Full access to all features
- **Customer** - View own policies and claims
- **Agent** - Manage leads and policies
- **Employee** - HR, payroll, and task management

## Development

```bash
npm run dev    # Start dev server on port 5000
npm run build  # Build for production
npm run lint   # TypeScript type checking
```

## Environment Variables

- `GEMINI_API_KEY` - Google Gemini API key (optional, for AI features)

## Deployment

Configured as a **static** site deployment:
- Build command: `npm run build`
- Public directory: `dist`
