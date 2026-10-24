'use client';

import React, { useState } from 'react';
import { X, UserPlus } from 'lucide-react';
import { GuestItem } from '@/data/mockData';

interface GuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGuest: (guest: GuestItem) => void;
}

export default function GuestModal({ isOpen, onClose, onAddGuest }: GuestModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<GuestItem['category']>('Family');
  const [table, setTable] = useState('Table 1 (Head Table)');
  const [dietary, setDietary] = useState('None');
  const [plusOne, setPlusOne] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newGuest: GuestItem = {
      id: 'g_' + Date.now(),
      name,
      email: email || `${name.toLowerCase().replace(/\s+/g, '')}@guest.com`,
      category,
      table,
      dietary,
      status: 'Pending',
      plusOne,
    };

    onAddGuest(newGuest);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      <div className="bg-stone-50 rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-900 flex items-center justify-center">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Add Honored Guest</h3>
              <p className="text-xs text-stone-500">Record a new attendee for the wedding weekend</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-stone-500 hover:bg-stone-200/60 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Lord Harrington"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="guest@domain.com"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as GuestItem['category'])}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              >
                <option value="Family">Family</option>
                <option value="Wedding Party">Wedding Party</option>
                <option value="Friends">Friends</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Table Assignment
              </label>
              <input
                type="text"
                value={table}
                onChange={(e) => setTable(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Dietary Requirements
              </label>
              <input
                type="text"
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                placeholder="e.g. Vegan, Gluten-Free"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="plusOne"
              checked={plusOne}
              onChange={(e) => setPlusOne(e.target.checked)}
              className="w-4 h-4 rounded text-rose-900 focus:ring-rose-800"
            />
            <label htmlFor="plusOne" className="text-sm text-stone-700 font-medium">
              Allow Plus One (+1 Invitation)
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-6 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-stone-600 hover:bg-stone-200/60 font-medium text-sm transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-stone-900 text-stone-50 hover:bg-stone-800 transition-all px-6 py-2.5 rounded-full shadow-sm font-medium text-sm tracking-wide"
            >
              Save Guest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}