'use client';

import React from 'react';
import { X, Sparkles, MapPin, Star, Phone, Mail, CheckCircle } from 'lucide-react';
import { VendorItem } from '@/data/mockData';

interface VendorModalProps {
  vendor: VendorItem | null;
  onClose: () => void;
}

export default function VendorModal({ vendor, onClose }: VendorModalProps) {
  if (!vendor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      <div className="bg-stone-50 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200">
        <div className="relative h-56 w-full">
          <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/60 text-stone-100 hover:bg-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-amber-500/90 text-stone-950 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              {vendor.category}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-50">{vendor.name}</h2>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              <span className="font-bold text-stone-900">{vendor.rating}</span>
              <span className="text-stone-500 text-sm">({vendor.reviewsCount} atelier reviews)</span>
            </div>
            <span className="font-serif text-lg font-bold text-rose-900">{vendor.priceRange}</span>
          </div>

          <div className="space-y-3 text-stone-700 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-rose-800" />
              <span>Location: {vendor.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Verified Luxury Partner for ForeverPlan Atelier</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200/60 flex items-center justify-between">
            <div>
              <p className="font-serif font-bold text-rose-900 text-sm">Direct Concierge Booking</p>
              <p className="text-xs text-rose-800/80">Schedule a private tasting or walk-through appointment.</p>
            </div>
            <button
              onClick={() => {
                alert(`Inquiry sent to ${vendor.name}! Our concierge will contact you within 2 hours.`);
                onClose();
              }}
              className="bg-rose-900 text-stone-50 hover:bg-rose-800 transition-all px-5 py-2.5 rounded-full font-medium text-xs tracking-wide shadow-sm"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}