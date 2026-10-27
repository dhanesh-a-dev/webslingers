"use client";

import React from "react";
import { TEAM_CONFIG } from "@/config/teamConfig";
import { CheckCircle2, ShieldCheck, Zap, Sparkles, Layers, Cpu, Globe } from "lucide-react";

interface TeamMatrixSectionProps {
  onSelectMember: (memberId: string) => void;
}

export function TeamMatrixSection({ onSelectMember }: TeamMatrixSectionProps) {
  const capabilities = [
    {
      domain: "Responsive Web & UI/UX Design",
      tech: "HTML5, CSS3, Modern Layouts",
      leadDevelopers: ["Anushka", "Dhanesh"],
      description: "Crafting polished, accessible, and responsive user interfaces that stand out during judging demos.",
      icon: Globe
    },
    {
      domain: "Interactive Frontend Scripting",
      tech: "JavaScript, DOM APIs, Dynamic State",
      leadDevelopers: ["Misheal", "Dhanesh"],
      description: "Connecting user actions to dynamic interfaces, real-time feedback loops, and client-side logic.",
      icon: Layers
    },
    {
      domain: "Systems Logic & Algorithmic Problem Solving",
      tech: "C++, Java, OOP Architecture",
      leadDevelopers: ["Anjali", "Misheal"],
      description: "High-performance computational modules, data structure optimization, and structured class architectures.",
      icon: Cpu
    },
    {
      domain: "Rapid Automation & Backend Scripting",
      tech: "Python (100% Squad Coverage)",
      leadDevelopers: ["Anushka", "Anjali", "Misheal", "Dhanesh"],
      description: "Universal team language for fast scripting, mock APIs, data parsing, and AI/hackathon model integration.",
      icon: Zap
    }
  ];

  return (
    <section id="skills-matrix" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400 border border-violet-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Hackathon Team Collaboration</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Skill Distribution & Synergy Matrix
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          How our complementary skills come together to form an agile, end-to-end hackathon prototype team.
        </p>
      </div>

      {/* Grid of 4 Domain Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-6 rounded-3xl space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {cap.domain}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {cap.tech}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {cap.description}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Team Members in this Domain
                </div>
                <div className="flex flex-wrap gap-2">
                  {cap.leadDevelopers.map((name) => {
                    const memberObj = TEAM_CONFIG.members.find((m) => m.name === name);
                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => memberObj && onSelectMember(memberObj.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
                        title={`View ${name}'s portfolio`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Summary Pill Bar */}
      <div className="mt-8 p-4 rounded-2xl glass-panel text-center text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-center gap-4">
        <span className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          Strict student transparency: no exaggerated commercial claims
        </span>
        <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
        <span>
          Central configuration maintained in <code className="font-mono text-[11px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">src/config/teamConfig.ts</code>
        </span>
      </div>
    </section>
  );
}
