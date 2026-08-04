'use client';

import React, { useState } from 'react';
import { Clock, CheckCircle, Circle, Calendar, Sparkles, Heart, Plus } from 'lucide-react';
import { TimelineMilestone } from '@/data/mockData';

interface TimelineViewProps {
  timeline: TimelineMilestone[];
  setTimeline: React.Dispatch<React.SetStateAction<TimelineMilestone[]>>;
}

export default function TimelineView({ timeline, setTimeline }: TimelineViewProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Lead-Up' | 'Wedding-Day'>('All');

  // Toggle Milestone Completion
  const toggleMilestone = (id: string) => {
    setTimeline(prev => prev.map(m => 
      m.id === id ? { ...m, completed: !m.completed } : m
    ));
  };

  const filteredMilestones = timeline.filter(m => {
    if (activeFilter === 'Lead-Up') return !m.isWeddingDay;
    if (activeFilter === 'Wedding-Day') return m.isWeddingDay;
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Action */}
      <div className="space-y-1">
        <h2 className="font-serif text-3xl text-stone-900 font-bold">Big Day Run-Sheet</h2>
        <p className="text-xs sm:text-sm text-stone-500 font-sans">
          Chronological milestones leading up to the celebration and the hour-by-hour wedding day schedule.
        </p>
      </div>

      {/* Timeline Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200/60 pb-4">
        <button
          onClick={() => setActiveFilter('All')}
          className={`px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-wide transition-all ${
            activeFilter === 'All'
              ? 'bg-amber-700 text-stone-50 shadow-sm'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200/60'
          }`}
        >
          Full Journey
        </button>
        <button
          onClick={() => setActiveFilter('Lead-Up')}
          className={`px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-wide transition-all ${
            activeFilter === 'Lead-Up'
              ? 'bg-amber-700 text-stone-50 shadow-sm'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200/60'
          }`}
        >
          Lead-Up Milestones
        </button>
        <button
          onClick={() => setActiveFilter('Wedding-Day')}
          className={`px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-wide transition-all ${
            activeFilter === 'Wedding-Day'
              ? 'bg-amber-700 text-stone-50 shadow-sm'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200/60'
          }`}
        >
          Wedding Day Run-Sheet
        </button>
      </div>

      {/* Vertical Timeline Path */}
      <div className="relative max-w-3xl mx-auto py-8">
        {/* Central Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 transform -translate-x-1/2" />

        <div className="space-y-12 relative">
          {filteredMilestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={milestone.id}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 relative ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node Dot */}
                <button
                  onClick={() => toggleMilestone(milestone.id)}
                  className={`absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all ${
                    milestone.completed 
                      ? 'bg-amber-700 text-stone-50 shadow-md ring-4 ring-amber-100' 
                      : 'bg-white text-stone-400 border-2 border-stone-300 hover:border-amber-500'
                  }`}
                  title="Toggle Milestone Status"
                >
                  {milestone.completed ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Circle className="w-4 h-4" />
                  )}
                </button>

                {/* Content Card */}
                <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                  <div className={`bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm hover:shadow-md transition-all space-y-3 ${
                    milestone.completed ? 'border-l-4 border-l-amber-700' : ''
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-sans tracking-widest uppercase text-amber-700 font-semibold">
                        {milestone.timeframe}
                      </span>
                      <span className={`text-[9px] font-sans tracking-wider uppercase px-2 py-0.5 rounded-full ${
                        milestone.isWeddingDay 
                          ? 'bg-amber-50 text-amber-800 border border-amber-100' 
                          : 'bg-stone-100 text-stone-600'
                      }`}>
                        {milestone.isWeddingDay ? 'Wedding Day' : 'Planning Phase'}
                      </span>
                    </div>

                    <h3 className={`font-serif text-base text-stone-900 font-semibold ${
                      milestone.completed ? 'line-through text-stone-400' : ''
                    }`}>
                      {milestone.title}
                    </h3>

                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      {milestone.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => toggleMilestone(milestone.id)}
                        className="text-[10px] font-sans uppercase tracking-wider text-stone-500 hover:text-amber-700 transition-colors"
                      >
                        {milestone.completed ? 'Mark Incomplete' : 'Mark Completed'}
                      </button>
                      {milestone.completed && (
                        <span className="text-[10px] font-sans text-emerald-700 font-medium flex items-center gap-1">
                          <Heart className="w-3 h-3 fill-emerald-700" /> Done
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop alignment */}
                <div className="hidden sm:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}