# Personal Developer Brand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a bilingual Apple-aligned personal developer brand site for Xiexiong Chou at `https://xiaozhou266.github.io/`.

**Architecture:** A Vite React SPA with content centralized in typed bilingual data, section components for the long-scroll narrative, CSS custom properties for the restrained design system, and Framer Motion for scroll reveals. GitHub Actions builds the static `dist` artifact and deploys it through the official Pages action.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React, GitHub Actions.

---

### Task 1: Scaffold project and assets

**Files:** Create `package.json`, `index.html`, `tsconfig.json`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/styles.css`, `public/assets/avatar.png`, `public/assets/wechat.png`.

- [ ] Add dependencies and Vite scripts.
- [ ] Copy and optimize the supplied portrait and WeChat QR into `public/assets`.
- [ ] Add the document shell, font loading, language metadata, and root mount.

### Task 2: Implement typed bilingual content and page sections

**Files:** Create `src/content.ts`, `src/components/Navigation.tsx`, `Hero.tsx`, `About.tsx`, `Capabilities.tsx`, `Delivery.tsx`, `Projects.tsx`, `Education.tsx`, `Contact.tsx`.

- [ ] Define `Locale` and typed copy maps for every section, defaulting to Chinese.
- [ ] Render semantic landmarks and the complete identity, full-stack, operations, PixelBeads, research, and contact story.
- [ ] Exclude OPC, AnyRouter Check-in, and ColorfulJune.

### Task 3: Add motion, responsive behavior, and interaction states

**Files:** Modify section components and `src/styles.css`; create `src/components/WeChatLightbox.tsx`.

- [ ] Add Framer Motion viewport reveals and image entrance effects with reduced-motion handling.
- [ ] Implement the language toggle, mobile menu, focus-visible controls, QR lightbox, and external project links.
- [ ] Verify mobile, tablet, and wide desktop layout without overflow or overlapping copy.

### Task 4: Add SEO and GitHub Pages delivery

**Files:** Modify `index.html`; create `public/robots.txt`, `public/sitemap.xml`, `.github/workflows/deploy.yml`, `README.md`.

- [ ] Add canonical, Open Graph, Twitter, JSON-LD Person, and accessible metadata.
- [ ] Configure Pages build and deployment on `main`.
- [ ] Document local development, build, content editing, and live URL.

### Task 5: Verify and publish

- [ ] Run `npm run build` and `npm run lint`.
- [ ] Start the production preview and inspect narrow mobile, tablet, and 1440px desktop screenshots.
- [ ] Fix any visual, accessibility, or console issues found in browser inspection.
- [ ] Commit, push `main`, enable Pages if needed, and verify the public URL and deployment status.

