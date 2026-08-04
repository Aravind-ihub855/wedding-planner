'use client';

import React, { useState } from 'react';
import { Star, Mail, Phone, ExternalLink, CheckCircle, Clock, Award, Filter } from 'lucide-react';
import { Vendor } from '@/data/mockData';

interface VendorsViewProps {
  vendors: Vendor[];
}

export default function VendorsView({ vendors }: VendorsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Venue' | 'Photography' | 'Florist' | 'Catering' | 'Music'>('All');

  const categories = ['All', 'Venue', 'Photography', 'Florist', 'Catering', 'Music'] as const;

  const filteredVendors = selectedCategory === 'All' 
    ? vendors 
    : vendors.filter(v => v.category === selectedCategory);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Action */}
      <div className="space-y-1">
        <h2 className="font-serif text-3xl text-stone-900 font-bold">Curated Creative Team</h2>
        <p className="text-xs sm:text-sm text-stone-500 font-sans">
          Collaborate with world-class artisans, Michelin-starred chefs, and award-winning visual storytellers.
        </p>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap items-center gap-2 border-b border-stone-200/60 pb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-wide transition-all ${
              selectedCategory === cat
                ? 'bg-amber-700 text-stone-50 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vendor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVendors.map((vendor) => {
          // Status badge styling
          const statusStyles = {
            'Contract Signed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
            'In Negotiation': 'bg-amber-50 text-amber-700 border-amber-200',
            Shortlisted: 'bg-stone-100 text-stone-600 border-stone-200'
          }[vendor.status];

          return (
            <div 
              key={vendor.id}
              className="bg-white rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img 
                  src={vendor.image} 
                  alt={vendor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-sans tracking-widest uppercase rounded-full bg-stone-900/80 text-stone-50 backdrop-blur-md border border-stone-700/30">
                  {vendor.category}
                </span>
                <span className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-sans tracking-widest uppercase rounded-full border backdrop-blur-md ${statusStyles}`}>
                  {vendor.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg text-stone-900 font-semibold group-hover:text-amber-800 transition-colors">
                      {vendor.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-600">
                      <Star className="w-4 h-4 fill-amber-600" />
                      <span className="text-xs font-sans font-semibold">{vendor.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed">
                    {vendor.description}
                  </p>
                </div>

                {/* Metadata Row */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-stone-100 text-center text-[10px] font-sans text-stone-500 uppercase tracking-wider">
                  <div>
                    <span className="block text-stone-400">Tier</span>
                    <span className="font-semibold text-stone-800">{vendor.priceRange}</span>
                  </div>
                  <div className="border-x border-stone-100">
                    <span className="block text-stone-400">Quality</span>
                    <span className="font-semibold text-stone-800">Premium</span>
                  </div>
                  <div>
                    <span className="block text-stone-400">Assigned</span>
                    <span className="font-semibold text-stone-800">Olivia & M</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${vendor.contact}`}
                    className="flex-1 py-2 rounded-full border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-sans font-medium tracking-wide text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email Vendor
                  </a>
                  <button 
                    onClick={() => alert(`Connecting with ${vendor.name} Concierge Desk...`)}
                    className="px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-sans font-medium tracking-wide transition-all flex items-center justify-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}