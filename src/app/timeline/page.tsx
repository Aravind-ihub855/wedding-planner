'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { MOCK_TIMELINE, TimelineItem } from '@/data/mockData';
import { Clock, MapPin, Calendar, Plus, Sparkles } from 'lucide-react';

export default function TimelinePage() {
  const [timeline, setTimeline] = useState<TimelineItem[]>(MOCK_TIMELINE);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [category, setCategory] = useState<TimelineItem['category']>('Ceremony');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !time.trim()) return;

    const newItem: TimelineItem = {
      id: 't_' + Date.now(),
      time,
      title,
      location: location || 'The Plaza Grand Ballroom',
      notes: notes || 'Scheduled wedding moment.',
      category,
    };

    setTimeline([...timeline, newItem]);
    setTitle('');
    setTime('');
    setLocation('');
    setNotes('');
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
      <Navbar />

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-10">
          
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">Wedding Day Atelier Schedule</h1>
            <p className="text-stone-600 text-sm mt-1">Chronological itinerary for October 14, 2025 at The Plaza Grand Ballroom.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Vertical Chronological Timeline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative pl-6 border-l-2 border-rose-900/20 space-y-8">
                {timeline.map((item) => (
                  <div key={item.id} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-rose-900 border-4 border-stone-50 shadow-sm" />
                    
                    <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-rose-900 text-sm">{item.time}</span>
                        <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-stone-900">{item.title}</h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-800" />
                        {item.location}
                      </p>
                      {item.notes && (
                        <p className="text-xs text-stone-700 pt-2 border-t border-stone-100 italic">
                          {item.notes}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Timeline Item Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm sticky top-28 space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Add Itinerary Moment</h3>
                  <p className="text-xs text-stone-500">Insert custom setup or event into the day schedule</p>
                </div>

                <form onSubmit={handleAddItem} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Time *
                    </label>
                    <input
                      type="text"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      placeholder="e.g. 06:15 PM"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Activity Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Champagne Toast & Cake Cutting"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Location
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="The Grand Ballroom"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as TimelineItem['category'])}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                      >
                        <option value="Ceremony">Ceremony</option>
                        <option value="Reception">Reception</option>
                        <option value="Preparation">Preparation</option>
                        <option value="Photos">Photos</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Concierge Notes
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Special instructions..."
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-stone-900 text-stone-50 hover:bg-stone-800 transition-all py-3 rounded-full shadow-sm font-medium text-sm tracking-wide flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Itinerary Moment</span>
                  </button>
                </form>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}