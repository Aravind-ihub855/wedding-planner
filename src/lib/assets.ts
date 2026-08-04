/**
 * @file assets.ts
 * Curated media asset library for AI-generated projects.
 *
 * Usage:
 *   import { getImage, UNSPLASH, AVATARS, HEROES } from '@/lib/assets';
 *
 *   <img src={getImage('tech', 0, 1200, 800)} alt="..." />
 *   <img src={AVATARS[0]} alt="team member" />
 */

// ─── URL Builder ───────────────────────────────────────────────────────────────

/** Build a properly-formatted Unsplash URL from a bare photo ID. */
export function getImage(
  photoId: string,
  w = 1200,
  h?: number,
  quality = 80
): string {
  const hParam = h ? `&h=${h}` : "";
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}${hParam}&q=${quality}`;
}

/** Get a category image by index (wraps around). */
export function getCategoryImage(
  category: keyof typeof UNSPLASH,
  index = 0,
  w = 1200,
  h?: number
): string {
  const ids = UNSPLASH[category];
  const photoId = ids[index % ids.length];
  return getImage(photoId, w, h);
}

// ─── Photo ID Catalog (by category) ────────────────────────────────────────────

export const UNSPLASH = {
  // Tech & Development
  tech: [
    "photo-1555066931-4365d14bab8c", // code on laptop
    "photo-1519389950473-47ba0277781c", // team working on tech
    "photo-1526374965328-7f61d4dc18c5", // matrix code screen
    "photo-1531403009284-440f080d1e12", // dashboard analytics
    "photo-1517430816045-df4b7de11d1d", // laptop desk setup
    "photo-1504639725590-34d0984388bd", // developer working
  ],

  // SaaS / Business / Analytics
  business: [
    "photo-1551288049-bebda4e38f71", // analytics dashboard
    "photo-1460925895917-afdab827c52f", // charts & graphs
    "photo-1486406146926-c627a92ad1ab", // corporate building
    "photo-1454165804606-c3d57bc86b40", // business meeting
    "photo-1520607162513-77705c0f0d4a", // office workspace
    "photo-1497366754035-f200968a6e72", // modern office
  ],

  // Real Estate & Architecture
  realestate: [
    "photo-1600585154340-be6161a56a0c", // modern villa
    "photo-1600596542815-ffad4c1539a9", // luxury home exterior
    "photo-1600607687939-ce8a6c25118c", // interior living room
    "photo-1600566753376-12c8ab7fb75b", // luxury kitchen
    "photo-1600585152220-90363fe7e115", // infinity pool estate
    "photo-1512917774080-9991f1c4c750", // modern house exterior
    "photo-1600585154526-990dced4db0d", // penthouse terrace
    "photo-1600573472550-8090b5e0745e", // architectural mansion
    "photo-1600566752355-35792bedcfea", // luxury bedroom suite
    "photo-1600585154363-67eb9e2e2099", // glass facade estate
    "photo-1600607687920-4e2a09cf159d", // modern dining area
    "photo-1600566753190-17f0baa2a6c3", // coastal villa pool
  ],

  // E-Commerce & Products
  products: [
    "photo-1542291026-7eec264c27ff", // red sneakers
    "photo-1505740420928-5e560c06d30e", // headphones
    "photo-1526170375885-4d8ecf77b99f", // vintage camera
    "photo-1523275335684-37898b6baf30", // watch
    "photo-1491553895911-0055eca6402d", // running shoes
    "photo-1585386959984-a4155224a1ad", // perfume bottle
  ],

  // Food & Restaurant
  food: [
    "photo-1540189549336-e6e99c3679fe", // salad plate
    "photo-1565299624946-b28f40a0ae38", // pizza
    "photo-1567620905732-2d1ec7ab7445", // brunch spread
    "photo-1414235077428-338989a2e8c0", // restaurant ambiance
    "photo-1504674900247-0877df9cc836", // food spread
    "photo-1482049016688-2d3e1b311543", // breakfast bowl
  ],

  // Travel & Nature
  travel: [
    "photo-1506744038136-46273834b3fb", // mountain landscape
    "photo-1470071459604-3b5ec3a7fe05", // valley fog
    "photo-1507525428034-b723cf961d3e", // tropical beach
    "photo-1476514525535-07fb3b4ae5f1", // lake reflection
    "photo-1533105079780-92b9be482077", // Santorini
    "photo-1501854140801-50d01698950b", // mountains aerial
  ],

  // Health & Fitness
  fitness: [
    "photo-1571019613454-1cb2f99b2d8b", // gym workout
    "photo-1517836357463-d25dfeac3438", // weights lifting
    "photo-1490645935967-10de6ba17061", // healthy food
    "photo-1544367567-0f2fcb009e0b", // yoga pose
    "photo-1534438327276-14e5300c3a48", // running
  ],

  // Education & Learning
  education: [
    "photo-1481627834876-b7833e8f5570", // books library
    "photo-1523050854058-8df90110c9f1", // graduation
    "photo-1434030216411-0b793f4b4173", // student studying
    "photo-1509062522246-3755977927d7", // classroom
    "photo-1456513080510-7bf3a84b82f8", // notes study
  ],

  // Healthcare & Medical
  healthcare: [
    "photo-1576091160399-112ba8d25d1d", // doctor
    "photo-1559757148-5c350d0d3c56", // medical team
    "photo-1530026405186-ed1f139313f3", // stethoscope
    "photo-1551190822-a9333d879b1f", // medical technology
    "photo-1582719471384-894fbb16e074", // hospital room
  ],

  // Finance & Fintech
  finance: [
    "photo-1611974789855-9c2a0a7236a3", // stock charts
    "photo-1559526324-4b87b5e36e44", // fintech app
    "photo-1565514020179-026b92b84bb6", // coins & money
    "photo-1567427017947-545c5f8d16ad", // bank building
    "photo-1579621970563-ebec7560ff3e", // financial analysis
  ],

  // Abstract & Backgrounds (gradient/texture/dark)
  abstract: [
    "photo-1557672172-298e090bd0f1", // purple abstract
    "photo-1567095761054-7a02e69e5c43", // dark gradient
    "photo-1579546929518-9e396f3cc809", // colorful gradient
    "photo-1488229297570-58520851e868", // dark tech background
    "photo-1451187580459-43490279c0fa", // earth from space
    "photo-1534796636912-3b952d821d2e", // dark mesh
  ],

  // Events & Conferences
  events: [
    "photo-1540575467063-178a50c2df87", // conference hall
    "photo-1511578314322-379afb476865", // event lighting
    "photo-1528605248644-14dd04022da1", // crowd at event
    "photo-1505373877841-8d25f7d46678", // stage presentation
    "photo-1501281668745-f7f57925c3b4", // festival crowd
  ],

  // Fashion & Lifestyle
  fashion: [
    "photo-1469334031218-e382a71b716b", // fashion shoot
    "photo-1445205170230-053b83016050", // clothing store
    "photo-1558618666-fcd25c85cd64", // luxury fashion
    "photo-1515886657613-9f3515b0c78f", // model pose
    "photo-1483985988355-763728e1935b", // shopping bags
  ],
} as const;

// ─── Hero Backgrounds (dramatic, full-bleed) ────────────────────────────────────

/** Dramatic cinematic hero images keyed by app type */
export const HEROES: Record<string, string> = {
  saas:        getImage("photo-1451187580459-43490279c0fa", 1920, 1080),
  tech:        getImage("photo-1451187580459-43490279c0fa", 1920, 1080),
  ai:          getImage("photo-1518770660439-4636190af475", 1920, 1080),
  realestate:  getImage("photo-1600596542815-ffad4c1539a9", 1920, 1080),
  ecommerce:   getImage("photo-1441986300917-64674bd600d8", 1920, 1080),
  food:        getImage("photo-1414235077428-338989a2e8c0", 1920, 1080),
  travel:      getImage("photo-1476514525535-07fb3b4ae5f1", 1920, 1080),
  fitness:     getImage("photo-1534438327276-14e5300c3a48", 1920, 1080),
  education:   getImage("photo-1481627834876-b7833e8f5570", 1920, 1080),
  healthcare:  getImage("photo-1576091160399-112ba8d25d1d", 1920, 1080),
  finance:     getImage("photo-1611974789855-9c2a0a7236a3", 1920, 1080),
  events:      getImage("photo-1540575467063-178a50c2df87", 1920, 1080),
  abstract:    getImage("photo-1557672172-298e090bd0f1", 1920, 1080),
  default:     getImage("photo-1488229297570-58520851e868", 1920, 1080),
};

// ─── Avatar / People Photos ─────────────────────────────────────────────────────

/** 14 realistic person photos for team cards, testimonials, avatars */
export const AVATARS = [
  getImage("photo-1534528741775-53994a69daeb", 400, 400), // woman 1
  getImage("photo-1507003211169-0a1dd7228f2d", 400, 400), // man 1
  getImage("photo-1494790108377-be9c29b29330", 400, 400), // woman 2
  getImage("photo-1500648767791-00dcc994a43e", 400, 400), // man 2
  getImage("photo-1573496359142-b8d87734a5a2", 400, 400), // woman 3 professional
  getImage("photo-1506794778202-cad84cf45f1d", 400, 400), // man 3 professional
  getImage("photo-1580489944761-15a19d654956", 400, 400), // woman 4
  getImage("photo-1633332755192-727a05c4013d", 400, 400), // man 4
  getImage("photo-1544005313-94ddf0286df2", 400, 400), // woman 5
  getImage("photo-1531427186611-ecfd6d936c79", 400, 400), // man 5
  getImage("photo-1438761681033-6461ffad8d80", 400, 400), // woman 6
  getImage("photo-1472099645785-5658abf4ff4e", 400, 400), // man 6
] as const;

// ─── Brand Logo Placeholder IDs ─────────────────────────────────────────────────
// Use these as grayscale company logo stands-in for "trusted by" sections

export const BRAND_LOGOS = [
  getImage("photo-1560179707-f14e90ef3623", 200, 80),   // company/office 1
  getImage("photo-1486406146926-c627a92ad1ab", 200, 80), // building 1
  getImage("photo-1497366754035-f200968a6e72", 200, 80), // office 2
  getImage("photo-1497366216548-37526070297c", 200, 80), // office 3
  getImage("photo-1497366811353-6870744d04b2", 200, 80), // office 4
  getImage("photo-1520607162513-77705c0f0d4a", 200, 80), // office 5
  getImage("photo-1504384308090-c894fdcc538d", 200, 80), // office 6
  getImage("photo-1522071820081-009f0129c71c", 200, 80), // team collab
] as const;

// ─── Icon Catalogue by Domain ────────────────────────────────────────────────────

export const ICON_SETS = {
  common:      ["Menu", "X", "Search", "Bell", "User", "ChevronDown", "ChevronRight", "Check", "Plus", "Settings", "ArrowRight", "ExternalLink"],
  dashboard:   ["BarChart3", "TrendingUp", "TrendingDown", "DollarSign", "Users", "Activity", "PieChart", "ArrowUpRight", "ArrowDownRight", "LayoutDashboard"],
  ecommerce:   ["ShoppingCart", "CreditCard", "Package", "Tag", "Star", "Heart", "Filter", "SlidersHorizontal", "ShoppingBag", "Truck"],
  saas:        ["Zap", "Shield", "Globe", "Layers", "Cpu", "Cloud", "Code2", "Sparkles", "Rocket", "Lock"],
  social:      ["MessageSquare", "Send", "Paperclip", "Smile", "Phone", "Video", "MoreVertical", "ThumbsUp", "Share2", "Bookmark"],
  healthcare:  ["Heart", "Activity", "Stethoscope", "Pill", "Thermometer", "Eye", "Brain", "Syringe", "Cross", "Ambulance"],
  finance:     ["DollarSign", "CreditCard", "TrendingUp", "BarChart2", "PieChart", "Wallet", "Banknote", "Receipt", "Coins", "Building2"],
  travel:      ["Globe", "MapPin", "Plane", "Hotel", "Compass", "Map", "Camera", "Luggage", "Sun", "Mountain"],
  education:   ["BookOpen", "GraduationCap", "PenLine", "Lightbulb", "Award", "Trophy", "Target", "Brain", "Bookmark", "Library"],
  fitness:     ["Dumbbell", "Flame", "Heart", "Activity", "Timer", "Zap", "Trophy", "Target", "Apple", "Bike"],
  realestate:  ["Home", "Building2", "MapPin", "Key", "DoorOpen", "Ruler", "BedDouble", "Bath", "Car", "Trees"],
  events:      ["Calendar", "Clock", "MapPin", "Ticket", "Music", "Users", "Star", "Camera", "Mic", "PartyPopper"],
} as const;

// ─── Fallback image (never broken) ──────────────────────────────────────────────

export const FALLBACK_IMAGE = getImage("photo-1579546929518-9e396f3cc809", 1200, 800);
