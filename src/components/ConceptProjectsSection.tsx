"use client";

import React, { useState } from "react";
import { TEAM_CONFIG, SampleProject, TeamMember } from "@/config/teamConfig";
import { Layers, ArrowRight } from "lucide-react";

interface ConceptProjectsSectionProps {
  onSelectMember: (memberId: string) => void;
}

interface ProjectWithAuthor extends SampleProject {
  author: TeamMember;
}

export function ConceptProjectsSection({ onSelectMember }: ConceptProjectsSectionProps) {
  const [filterType, setFilterType] = useState<"all" | "Demo project" | "Concept sample">("all");

  // Flatten all projects with author metadata
  const allProjects: ProjectWithAuthor[] = TEAM_CONFIG.members.flatMap((member) =>
    member.sampleProjects.map((p) => ({
      ...p,
      author: member
    }))
  );

  const filteredProjects =
    filterType === "all"
      ? allProjects
      : allProjects.filter((p) => p.badge === filterType);

  return (
    <section id="concept-projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Curated Prototypes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Demo & Concept Project Showcase
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
            Sample architectures and prototype concepts authored by our student members to demonstrate problem-solving capabilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel self-start md:self-auto">
          <button
            type="button"
            onClick={() => setFilterType("all")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              filterType === "all"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            All Samples ({allProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType("Concept sample")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              filterType === "Concept sample"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            Concept Samples
          </button>
          <button
            type="button"
            onClick={() => setFilterType("Demo project")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              filterType === "Demo project"
                ? "bg-cyan-600 text-white shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            Demo Projects
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel p-5 rounded-3xl flex flex-col justify-between space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-1"
          >
            <div className="space-y-3">
              {/* Type Badge & Author */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    project.badge === "Concept sample"
                      ? "bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20"
                      : "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                  }`}
                >
                  {project.badge}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectMember(project.author.id)}
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title={`View ${project.author.name}'s portfolio`}
                >
                  By {project.author.name} →
                </button>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {project.title}
              </h3>

              {/* Short Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 pt-1">
                {project.sampleTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer & Jump Link */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 italic">
                {project.disclaimer}
              </p>
              <button
                type="button"
                onClick={() => onSelectMember(project.author.id)}
                className="w-full inline-flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-1"
              >
                <span>Explore in {project.author.name}&apos;s view</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
