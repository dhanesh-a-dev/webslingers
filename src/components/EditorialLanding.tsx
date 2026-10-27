"use client";

import React, { useState, useEffect } from "react";
import { TEAM_CONFIG, TeamMember } from "@/config/teamConfig";
import { ArrowUpRight, Code2 } from "lucide-react";

interface EditorialLandingProps {
  onSelectMember: (memberId: string) => void;
}

export function EditorialLanding({ onSelectMember }: EditorialLandingProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Keyboard shortcut listener: Press 1, 2, 3, or 4 to directly open a member
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "1" && TEAM_CONFIG.members[0]) {
        onSelectMember(TEAM_CONFIG.members[0].id);
      } else if (e.key === "2" && TEAM_CONFIG.members[1]) {
        onSelectMember(TEAM_CONFIG.members[1].id);
      } else if (e.key === "3" && TEAM_CONFIG.members[2]) {
        onSelectMember(TEAM_CONFIG.members[2].id);
      } else if (e.key === "4" && TEAM_CONFIG.members[3]) {
        onSelectMember(TEAM_CONFIG.members[3].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSelectMember]);

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden tech-dots select-none">
      {/* Dynamic ambient background glow that responds to hover */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 blur-3xl opacity-20 dark:opacity-25"
        style={{
          background:
            hoveredId === "anushka"
              ? "radial-gradient(circle at 15% 50%, #ec4899 0%, transparent 60%)"
              : hoveredId === "anjali"
              ? "radial-gradient(circle at 40% 50%, #8b5cf6 0%, transparent 60%)"
              : hoveredId === "misheal"
              ? "radial-gradient(circle at 65% 50%, #06b6d4 0%, transparent 60%)"
              : hoveredId === "dhanesh"
              ? "radial-gradient(circle at 90% 50%, #10b981 0%, transparent 60%)"
              : "radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      {/* Main 4-Name Stage */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col justify-center">
        {/* Subtle sub-heading */}
        <div className="flex items-center justify-between pb-4 sm:pb-6 text-xs text-slate-500 dark:text-slate-400 font-mono tracking-wider border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>STUDENT DEVELOPER COLLECTIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>[ KEYS 1 — 4 FOR QUICK SELECT ]</span>
          </div>
        </div>

        {/* 4 Interactive Columns (Desktop) / Rows (Mobile) */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 h-full min-h-[500px] md:min-h-[560px]">
          {TEAM_CONFIG.members.map((member: TeamMember, index: number) => {
            const isHovered = hoveredId === member.id;
            const numberLabel = `0${index + 1}`;

            return (
              <button
                key={member.id}
                type="button"
                onClick={() => onSelectMember(member.id)}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(member.id)}
                onBlur={() => setHoveredId(null)}
                className={`group relative flex flex-col justify-between text-left p-6 sm:p-7 rounded-3xl transition-all duration-500 overflow-hidden border ${
                  isHovered
                    ? "bg-white/90 dark:bg-slate-900/90 border-slate-400/60 dark:border-slate-600 shadow-2xl scale-[1.01] -translate-y-1.5 z-10"
                    : "glass-panel border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 opacity-90 hover:opacity-100"
                }`}
                aria-label={`View ${member.name}'s portfolio`}
              >
                {/* Accent glow line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                  style={{
                    background: member.accent.primary,
                    opacity: isHovered ? 1 : 0.3
                  }}
                  aria-hidden="true"
                />

                {/* Top of Card: Index & Quick Key hint */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {numberLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <span className="opacity-60">KEY:</span>
                    <strong className="font-bold">{index + 1}</strong>
                  </div>
                </div>

                {/* Center of Card: Massive Name & Role */}
                <div className="my-8 sm:my-10 space-y-2">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:via-blue-600 group-hover:to-cyan-600 dark:group-hover:from-white dark:group-hover:via-slate-200 dark:group-hover:to-cyan-300 transition-all duration-300">
                    {member.name}
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {member.role}
                  </p>
                </div>

                {/* Bottom of Card: Skills & Interactive CTA */}
                <div className="space-y-4 w-full">
                  {/* Verified Skills */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      <Code2 className="w-3 h-3 text-blue-500" />
                      <span>Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link with Arrow */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Explore Portfolio
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Minimal Editorial Footer */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-400 dark:text-slate-500 border-t border-slate-200/60 dark:border-slate-800/60">
        <div>TEAM WEBSLINGERS • STUDENT HACKATHON DEVELOPERS</div>
        <div>CLICK ANY NAME TO ENTER THEIR PORTFOLIO</div>
      </div>
    </div>
  );
}
