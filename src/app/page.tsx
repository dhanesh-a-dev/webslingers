"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { EditorialLanding } from "@/components/EditorialLanding";
import { MemberPortfolioView } from "@/components/MemberPortfolioView";
import { TEAM_CONFIG, TeamMember } from "@/config/teamConfig";

export default function Home() {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  // Sync with browser navigation & URL changes
  useEffect(() => {
    // Check initial search or hash on client mount
    try {
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
    } catch {
      // Ignore
    }

    const handlePopState = () => {
      try {
        const p = new URLSearchParams(window.location.search);
        const m = p.get("member");
        if (m && TEAM_CONFIG.members.some((item) => item.id === m)) {
          setSelectedMemberId(m);
        } else {
          setSelectedMemberId(null);
        }
      } catch {
        // Ignore
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

  // Return smoothly to the 4-name landing hub
  const handleClearMember = () => {
    setSelectedMemberId(null);
    window.history.pushState({}, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find currently active member if selected
  const activeMember: TeamMember | undefined = selectedMemberId
    ? TEAM_CONFIG.members.find((m) => m.id === selectedMemberId)
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#06080d] text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200">
      {/* Sticky Navigation Header */}
      <Header
        selectedMemberName={activeMember ? activeMember.name : null}
        onClearMember={handleClearMember}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {activeMember ? (
          /* Individual Member Portfolio View (Transitioned in place without full page reload) */
          <div className="flex-1">
            <MemberPortfolioView
              member={activeMember}
              allMembers={TEAM_CONFIG.members}
              onBackToHub={handleClearMember}
              onSelectMember={handleSelectMember}
            />
          </div>
        ) : (
          /* First Page: Strictly the Four Names with High-End Editorial Layout */
          <EditorialLanding onSelectMember={handleSelectMember} />
        )}
      </main>
    </div>
  );
}
