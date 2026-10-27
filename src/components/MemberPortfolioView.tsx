"use client";

import React, { useEffect } from "react";
import { TeamMember, SampleProject } from "@/config/teamConfig";
import { PlaceholderBadge } from "@/components/PlaceholderNotice";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Code2,
  Sparkles,
  Edit3,
  Layers,
  Info,
  FileCode2,
  AlertCircle
} from "lucide-react";

interface MemberPortfolioViewProps {
  member: TeamMember;
  allMembers: TeamMember[];
  onBackToHub: () => void;
  onSelectMember: (memberId: string) => void;
}

export function MemberPortfolioView({
  member,
  allMembers,
  onBackToHub,
  onSelectMember
}: MemberPortfolioViewProps) {
  // Support ESC key to return to team hub
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onBackToHub();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBackToHub]);

  // Current index for next/prev navigation
  const currentIndex = allMembers.findIndex((m) => m.id === member.id);
  const prevMember = allMembers[(currentIndex - 1 + allMembers.length) % allMembers.length];
  const nextMember = allMembers[(currentIndex + 1) % allMembers.length];

  const initials = member.name.substring(0, 2).toUpperCase();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Top Navigation Bar: Return to Team Hub + Teammate Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all border border-slate-200 dark:border-slate-700 focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Team Hub</span>
          <kbd className="hidden sm:inline-block ml-2 px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded font-mono">
            ESC
          </kbd>
        </button>

        {/* Previous / Next Switcher */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelectMember(prevMember.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            title={`View ${prevMember.name}'s portfolio`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Prev:</span>
            <span>{prevMember.name}</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectMember(nextMember.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            title={`View ${nextMember.name}'s portfolio`}
          >
            <span className="hidden sm:inline">Next:</span>
            <span>{nextMember.name}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Profile Header Section */}
      <div className="mt-8 glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: member.accent.primary }}
          aria-hidden="true"
        />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div
              className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${member.accent.gradient} flex items-center justify-center text-white font-black text-2xl shadow-lg`}
            >
              {initials}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  {member.name}
                </h1>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {member.role}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Team WEBSLINGERS
                </span>
              </div>
              <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
                {member.headline}
              </p>
            </div>
          </div>

          {/* Social / Contact Links */}
          <div className="flex flex-col sm:items-end gap-2 w-full md:w-auto">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Member Links
            </div>
            <div className="flex flex-wrap gap-2">
              <PlaceholderBadge label="GitHub" value={member.socialLinks.github} type="github" />
              <PlaceholderBadge label="LinkedIn" value={member.socialLinks.linkedin} type="linkedin" />
              <PlaceholderBadge label="Email" value={member.socialLinks.email} type="email" />
            </div>
          </div>
        </div>

        {/* Supplied Skills Matrix */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <Code2 className="w-4 h-4 text-blue-500" />
            <span>Supplied Technical Skills</span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono">
              Verified
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl border ${member.accent.pillBg} ${member.accent.pillBorder} ${member.accent.pillText}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Two Column Layout: Editable Bio & Editable Suggested Interests */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editable Short Bio */}
        <div className="glass-panel p-6 rounded-3xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <FileCode2 className="w-4 h-4 text-blue-500" />
              <span>Introduction</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              <Edit3 className="w-2.5 h-2.5" />
              Editable Suggestion
            </span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {member.editableBio.intro}
          </p>

          <div className="pt-2 text-[11px] text-amber-700/80 dark:text-amber-300/80 bg-amber-500/5 p-2 rounded-xl border border-amber-500/20 flex items-start gap-1.5">
            <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
            <span>
              {member.editableBio.notice} in <code className="font-mono text-[10px] bg-amber-500/15 px-1 py-0.5 rounded">src/config/teamConfig.ts</code>.
            </span>
          </div>
        </div>

        {/* Editable Suggested Interests */}
        <div className="glass-panel p-6 rounded-3xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Suggested Interests</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              <Edit3 className="w-2.5 h-2.5" />
              Editable Suggestion
            </span>
          </div>

          <div className="space-y-2">
            {member.suggestedInterests.items.map((interest, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 px-3 py-2 rounded-xl border border-slate-100 dark:border-slate-800"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{interest}</span>
              </div>
            ))}
          </div>

          <div className="pt-1 text-[11px] text-amber-700/80 dark:text-amber-300/80 bg-amber-500/5 p-2 rounded-xl border border-amber-500/20 flex items-start gap-1.5">
            <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
            <span>
              {member.suggestedInterests.notice} in <code className="font-mono text-[10px] bg-amber-500/15 px-1 py-0.5 rounded">src/config/teamConfig.ts</code>.
            </span>
          </div>
        </div>
      </div>

      {/* Sample Projects Section */}
      <div className="mt-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Project Demonstrations</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              Sample Projects & Prototypes
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>All projects are concept/demo samples for portfolio demonstration</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {member.sampleProjects.map((project: SampleProject) => (
            <div
              key={project.id}
              className="glass-panel p-6 rounded-3xl flex flex-col justify-between space-y-4 border hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      project.badge === "Concept sample"
                        ? "bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20"
                        : "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Hackathon Scope
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Architecture */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Concept Architecture
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    {project.conceptArchitecture}
                  </p>
                </div>

                {/* Sample Tech Stack */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Relevant Sample Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.sampleTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Explicit Disclaimer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 italic flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" />
                <span>{project.disclaimer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation CTA */}
      <div className="mt-12 p-6 glass-panel rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Finished viewing {member.name}&apos;s profile?
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Head back to explore other squad members or view the full hackathon skill distribution matrix.
          </p>
        </div>
        <button
          type="button"
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Team Hub</span>
        </button>
      </div>
    </div>
  );
}
