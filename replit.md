# Bramwell Equipment - Dehumidifier Hire Platform

## Overview

This is a full-stack web application for Bramwell Equipment, a Glasgow-based dehumidifier and drying equipment rental business. The platform allows customers to browse available equipment, view pricing, and submit hire inquiries. It serves both homeowners dealing with damp/flooding issues and contractors needing professional drying equipment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with custom industrial/blue theme
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Typography**: Oswald (display/headings) and Inter (body text) fonts

The frontend follows a page-based structure with shared layout components (Navbar, Footer). Custom hooks abstract data fetching logic for equipment and inquiries.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod validation schemas
- **Build System**: Vite for frontend, esbuild for server bundling

The server uses a storage abstraction pattern (`IStorage` interface) for database operations, making it easy to swap implementations.

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all database tables
- **Migrations**: Drizzle Kit with push-based migrations (`npm run db:push`)

Current tables:
- `equipment`: Stores rental items with name, description, pricing (daily/weekly in pence), category, image URL, and availability status
- `inquiries`: Customer contact submissions with name, email, phone, message, and timestamp

### API Structure
Routes are defined declaratively in `shared/routes.ts` with method, path, input validation, and response schemas:
- `GET /api/equipment` - List all equipment
- `GET /api/equipment/:id` - Get single equipment item
- `POST /api/inquiries` - Submit customer inquiry

The shared routes file enables type-safe API contracts between frontend and backend.

## External Dependencies

### Database
- PostgreSQL database (connection via `DATABASE_URL` environment variable)
- `connect-pg-simple` for session storage capability

### Frontend Libraries
- Radix UI primitives for accessible component foundations
- Embla Carousel for image carousels
- React Hook Form with Zod resolver for form handling
- Lucide React for icons

### Build & Development
- Vite with React plugin for frontend development
- Replit-specific plugins for development banners and error overlays
- TSX for TypeScript execution in development

### Production Build
The build process bundles specific dependencies (listed in `script/build.ts` allowlist) to reduce cold start times by minimizing filesystem operations.