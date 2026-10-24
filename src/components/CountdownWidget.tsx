'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function CountdownWidget() {
  const [timeLeft, setTimeLeft] = useState({ months: 7, days: 14, hours: 9, minutes: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        return { ...prev, minutes: 59, hours: Math.max(0, prev.hours - 1) };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-950 via-stone-900 to-amber-950 text-stone-100 p-8 md:p-12 shadow-xl border border-rose-900/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Calendar className="w-3.5 h-3.5" />
            October 14, 2025
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-stone-50 leading-tight">
            Eleanor & Julian’s <br />
            <span className="italic text-amber-300 font-normal">Grand Wedding Celebration</span>
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-xl flex items-center gap-2">
            <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
            The Plaza Grand Ballroom — Fifth Avenue & Central Park South, New York
          </p>
        </div>

        <div className="lg:col-span-5 grid grid-cols-4 gap-3 text-center">
          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/60 rounded-2xl p-4 shadow-inner">
            <span className="block font-serif text-2xl md:text-4xl font-bold text-amber-300">{timeLeft.months}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-400 mt-1 block font-medium">Months</span>
          </div>
          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/60 rounded-2xl p-4 shadow-inner">
            <span className="block font-serif text-2xl md:text-4xl font-bold text-amber-300">{timeLeft.days}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-400 mt-1 block font-medium">Days</span>
          </div>
          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/60 rounded-2xl p-4 shadow-inner">
            <span className="block font-serif text-2xl md:text-4xl font-bold text-amber-300">{timeLeft.hours}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-400 mt-1 block font-medium">Hours</span>
          </div>
          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/60 rounded-2xl p-4 shadow-inner">
            <span className="block font-serif text-2xl md:text-4xl font-bold text-amber-300">{timeLeft.minutes}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-400 mt-1 block font-medium">Mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}