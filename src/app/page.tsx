'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import CountdownWidget from '@/components/CountdownWidget';
import GuestModal from '@/components/GuestModal';
import ExpenseModal from '@/components/ExpenseModal';
import { MOCK_GUESTS, MOCK_BUDGET, MOCK_CHECKLIST, GuestItem, BudgetItem } from '@/data/mockData';
import { Users, DollarSign, CheckCircle2, Clock, ArrowUpRight, Sparkles, Plus, Heart } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [guests, setGuests] = useState<GuestItem[]>(MOCK_GUESTS);
  const [budget, setBudget] = useState<BudgetItem[]>(MOCK_BUDGET);
  const [checklist, setChecklist] = useState(MOCK_CHECKLIST);
  
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  const confirmedCount = guests.filter(g => g.status === 'Confirmed').length;
  const pendingCount = guests.filter(g => g.status === 'Pending').length;
  const declinedCount = guests.filter(g => g.status === 'Declined').length;

  const totalAllocated = budget.reduce((acc, item) => acc + item.allocated, 0);
  const totalSpent = budget.reduce((acc, item) => acc + item.spent, 0);
  const budgetProgress = Math.round((totalSpent / totalAllocated) * 100);

  const toggleChecklist = (id: string) => {
    setChecklist(checklist.map(c => c.id === id ? { ...c, completed: !c.completed } : c));
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 selection:bg-rose-900 selection:text-stone-50">
      <Navbar />

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-10 overflow-hidden">
          
          {/* Hero Countdown */}
          <CountdownWidget />

          {/* RSVP Statistics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Total Invited</span>
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-stone-900">{guests.length * 2}</span>
                <Users className="w-5 h-5 text-rose-800" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Confirmed (RSVP)</span>
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-emerald-700">{confirmedCount}</span>
                <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">Accepted</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Pending Response</span>
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-amber-700">{pendingCount}</span>
                <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full">Awaiting</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Budget Spent</span>
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-rose-900">${totalSpent.toLocaleString()}</span>
                <span className="text-xs text-rose-800 font-semibold bg-rose-50 px-2 py-0.5 rounded-full">{budgetProgress}%</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid: Checklist & Quick Shortcuts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Interactive Wedding Checklist */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">Atelier Master Checklist</h2>
                  <p className="text-xs text-stone-500">Milestones required before October 14, 2025</p>
                </div>
                <Link href="/vendors" className="text-xs font-semibold text-rose-900 hover:underline flex items-center gap-1">
                  View Vendors <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                      item.completed 
                        ? 'bg-stone-50 border-stone-200 opacity-75 line-through' 
                        : 'bg-white border-stone-200 hover:border-rose-900/40 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                        item.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-white'
                      }`}>
                        {item.completed && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${item.completed ? 'text-stone-500' : 'text-stone-900'}`}>
                          {item.task}
                        </p>
                        <span className="text-[10px] uppercase tracking-wider text-rose-800 font-semibold">
                          {item.category} · Due {item.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-rose-900 to-stone-900 text-stone-50 rounded-3xl p-6 md:p-8 shadow-lg space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">Quick Atelier Actions</span>
                  <h3 className="font-serif text-xl font-bold mt-1">Manage Wedding Details</h3>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setIsGuestModalOpen(true)}
                    className="w-full py-3 px-4 rounded-xl bg-stone-50/10 hover:bg-stone-50/20 border border-stone-50/20 font-medium text-sm flex items-center justify-between transition-colors"
                  >
                    <span>Add New Guest</span>
                    <Plus className="w-4 h-4 text-amber-300" />
                  </button>
                  <button
                    onClick={() => setIsExpenseModalOpen(true)}
                    className="w-full py-3 px-4 rounded-xl bg-stone-50/10 hover:bg-stone-50/20 border border-stone-50/20 font-medium text-sm flex items-center justify-between transition-colors"
                  >
                    <span>Record Expense</span>
                    <Plus className="w-4 h-4 text-amber-300" />
                  </button>
                  <Link
                    href="/timeline"
                    className="w-full py-3 px-4 rounded-xl bg-stone-50/10 hover:bg-stone-50/20 border border-stone-50/20 font-medium text-sm flex items-center justify-between transition-colors block"
                  >
                    <span>View Day Schedule</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-300" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
                <h4 className="font-serif font-bold text-stone-900 text-base">Recent Confirmations</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-stone-100 pb-2">
                    <div>
                      <p className="font-bold text-stone-900">Eleanor Vance</p>
                      <p className="text-stone-500">Table 1 (Head Table)</p>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">Accepted</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-stone-100 pb-2">
                    <div>
                      <p className="font-bold text-stone-900">Julian Montgomery</p>
                      <p className="text-stone-500">Table 1 (Head Table)</p>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">Accepted</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-stone-900">Sophia Sterling</p>
                      <p className="text-stone-500">Table 2 (Family)</p>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">Accepted</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>

      <GuestModal
        isOpen={isGuestModalOpen}
        onClose={() => setIsGuestModalOpen(false)}
        onAddGuest={(g) => setGuests([g, ...guests])}
      />

      <ExpenseModal
        isOpen={isExpenseModalOpen}
        onClose={() => setIsExpenseModalOpen(false)}
        onAddExpense={(e) => setBudget([e, ...budget])}
      />
    </div>
  );
}