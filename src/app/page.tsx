"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MemberCard } from "@/components/MemberCard";
import { MemberPortfolioView } from "@/components/MemberPortfolioView";
import { TeamMatrixSection } from "@/components/TeamMatrixSection";
import { ConceptProjectsSection } from "@/components/ConceptProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { TEAM_CONFIG, TeamMember } from "@/config/teamConfig";
import { Users } from "lucide-react";

export default function Home() {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Sync with browser navigation & URL changes
  useEffect(() => {
    // Check initial search or hash on client mount
    const params = new URLSearchParams(window.location.search);
    const memberParam = params.get("member");
    if (memberParam && TEAM_CONFIG.members.some((m) => m.id === memberParam)) {
      window.requestAnimationFrame(() => setSelectedMemberId(memberParam));
    } else if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (TEAM_CONFIG.members.some((m) => m.id === hashId)) {
        window.requestAnimationFrame(() => setSelectedMemberId(hashId));
      }
    }

    const handlePopState = () => {
      const p = new URLSearchParams(window.location.search);
      const m = p.get("member");
      if (m && TEAM_CONFIG.members.some((item) => item.id === m)) {
        setSelectedMemberId(m);
      } else {
        setSelectedMemberId(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // In-place smooth transition to member portfolio view
  const handleSelectMember = (memberId: string) => {
    setSelectedMemberId(memberId);
    window.history.pushState({}, "", `?member=${memberId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Return smoothly to the team hub
  const handleClearMember = () => {
    setSelectedMemberId(null);
    window.history.pushState({}, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Smooth scroll to sections
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Find currently active member if selected
  const activeMember: TeamMember | undefined = selectedMemberId
    ? TEAM_CONFIG.members.find((m) => m.id === selectedMemberId)
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#080b11] text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200">
      {/* Sticky Navigation Header */}
      <Header
        selectedMemberName={activeMember ? activeMember.name : null}
        onClearMember={handleClearMember}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeMember ? (
          /* Individual Member Portfolio View (Transitioned in place without full page reload) */
          <div className="relative">
            <MemberPortfolioView
              member={activeMember}
              allMembers={TEAM_CONFIG.members}
              onBackToHub={handleClearMember}
              onSelectMember={handleSelectMember}
            />
          </div>
        ) : (
          /* Interactive Team Hub Landing Page */
          <div className="animate-fadeIn">
            {/* Hero Section with Interactive Skill Filtering */}
            <HeroSection
              selectedSkill={selectedSkill}
              onSelectSkill={setSelectedSkill}
            />

            {/* Team Members Grid Section */}
            <section id="team-hub" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    <span>Active Squad Roster</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Meet the 4 Developers
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Click any member to transition to their detailed portfolio</span>
                </div>
              </div>

              {/* Responsive 4-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TEAM_CONFIG.members.map((member) => {
                  const isHighlighted =
                    selectedSkill !== null && member.skills.includes(selectedSkill);
                  return (
                    <MemberCard
                      key={member.id}
                      member={member}
                      isSkillHighlighted={isHighlighted}
                      onSelect={() => handleSelectMember(member.id)}
                    />
                  );
                })}
              </div>
            </section>

            {/* Collaborative Skill & Role Matrix Section */}
            <TeamMatrixSection onSelectMember={handleSelectMember} />

            {/* All Concept Projects & Demos Gallery */}
            <ConceptProjectsSection onSelectMember={handleSelectMember} />

            {/* Contact Placeholders & Message Simulator */}
            <ContactSection />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectMember={handleSelectMember}
        onClearMember={handleClearMember}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
