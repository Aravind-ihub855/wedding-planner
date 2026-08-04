import { getImage } from '@/lib/assets';

export interface Guest {
  id: string;
  name: string;
  relationship: 'Bride Family' | 'Groom Family' | 'Mutual Friends' | 'Work Colleagues';
  rsvpStatus: 'Attending' | 'Pending' | 'Declined';
  dietary: string;
  tableAssignment: string;
  plusOne: boolean;
}

export interface Expense {
  id: string;
  name: string;
  category: 'Venue' | 'Catering' | 'Attire' | 'Production' | 'Florist & Decor' | 'Music & Entertainment';
  estimated: number;
  actual: number;
  paid: number;
  status: 'Paid' | 'Deposit Paid' | 'Unpaid';
}

export interface ChecklistItem {
  id: string;
  task: string;
  dueDate: string;
  completed: boolean;
  category: 'Planning' | 'Bookings' | 'Design' | 'Legal';
}

export interface Vendor {
  id: string;
  name: string;
  category: 'Venue' | 'Photography' | 'Florist' | 'Catering' | 'Music';
  rating: number;
  priceRange: '$$' | '$$$' | '$$$$';
  status: 'Contract Signed' | 'In Negotiation' | 'Shortlisted';
  image: string;
  contact: string;
  description: string;
}

export interface TimelineMilestone {
  id: string;
  timeframe: string;
  title: string;
  description: string;
  completed: boolean;
  isWeddingDay: boolean;
}

export interface SeatingTable {
  id: string;
  name: string;
  capacity: number;
  assignedGuests: string[];
}

export const MOCK_GUESTS: Guest[] = [
  { id: 'g1', name: 'Eleanor Vance', relationship: 'Bride Family', rsvpStatus: 'Attending', dietary: 'Gluten-Free', tableAssignment: 'Table 1', plusOne: true },
  { id: 'g2', name: 'Julian Vance', relationship: 'Bride Family', rsvpStatus: 'Attending', dietary: 'None', tableAssignment: 'Table 1', plusOne: false },
  { id: 'g3', name: 'Robert Sterling', relationship: 'Groom Family', rsvpStatus: 'Attending', dietary: 'None', tableAssignment: 'Table 2', plusOne: true },
  { id: 'g4', name: 'Clara Sterling', relationship: 'Groom Family', rsvpStatus: 'Attending', dietary: 'None', tableAssignment: 'Table 2', plusOne: false },
  { id: 'g5', name: 'Siddharth Mehta', relationship: 'Mutual Friends', rsvpStatus: 'Pending', dietary: 'Vegan', tableAssignment: 'Table 3', plusOne: true },
  { id: 'g6', name: 'Aria Chen', relationship: 'Mutual Friends', rsvpStatus: 'Attending', dietary: 'None', tableAssignment: 'Table 3', plusOne: false },
  { id: 'g7', name: 'Marcus Brody', relationship: 'Work Colleagues', rsvpStatus: 'Declined', dietary: 'None', tableAssignment: 'Unassigned', plusOne: false },
  { id: 'g8', name: 'Sophia Loren', relationship: 'Mutual Friends', rsvpStatus: 'Pending', dietary: 'Nut Allergy', tableAssignment: 'Table 4', plusOne: true },
  { id: 'g9', name: 'David Beckham', relationship: 'Work Colleagues', rsvpStatus: 'Attending', dietary: 'None', tableAssignment: 'Table 4', plusOne: false },
  { id: 'g10', name: 'Helena Carter', relationship: 'Bride Family', rsvpStatus: 'Pending', dietary: 'Vegetarian', tableAssignment: 'Table 1', plusOne: false },
];

export const MOCK_EXPENSES: Expense[] = [
  { id: 'e1', name: 'Chateau de Bellevue Rental', category: 'Venue', estimated: 15000, actual: 16500, paid: 8000, status: 'Deposit Paid' },
  { id: 'e2', name: 'Gourmet 5-Course Catering', category: 'Catering', estimated: 12000, actual: 11500, paid: 11500, status: 'Paid' },
  { id: 'e3', name: 'Custom Silk Bridal Gown', category: 'Attire', estimated: 5000, actual: 5500, paid: 2000, status: 'Deposit Paid' },
  { id: 'e4', name: 'Bespoke Tuxedo', category: 'Attire', estimated: 1500, actual: 1200, paid: 1200, status: 'Paid' },
  { id: 'e5', name: 'Cinematic Video & Photo Package', category: 'Production', estimated: 6000, actual: 6000, paid: 0, status: 'Unpaid' },
  { id: 'e6', name: 'White Orchids & Rose Arbors', category: 'Florist & Decor', estimated: 4500, actual: 4800, paid: 1500, status: 'Deposit Paid' },
  { id: 'e7', name: 'Live Jazz Quartet & DJ Set', category: 'Music & Entertainment', estimated: 4000, actual: 3800, paid: 3800, status: 'Paid' },
];

