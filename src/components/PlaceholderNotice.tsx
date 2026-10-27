"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface PlaceholderNoticeProps {
  label: string;
  value: string;
  type?: "github" | "linkedin" | "email" | "generic";
}

export function PlaceholderBadge({ label, value, type = "generic" }: PlaceholderNoticeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPlaceholder = value.startsWith("ADD_");

  if (!isPlaceholder) {
    return (
      <a
        href={type === "email" ? `mailto:${value}` : value}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-900/60 transition-colors border border-blue-200 dark:border-blue-800"
      >
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Click to copy placeholder: ${value}. Replace in src/config/teamConfig.ts`}
      aria-label={`Copy placeholder for ${label}`}
      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all focus-visible:ring-2 focus-visible:ring-amber-500"
    >
      <span className="font-sans font-medium text-slate-700 dark:text-slate-300">{label}:</span>
      <span className="text-[11px] underline decoration-amber-400/50 underline-offset-2">{value}</span>
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 opacity-70 group-hover:opacity-100 transition-opacity" />
      )}
      <span className="sr-only">{copied ? "Copied to clipboard" : "Click to copy"}</span>
    </button>
  );
}
