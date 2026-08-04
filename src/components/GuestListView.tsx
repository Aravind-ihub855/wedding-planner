'use client';

import React, { useState } from 'react';
import { Search, Plus, Users, Check, X, Clock, HelpCircle, Trash2, Filter } from 'lucide-react';
import { Guest } from '@/data/mockData';

interface GuestListViewProps {
  guests: Guest[];
  setGuests: React.Dispatch<React.SetStateAction<Guest[]>>;
}

export default function GuestListView({ guests, setGuests }: GuestListViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Attending' | 'Pending' | 'Declined'>('All');
  
  // Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGuest, setNewGuest] = useState({
    name: '',
    relationship: 'Mutual Friends' as Guest['relationship'],
    rsvpStatus: 'Pending' as Guest['rsvpStatus'],
    dietary: '',
    tableAssignment: 'Unassigned',
    plusOne: false
  });

  // Filter & Search Logic
  const filteredGuests = guests.filter(guest => {
    const matchesSearch = guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guest.relationship.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guest.dietary.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'All') return matchesSearch;
    return guest.rsvpStatus === activeFilter && matchesSearch;
  });

  // Add Guest Handler
  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuest.name.trim()) return;

    const guestToAdd: Guest = {
      id: `g-${Date.now()}`,
      name: newGuest.name,
      relationship: newGuest.relationship,
      rsvpStatus: newGuest.rsvpStatus,
      dietary: newGuest.dietary || 'None',
      tableAssignment: newGuest.tableAssignment,
      plusOne: newGuest.plusOne
    };

    setGuests(prev => [guestToAdd, ...prev]);
    setNewGuest({
      name: '',
      relationship: 'Mutual Friends',
      rsvpStatus: 'Pending',
      dietary: '',
      tableAssignment: 'Unassigned',
      plusOne: false
    });
    setShowAddForm(false);
  };

  // Delete Guest Handler
  const handleDeleteGuest = (id: string) => {
    setGuests(prev => prev.filter(g => g.id !== id));
  };

  // Toggle RSVP Status directly
  const toggleStatus = (id: string, status: Guest['rsvpStatus']) => {
    setGuests(prev => prev.map(g => g.id === id ? { ...g, rsvpStatus: status } : g));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-serif text-3xl text-stone-900 font-bold">RSVP & Guest Hub</h2>
          <p className="text-xs sm:text-sm text-stone-500 font-sans">
            Manage your guest list, track dietary requirements, and organize table assignments.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary bg-amber-700 hover:bg-amber-800 text-stone-50 font-sans text-xs tracking-wider uppercase transition-all duration-300 rounded-full px-6 py-3 shadow-sm flex items-center justify-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          {showAddForm ? 'Close Form' : 'Add New Guest'}
        </button>
      </div>

      {/* Add Guest Form (Collapsible) */}
      {showAddForm && (
        <form onSubmit={handleAddGuest} className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-md space-y-6 animate-in slide-in-from-top-5 duration-300">
          <h3 className="font-serif text-lg text-stone-900 font-semibold border-b border-stone-100 pb-3">
            Add Guest to Invitation List
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Guest Name */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Lady Penelope"
                value={newGuest.name}
                onChange={e => setNewGuest(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans"
              />
            </div>

            {/* Relationship */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Relationship Group
              </label>
              <select
                value={newGuest.relationship}
                onChange={e => setNewGuest(prev => ({ ...prev, relationship: e.target.value as Guest['relationship'] }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans bg-white"
              >
                <option value="Bride Family">Bride&apos;s Family</option>
                <option value="Groom Family">Groom&apos;s Family</option>
                <option value="Mutual Friends">Mutual Friends</option>
                <option value="Work Colleagues">Work Colleagues</option>
              </select>
            </div>

            {/* RSVP Status */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                RSVP Status
              </label>
              <select
                value={newGuest.rsvpStatus}
                onChange={e => setNewGuest(prev => ({ ...prev, rsvpStatus: e.target.value as Guest['rsvpStatus'] }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans bg-white"
              >
                <option value="Pending">Pending RSVP</option>
                <option value="Attending">Attending</option>
                <option value="Declined">Declined</option>
              </select>
            </div>

            {/* Dietary Requirements */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Dietary Requirements
              </label>
              <input
                type="text"
                placeholder="e.g. Vegan, Gluten-Free, None"
                value={newGuest.dietary}
                onChange={e => setNewGuest(prev => ({ ...prev, dietary: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans"
              />
            </div>

            {/* Table Assignment */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Table Assignment
              </label>
              <input
                type="text"
                placeholder="e.g. Table 1, Unassigned"
                value={newGuest.tableAssignment}
                onChange={e => setNewGuest(prev => ({ ...prev, tableAssignment: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans"
              />
            </div>

            {/* Plus One Toggle */}
            <div className="flex items-center gap-3 pt-8">
              <input
                type="checkbox"
                id="plusOne"
                checked={newGuest.plusOne}
                onChange={e => setNewGuest(prev => ({ ...prev, plusOne: e.target.checked }))}
                className="w-4 h-4 text-amber-700 border-stone-300 rounded focus:ring-amber-500"
              />
              <label htmlFor="plusOne" className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider cursor-pointer">
                Includes Plus One (+1)
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-stone-100">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-5 py-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-sans tracking-wider uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-amber-700 hover:bg-amber-800 text-stone-50 text-xs font-sans tracking-wider uppercase rounded-full px-6 py-2 shadow-sm"
            >
              Save Guest
            </button>
          </div>
        </form>
      )}

      {/* Filters & Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-stone-200/60 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full lg:max-w-xs">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guests, dietary, group..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-xs font-sans"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {(['All', 'Attending', 'Pending', 'Declined'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium tracking-wide transition-all ${
                activeFilter === filter
                  ? 'bg-amber-700 text-stone-50 shadow-sm'
                  : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {filter} ({filter === 'All' ? guests.length : guests.filter(g => g.rsvpStatus === filter).length})
            </button>
          ))}
        </div>
      </div>

      {/* Guest Cards Grid */}
      {filteredGuests.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 border border-stone-200/60 text-center space-y-3">
          <Users className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="font-serif text-lg text-stone-800 font-semibold">No guests found</h3>
          <p className="text-xs text-stone-500 font-sans max-w-md mx-auto">
            Try adjusting your search query or filter settings, or add a new guest to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuests.map((guest) => {
            // Status styling
            const statusStyles = {
              Attending: 'bg-emerald-50 text-emerald-700 border-emerald-200',
              Pending: 'bg-amber-50 text-amber-700 border-amber-200',
              Declined: 'bg-rose-50 text-rose-700 border-rose-200'
            }[guest.rsvpStatus];

            return (
              <div 
                key={guest.id}
                className="bg-white rounded-2xl p-5 border border-stone-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-serif text-base text-stone-900 font-semibold group-hover:text-amber-800 transition-colors">
                        {guest.name}
                      </h4>
                      <span className="text-[10px] font-sans tracking-wider uppercase text-stone-400 block">
                        {guest.relationship}
                      </span>
                    </div>
                    <span className={`text-[10px] font-sans tracking-wider uppercase px-2.5 py-1 rounded-full border ${statusStyles}`}>
                      {guest.rsvpStatus}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100 text-xs font-sans text-stone-600">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase tracking-wider">Dietary</span>
                      <span className="font-medium">{guest.dietary}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase tracking-wider">Seating</span>
                      <span className="font-medium">{guest.tableAssignment}</span>
                    </div>
                  </div>
                </div>

                {/* Actions & Plus One Badge */}
                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <span className="text-[10px] font-sans text-stone-500">
                    {guest.plusOne ? '✓ Plus One Included' : 'Single Invitation'}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {/* Quick RSVP Toggles */}
                    <button 
                      onClick={() => toggleStatus(guest.id, 'Attending')}
                      title="Mark Attending"
                      className="w-7 h-7 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 flex items-center justify-center transition-colors border border-emerald-100"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => toggleStatus(guest.id, 'Pending')}
                      title="Mark Pending"
                      className="w-7 h-7 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-700 flex items-center justify-center transition-colors border border-amber-100"
                    >
                      <Clock className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => toggleStatus(guest.id, 'Declined')}
                      title="Mark Declined"
                      className="w-7 h-7 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 flex items-center justify-center transition-colors border border-rose-100"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <div className="w-px h-6 bg-stone-200 mx-1" />
                    <button 
                      onClick={() => handleDeleteGuest(guest.id)}
                      title="Remove Guest"
                      className="w-7 h-7 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-400 hover:text-rose-600 flex items-center justify-center transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}