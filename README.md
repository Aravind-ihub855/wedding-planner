# ForeverPlan - Luxury Wedding Planning Atelier

ForeverPlan is an elite, high-end wedding planning atelier web application designed to orchestrate luxury weddings with absolute precision and elegance. Styled in a sophisticated Digital Atelier aesthetic (Rose Champagne palette, editorial serif headings, and warm stone neutrals), it provides complete oversight of guests, budgets, curated vendors, and wedding day timelines.

## Tech Stack
- **Framework**: Next.js 14 App Router (React 18, TypeScript)
- **Styling**: Tailwind CSS with custom editorial design tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database / Auth**: Zero-dependency token auth + MongoDB persistence (with fallback state)

## Project Folder Tree
```tree
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Dashboard & Countdown)
│   ├── guests/page.tsx (Guest List & Seating)
│   ├── budget/page.tsx (Financial Planner & Expenses)
│   ├── vendors/page.tsx (Vendor Directory & Inquiries)
│   └── timeline/page.tsx (Day-of Schedule & Rehearsal)
├── components/
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── CountdownWidget.tsx
│   ├── GuestModal.tsx
│   ├── ExpenseModal.tsx
│   └── VendorModal.tsx
├── data/
│   └── mockData.ts
└── lib/
    ├── assets.ts
    ├── theme.ts
    └── auth.ts
```

## Local Setup
1. `npm install`
2. `cp .env.example .env.local`
3. `npm run dev`

Access the application at **http://localhost:3100**.