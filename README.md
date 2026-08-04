# ForeverPlan — Premium Wedding Planning Application

ForeverPlan is a luxurious, high-end digital wedding concierge designed for modern couples who value elegance, precision, and seamless celebration planning. Built with a warm champagne gold and stone aesthetic, it provides an editorial-grade user experience for managing RSVPs, budgets, curated vendors, and big-day timelines.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Fraunces (Serif) & Outfit (Sans-serif)

## Project Folder Tree
```
├── src/
│   ├── app/
│   │   ├── page.tsx            # Primary Application Entry Point
│   │   └── layout.tsx          # Global Layout Wrapper
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky Glassmorphic Header
│   │   ├── Footer.tsx          # Deep Warm Stone Footer
│   │   ├── DashboardView.tsx   # Command Center with Countdown & RSVP Stats
│   │   ├── GuestListView.tsx   # RSVP Hub & Guest Management
│   │   ├── BudgetPlannerView.tsx # Financial Sanctuary & Expense Ledger
│   │   ├── VendorsView.tsx     # Curated Creative Team & Portfolios
│   │   └── TimelineView.tsx    # Big Day Run-Sheet & Milestones
│   ├── data/
│   │   └── mockData.ts         # Rich Domain Mock Data
│   └── lib/
│       ├── assets.ts           # Asset Management & Image Helpers
│       └── theme.ts            # Design System Tokens
```

## Local Setup Steps
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the application at: [http://localhost:3100](http://localhost:3100)

## Available Scripts
- `npm run dev`: Starts the development server on port 3100.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server on port 3100.
- `npm run lint`: Runs ESLint checks.