export interface GuestItem {
  id: string;
  name: string;
  email: string;
  category: 'Family' | 'Wedding Party' | 'Friends' | 'VIP';
  table: string;
  dietary: string;
  status: 'Confirmed' | 'Pending' | 'Declined';
  plusOne: boolean;
}

export interface BudgetItem {
  id: string;
  category: string;
  item: string;
  allocated: number;
  spent: number;
  status: 'Paid' | 'Partial' | 'Pending';
}

export interface VendorItem {
  id: string;
  name: string;
  category: 'Photography' | 'Florist' | 'Caterer' | 'DJ' | 'Venue';
  rating: number;
  reviewsCount: number;
  priceRange: string;
  location: string;
  image: string;
  shortlisted: boolean;
}

export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  location: string;
  notes: string;
  category: 'Ceremony' | 'Reception' | 'Preparation' | 'Photos';
}

export interface ChecklistItem {
  id: string;
  task: string;
  category: string;
  completed: boolean;
  dueDate: string;
}

export const MOCK_GUESTS: GuestItem[] = [
  { id: 'g1', name: 'Eleanor Vance', email: 'eleanor@vance.co', category: 'VIP', table: 'Table 1 (Head Table)', dietary: 'Gluten-Free', status: 'Confirmed', plusOne: true },
  { id: 'g2', name: 'Julian Montgomery', email: 'julian@monty.com', category: 'Wedding Party', table: 'Table 1 (Head Table)', dietary: 'None', status: 'Confirmed', plusOne: true },
  { id: 'g3', name: 'Sophia Sterling', email: 'sophia@sterling.design', category: 'Family', table: 'Table 2 (Family)', dietary: 'Vegan', status: 'Confirmed', plusOne: false },
  { id: 'g4', name: 'Aiden Brooks', email: 'aiden@brooks.law', category: 'Friends', table: 'Table 3', dietary: 'None', status: 'Pending', plusOne: true },
  { id: 'g5', name: 'Victoria Sinclair', email: 'v.sinclair@art.org', category: 'VIP', table: 'Table 2 (Family)', dietary: 'Vegetarian', status: 'Confirmed', plusOne: true },
  { id: 'g6', name: 'Liam Harrington', email: 'liam@harrington.io', category: 'Friends', table: 'Table 3', dietary: 'None', status: 'Declined', plusOne: false },
  { id: 'g7', name: 'Camilla Dupont', email: 'camilla@dupont.fr', category: 'Wedding Party', table: 'Table 1 (Head Table)', dietary: 'None', status: 'Confirmed', plusOne: true },
  { id: 'g8', name: 'Gabriel Vance', email: 'gabriel@vance.co', category: 'Family', table: 'Table 2 (Family)', dietary: 'Kosher', status: 'Pending', plusOne: true }
];

export const MOCK_BUDGET: BudgetItem[] = [
  { id: 'b1', category: 'Venue', item: 'The Plaza Grand Ballroom Rental', allocated: 45000, spent: 45000, status: 'Paid' },
  { id: 'b2', category: 'Catering', item: '5-Course Gourmet Dinner & Open Bar', allocated: 28000, spent: 14000, status: 'Partial' },
  { id: 'b3', category: 'Photography', item: 'Editorial Photo & Cinematography Team', allocated: 12000, spent: 6000, status: 'Partial' },
  { id: 'b4', category: 'Florals', item: 'Grand Arch & Centerpieces by Fleurs de Paris', allocated: 15000, spent: 5000, status: 'Partial' },
  { id: 'b5', category: 'Music', item: 'String Quartet & 8-Piece Live Band', allocated: 9000, spent: 0, status: 'Pending' },
  { id: 'b6', category: 'Attire', item: 'Custom Couture Gown & Bespoke Tuxedo', allocated: 11000, spent: 11000, status: 'Paid' }
];

export const MOCK_VENDORS: VendorItem[] = [
  { id: 'v1', name: 'Lumière Cinematic Studios', category: 'Photography', rating: 4.9, reviewsCount: 128, priceRange: '$10k - $18k', location: 'New York, NY', image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80', shortlisted: true },
  { id: 'v2', name: 'Fleurs de Paris Atelier', category: 'Florist', rating: 5.0, reviewsCount: 94, priceRange: '$12k - $25k', location: 'Manhattan, NY', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80', shortlisted: true },
  { id: 'v3', name: 'The Plaza Grand Ballroom', category: 'Venue', rating: 4.9, reviewsCount: 310, priceRange: '$40k - $70k', location: 'Fifth Avenue, NY', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80', shortlisted: true },
  { id: 'v4', name: 'Chef Laurent Gourmet', category: 'Caterer', rating: 4.8, reviewsCount: 156, priceRange: '$25k - $45k', location: 'Brooklyn, NY', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80', shortlisted: false },
  { id: 'v5', name: 'Midnight Groove Orchestra', category: 'DJ', rating: 4.9, reviewsCount: 82, priceRange: '$7k - $12k', location: 'New York, NY', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', shortlisted: false }
];

export const MOCK_TIMELINE: TimelineItem[] = [
  { id: 't1', time: '09:00 AM', title: 'Bridal Party Hair & Makeup', location: 'The Plaza Presidential Suite', notes: 'Mimosas and pastries served by room service.', category: 'Preparation' },
  { id: 't2', time: '11:30 AM', title: 'First Look & Editorial Portraits', location: 'Central Park Conservatory Garden', notes: 'Photographer Lumière arrives with drone squad.', category: 'Photos' },
  { id: 't3', time: '03:30 PM', title: 'Guest Arrival & Champagne Welcome', location: 'The Grand Ballroom Foyer', notes: 'String quartet begins background acoustic set.', category: 'Ceremony' },
  { id: 't4', time: '04:00 PM', title: 'Wedding Ceremony Begins', location: 'The Plaza Grand Ballroom', notes: 'Processional starts promptly at 4:05 PM.', category: 'Ceremony' },
  { id: 't5', time: '05:30 PM', title: 'Cocktail Hour & Hors d’oeuvres', location: 'Terrace Garden Room', notes: 'Signature cocktails: Rose French 75 & Golden Old Fashioned.', category: 'Reception' },
  { id: 't6', time: '07:00 PM', title: 'Grand Entrance & 5-Course Dinner', location: 'The Plaza Grand Ballroom', notes: 'First dance to live orchestra performance.', category: 'Reception' }
];

export const MOCK_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', task: 'Secure Venue Contract & Deposit', category: 'Venue', completed: true, dueDate: '2025-01-15' },
  { id: 'c2', task: 'Finalize Couture Gown Fitting', category: 'Attire', completed: true, dueDate: '2025-02-10' },
  { id: 'c3', task: 'Book Cinematic Photography Team', category: 'Vendors', completed: true, dueDate: '2025-02-28' },
  { id: 'c4', task: 'Send Calligraphy Save-The-Dates', category: 'Stationery', completed: true, dueDate: '2025-03-15' },
  { id: 'c5', task: 'Menu Tasting with Chef Laurent', category: 'Catering', completed: false, dueDate: '2025-04-20' },
  { id: 'c6', task: 'Final Seating Chart & Place Cards', category: 'Guests', completed: false, dueDate: '2025-09-01' }
];