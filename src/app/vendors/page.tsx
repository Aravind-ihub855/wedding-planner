'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VendorModal from '@/components/VendorModal';
import { MOCK_VENDORS, VendorItem } from '@/data/mockData';
import { Sparkles, Star, MapPin, Heart, ArrowUpRight } from 'lucide-react';

export default function VendorsPage() {
  const [vendors, setVendors] = useState<VendorItem[]>(MOCK_VENDORS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVendor, setSelectedVendor] = useState<VendorItem | null>(null);

  const categories = ['All', 'Photography', 'Florist', 'Caterer', 'DJ', 'Venue'];

  const filteredVendors = vendors.filter(v => selectedCategory === 'All' || v.category === selectedCategory);

  const toggleShortlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setVendors(vendors.map(v => v.id === id ? { ...v, shortlisted: !v.shortlisted } : v));
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
      <Navbar />

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-8">
          
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">Curated Wedding Partners</h1>
            <p className="text-stone-600 text-sm mt-1">Hand-selected luxury ateliers and elite masters for Eleanor & Julian’s wedding.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
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

          {/* Vendor Profile Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                onClick={() => setSelectedVendor(vendor)}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/80 text-stone-50 backdrop-blur-md text-xs font-semibold tracking-wider">
                    {vendor.category}
                  </span>

                  <button
                    onClick={(e) => toggleShortlist(vendor.id, e)}
                    className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all ${
                      vendor.shortlisted ? 'bg-rose-900 text-stone-50' : 'bg-stone-900/60 text-stone-50 hover:bg-stone-900'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${vendor.shortlisted ? 'fill-stone-50' : ''}`} />
                  </button>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-stone-50 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {vendor.rating} ({vendor.reviewsCount})
                    </span>
                    <span className="font-serif font-bold text-amber-300">{vendor.priceRange}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-rose-900 transition-colors">
                      {vendor.name}
                    </h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-800" />
                      {vendor.location}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-rose-900">View Atelier Profile</span>
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-rose-900 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>

      <VendorModal
        vendor={selectedVendor}
        onClose={() => setSelectedVendor(null)}
      />
    </div>
  );
}