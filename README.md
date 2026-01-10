# Onelink

A production-ready, open-source Linktree alternative with dynamic subdomains, drag-and-drop link management, and built-in analytics.

## Features

- 🔗 **Custom Subdomains** - Each user gets their own subdomain (e.g., `john.yourapp.com`)
- 🎨 **Drag & Drop** - Intuitive drag-and-drop interface to reorder links
- 📊 **Analytics** - Track clicks on each link with PostHog integration
- 🔒 **Authentication** - Secure auth with email/password and OAuth (Google, GitHub)
- ⚡ **High Performance** - Built with Next.js 16 App Router and Server Actions
- 🎯 **Type-Safe** - Full TypeScript strict mode with Drizzle ORM
- ✨ **Modern UI** - Glassmorphism, gradient animations, and 3D card effects
- 🎭 **Unique Design** - Innovative layouts that stand out from typical link-in-bio tools

## Tech Stack

- **Framework:** Next.js 16+ (App Router, Server Actions)
- **Language:** TypeScript (Strict mode)
- **Database:** PostgreSQL (via Supabase)
- **ORM:** Drizzle ORM
- **Auth:** Better-Auth
- **UI:** Tailwind CSS + shadcn/ui
- **Icons:** Lucide React
- **Drag & Drop:** dnd-kit
- **Analytics:** PostHog

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL and secrets

# Initialize database
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and create your first account!

For detailed setup instructions, see [`SETUP.md`](./SETUP.md).

## Project Structure

```
onelink/
├── src/
│   ├── app/
│   │   ├── [domain]/          # Public profile pages (subdomain route)
│   │   ├── admin/             # Dashboard
│   │   ├── login/signup/      # Authentication
│   │   ├── api/               # API routes
│   │   └── actions/           # Server Actions
│   ├── components/
│   │   ├── dashboard/         # Admin UI components
│   │   ├── profile/           # Public profile components
│   │   └── ui/                # shadcn/ui primitives
│   ├── lib/
│   │   ├── db/                # Drizzle ORM schema & client
│   │   ├── auth/              # Better-Auth configuration
│   │   └── analytics/         # PostHog integration
│   └── middleware.ts          # Subdomain routing logic
└── drizzle/                   # Database migrations
```

## How It Works

### Subdomain Routing

The middleware detects subdomains and rewrites requests to the dynamic `[domain]` route:

```
User visits: john.myapp.com
     ↓
Middleware detects: "john"
     ↓
Rewrites to: /john
     ↓
Fetches user data
     ↓
Renders public profile
```

### Database Schema

- **Users**: id, email, username, image, createdAt
- **Links**: id, userId, title, url, order, isEnabled, clicks, createdAt

### Key Features

- **Server Actions** for all mutations (create, update, delete, reorder)
- **Non-blocking click tracking** using `navigator.sendBeacon`
- **Dynamic Open Graph metadata** for social sharing
- **Protected routes** with Better-Auth

## Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup, deployment, and troubleshooting guide
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute to the project

## Deployment

Onelink can be deployed to:

- **Vercel** (Recommended) - Easiest setup with automatic CI/CD
- **Netlify** - Great alternative with generous free tier
- **Railway** - Includes database hosting
- **Fly.io** - Global edge deployment
- **Self-hosted** - Docker configuration included

See [SETUP.md](./SETUP.md) for detailed deployment instructions.

## Environment Variables

Required variables:

```env
DATABASE_URL=postgresql://...
BETTER_AUTH_SECRET=<generate-with-openssl-rand-base64-32>
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ROOT_DOMAIN=localhost:3000
```

Optional for OAuth and analytics:

```env
GOOGLE_CLIENT_ID=...
GITHUB_CLIENT_ID=...
NEXT_PUBLIC_POSTHOG_KEY=...
```

## Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

npm run db:push          # Push schema to database (dev)
npm run db:generate      # Generate migration files
npm run db:migrate       # Run migrations (prod)
npm run db:studio        # Open Drizzle Studio
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues and questions:

- Check [SETUP.md](./SETUP.md) for troubleshooting
- Open a GitHub issue with details about your problem

---

**Built with ❤️ using Next.js 16, TypeScript, and modern web technologies.**
