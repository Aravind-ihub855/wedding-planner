/**
 * @file theme.ts
 * Brand color palettes, gradient presets, and font pair system.
 *
 * Usage:
 *   import { PALETTES, GRADIENTS, FONT_PAIRS, cx } from '@/lib/theme';
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── className Utility ────────────────────────────────────────────────────────

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Brand Palettes ────────────────────────────────────────────────────────────
// Each palette specifies exact Tailwind token names to use across the app.
// The coder imports and references these instead of guessing colors.

export const PALETTES = {
  /** Indigo + Violet — SaaS, Tech, Productivity */
  indigoViolet: {
    name: "Indigo Violet",
    primary: "indigo",
    accent: "violet",
    neutral: "slate",
    hero: "from-indigo-950 via-slate-900 to-violet-950",
    heroText: "bg-gradient-to-r from-white to-indigo-200",
    cardBorder: "border-indigo-100 dark:border-indigo-900/30",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    button: "bg-indigo-600 hover:bg-indigo-500 text-white",
    buttonOutline: "border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    accent1: "#6366f1",
    accent2: "#8b5cf6",
  },

  /** Slate + Emerald — Finance, Health, Sustainability */
  slateEmerald: {
    name: "Slate Emerald",
    primary: "slate",
    accent: "emerald",
    neutral: "zinc",
    hero: "from-slate-900 via-slate-800 to-emerald-950",
    heroText: "bg-gradient-to-r from-white to-emerald-200",
    cardBorder: "border-slate-100 dark:border-slate-700/40",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    button: "bg-emerald-600 hover:bg-emerald-500 text-white",
    buttonOutline: "border-emerald-600 text-emerald-600 hover:bg-emerald-50",
    accent1: "#10b981",
    accent2: "#064e3b",
  },

  /** Rose + Orange — Fashion, Food, Lifestyle, Creative */
  roseOrange: {
    name: "Rose Orange",
    primary: "rose",
    accent: "orange",
    neutral: "stone",
    hero: "from-rose-950 via-stone-900 to-orange-950",
    heroText: "bg-gradient-to-r from-white to-rose-200",
    cardBorder: "border-rose-100 dark:border-rose-900/30",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    button: "bg-rose-600 hover:bg-rose-500 text-white",
    buttonOutline: "border-rose-600 text-rose-600 hover:bg-rose-50",
    accent1: "#f43f5e",
    accent2: "#f97316",
  },

  /** Amber + Stone — Real Estate, Luxury, Premium */
  amberStone: {
    name: "Amber Stone",
    primary: "amber",
    accent: "stone",
    neutral: "neutral",
    hero: "from-stone-950 via-neutral-900 to-amber-950",
    heroText: "bg-gradient-to-r from-white to-amber-200",
    cardBorder: "border-stone-100 dark:border-stone-700/40",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    button: "bg-amber-500 hover:bg-amber-400 text-stone-900",
    buttonOutline: "border-amber-500 text-amber-600 hover:bg-amber-50",
    accent1: "#f59e0b",
    accent2: "#78716c",
  },

  /** Luxury Real Estate — Warm Cream, Gold Accent, Deep Bronze Slate */
  luxuryRealEstate: {
    name: "Luxury Real Estate",
    primary: "amber",
    accent: "stone",
    neutral: "stone",
    bg: "bg-[#FAF8F5]",
    hero: "from-stone-900 via-stone-800 to-amber-950",
    heroText: "text-amber-100",
    cardBorder: "border-amber-900/10 dark:border-amber-500/20",
    badge: "bg-amber-500/10 text-amber-800 border border-amber-500/20",
    button: "bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-900/10",
    buttonOutline: "border border-amber-600/40 text-amber-900 hover:bg-amber-50",
    accent1: "#D4AF37",
    accent2: "#78716C",
  },

  /** Sky + Cyan — Travel, Aviation, Maritime, Clean Energy */
  skyCyan: {
    name: "Sky Cyan",
    primary: "sky",
    accent: "cyan",
    neutral: "slate",
    hero: "from-sky-950 via-slate-900 to-cyan-950",
    heroText: "bg-gradient-to-r from-white to-sky-200",
    cardBorder: "border-sky-100 dark:border-sky-900/30",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
    button: "bg-sky-600 hover:bg-sky-500 text-white",
    buttonOutline: "border-sky-600 text-sky-600 hover:bg-sky-50",
    accent1: "#0ea5e9",
    accent2: "#06b6d4",
  },

  /** Purple + Pink — Healthcare, Beauty, Wellness */
  purplePink: {
    name: "Purple Pink",
    primary: "purple",
    accent: "pink",
    neutral: "slate",
    hero: "from-purple-950 via-slate-900 to-pink-950",
    heroText: "bg-gradient-to-r from-white to-purple-200",
    cardBorder: "border-purple-100 dark:border-purple-900/30",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    button: "bg-purple-600 hover:bg-purple-500 text-white",
    buttonOutline: "border-purple-600 text-purple-600 hover:bg-purple-50",
    accent1: "#9333ea",
    accent2: "#ec4899",
  },

  /** Teal + Blue — Education, E-Learning, Corporate */
  tealBlue: {
    name: "Teal Blue",
    primary: "teal",
    accent: "blue",
    neutral: "slate",
    hero: "from-teal-950 via-slate-900 to-blue-950",
    heroText: "bg-gradient-to-r from-white to-teal-200",
    cardBorder: "border-teal-100 dark:border-teal-900/30",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    button: "bg-teal-600 hover:bg-teal-500 text-white",
    buttonOutline: "border-teal-600 text-teal-600 hover:bg-teal-50",
    accent1: "#0d9488",
    accent2: "#3b82f6",
  },

  /** Zinc + Slate — Minimal, B2B, Developer Tools */
  zincSlate: {
    name: "Zinc Slate",
    primary: "zinc",
    accent: "slate",
    neutral: "gray",
    hero: "from-zinc-950 via-zinc-900 to-slate-900",
    heroText: "bg-gradient-to-r from-white to-zinc-300",
    cardBorder: "border-zinc-100 dark:border-zinc-800/60",
    badge: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    button: "bg-zinc-900 hover:bg-zinc-700 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
    buttonOutline: "border-zinc-400 text-zinc-700 hover:bg-zinc-50",
    accent1: "#71717a",
    accent2: "#475569",
  },
} as const;

