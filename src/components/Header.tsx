"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, ArrowLeft, Menu, X, Terminal, Users, Sparkles, Send } from "lucide-react";

interface HeaderProps {
  selectedMemberName: string | null;
  onClearMember: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Header({
  selectedMemberName,
  onClearMember,
  onNavigateSection
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (selectedMemberName) {
      onClearMember();
    }
    setMobileMenuOpen(false);
    setTimeout(() => {
      onNavigateSection(sectionId);
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClearMember}
            className="flex items-center gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="WEBSLINGERS Team Portfolio Hub Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-lg text-slate-900 dark:text-white">
                  WEBSLINGERS
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border border-blue-500/20">
                  Hackathon
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-none hidden sm:block">
                Student Developer Portfolio
              </p>
            </div>
          </button>
        </div>

        {/* Current State Indicator or Main Nav */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
          {selectedMemberName ? (
            <div className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400 pl-2">
                Viewing:{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  {selectedMemberName}
                </strong>
              </span>
              <button
                type="button"
                onClick={onClearMember}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Team Hub</span>
                <kbd className="hidden lg:inline-block ml-1 px-1 py-0.2 text-[9px] bg-blue-800/50 rounded text-blue-200">
                  ESC
                </kbd>
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => handleNavClick("team-hub")}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                Team Hub
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("skills-matrix")}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                Skills Matrix
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("concept-projects")}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                Concept Projects
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("contact-section")}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                Contact
              </button>
            </>
          )}
        </nav>

        {/* Right Actions: Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-2">
          {/* Quick Return button if member is active on small screens */}
          {selectedMemberName && (
            <button
              type="button"
              onClick={onClearMember}
              className="md:hidden inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-600 text-white"
              aria-label="Back to Team Hub"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Hub</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-4 space-y-2">
          {selectedMemberName && (
            <div className="pb-2 border-b border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  onClearMember();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Team Hub</span>
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={() => handleNavClick("team-hub")}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5"
          >
            <Users className="w-4 h-4 text-blue-500" />
            <span>Team Hub</span>
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("skills-matrix")}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5"
          >
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span>Skills Matrix</span>
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("concept-projects")}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5"
          >
            <Terminal className="w-4 h-4 text-cyan-500" />
            <span>Concept Projects</span>
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("contact-section")}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5"
          >
            <Send className="w-4 h-4 text-emerald-500" />
            <span>Contact Details</span>
          </button>
        </div>
      )}
    </header>
  );
}
