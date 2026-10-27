"use client";

import React from "react";
import { TeamMember } from "@/config/teamConfig";
import { PlaceholderBadge } from "@/components/PlaceholderNotice";
import { ArrowRight, Code, Sparkles, FolderGit2, Edit3 } from "lucide-react";

interface MemberCardProps {
  member: TeamMember;
  isSkillHighlighted: boolean;
  onSelect: () => void;
}

export function MemberCard({
  member,
  isSkillHighlighted,
  onSelect
}: MemberCardProps) {
  // Initials for avatar
  const initials = member.name.substring(0, 2).toUpperCase();

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-3xl p-6 glass-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 ${
        isSkillHighlighted
          ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/10"
          : "hover:border-slate-300 dark:hover:border-slate-700"
      }`}
    >
      <div>
        {/* Top Header: Avatar + Name + Role */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.accent.gradient} flex items-center justify-center text-white font-extrabold text-xl shadow-md transition-transform group-hover:scale-105`}
            >
              {initials}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {member.name}
              </h2>
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {member.role}
              </span>
            </div>
          </div>
        </div>

        {/* Short Headline */}
        <p className="mt-3.5 text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          {member.headline}
        </p>

        {/* Verified Skills */}
        <div className="mt-4 space-y-1.5">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Code className="w-3 h-3 text-blue-500" />
            <span>Supplied Skills</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${member.accent.pillBg} ${member.accent.pillBorder} ${member.accent.pillText}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Suggested Interests with clear Editable Suggestion mark */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Suggested Interests</span>
            </span>
            <span className="inline-flex items-center gap-0.5 text-[9px] text-amber-600 dark:text-amber-400 font-mono bg-amber-500/10 px-1.5 py-0.5 rounded">
              <Edit3 className="w-2.5 h-2.5" />
              Editable Suggestion
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 italic">
            &ldquo;{member.suggestedInterests.items.slice(0, 3).join(", ")}&rdquo;
          </p>
        </div>

        {/* Concept Samples Counter */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
          <FolderGit2 className="w-3.5 h-3.5 text-cyan-500" />
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {member.sampleProjects.length} Concept Samples & Demos
          </span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
        {/* Placeholder Socials */}
        <div className="flex flex-wrap items-center gap-1.5">
          <PlaceholderBadge label="GitHub" value={member.socialLinks.github} type="github" />
          <PlaceholderBadge label="LinkedIn" value={member.socialLinks.linkedin} type="linkedin" />
        </div>

        {/* Primary Action Button */}
        <button
          type="button"
          onClick={onSelect}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span>Explore {member.name}&apos;s Portfolio</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
