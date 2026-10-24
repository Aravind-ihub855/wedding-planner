'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Users, DollarSign, Calendar, Clock, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/', icon: Heart },
    { name: 'Guest List', href: '/guests', icon: Users },
    { name: 'Budget Planner', href: '/budget', icon: DollarSign },
    { name: 'Vendors', href: '/vendors', icon: Sparkles },
    { name: 'Timeline', href: '/timeline', icon: Clock },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-rose-900 text-stone-50 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-stone-50/20" />
            </div>
            <div>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-stone-900 block leading-tight">
                ForeverPlan
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-700 font-semibold block">
                Luxury Wedding Atelier
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-rose-900 text-stone-50 shadow-sm'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-rose-100/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-rose-800'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action / User */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-stone-200/60 border border-stone-300/40">
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-medium text-stone-800">Oct 14, 2025 · The Plaza</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-amber-700 text-white font-serif font-bold text-sm flex items-center justify-center shadow-inner">
              EA
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-stone-800 hover:bg-stone-200/60 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${
                  isActive
                    ? 'bg-rose-900 text-stone-50'
                    : 'text-stone-700 hover:bg-rose-100/40'
                }`}
              >
                <Icon className="w-5 h-5 text-amber-600" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between px-2">
            <span className="text-xs text-stone-600 font-medium">October 14, 2025</span>
            <span className="text-xs font-serif text-rose-900 font-bold">The Plaza Grand Ballroom</span>
          </div>
        </div>
      )}
    </header>
  );
}