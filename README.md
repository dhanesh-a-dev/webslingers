# WEBSLINGERS — Student Hackathon Developer Team Portfolio

A responsive, accessible developer team portfolio website for the student hackathon team **THE USUALS**. Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 👥 The Team Squad

- **Anushka** — Student Developer; Python, HTML, CSS
- **Anjali** — Student Developer; Python, Java, C++
- **Misheal** — Student Developer; Python, JavaScript, C++
- **Dhanesh** — Student Developer; Python, HTML, CSS, JavaScript

> **Ethical Student Portfolio Note:** All suggested interests and sample projects are clearly marked as **[Editable Suggestion]**, **"Demo project"**, or **"Concept sample"**. No real achievements, awards, commercial work, or completed deployments have been fabricated.

---

## ✨ Key Features

- **Interactive Team Hub (Landing Page):** Responsive 4-member squad roster with live skill tag highlights, metric counters, and instant preview.
- **In-Place Smooth Member Transitions:** Selecting any member transitions immediately to their full portfolio view without a full-page reload, complete with URL query/hash sync (`?member=dhanesh`) for direct bookmarking and sharing.
- **Accessible Navigation:** Prominent "Return to Team Hub" controls, previous/next member carousels, keyboard focus rings, and `ESC` key shortcut to return to the hub.
- **Theme Persistence:** Dark and light mode toggle that remembers visitor preference in `localStorage` and respects system preferences (`prefers-color-scheme`).
- **Reduced Motion Support:** Fully compliant with `@media (prefers-reduced-motion: reduce)` for users who prefer minimal animation.
- **Hackathon Skill Matrix:** Cross-disciplinary domain synergy map showing how Anushka, Anjali, Misheal, and Dhanesh combine Frontend, Logic, and Python scripting for hackathon sprints.
- **Concept Projects Gallery:** Aggregated view of all 8 demo architectures and concept samples with prominent disclaimer banners.
- **Centralized Configuration:** All team profiles, bios, interests, project descriptions, and contact placeholders are located in a single, clearly named configuration file (`src/config/teamConfig.ts`).
- **Explicit Placeholders:** Safe placeholders (`ADD_GITHUB_URL`, `ADD_LINKEDIN_URL`, `ADD_CONTACT_EMAIL`) with built-in copy helper buttons instead of broken or fake external links.

---

## 📁 Project Structure

```
WEBSLINGERS/
├── public/                     # Static assets and favicon
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind CSS v4, custom variants, and dark theme tokens
│   │   ├── layout.tsx          # Root layout with SEO metadata, ThemeProvider, and hydration script
│   │   └── page.tsx            # Main page with team hub & in-place member portfolio router
│   ├── components/
│   │   ├── Header.tsx          # Sticky header with logo, section jumps, theme toggle, and return button
│   │   ├── HeroSection.tsx     # Hero banner, team statistics, and interactive skill filter bar
│   │   ├── MemberCard.tsx      # Landing page card component with verified skills & CTA
│   │   ├── MemberPortfolioView.tsx # Detailed member portfolio view with projects & bios
│   │   ├── TeamMatrixSection.tsx   # Hackathon synergy & skill distribution breakdown
│   │   ├── ConceptProjectsSection.tsx # All demo projects and concept samples gallery
│   │   ├── ContactSection.tsx  # Team contact placeholders and mock inquiry form
│   │   ├── Footer.tsx          # Footer with quick links and accessibility notices
│   │   └── PlaceholderNotice.tsx # Click-to-copy placeholder badge with accessibility labels
│   ├── config/
│   │   └── teamConfig.ts       # ⭐️ SINGLE CONFIG FILE for all member data, bios, and links
│   └── context/
│       └── ThemeContext.tsx    # Theme provider managing dark/light modes & storage
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 1. Local Setup and Development Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) v18.18.0 or newer (tested on Node v22)
- [npm](https://www.npmjs.com/) v9 or newer

### Installation
1. Clone or navigate to the project directory:
   ```bash
   cd WEBSLINGERS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🛡️ License

This project is created for student hackathon portfolio and educational demonstration purposes.