export const MOCK_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', task: 'Finalize catering menu and wine pairings', dueDate: '2024-11-15', completed: true, category: 'Planning' },
  { id: 'c2', task: 'Send rehearsal dinner invitations', dueDate: '2024-11-20', completed: false, category: 'Planning' },
  { id: 'c3', task: 'Confirm floral delivery and setup times', dueDate: '2024-12-01', completed: false, category: 'Design' },
  { id: 'c4', task: 'Submit marriage license application', dueDate: '2024-12-05', completed: true, category: 'Legal' },
  { id: 'c5', task: 'Finalize seating chart and place cards', dueDate: '2024-12-10', completed: false, category: 'Planning' },
  { id: 'c6', task: 'Schedule final dress and tuxedo fittings', dueDate: '2024-11-28', completed: true, category: 'Bookings' },
];

export const MOCK_VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'Chateau de Bellevue',
    category: 'Venue',
    rating: 4.9,
    priceRange: '$$$$',
    status: 'Contract Signed',
    image: getImage('photo-1519167758481-83f550bb49b3', 600, 400),
    contact: 'events@bellevuechateau.com',
    description: 'A breathtaking 18th-century estate featuring manicured French gardens, crystal chandeliers, and panoramic valley views.'
  },
  {
    id: 'v2',
    name: 'Lumiere Wedding Cinema',
    category: 'Photography',
    rating: 4.8,
    priceRange: '$$$',
    status: 'Contract Signed',
    image: getImage('photo-1537633552985-df8429e8048b', 600, 400),
    contact: 'hello@lumierecinema.com',
    description: 'Editorial and documentary-style wedding photography capturing raw emotions, golden hour magic, and timeless portraits.'
  },
  {
    id: 'v3',
    name: 'Fleur Sauvage Design',
    category: 'Florist',
    rating: 5.0,
    priceRange: '$$$',
    status: 'In Negotiation',
    image: getImage('photo-1526047932273-341f2a7631f9', 600, 400),
    contact: 'design@fleursauvage.com',
    description: 'Bespoke floral installations specializing in lush, romantic, and organic designs tailored to high-end celebrations.'
  },
  {
    id: 'v4',
    name: 'The Gastronomy Club',
    category: 'Catering',
    rating: 4.7,
    priceRange: '$$$$',
    status: 'Contract Signed',
    image: getImage('photo-1555244162-803834f70033', 600, 400),
    contact: 'chef@gastronomyclub.com',
    description: 'Michelin-starred wedding catering featuring seasonal ingredients, interactive food stations, and custom mixology bars.'
  },
  {
    id: 'v5',
    name: 'The Velvet Quartet',
    category: 'Music',
    rating: 4.9,
    priceRange: '$$',
    status: 'Shortlisted',
    image: getImage('photo-1511671782779-c97d3d27a1d4', 600, 400),
    contact: 'booking@velvetquartet.com',
    description: 'Elegant string quartet performing classical renditions of modern love songs, perfect for ceremonies and cocktail hours.'
  }
];

export const MOCK_TIMELINE: TimelineMilestone[] = [
  { id: 't1', timeframe: '10 Months Out', title: 'Secure Dream Venue', description: 'Book Chateau de Bellevue and confirm the date.', completed: true, isWeddingDay: false },
  { id: 't2', timeframe: '8 Months Out', title: 'Curate Creative Team', description: 'Hire photographer, florist, and catering services.', completed: true, isWeddingDay: false },
  { id: 't3', timeframe: '6 Months Out', title: 'Send Save the Dates', description: 'Mail custom-designed stationery to the guest list.', completed: true, isWeddingDay: false },
  { id: 't4', timeframe: '3 Months Out', title: 'Menu Tasting & Attire Fittings', description: 'Finalize the 5-course menu and complete first dress fitting.', completed: true, isWeddingDay: false },
  { id: 't5', timeframe: '1 Month Out', title: 'Finalize Seating & RSVPs', description: 'Lock in guest count and assign tables.', completed: false, isWeddingDay: false },
  { id: 't6', timeframe: '08:00 AM', title: 'Hair & Makeup Prep', description: 'Bridal party prep begins in the Chateau suite.', completed: false, isWeddingDay: true },
  { id: 't7', timeframe: '02:00 PM', title: 'First Look & Portraits', description: 'Private moment for Olivia & Marcus in the gardens.', completed: false, isWeddingDay: true },
  { id: 't8', timeframe: '04:30 PM', title: 'The Ceremony', description: 'Exchange of vows under the floral arbor.', completed: false, isWeddingDay: true },
  { id: 't9', timeframe: '06:00 PM', title: 'Cocktail Hour & Reception', description: 'Champagne toast, live jazz, and fine dining.', completed: false, isWeddingDay: true }
];

export const MOCK_SEATING_TABLES: SeatingTable[] = [
  { id: 'tbl1', name: 'Table 1 - Royal Family', capacity: 8, assignedGuests: ['Eleanor Vance', 'Julian Vance', 'Helena Carter'] },
  { id: 'tbl2', name: 'Table 2 - Sterling Estate', capacity: 8, assignedGuests: ['Robert Sterling', 'Clara Sterling'] },
  { id: 'tbl3', name: 'Table 3 - Creative Circle', capacity: 8, assignedGuests: ['Siddharth Mehta', 'Aria Chen'] },
  { id: 'tbl4', name: 'Table 4 - London Crew', capacity: 8, assignedGuests: ['Sophia Loren', 'David Beckham'] }
];