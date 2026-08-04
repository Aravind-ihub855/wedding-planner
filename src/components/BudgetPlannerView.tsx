'use client';

import React, { useState } from 'react';
import { DollarSign, Plus, Trash2, Check, AlertCircle, TrendingUp, CreditCard, PieChart } from 'lucide-react';
import { Expense } from '@/data/mockData';

interface BudgetPlannerViewProps {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

export default function BudgetPlannerView({ expenses, setExpenses }: BudgetPlannerViewProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newExpense, setNewExpense] = useState({
    name: '',
    category: 'Venue' as Expense['category'],
    estimated: '',
    actual: '',
    paid: '',
    status: 'Unpaid' as Expense['status']
  });

  // Financial Calculations
  const totalEstimated = expenses.reduce((sum, item) => sum + item.estimated, 0);
  const totalActual = expenses.reduce((sum, item) => sum + item.actual, 0);
  const totalPaid = expenses.reduce((sum, item) => sum + item.paid, 0);
  const totalRemaining = totalActual - totalPaid;

  // Progress Bar Percentages
  const overallBudgetLimit = 50000; // Luxury Wedding Cap
  const spentPercentage = Math.min(Math.round((totalActual / overallBudgetLimit) * 100), 100);
  const paidPercentage = totalActual > 0 ? Math.min(Math.round((totalPaid / totalActual) * 100), 100) : 0;