export type PaletteKey = keyof typeof PALETTES;

// ─── Gradient Presets ─────────────────────────────────────────────────────────

export const GRADIENTS = {
  // Hero section backgrounds
  heroIndigoViolet:  "bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950",
  heroSlateEmerald:  "bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950",
  heroRoseOrange:    "bg-gradient-to-br from-rose-950 via-stone-900 to-orange-950",
  heroAmberStone:    "bg-gradient-to-br from-stone-950 via-neutral-900 to-amber-950",
  heroSkyCyan:       "bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950",
  heroPurplePink:    "bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950",
  heroTealBlue:      "bg-gradient-to-br from-teal-950 via-slate-900 to-blue-950",
  heroZincSlate:     "bg-gradient-to-br from-zinc-950 via-zinc-900 to-slate-900",

  // Mesh gradients (for page backgrounds — light mode)
  meshSoft:    "bg-[radial-gradient(at_40%_20%,rgba(99,102,241,0.08)_0px,transparent_50%),radial-gradient(at_80%_0%,rgba(139,92,246,0.06)_0px,transparent_50%),radial-gradient(at_0%_50%,rgba(59,130,246,0.05)_0px,transparent_50%)]",
  meshEmerald: "bg-[radial-gradient(at_40%_20%,rgba(16,185,129,0.08)_0px,transparent_50%),radial-gradient(at_80%_0%,rgba(5,150,105,0.06)_0px,transparent_50%)]",
  meshRose:    "bg-[radial-gradient(at_40%_20%,rgba(244,63,94,0.08)_0px,transparent_50%),radial-gradient(at_80%_0%,rgba(249,115,22,0.06)_0px,transparent_50%)]",

  // Section accents
  sectionSubtle: "bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-transparent",
  cta:           "bg-gradient-to-r from-indigo-600 to-violet-600",
  ctaAlt:        "bg-gradient-to-r from-emerald-600 to-teal-600",
} as const;

// ─── Font Pairs ───────────────────────────────────────────────────────────────

export const FONT_PAIRS = {
  /** Modern SaaS: Plus Jakarta Sans headlines + Inter body */
  jakartaInter: {
    heading: "'Plus Jakarta Sans', sans-serif",
    body: "'Inter', sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap",
  },

  /** Editorial luxury: Fraunces display + Outfit body */
  frauncesOutfit: {
    heading: "'Fraunces', serif",
    body: "'Outfit', sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700;9..144,900&family=Outfit:wght@300;400;500;600&display=swap",
  },

  /** Minimal/developer: Space Grotesk + Inter */
  spaceGrotesk: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap",
  },

  /** Premium brand: DM Serif Display + DM Sans */
  dmSerif: {
    heading: "'DM Serif Display', serif",
    body: "'DM Sans', sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap",
  },

  /** Bold/energetic: Sora headlines + Nunito body */
  soraNunito: {
    heading: "'Sora', sans-serif",
    body: "'Nunito', sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Nunito:wght@300;400;500;600&display=swap",
  },

  /** Clean tech: Manrope + Inter */
  manropeInter: {
    heading: "'Manrope', sans-serif",
    body: "'Inter', sans-serif",
    googleUrl: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap",
  },
} as const;

export type FontPairKey = keyof typeof FONT_PAIRS;
