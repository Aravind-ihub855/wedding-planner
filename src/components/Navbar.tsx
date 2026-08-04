'use client';

import React, { useState } from 'react';
import { Menu, X, Heart, Calendar, Users, DollarSign, Sparkles, Clock } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Calendar },
    { id: 'guests', label: 'Guest List', icon: Users },
    { id: 'budget', label: 'Budget Planner', icon: DollarSign },
    { id: 'vendors', label: 'Vendors', icon: Sparkles },
    { id: 'timeline', label: 'Timeline', icon: Clock },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-50/95 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => {
              setActiveTab('dashboard');
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200/60 group-hover:bg-amber-100 transition-colors">
              <Heart className="w-5 h-5 text-amber-700 fill-amber-700/10" />
            </div>
            <div>
              <span className="font-serif text-2xl tracking-wide text-stone-900 block">ForeverPlan</span>
              <span className="text-[10px] font-sans tracking-widest uppercase text-amber-700 block -mt-1">Luxury Concierge</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative py-2 text-sm font-sans font-medium tracking-wide transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'text-amber-800 font-semibold' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-700' : 'text-stone-400'}`} />
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-stone-500 font-sans">Wedding Date</p>
              <p className="text-xs font-semibold text-stone-800 font-sans">Dec 18, 2024</p>
            </div>
            <div className="h-8 w-px bg-stone-200" />
            <button 
              onClick={() => setActiveTab('timeline')}
              className="btn-primary bg-amber-700 hover:bg-amber-800 text-stone-50 font-sans text-xs tracking-wider uppercase transition-all duration-300 rounded-full px-5 py-2 shadow-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              View Run-Sheet
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200/60 bg-stone-50/98 py-4 px-4 space-y-2 shadow-inner animate-in fade-in slide-in-from-top-5 duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-sans font-medium transition-all ${
                  isActive 
                    ? 'bg-amber-50 text-amber-900 border-l-4 border-amber-700 pl-3' 
                    : 'text-stone-600 hover:bg-stone-100/50 hover:text-stone-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-700' : 'text-stone-400'}`} />
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between px-4">
            <div>
              <p className="text-[10px] text-stone-500 uppercase tracking-wider">Olivia & Marcus</p>
              <p className="text-xs font-semibold text-stone-800">December 18, 2024</p>
            </div>
            <button 
              onClick={() => {
                setActiveTab('timeline');
                setIsMobileMenuOpen(false);
              }}
              className="bg-amber-700 text-stone-50 text-xs font-sans tracking-wider uppercase rounded-full px-4 py-2"
            >
              Run-Sheet
            </button>
          </div>
        </div>
      )}
    </header>
  );
}