"use client";

import React, { useState } from "react";
import { TEAM_CONFIG } from "@/config/teamConfig";
import { PlaceholderBadge } from "@/components/PlaceholderNotice";
import { Mail, MessageSquare, Send, CheckCircle2, FileCode } from "lucide-react";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !senderMessage) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setSenderName("");
      setSenderEmail("");
      setSenderMessage("");
    }, 1000);
  };

  return (
    <section id="contact-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div
          className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-20 bg-blue-500"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Left Column: Team Contact Info & Config Explanation */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/20">
              <Mail className="w-3.5 h-3.5" />
              <span>Connect with the Squad</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Get in Touch with Team {TEAM_CONFIG.teamName}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Looking for a student hackathon squad, open-source collaborator, or peer engineering discussions? Connect with our team leads below.
            </p>

            {/* General Contact Placeholders */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 gap-2">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Team Email Placeholder:
                  </span>
                </div>
                <PlaceholderBadge
                  label="Email"
                  value={TEAM_CONFIG.generalContact.emailPlaceholder}
                  type="email"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 gap-2">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Discord / Chat Placeholder:
                  </span>
                </div>
                <PlaceholderBadge
                  label="Discord"
                  value={TEAM_CONFIG.generalContact.discordPlaceholder}
                  type="generic"
                />
              </div>
            </div>

            {/* Note about placeholders */}
            <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <FileCode className="w-4 h-4 text-amber-500" />
                <span>Single Config File Architecture</span>
              </div>
              <p>
                All team contact handles, member profiles, and social links are centralized in{" "}
                <code className="font-mono text-[11px] bg-amber-500/15 px-1.5 py-0.5 rounded font-semibold">
                  src/config/teamConfig.ts
                </code>
                . When ready for deployment, replace the <code className="font-mono text-[11px]">ADD_*</code> placeholders with your real URLs.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Mock Inquiry Form */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Demo Inquiry Submitted!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  This mock form demonstrates responsive user input handling. For real production messaging, link your email endpoint or Formspree/Resend in <code className="font-mono text-[11px]">teamConfig.ts</code>.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-slate-800 hover:bg-blue-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Send a Message to Team {TEAM_CONFIG.teamName}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Hackathon invites, mentoring questions, or general project inquiries.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex (Hackathon Organizer)"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@hackathon.org"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="We'd love to invite WEBSLINGERS to our upcoming 48h collegiate hackathon..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
