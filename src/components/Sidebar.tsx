'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Users, DollarSign, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/', icon: Heart },
    { name: 'Guest List', href: '/guests', icon: Users },
    { name: 'Budget Planner', href: '/budget', icon: DollarSign },
    { name: 'Vendors', href: '/vendors', icon: Sparkles },
    { name: 'Timeline', href: '/timeline', icon: Clock },
  ];

  return (
    <aside className="w-64 bg-stone-100/60 border-r border-stone-200/80 p-6 hidden lg:flex flex-col justify-between min-h-[calc(100vh-80px)]">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
            Atelier Navigation
          </h2>
          <nav className="space-y-1.5">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-rose-900 text-stone-50 shadow-sm'
                      : 'text-stone-700 hover:bg-rose-100/50 hover:text-stone-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-rose-800'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-700" />
            <span>Concierge Active</span>
          </div>
          <p className="text-xs text-amber-800/80 leading-relaxed">
            Your dedicated wedding planner is available for live consultation 24/7.
          </p>
        </div>
      </div>

      <div className="pt-6 border-t border-stone-200 text-xs text-stone-500 text-center">
        ForeverPlan Luxury v2.5
      </div>
    </aside>
  );
}