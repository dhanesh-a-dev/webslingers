"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, ArrowLeft } from "lucide-react";

interface HeaderProps {
  selectedMemberName: string | null;
  onClearMember: () => void;
}

export function Header({
  selectedMemberName,
  onClearMember
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onClearMember}
            className="flex items-center gap-2 text-left group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="The Collective Portfolio Home"
          >
            <div className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-mono text-xs font-black shadow-sm group-hover:scale-105 transition-transform">
              CP
            </div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-800 dark:text-slate-200">
              The Collective
            </span>
          </button>
        </div>

        {/* Center: When viewing a member, show Return button */}
        {selectedMemberName ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClearMember}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold text-slate-900 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to The Collective</span>
              <kbd className="hidden md:inline-block ml-1 px-1.5 py-0.2 text-[9px] bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded font-mono">
                ESC
              </kbd>
            </button>
          </div>
        ) : null}

        {/* Right: Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
