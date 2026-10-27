"use client";

import React from "react";
import { TEAM_CONFIG } from "@/config/teamConfig";
import { Terminal, ShieldCheck } from "lucide-react";

interface FooterProps {
  onSelectMember: (memberId: string) => void;
  onClearMember: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Footer({
  onSelectMember,
  onClearMember,
  onNavigateSection
}: FooterProps) {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                {TEAM_CONFIG.teamName}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border border-blue-500/20">
                Hackathon Squad
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              {TEAM_CONFIG.mission}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ethical Student Portfolio: zero invented awards or simulated claims</span>
            </div>
          </div>

          {/* Quick Member Portfolios */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Team Member Portfolios
            </h4>
            <ul className="space-y-1.5 text-xs">
              {TEAM_CONFIG.members.map((m) => (
                <li key={m.id}>
                  <button
                    type="button"
                    onClick={() => onSelectMember(m.id)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span>{m.name} ({m.skills.join(", ")})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Site Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onClearMember}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Interactive Team Hub
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection("skills-matrix")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skill Distribution Matrix
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection("concept-projects")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Demo & Concept Samples
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection("contact-section")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Team Contact Placeholders
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Team WEBSLINGERS. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-2">
            <span>Accessible keyboard nav</span>
            <span>•</span>
            <span>Prefers-reduced-motion ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
