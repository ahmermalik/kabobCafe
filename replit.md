# Shish Kabob Cafe Katy - Restaurant Website

## Overview

This is a modern, responsive website for Shish Kabob Cafe, a Persian restaurant located in Katy, Texas. The website showcases authentic Persian and Mediterranean cuisine with a focus on fresh ingredients, traditional recipes, and halal offerings. The site features a complete menu system, contact functionality, and online ordering integration with delivery platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The application uses a modern React-based frontend architecture:

- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Persian-inspired color palette (saffron, pomegranate, charcoal)
- **UI Components**: shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

The frontend follows a component-based architecture with reusable UI components, custom hooks, and proper separation of concerns.

### Backend Architecture

The backend uses a Node.js/Express server architecture:

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for API routing and middleware
- **Data Storage**: In-memory storage with interface for future database integration
- **API Design**: RESTful API endpoints for menu items and contact form submissions
- **Validation**: Zod schemas for request/response validation
- **Development**: TSX for TypeScript execution in development

The server architecture supports easy migration to a database-backed system through the IStorage interface pattern.

### Design System

The application implements a Persian-inspired design system:

- **Color Palette**: Custom CSS variables for saffron yellow, pomegranate red, persian teal, and charcoal
- **Typography**: Custom font integration for brand consistency
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Cultural Elements**: Persian text accents and cultural patterns

### Data Architecture

The application uses a schema-driven data architecture:

- **Schema Definition**: Centralized Drizzle schemas for type safety
- **Data Models**: Users, menu items, and contact messages
- **Validation**: Zod schemas derived from database schemas
- **Type Safety**: Full TypeScript coverage from database to frontend

### Development Features

The project includes several development and deployment optimizations:

- **Hot Reload**: Vite HMR for rapid development
- **Error Handling**: Runtime error overlay and comprehensive error boundaries
- **Code Splitting**: Automatic bundle optimization
- **Path Aliases**: Clean import paths with @ aliases
- **Build Pipeline**: Separate client and server build processes

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage)
- **Hosting Platform**: Neon Database for PostgreSQL hosting
- **Deployment**: Configured for production deployment with esbuild

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling Framework**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS transitions and transforms for smooth interactions

### Form and Data Management
- **Form Library**: React Hook Form for performance-optimized forms
- **Validation**: Zod for runtime type validation
- **Data Fetching**: TanStack Query for caching and synchronization
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **Build Tool**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint configuration (implicit)
- **Development Server**: Express with Vite middleware integration

### Third-Party Integrations
- **Analytics**: Google Analytics integration ready
- **Delivery Platforms**: Placeholder integrations for Favor, DoorDash, and Uber Eats
- **Maps**: Ready for Google Maps integration for location display
- **Social Media**: Structured for social media platform links

The architecture supports easy integration of additional services like payment processing, reservation systems, and customer management platforms.