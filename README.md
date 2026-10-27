# WEBSLINGERS — Student Hackathon Developer Team Portfolio

A responsive, accessible developer team portfolio website for the student hackathon squad **WEBSLINGERS**. Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

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

### Quality and Build Checks
Run the linting and production build verification commands:
```bash
# Check code style and React rules
npm run lint

# Verify type safety and generate optimized production bundle
npm run build
```

---

## 🛠️ 2. How to Edit Team Details and Replace Placeholders

All profiles, interests, sample projects, and contact details are stored in:
👉 **`src/config/teamConfig.ts`**

### Step-by-Step Customization:

1. **Replace Team Details:**
   Open [src/config/teamConfig.ts](file:///c:/Users/MSI/Desktop/WEBSLINGERS/src/config/teamConfig.ts) and customize:
   ```ts
   export const TEAM_CONFIG: TeamConfig = {
     teamName: "WEBSLINGERS",
     tagline: "Student Hackathon Development Squad",
     mission: "Your custom team mission statement...",
     generalContact: {
       emailPlaceholder: "team@yourcollegedomain.edu", // Replace ADD_TEAM_CONTACT_EMAIL
       discordPlaceholder: "@yourteamhandle",          // Replace ADD_DISCORD_HANDLE_OR_SERVER
       locationNote: "Student Hackathon Team • Open to Collaborations"
     },
     // ...
   ```

2. **Replace Social & Portfolio URLs for Each Member:**
   Locate each member object (`anushka`, `anjali`, `misheal`, `dhanesh`) and replace their placeholders:
   ```ts
   socialLinks: {
     github: "https://github.com/anushka-username",   // Replace ADD_GITHUB_URL
     linkedin: "https://linkedin.com/in/anushka",     // Replace ADD_LINKEDIN_URL
     email: "anushka@example.com"                     // Replace ADD_CONTACT_EMAIL
   }
   ```

3. **Update Suggested Interests & Personal Bio:**
   Replace the placeholder text inside `suggestedInterests.items` and `editableBio.intro` with the real student interests and introductions.

4. **Add or Modify Projects:**
   Edit the `sampleProjects` array under each member to add new hackathon concepts or prototypes, keeping the `badge` set to either `"Demo project"` or `"Concept sample"`.

---

## 🐙 3. How to Create a GitHub Repository and Push the Project

### Option A: Using GitHub CLI (`gh`) (Automated & Recommended)

If you are authenticated with GitHub CLI:
```bash
# 1. Initialize git (if not already done)
git init
git branch -M main

# 2. Stage and commit all files
git add .
git commit -m "feat: complete webslingers student team portfolio website"

# 3. Create a public or private repository on GitHub and push
gh repo create webslingers --public --source=. --remote=origin --push
```

### Option B: Using standard Git & GitHub Web Interface

1. Go to [github.com/new](https://github.com/new) in your browser.
2. Set the repository name to `webslingers` (or your preferred name).
3. Leave "Initialize this repository with a README" **unchecked** (we already have a complete README).
4. Click **Create repository**.
5. In your local terminal, run:
   ```bash
   git add .
   git commit -m "feat: complete webslingers student team portfolio website"
   git branch -M main
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/webslingers.git
   git push -u origin main
   ```

---

## ⚡ 4. How to Import the GitHub Repository into Vercel and Deploy

Once your project is on GitHub, deploying to Vercel takes under two minutes:

1. **Sign in to Vercel:**
   Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.

2. **Add New Project:**
   - From your Vercel Dashboard, click **Add New...** → **Project**.

3. **Import Your Repository:**
   - Locate your `webslingers` repository from the list of GitHub repositories.
   - Click **Import**.

4. **Configure Project:**
   - **Framework Preset:** Next.js (automatically detected).
   - **Root Directory:** `./` (default).
   - **Build Command:** `next build` (default).
   - **Output Directory:** `.next` (default).
   - **Environment Variables:** None required (no private secrets needed).

5. **Deploy:**
   - Click **Deploy**.
   - Vercel will build the Next.js static pages and assign an official live URL (e.g., `https://webslingers.vercel.app`).

---

## 🛡️ License

This project is created for student hackathon portfolio and educational demonstration purposes.
