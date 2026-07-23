# Personal Developer Brand Design

## Summary

Build a bilingual React/TypeScript personal technology brand site for Xiexiong Chou (周谢雄), published as the user GitHub Pages site `xiaozhou266.github.io`. The page is a person-first product-launch narrative, not a resume.

## Audience and outcome

Enterprise clients should understand the person, his full-stack and AI breadth, production operations capability, education, and credible work within one scroll. The primary conversion is an email inquiry to `request502@qq.com`.

## Content architecture

1. Hero: portrait, name, Shenzhen University, positioning, concise value proposition.
2. About: researcher, engineer, and product builder framing.
3. Full-stack spectrum: web/mobile, backend/data, AI, desktop/automation, industrial/infra.
4. Delivery capability: architecture, containerization, Nginx, CI/CD, cloud deployment, monitoring and production validation.
5. Featured work: PixelBeads Platform with link to `https://www.pixelbeads.club`.
6. Research and education: Shenzhen University, AI, optimization, LLM applications, software systems.
7. Contact: email, GitHub, WeChat QR.

The site excludes OPC Developer Alliance, AnyRouter Check-in, and ColorfulJune.

## Visual direction

Apple-aligned restraint: near-white and graphite sections, large non-gradient typography, portrait as the hero object, technology blue as a small accent, 1200px max width, long scroll rhythm, minimal glass only in navigation. No card grids or dashboard framing.

## Interaction and states

- Chinese is default; the navigation language control switches all visible copy to English without a reload.
- Scroll reveals fade and translate content into view.
- Work links open in a new tab with clear accessible labels.
- WeChat QR opens a larger accessible lightbox on click and closes on Escape or backdrop click.
- Reduced-motion users receive immediate visible content and no transform animation.

## SEO and deployment

Use a descriptive title, description, canonical URL, Open Graph/Twitter metadata, JSON-LD Person schema, `robots.txt`, and `sitemap.xml`. GitHub Actions builds the Vite app and deploys `dist` to GitHub Pages on pushes to `main`.

