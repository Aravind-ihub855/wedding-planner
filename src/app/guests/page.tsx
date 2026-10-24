'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import GuestModal from '@/components/GuestModal';
import { MOCK_GUESTS, GuestItem } from '@/data/mockData';
import { Users, Search, Plus, CheckCircle, Clock, XCircle, Mail, Utensils } from 'lucide-react';

export default function GuestsPage() {
  const [guests, setGuests] = useState<GuestItem[]>(MOCK_GUESTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'VIP', 'Family', 'Wedding Party', 'Friends'];

  const filteredGuests = guests.filter((g) => {
    const matchesCat = selectedCategory === 'All' || g.category === selectedCategory;
    const matchesSearch = g.name.toLowerCase().includes(searchQuery.toLowerCase()) || g.table.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
      <Navbar />

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">Honored Guest Directory</h1>
              <p className="text-stone-600 text-sm mt-1">Manage invitations, table seating charts, and dietary preferences.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-stone-900 text-stone-50 hover:bg-stone-800 transition-all px-6 py-2.5 rounded-full shadow-sm font-medium text-sm tracking-wide flex items-center gap-2 w-fit"
            >
              <Plus className="w-4 h-4" />
              <span>Add Guest</span>
            </button>
          </div>

          {/* Filtering & Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-rose-900 text-stone-50 shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-rose-100/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guest or table..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
              />
            </div>
          </div>

          {/* Guest Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuests.map((guest) => {
              const isConfirmed = guest.status === 'Confirmed';
              const isPending = guest.status === 'Pending';
              return (
                <div key={guest.id} className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-900 text-xs font-semibold tracking-wider">
                        {guest.category}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                        isConfirmed ? 'bg-emerald-50 text-emerald-700' : isPending ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'
                      }`}>
                        {isConfirmed && <CheckCircle className="w-3.5 h-3.5" />}
                        {isPending && <Clock className="w-3.5 h-3.5" />}
                        {!isConfirmed && !isPending && <XCircle className="w-3.5 h-3.5" />}
                        {guest.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-900">{guest.name}</h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1">
                        <Mail className="w-3.5 h-3.5 text-stone-400" />
                        {guest.email}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-700">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Table Assignment:</span>
                      <span className="font-semibold text-stone-900">{guest.table}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Dietary Needs:</span>
                      <span className="font-semibold text-rose-900 flex items-center gap-1">
                        <Utensils className="w-3 h-3" /> {guest.dietary}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </main>
      </div>

      <GuestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddGuest={(g) => setGuests([g, ...guests])}
      />
    </div>
  );
}