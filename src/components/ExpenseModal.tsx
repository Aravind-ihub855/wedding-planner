'use client';

import React, { useState } from 'react';
import { X, DollarSign } from 'lucide-react';
import { BudgetItem } from '@/data/mockData';

interface ExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddExpense: (item: BudgetItem) => void;
}

export default function ExpenseModal({ isOpen, onClose, onAddExpense }: ExpenseModalProps) {
  const [category, setCategory] = useState('Venue');
  const [item, setItem] = useState('');
  const [allocated, setAllocated] = useState('');
  const [spent, setSpent] = useState('');
  const [status, setStatus] = useState<BudgetItem['status']>('Pending');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!item.trim() || !allocated) return;

    const newExpense: BudgetItem = {
      id: 'b_' + Date.now(),
      category,
      item,
      allocated: parseFloat(allocated) || 0,
      spent: parseFloat(spent) || 0,
      status,
    };

    onAddExpense(newExpense);
    setItem('');
    setAllocated('');
    setSpent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      <div className="bg-stone-50 rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Add Budget Expense</h3>
              <p className="text-xs text-stone-500">Log atelier allocations and vendor payments</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-stone-500 hover:bg-stone-200/60 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              >
                <option value="Venue">Venue</option>
                <option value="Catering">Catering</option>
                <option value="Photography">Photography</option>
                <option value="Florals">Florals</option>
                <option value="Music">Music</option>
                <option value="Attire">Attire</option>
                <option value="Stationery">Stationery</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Payment Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as BudgetItem['status'])}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              >
                <option value="Paid">Paid</option>
                <option value="Partial">Partial</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
              Expense Item Title *
            </label>
            <input
              type="text"
              required
              value={item}
              onChange={(e) => setItem(e.target.value)}
              placeholder="e.g. Bespoke Invitation Suite"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Allocated Budget ($)
              </label>
              <input
                type="number"
                required
                value={allocated}
                onChange={(e) => setAllocated(e.target.value)}
                placeholder="5000"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Amount Spent ($)
              </label>
              <input
                type="number"
                value={spent}
                onChange={(e) => setSpent(e.target.value)}
                placeholder="2500"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-6 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-stone-600 hover:bg-stone-200/60 font-medium text-sm transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-stone-900 text-stone-50 hover:bg-stone-800 transition-all px-6 py-2.5 rounded-full shadow-sm font-medium text-sm tracking-wide"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}