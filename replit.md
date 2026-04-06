# Assurance Ledger | Enterprise Suite

## Overview

A comprehensive enterprise management application for insurance professionals. Features: Executive Dashboard, CRM (leads), Policy Management, HRMS, Payroll, Task tracking, Performance Targets, and Policy Renewals. All data is persisted in a real PostgreSQL database.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6 (port 5000, `allowedHosts: true`, `host: 0.0.0.0`)
- **Backend**: Express 4 + TypeScript (`server/index.ts`, port 3001)
- **Database**: PostgreSQL (via `pg` Pool, `DATABASE_URL` env var)
- **Styling**: Tailwind CSS 4 (`@theme` directives)
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Charts**: Recharts
- **AI**: Google Gemini API (`@google/genai`)
- **Package Manager**: npm

## Project Structure

```
/
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # All views + components (single file)
│   ├── api.ts            # Frontend API client (typed fetch functions)
│   ├── types.ts          # TypeScript interfaces
│   ├── mockData.ts       # Fallback/seed reference data
│   ├── index.css         # Tailwind CSS imports and theme
│   └── lib/
│       └── utils.ts      # cn() utility for Tailwind class merging
├── server/
│   └── index.ts          # Express API server (CRUD for all entities)
├── index.html            # HTML entry point
├── vite.config.ts        # Vite config (port 5000, proxy /api → 3001)
├── package.json          # Scripts: dev, server, build, lint
└── tsconfig.json         # TypeScript configuration
```

## Database Tables

All tables in PostgreSQL, seeded with initial data:
- `leads` — CRM lead records
- `policies` — Insurance policies
- `tasks` — Kanban-style tasks (To Do / In Progress / Completed)
- `targets` — Agent performance targets
- `employees` — HRMS employee records
- `leave_requests` — Employee leave request approvals

## API Endpoints (Express, port 3001)

- `GET/POST /api/leads`
- `GET/POST /api/policies`, `PUT /api/policies/:id`
- `GET/POST /api/tasks`, `PUT /api/tasks/:id`
- `GET/POST /api/targets`
- `GET /api/employees`
- `GET /api/leave-requests`, `PUT /api/leave-requests/:id`
- `GET /api/health`

## User Roles

- **Super Admin** — Full access
- **Customer** — Own policies/claims
- **Agent** — Leads + policies
- **Employee** — HR, payroll, tasks

## Development

```bash
npm run dev     # Frontend on port 5000
npm run server  # Backend API on port 3001
npm run build   # Production build
npm run lint    # TypeScript type check
```

## Environment Variables

- `DATABASE_URL` — PostgreSQL connection string (set by Replit)
- `GEMINI_API_KEY` — Google Gemini API key (optional, for AI features)
