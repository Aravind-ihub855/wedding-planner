'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DashboardView from '@/components/DashboardView';
import GuestListView from '@/components/GuestListView';
import BudgetPlannerView from '@/components/BudgetPlannerView';
import VendorsView from '@/components/VendorsView';
import TimelineView from '@/components/TimelineView';

import { 
  MOCK_GUESTS, 
  MOCK_EXPENSES, 
  MOCK_CHECKLIST, 
  MOCK_VENDORS, 
  MOCK_TIMELINE, 
  MOCK_SEATING_TABLES,
  Guest,
  Expense,
  ChecklistItem,
  TimelineMilestone
} from '@/data/mockData';

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  // Stateful lists to allow interactive updates across views
  const [guests, setGuests] = useState<Guest[]>(MOCK_GUESTS);
  const [expenses, setExpenses] = useState<Expense[]>(MOCK_EXPENSES);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(MOCK_CHECKLIST);
  const [timeline, setTimeline] = useState<TimelineMilestone[]>(MOCK_TIMELINE);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-between selection:bg-amber-200 selection:text-amber-900">
      
      {/* Global Premium Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Viewport */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {activeTab === 'dashboard' && (
          <DashboardView 
            guests={guests} 
            checklist={checklist} 
            setChecklist={setChecklist}
            seatingTables={MOCK_SEATING_TABLES}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'guests' && (
          <GuestListView 
            guests={guests} 
            setGuests={setGuests} 
          />
        )}

        {activeTab === 'budget' && (
          <BudgetPlannerView 
            expenses={expenses} 
            setExpenses={setExpenses} 
          />
        )}

        {activeTab === 'vendors' && (
          <VendorsView 
            vendors={MOCK_VENDORS} 
          />
        )}

        {activeTab === 'timeline' && (
          <TimelineView 
            timeline={timeline} 
            setTimeline={setTimeline} 
          />
        )}
      </main>

      {/* Global Premium Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}