'use client';

import React from 'react';
import { Heart, Instagram, Pin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-100 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Statement */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-950 flex items-center justify-center border border-amber-800/60">
                <Heart className="w-4 h-4 text-amber-400 fill-amber-400/10" />
              </div>
              <span className="font-serif text-xl tracking-wide text-white">ForeverPlan</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed font-sans">
              Crafting timeless memories and seamless celebrations. A premium digital wedding concierge designed for the modern couple who values elegance, precision, and luxury.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-sans tracking-widest uppercase text-amber-400 block">Countdown to Forever</span>
              <span className="text-sm font-serif text-stone-200">Olivia & Marcus • Dec 18, 2024</span>
            </div>
          </div>

          {/* Column 2: Planning Modules */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-amber-400 uppercase mb-4">Planning Modules</h4>
            <ul className="space-y-2 text-xs font-sans text-stone-400">
              <li>
                <button onClick={() => setActiveTab('dashboard')} className="hover:text-white transition-colors">
                  Command Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('guests')} className="hover:text-white transition-colors">
                  RSVP & Guest Hub
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('budget')} className="hover:text-white transition-colors">
                  Financial Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('vendors')} className="hover:text-white transition-colors">
                  Curated Creative Team
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('timeline')} className="hover:text-white transition-colors">
                  Big Day Run-Sheet
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Curated Inspiration */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-amber-400 uppercase mb-4">Curated Inspiration</h4>
            <ul className="space-y-2 text-xs font-sans text-stone-400">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors block">
                  Chateau Wedding Trends 2025
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors block">
                  Michelin-Starred Menu Curation
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors block">
                  Bespoke Floral Installation Guide
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition-colors block">
                  Timeless Bridal Gown Silhouettes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-amber-400 uppercase mb-4">Concierge Support</h4>
            <ul className="space-y-3 text-xs font-sans text-stone-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>concierge@foreverplan.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+1 (800) 903-PLAN</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Mayfair, London & Fifth Ave, NY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 font-sans">
            © {new Date().getFullYear()} ForeverPlan Concierge. All rights reserved. Designed for elite celebrations.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-all">
              <Pin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}