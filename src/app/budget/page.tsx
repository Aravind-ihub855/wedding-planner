'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ExpenseModal from '@/components/ExpenseModal';
import { MOCK_BUDGET, BudgetItem } from '@/data/mockData';
import { DollarSign, Plus, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function BudgetPage() {
  const [budget, setBudget] = useState<BudgetItem[]>(MOCK_BUDGET);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalAllocated = budget.reduce((acc, item) => acc + item.allocated, 0);
  const totalSpent = budget.reduce((acc, item) => acc + item.spent, 0);
  const remainingBalance = totalAllocated - totalSpent;
  const paymentProgress = Math.round((totalSpent / totalAllocated) * 100);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
      <Navbar />

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">Financial Atelier & Budget</h1>
              <p className="text-stone-600 text-sm mt-1">Track allocations, vendor invoices, and payment schedules for the celebration.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-stone-900 text-stone-50 hover:bg-stone-800 transition-all px-6 py-2.5 rounded-full shadow-sm font-medium text-sm tracking-wide flex items-center gap-2 w-fit"
            >
              <Plus className="w-4 h-4" />
              <span>Add Expense</span>
            </button>
          </div>

          {/* Financial Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Total Allocated</span>
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-stone-900">${totalAllocated.toLocaleString()}</span>
                <span className="text-xs text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full font-semibold">Budget</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Total Spent</span>
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-rose-900">${totalSpent.toLocaleString()}</span>
                <span className="text-xs text-rose-800 bg-rose-50 px-2 py-0.5 rounded-full font-semibold">{paymentProgress}% Paid</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Remaining Balance</span>
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-amber-700">${remainingBalance.toLocaleString()}</span>
                <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-semibold">Reserve</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Payment Progress</span>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex-1 h-3 rounded-full bg-stone-100 overflow-hidden">
                  <div className="h-full bg-rose-900 rounded-full" style={{ width: `${paymentProgress}%` }} />
                </div>
                <span className="font-serif font-bold text-sm text-stone-900">{paymentProgress}%</span>
              </div>
            </div>
          </div>

          {/* Itemized Expense Table */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-stone-200">
              <h3 className="font-serif text-xl font-bold text-stone-900">Itemized Atelier Expenses</h3>
              <p className="text-xs text-stone-500">Detailed breakdown across venue, catering, and attire</p>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-stone-50 text-stone-500 uppercase text-[10px] tracking-wider border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Expense Item</th>
                    <th className="px-6 py-4">Allocated</th>
                    <th className="px-6 py-4">Spent</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {budget.map((item) => {
                    const isPaid = item.status === 'Paid';
                    const isPartial = item.status === 'Partial';
                    return (
                      <tr key={item.id} className="hover:bg-stone-50/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-rose-900">{item.category}</td>
                        <td className="px-6 py-4 font-medium text-stone-900">{item.item}</td>
                        <td className="px-6 py-4 text-stone-700">${item.allocated.toLocaleString()}</td>
                        <td className="px-6 py-4 font-bold text-stone-900">${item.spent.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                            isPaid ? 'bg-emerald-50 text-emerald-700' : isPartial ? 'bg-amber-50 text-amber-700' : 'bg-stone-100 text-stone-700'
                          }`}>
                            {isPaid && <CheckCircle2 className="w-3.5 h-3.5" />}
                            {isPartial && <Clock className="w-3.5 h-3.5" />}
                            {!isPaid && !isPartial && <AlertCircle className="w-3.5 h-3.5" />}
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>

      <ExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddExpense={(e) => setBudget([e, ...budget])}
      />
    </div>
  );
}