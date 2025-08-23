# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.0 project for Ganesh Chaturthi celebrations, featuring an AI chatbot powered by Google's Gemini API and daily shloka delivery system. Built with TypeScript, React 19, and Tailwind CSS v4.

## Common Commands

- **Development**: `npm run dev` - Starts development server with Turbopack bundler
- **Build**: `npm run build` - Creates production build using Turbopack
- **Start**: `npm start` - Starts production server
- **Lint**: `npm run lint` - Runs ESLint with Next.js configuration

## Architecture

- **Next.js App Router**: Uses the modern App Router architecture located in `src/app/`
- **TypeScript Configuration**: Strict mode enabled with path aliases (`@/*` maps to `./src/*`)
- **Styling**: Tailwind CSS v4 with PostCSS integration and custom CSS variables for theming
- **Fonts**: Geist Sans and Geist Mono fonts loaded via `next/font/google`
- **AI Integration**: Google Gemini 2.5 Flash model for Lord Ganesha persona chatbot
- **Data Management**: JSON-based shloka storage with date-aware delivery system

## Project Structure

```
src/app/
├── api/
│   ├── chat/
│   │   └── route.ts        # Gemini AI chat endpoint with conversation history
│   └── shloka/
│       └── route.ts        # Daily shloka API based on festival dates
├── data/
│   └── shlokas.json        # 7-day Ganesh Chaturthi shlokas collection
├── lib/
│   ├── constants.ts        # API keys, prompts, and configuration
│   └── types.ts            # TypeScript interfaces for API contracts
├── layout.tsx              # Root layout with font configuration
├── page.tsx                # Default Next.js home page (unchanged)
├── globals.css             # Global styles with Tailwind and theme variables
└── favicon.ico             # Site icon
```

## Key Features

### AI Chat System (`src/app/api/chat/route.ts`)
- **Gemini Integration**: Uses Google GenAI client with Gemini 2.5 Flash model
- **Lord Ganesha Persona**: System prompt configures AI as divine obstacle remover
- **Conversation Memory**: In-memory chat history with UUID-based session management
- **Error Handling**: Graceful degradation with spiritual error messages
- **Request Validation**: Type-safe request/response handling

### Daily Shloka System (`src/app/api/shloka/route.ts`)
- **Festival-Aware**: Automatically selects appropriate shloka based on current date
- **IST Time Zone**: Properly handles Indian Standard Time calculations
- **Festival Period**: August 27 - September 2, 2025 (7-day cycle)
- **Fallback Logic**: Random shloka selection outside festival dates
- **Error Recovery**: Defaults to first shloka if issues occur

### Shloka Data (`src/app/data/shlokas.json`)
- **7 Sacred Shlokas**: Each day has Sanskrit verse, transliteration, and purpose
- **Cultural Context**: Detailed explanations of spiritual significance
- **Traditional Sequence**: Follows authentic Ganesh Chaturthi prayer progression

## Dependencies

### Core Dependencies
- `next`: 15.5.0 - React framework with App Router
- `react`: 19.1.0 - UI library  
- `react-dom`: 19.1.0 - React DOM bindings
- `@google/genai`: ^1.15.0 - Google Generative AI client

### Development Dependencies  
- `typescript`: ^5 - Type checking
- `@types/node`, `@types/react`, `@types/react-dom` - Type definitions
- `eslint`: ^9 with `eslint-config-next`: 15.5.0 - Code linting
- `tailwindcss`: ^4 with `@tailwindcss/postcss`: ^4 - Styling

## Configuration Files

- **next.config.ts**: Minimal Next.js configuration (currently default)
- **tsconfig.json**: TypeScript configuration with strict mode and path aliases
- **eslint.config.mjs**: ESLint flat config extending Next.js rules  
- **postcss.config.mjs**: PostCSS configuration for Tailwind CSS v4

## API Endpoints

### POST /api/chat
- **Purpose**: Chat with Lord Ganesha AI
- **Request**: `{ message: string, chatId?: string }`
- **Response**: `{ response: string, chatId: string }`
- **Features**: Conversation continuity, obstacle removal guidance

### GET /api/shloka  
- **Purpose**: Retrieve daily festival shloka
- **Response**: `{ day: number, shloka_sanskrit: string, transliteration: string, purpose: string }`
- **Logic**: Date-aware selection based on Ganesh Chaturthi timing

## Security Notes

- **API Key Management**: Gemini API key is stored in constants (should be moved to environment variables)
- **Input Validation**: Proper request validation and error handling implemented
- **Rate Limiting**: Consider implementing rate limiting for production use

## Development Notes

- The project uses Turbopack as the bundler for both development and production builds
- ESLint configuration uses the new flat config format with Next.js core web vitals rules
- Dark mode is implemented using CSS `prefers-color-scheme` media query
- All components should be placed in the `src/app/` directory following App Router conventions
- Chat conversations are stored in-memory and will reset on server restart
- Consider implementing persistent storage for chat history in production