  // Add Expense Handler
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.name.trim()) return;

    const estVal = parseFloat(newExpense.estimated) || 0;
    const actVal = parseFloat(newExpense.actual) || 0;
    const paidVal = parseFloat(newExpense.paid) || 0;

    const expenseToAdd: Expense = {
      id: `e-${Date.now()}`,
      name: newExpense.name,
      category: newExpense.category,
      estimated: estVal,
      actual: actVal,
      paid: paidVal,
      status: newExpense.status
    };

    setExpenses(prev => [...prev, expenseToAdd]);
    setNewExpense({
      name: '',
      category: 'Venue',
      estimated: '',
      actual: '',
      paid: '',
      status: 'Unpaid'
    });
    setShowAddForm(false);
  };

  // Delete Expense Handler
  const handleDeleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  // Toggle Status directly
  const toggleStatus = (id: string, currentStatus: Expense['status']) => {
    const nextStatusMap: Record<Expense['status'], Expense['status']> = {
      Unpaid: 'Deposit Paid',
      'Deposit Paid': 'Paid',
      Paid: 'Unpaid'
    };
    const nextStatus = nextStatusMap[currentStatus];

    setExpenses(prev => prev.map(exp => {
      if (exp.id === id) {
        // Automatically adjust paid amount for convenience
        let updatedPaid = exp.paid;
        if (nextStatus === 'Paid') updatedPaid = exp.actual;
        if (nextStatus === 'Unpaid') updatedPaid = 0;
        if (nextStatus === 'Deposit Paid') updatedPaid = Math.round(exp.actual * 0.5);

        return { ...exp, status: nextStatus, paid: updatedPaid };
      }
      return exp;
    }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-serif text-3xl text-stone-900 font-bold">Financial Sanctuary</h2>
          <p className="text-xs sm:text-sm text-stone-500 font-sans">
            Track your luxury wedding investments, manage deposits, and monitor payment schedules.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary bg-amber-700 hover:bg-amber-800 text-stone-50 font-sans text-xs tracking-wider uppercase transition-all duration-300 rounded-full px-6 py-3 shadow-sm flex items-center justify-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          {showAddForm ? 'Close Form' : 'Add Expense'}
        </button>
      </div>

      {/* Financial Progress Dashboard */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metric 1: Estimated vs Actual */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-sans tracking-wider uppercase text-stone-500">Total Investment</span>
            <TrendingUp className="w-4 h-4 text-amber-700" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-serif text-stone-900 font-bold">${totalActual.toLocaleString()}</p>
            <p className="text-xs text-stone-500 font-sans">
              Estimated: <span className="font-semibold">${totalEstimated.toLocaleString()}</span>
            </p>
          </div>
          <div className="pt-2">
            <div className="flex justify-between text-[10px] font-sans text-stone-500 mb-1">
              <span>Of $50,000 Luxury Cap</span>
              <span>{spentPercentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-700" style={{ width: `${spentPercentage}%` }} />
            </div>
          </div>
        </div>

        {/* Metric 2: Paid to Date */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-sans tracking-wider uppercase text-stone-500">Paid to Date</span>
            <CreditCard className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-serif text-emerald-700 font-bold">${totalPaid.toLocaleString()}</p>
            <p className="text-xs text-stone-500 font-sans">
              Completed transactions & deposits
            </p>
          </div>
          <div className="pt-2">
            <div className="flex justify-between text-[10px] font-sans text-stone-500 mb-1">
              <span>Of Actual Spent</span>
              <span>{paidPercentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600" style={{ width: `${paidPercentage}%` }} />
            </div>
          </div>
        </div>

        {/* Metric 3: Remaining Balance */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-sans tracking-wider uppercase text-stone-500">Remaining Balance</span>
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-serif text-stone-900 font-bold">${totalRemaining.toLocaleString()}</p>
            <p className="text-xs text-stone-500 font-sans">
              Awaiting final vendor sign-offs
            </p>
          </div>
          <div className="pt-2">
            <span className="text-[10px] font-sans text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
              Next payment due Dec 1, 2024
            </span>
          </div>
        </div>
      </section>

      {/* Add Expense Form (Collapsible) */}
      {showAddForm && (
        <form onSubmit={handleAddExpense} className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-md space-y-6 animate-in slide-in-from-top-5 duration-300">
          <h3 className="font-serif text-lg text-stone-900 font-semibold border-b border-stone-100 pb-3">
            Record New Wedding Expense
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Item Name */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Expense Name / Item
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Champagne Tower"
                value={newExpense.name}
                onChange={e => setNewExpense(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Category
              </label>
              <select
                value={newExpense.category}
                onChange={e => setNewExpense(prev => ({ ...prev, category: e.target.value as Expense['category'] }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans bg-white"
              >
                <option value="Venue">Venue</option>
                <option value="Catering">Catering</option>
                <option value="Attire">Attire</option>
                <option value="Production">Production</option>
                <option value="Florist & Decor">Florist & Decor</option>
                <option value="Music & Entertainment">Music & Entertainment</option>
              </select>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Payment Status
              </label>
              <select
                value={newExpense.status}
                onChange={e => setNewExpense(prev => ({ ...prev, status: e.target.value as Expense['status'] }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans bg-white"
              >
                <option value="Unpaid">Unpaid</option>
                <option value="Deposit Paid">Deposit Paid</option>
                <option value="Paid">Fully Paid</option>
              </select>
            </div>

            {/* Estimated Cost */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Estimated Cost ($)
              </label>
              <input
                type="number"
                placeholder="e.g. 2500"
                value={newExpense.estimated}
                onChange={e => setNewExpense(prev => ({ ...prev, estimated: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans"
              />
            </div>

            {/* Actual Cost */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Actual Cost ($)
              </label>
              <input
                type="number"
                placeholder="e.g. 2700"
                value={newExpense.actual}
                onChange={e => setNewExpense(prev => ({ ...prev, actual: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans"
              />
            </div>

            {/* Paid Amount */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold text-stone-700 uppercase tracking-wider block">
                Amount Paid ($)
              </label>
              <input
                type="number"
                placeholder="e.g. 1000"
                value={newExpense.paid}
                onChange={e => setNewExpense(prev => ({ ...prev, paid: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 text-stone-800 text-sm font-sans"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-stone-100">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-5 py-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-sans tracking-wider uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-amber-700 hover:bg-amber-800 text-stone-50 text-xs font-sans tracking-wider uppercase rounded-full px-6 py-2 shadow-sm"
            >
              Save Expense
            </button>
          </div>
        </form>
      )}

      {/* Expense Ledger Table */}
      <div className="bg-white rounded-2xl border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <h3 className="font-serif text-lg text-stone-900 font-semibold">Interactive Expense Ledger</h3>
          <span className="text-xs font-sans text-stone-500">
            Click status badge to toggle payment phase
          </span>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="bg-stone-50/70 border-b border-stone-200/60 text-[10px] font-sans tracking-widest uppercase text-stone-500">
                <th className="py-4 px-6">Expense Item</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6 text-right">Estimated</th>
                <th className="py-4 px-6 text-right">Actual</th>
                <th className="py-4 px-6 text-right">Paid</th>
                <th className="py-4 px-6 text-center">Status</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs font-sans text-stone-700">
              {expenses.map((item) => {
                // Status badge styling
                const statusStyles = {
                  Paid: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  'Deposit Paid': 'bg-amber-50 text-amber-700 border-amber-200',
                  Unpaid: 'bg-stone-100 text-stone-600 border-stone-200'
                }[item.status];

                return (
                  <tr key={item.id} className="hover:bg-stone-50/40 transition-colors">
                    <td className="py-4 px-6 font-medium text-stone-900">{item.name}</td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wider">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-mono">${item.estimated.toLocaleString()}</td>
                    <td className="py-4 px-6 text-right font-mono font-semibold text-stone-900">
                      ${item.actual.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-right font-mono text-emerald-700">
                      ${item.paid.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => toggleStatus(item.id, item.status)}
                        className={`px-3 py-1 rounded-full border text-[10px] uppercase tracking-wider font-semibold transition-all hover:scale-105 ${statusStyles}`}
                        title="Click to cycle status"
                      >
                        {item.status}
                      </button>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleDeleteExpense(item.id)}
                        className="p-1.5 rounded-full text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Delete Expense"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}