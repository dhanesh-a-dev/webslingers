"use client";

import React, { useState, useEffect } from "react";
import { TEAM_CONFIG, TeamMember } from "@/config/teamConfig";
import { ArrowUpRight, ArrowDown, Code2 } from "lucide-react";

interface EditorialLandingProps {
  onSelectMember: (memberId: string) => void;
}

export function EditorialLanding({ onSelectMember }: EditorialLandingProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Keyboard shortcut listener: Press 1, 2, 3, or 4 to directly open a member
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  const scrollToTeam = () => {
    const el = document.getElementById("team-squad");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden select-none tech-dots">
      {/* Dynamic ambient background glow responding to hover */}
      <div
        className="pointer-events-none fixed inset-0 transition-opacity duration-700 blur-3xl opacity-20 dark:opacity-25"
        style={{
          background:
            hoveredId === "anushka"
              ? "radial-gradient(circle at 20% 60%, #ec4899 0%, transparent 60%)"
              : hoveredId === "anjali"
              ? "radial-gradient(circle at 40% 60%, #8b5cf6 0%, transparent 60%)"
              : hoveredId === "misheal"
              ? "radial-gradient(circle at 65% 60%, #06b6d4 0%, transparent 60%)"
              : hoveredId === "dhanesh"
              ? "radial-gradient(circle at 85% 60%, #10b981 0%, transparent 60%)"
              : "radial-gradient(circle at 50% 40%, #3b82f6 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      {/* PANE 1: Minimalist Editorial Hero Spanned Across the Viewport */}
      <section className="relative w-full h-[calc(100vh-4rem)] flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Subtle top indicator */}
        <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
          <span>PORTFOLIO COLLECTIVE</span>
          <span>SPRING 2026</span>
        </div>

        {/* Center: Spanned Title and Tagline */}
        <div className="space-y-4 sm:space-y-6 my-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[0.92] uppercase">
            The Collective
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-600 dark:from-white dark:via-slate-200 dark:to-cyan-400">
              Portfolio
            </span>
          </h1>

          <p className="text-xl sm:text-3xl md:text-4xl text-slate-500 dark:text-slate-400 font-light tracking-tight italic">
            &ldquo;a team of different talents&rdquo;
          </p>
        </div>

        {/* Bottom: Scroll Prompt with Arrow */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200/60 dark:border-slate-800/60">
          <button
            type="button"
            onClick={scrollToTeam}
            className="group inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Scroll to explore the 4 people</span>
            <div className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center group-hover:border-slate-900 dark:group-hover:border-white transition-colors">
              <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
            </div>
          </button>

          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
            [ 4 DEVELOPERS • 1 COLLECTIVE ]
          </span>
        </div>
      </section>

      {/* PANE 2: The Four People Showcase */}
      <section
        id="team-squad"
        className="relative w-full min-h-screen flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        {/* Pane 2 Subheader */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-blue-600 dark:text-cyan-400">
              [ THE ROSTER ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mt-1">
              The Four Developers
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 dark:text-slate-500">
            SELECT A PERSON OR PRESS <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-[10px]">1</kbd> — <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-[10px]">4</kbd>
          </div>
        </div>

        {/* 4 Interactive Columns / Cards */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 min-h-[520px]">
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
                    ? "bg-white/95 dark:bg-slate-900/95 border-slate-400/80 dark:border-slate-600 shadow-2xl scale-[1.01] -translate-y-1.5 z-10"
                    : "glass-panel border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 opacity-90 hover:opacity-100"
                }`}
                aria-label={`View ${member.name}'s portfolio`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                  style={{
                    background: member.accent.primary,
                    opacity: isHovered ? 1 : 0.3
                  }}
                  aria-hidden="true"
                />

                {/* Top of Card: Index & Key Number */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {numberLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <span className="opacity-60">KEY:</span>
                    <strong className="font-bold">{index + 1}</strong>
                  </div>
                </div>

                {/* Center of Card: Big Name & Role */}
                <div className="my-8 sm:my-10 space-y-2">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:via-blue-600 group-hover:to-cyan-600 dark:group-hover:from-white dark:group-hover:via-slate-200 dark:group-hover:to-cyan-300 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {member.role}
                  </p>
                </div>

                {/* Bottom of Card: Skills & CTA */}
                <div className="space-y-4 w-full">
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

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Enter Portfolio
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

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 dark:text-slate-500">
          <span>THE COLLECTIVE PORTFOLIO • 2026</span>
          <span>SELECT ANY DEVELOPER TO ENTER PORTFOLIO</span>
        </div>
      </section>
    </div>
  );
}
