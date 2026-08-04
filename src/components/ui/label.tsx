import * as React from "react"
import { cn } from "@/lib/utils"

export function Label({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-900 dark:text-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
