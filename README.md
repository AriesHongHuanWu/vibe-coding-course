# Vibe Coding Course

The companion website for a short workshop that teaches high-school students to build working web apps with AI tools instead of by memorising syntax.

I taught a two-session introductory workshop and needed somewhere for students to find the syllabus, the exact tools I demoed, and the links to sign up for them. Handing out a slide deck does not survive the walk home, so I built a static site that holds the whole curriculum: two lesson pages, a tool directory, and a short quiz that points a student at the toolchain that suits how they think. The site copy is Traditional Chinese because the students are in Taiwan.

## How it works

The interesting part of this project is that it is content-driven: there is no CMS and no database, and every page derives from one typed file.

**`src/lib/data.ts`** exports two structures and nothing else:

- `syllabus: SyllabusItem[]` — one entry per lesson, each with a title, goal, duration, tags, and an array of `topics`. Every topic is tagged `"Concept" | "Demo" | "Practice"`, carries its own time budget, and optionally lists the `Tool[]` used in that segment.
- `cheatSheetTools: Tool[]` — the full tool directory, each entry categorised (web generation, IDE, backend, model API).

**Static generation from that array.** `src/app/lessons/[id]/page.tsx` exports `generateStaticParams()` which maps over `syllabus` and strips the `lesson-` prefix from each id. That is what lets `output: "export"` in `next.config.ts` emit one prerendered HTML file per lesson. Adding a third lesson means appending one object to `data.ts`; the route, the navigation card and the lesson page all follow. The page renders `topics` as a vertical numbered timeline, colour-codes the `type` badge, and renders each topic's `tools` as outbound cards.

**Three views over the same tool list.** `src/components/BentoGrid.tsx` picks five tools out of `cheatSheetTools` by name and assigns each a grid span and colour for the landing-page bento layout. `src/app/resources/page.tsx` derives its section headings with `Array.from(new Set(cheatSheetTools.map(t => t.category)))` and groups the cards under them, so a new category needs no code change. The lesson pages read the per-topic `tools` arrays.

**`src/components/ClassSelectionQuiz.tsx`** is a three-question client-side quiz. It keeps `step` and a `{ Alchemist, Architect }` score in `useState`, increments the score for the option's `type` on each answer, and on the last question compares the two totals to pick a result. `AnimatePresence` swaps the start, question and result panels. Each result recommends two specific tools: visual thinkers get Bolt.new and Lovable, logic-first thinkers get Cursor and VS Code.

**Theming.** `next-themes` sets a class on `<html>`, and the palette is expressed as CSS custom properties (`--card-bg`, `--text-primary`, `--card-border`) so components reference tokens rather than hardcoded light and dark pairs. Most of the commit history is exactly this: a run of contrast fixes converting the site from hardcoded Tailwind colours to semantic tokens. `src/components/Navbar.tsx` is a floating pill with a `layoutId` shared-element indicator that slides between the active tabs.

## Tech stack

Next.js 16 App Router (static export) with React 19 and TypeScript, Tailwind CSS 4, `next-themes`, `framer-motion`, `lucide-react`. No backend, no database, no API keys.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export into out/
```

To change course content, edit `src/lib/data.ts`. Nothing else needs to be touched to add a lesson or a tool.

## Status and limitations

This is teaching material for a specific workshop, not a learning platform, and it is scoped that way on purpose.

- **Two lessons exist.** `syllabus` contains `lesson-1` and `lesson-2`. The lesson page hardcodes `parseInt(id) < 2` to decide whether to show a "next lesson" link, so adding a third lesson also means updating that check.
- **No accounts, no progress tracking, no backend.** The quiz result lives in React state and is gone on reload. The "level select" and "locked" styling in `LearningPath.tsx` is visual theming, not real gating.
- **Content is Traditional Chinese only.** UI labels are a mix of English and Chinese; there is no i18n layer.
- **The `pages:build` script is vestigial.** It calls `npx @cloudflare/next-on-pages`, which is not in `devDependencies`; with `output: "export"` a plain `npm run build` already produces the deployable `out/` directory.
- **Tool recommendations are my own opinion** as of early 2026, including the star ratings in `cheatSheetTools`. They are not benchmarks or measurements.
- No tests, no CI.

## License

MIT. See [LICENSE](LICENSE).
