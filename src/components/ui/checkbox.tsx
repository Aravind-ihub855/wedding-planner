"use client"

import * as React from "react"
import { Check } from 'lucide-react'
import { cn } from "@/lib/utils"

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({ checked = false, onCheckedChange, className }: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={() => onCheckedChange && onCheckedChange(!checked)}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center",
        checked && "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900",
        className
      )}
    >
      {checked && <Check className="h-3 w-3" />}
    </button>
  );
}

export default Checkbox;
