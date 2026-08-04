'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Users, CheckSquare, Sparkles, Heart, Clock, ChevronRight, Plus } from 'lucide-react';
import { Guest, ChecklistItem, SeatingTable } from '@/data/mockData';
import { getImage } from '@/lib/assets';

interface DashboardViewProps {
  guests: Guest[];
  checklist: ChecklistItem[];
  setChecklist: React.Dispatch<React.SetStateAction<ChecklistItem[]>>;
  seatingTables: SeatingTable[];
  setActiveTab: (tab: string) => void;
}

export default function DashboardView({ guests, checklist, setChecklist, seatingTables, setActiveTab }: DashboardViewProps) {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 12, minutes: 30, seconds: 45 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // RSVP Stats
  const totalGuests = guests.length;
  const attendingCount = guests.filter(g => g.rsvpStatus === 'Attending').length;
  const pendingCount = guests.filter(g => g.rsvpStatus === 'Pending').length;
  const declinedCount = guests.filter(g => g.rsvpStatus === 'Declined').length;

  const attendingPercentage = totalGuests > 0 ? Math.round((attendingCount / totalGuests) * 100) : 0;
  const pendingPercentage = totalGuests > 0 ? Math.round((pendingCount / totalGuests) * 100) : 0;

  // Checklist Toggle
  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // Immediate 3 tasks due
  const immediateTasks = checklist.slice(0, 3);

  // Hover state for seating chart preview
  const [hoveredTable, setHoveredTable] = useState<string | null>(null);

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/40">
        <div className="relative w-full aspect-[21/9] min-h-[350px] overflow-hidden">
          <img 
            src={getImage('photo-1519741497674-611481863552', 1600, 800)} 
            alt="Olivia & Marcus Wedding" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-12 text-white">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-[10px] font-sans tracking-widest uppercase rounded-full bg-amber-700/80 text-stone-50 backdrop-blur-md border border-amber-500/30">
              December 18, 2024
            </span>
            <span className="px-3 py-1 text-[10px] font-sans tracking-widest uppercase rounded-full bg-stone-900/60 text-stone-200 backdrop-blur-md border border-stone-700/30">
              Chateau de Bellevue, France
            </span>
          </div>

          <div className="max-w-2xl space-y-3">
            <p className="text-amber-300 text-xs sm:text-sm font-sans tracking-widest uppercase">The Celebration of Love</p>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-amber-100 tracking-wide leading-tight">
              Olivia & Marcus&apos;s Wedding Journey
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm font-sans max-w-lg leading-relaxed">
              Welcome to your bespoke planning sanctuary. Every detail of your French countryside celebration is curated here with absolute precision.
            </p>
          </div>

          {/* Countdown Widget */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md bg-stone-950/40 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-stone-700/30">
            <div className="text-center">
              <span className="block text-xl sm:text-3xl font-serif text-amber-400 font-bold">{timeLeft.days}</span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-wider uppercase text-stone-300">Days</span>
            </div>
            <div className="text-center border-l border-stone-800">
              <span className="block text-xl sm:text-3xl font-serif text-amber-400 font-bold">{timeLeft.hours}</span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-wider uppercase text-stone-300">Hours</span>
            </div>
            <div className="text-center border-l border-stone-800">
              <span className="block text-xl sm:text-3xl font-serif text-amber-400 font-bold">{timeLeft.minutes}</span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-wider uppercase text-stone-300">Mins</span>
            </div>
            <div className="text-center border-l border-stone-800">
              <span className="block text-xl sm:text-3xl font-serif text-amber-400 font-bold">{timeLeft.seconds}</span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-wider uppercase text-stone-300">Secs</span>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Statistics & Quick Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Attending Card */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-xs font-sans tracking-wider uppercase text-stone-500 block">Attending RSVPs</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif text-stone-900 font-bold">{attendingCount}</span>
              <span className="text-xs text-emerald-700 font-sans bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                {attendingPercentage}% Confirmed
              </span>
            </div>
            <p className="text-xs text-stone-400 font-sans">Out of {totalGuests} total invited guests</p>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="32" cy="32" r="28" className="stroke-stone-100 fill-none" strokeWidth="4" />
              <circle 
                cx="32" 
                cy="32" 
                r="28" 
                className="stroke-emerald-600 fill-none transition-all duration-500" 
                strokeWidth="4" 
                strokeDasharray={175} 
                strokeDashoffset={175 - (175 * attendingPercentage) / 100} 
              />
            </svg>
            <Users className="w-5 h-5 text-emerald-600 absolute" />
          </div>
        </div>

        {/* Pending Card */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-xs font-sans tracking-wider uppercase text-stone-500 block">Pending RSVPs</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif text-stone-900 font-bold">{pendingCount}</span>
              <span className="text-xs text-amber-700 font-sans bg-amber-50 px-2 py-0.5 rounded-full font-medium">
                {pendingPercentage}% Awaiting
              </span>
            </div>
            <p className="text-xs text-stone-400 font-sans">Follow-up recommended soon</p>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="32" cy="32" r="28" className="stroke-stone-100 fill-none" strokeWidth="4" />
              <circle 
                cx="32" 
                cy="32" 
                r="28" 
                className="stroke-amber-600 fill-none transition-all duration-500" 
                strokeWidth="4" 
                strokeDasharray={175} 
                strokeDashoffset={175 - (175 * pendingPercentage) / 100} 
              />
            </svg>
            <Clock className="w-5 h-5 text-amber-600 absolute" />
          </div>
        </div>

        {/* Declined Card */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-xs font-sans tracking-wider uppercase text-stone-500 block">Declined RSVPs</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif text-stone-900 font-bold">{declinedCount}</span>
              <span className="text-xs text-rose-700 font-sans bg-rose-50 px-2 py-0.5 rounded-full font-medium">
                Regrets Sent
              </span>
            </div>
            <p className="text-xs text-stone-400 font-sans">Seating chart adjusted accordingly</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center border border-rose-100">
            <Heart className="w-5 h-5 text-rose-600 stroke-[1.5]" />
          </div>
        </div>
      </section>

      {/* Main Dashboard Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Next Steps Checklist */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-serif text-xl text-stone-900 font-semibold">Immediate Next Steps</h3>
              <p className="text-xs text-stone-500 font-sans">Keep your planning momentum on track</p>
            </div>
            <button 
              onClick={() => setActiveTab('timeline')}
              className="text-xs font-sans font-medium text-amber-700 hover:text-amber-800 flex items-center gap-1 transition-colors"
            >
              View All Tasks <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {immediateTasks.map((item) => (
              <div 
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                  item.completed 
                    ? 'bg-stone-50/60 border-stone-200 text-stone-400 line-through' 
                    : 'bg-white border-stone-200 hover:border-amber-200 hover:shadow-sm text-stone-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    item.completed ? 'bg-amber-700 border-amber-700 text-white' : 'border-stone-300 bg-white'
                  }`}>
                    {item.completed && <CheckSquare className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs sm:text-sm font-sans font-medium">{item.task}</span>
                </div>
                <span className={`text-[10px] font-sans tracking-wider uppercase px-2 py-1 rounded-full ${
                  item.completed 
                    ? 'bg-stone-100 text-stone-400' 
                    : 'bg-amber-50 text-amber-700 border border-amber-100'
                }`}>
                  {item.dueDate}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-sans text-stone-600">
              <span>Overall Planning Progress</span>
              <span className="font-semibold">
                {Math.round((checklist.filter(c => c.completed).length / checklist.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-700 transition-all duration-500"
                style={{ width: `${(checklist.filter(c => c.completed).length / checklist.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Seating Chart Interactive Preview */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-serif text-xl text-stone-900 font-semibold">Reception Seating Preview</h3>
              <p className="text-xs text-stone-500 font-sans">Interactive layout of Chateau Grand Ballroom</p>
            </div>
            <button 
              onClick={() => setActiveTab('guests')}
              className="text-xs font-sans font-medium text-amber-700 hover:text-amber-800 flex items-center gap-1 transition-colors"
            >
              Manage Seating <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Seating Map */}
          <div className="bg-stone-50/80 rounded-2xl p-6 border border-stone-200/40 flex flex-col items-center justify-center min-h-[240px] relative">
            <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
              {seatingTables.map((table) => (
                <div 
                  key={table.id}
                  onMouseEnter={() => setHoveredTable(table.id)}
                  onMouseLeave={() => setHoveredTable(null)}
                  className={`relative p-4 rounded-full aspect-square flex flex-col items-center justify-center border-2 transition-all cursor-pointer ${
                    hoveredTable === table.id 
                      ? 'border-amber-700 bg-amber-50/50 scale-105 shadow-md' 
                      : 'border-stone-300 bg-white hover:border-amber-500'
                  }`}
                >
                  <span className="text-xs font-serif text-stone-900 font-semibold text-center leading-tight">
                    {table.name.split(' - ')[0]}
                  </span>
                  <span className="text-[10px] font-sans text-stone-500 mt-1">
                    {table.assignedGuests.length} / {table.capacity} Seated
                  </span>

                  {/* Floating Guest List Tooltip */}
                  {hoveredTable === table.id && (
                    <div className="absolute z-10 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-stone-900 text-stone-100 text-xs rounded-xl p-3 shadow-xl border border-stone-800 w-48 animate-in fade-in zoom-in-95 duration-150">
                      <p className="font-serif text-amber-400 border-b border-stone-800 pb-1 mb-1.5 font-semibold">
                        {table.name}
                      </p>
                      <ul className="space-y-1 text-[11px] text-stone-300 font-sans">
                        {table.assignedGuests.map((guest, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-amber-400" />
                            {guest}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[10px] text-stone-400 font-sans mt-6 text-center italic">
              Hover over tables to view assigned guests and VIP seating arrangements.
            </p>
          </div>
        </div>

      </div>

      {/* Curated Planning Tip Banner */}
      <section className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
            <Sparkles className="w-6 h-6 text-amber-700" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-stone-900 font-semibold">Concierge Tip of the Week</h4>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              &ldquo;When finalizing your seating chart, place your live musicians near the dance floor but away from the elderly guest tables to ensure everyone enjoys the perfect acoustic balance.&rdquo;
            </p>
          </div>
        </div>
        <button 
          onClick={() => setActiveTab('vendors')}
          className="btn-secondary border border-amber-700/30 text-amber-900 hover:bg-amber-50/50 font-sans text-xs tracking-wider uppercase transition-all duration-300 rounded-full px-6 py-2.5 shrink-0"
        >
          Explore Music Vendors
        </button>
      </section>

    </div>
  );
}