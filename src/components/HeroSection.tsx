"use client";

import React from "react";
import { TEAM_CONFIG } from "@/config/teamConfig";
import { Zap, Code2, Users, Layers, ShieldCheck, Filter } from "lucide-react";

interface HeroSectionProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

export function HeroSection({ selectedSkill, onSelectSkill }: HeroSectionProps) {
  const allUniqueSkills = [
    "Python",
    "JavaScript",
    "C++",
    "Java",
    "HTML",
    "CSS"
  ];

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid">
      {/* Background radial gradient glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-400/15 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto text-center space-y-6">
        {/* Status Pills */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Hackathon Ready Squad
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border border-blue-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Student Developer Portfolios
          </span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Meet Team{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              {TEAM_CONFIG.teamName}
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {TEAM_CONFIG.tagline}
          </p>
        </div>

        {/* Mission */}
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {TEAM_CONFIG.mission}
        </p>

        {/* Metric Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto">
          <div className="glass-panel p-3.5 rounded-2xl text-center">
            <div className="text-2xl font-black text-slate-900 dark:text-white">4</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 mt-0.5">
              <Users className="w-3.5 h-3.5 text-blue-500" />
              Student Coders
            </div>
          </div>
          <div className="glass-panel p-3.5 rounded-2xl text-center">
            <div className="text-2xl font-black text-slate-900 dark:text-white">5+</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 mt-0.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-500" />
              Core Tech Skills
            </div>
          </div>
          <div className="glass-panel p-3.5 rounded-2xl text-center">
            <div className="text-2xl font-black text-slate-900 dark:text-white">8</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 mt-0.5">
              <Layers className="w-3.5 h-3.5 text-cyan-500" />
              Concept Samples
            </div>
          </div>
          <div className="glass-panel p-3.5 rounded-2xl text-center">
            <div className="text-2xl font-black text-slate-900 dark:text-white">100%</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 mt-0.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Python Coverage
            </div>
          </div>
        </div>

        {/* Interactive Filter Bar */}
        <div className="pt-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl glass-panel">
            <div className="flex items-center gap-1.5 px-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Filter className="w-3.5 h-3.5 text-blue-500" />
              <span>Filter by skill:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <button
                type="button"
                onClick={() => onSelectSkill(null)}
                className={`px-3 py-1 text-xs font-semibold rounded-xl transition-all ${
                  selectedSkill === null
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/80"
                }`}
              >
                All Members (4)
              </button>
              {allUniqueSkills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => onSelectSkill(selectedSkill === skill ? null : skill)}
                  className={`px-3 py-1 text-xs font-semibold rounded-xl transition-all ${
                    selectedSkill === skill
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30 ring-2 ring-blue-400/50"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/80"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
