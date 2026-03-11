# Dolead AI Agents Masterplan — Site Redesign Spec

## Project Overview

Redesign the single-page `index.html` into a multi-page site with a dashboard-style agent catalog. Visual direction: Linear/Vercel dark aesthetic with Dolead brand identity. Hosted on GitHub Pages.

## Design System

### Colors
- **Background (primary):** `#0F2041` (Dolead navy, used as the main dark background)
- **Background (darker):** `#0A1628` (for cards/elevated surfaces, slightly darker than page bg)
- **Background (card):** `#132742` (for card surfaces, subtle contrast against page bg)
- **Background (card hover):** `#1A3356` (hover state for interactive cards)
- **Dolead Gold:** `#FDBF0D` (Dolead's brand yellow, used for CTAs, active states, key highlights)
- **Dolead Blue accent:** `#2563EB` (from current site, used for links, interactive elements)
- **Text primary:** `#F1F5F9` (near-white for headings and primary content)
- **Text secondary:** `#94A3B8` (muted for descriptions, metadata)
- **Text tertiary:** `#64748B` (for timestamps, footnotes)
- **Status green:** `#10B981` (exists/operational)
- **Status orange:** `#F59E0B` (partial/in progress)
- **Status blue:** `#3B82F6` (new/planned)
- **Status red:** `#EF4444` (missing/critical)
- **Status purple:** `#8B5CF6` (Neural Box platform badge)
- **Border:** `rgba(255,255,255,0.08)` (subtle borders between elements)
- **Border active:** `rgba(253,191,13,0.3)` (gold-tinted border for active/hover states)

### Typography
- **Font stack:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Load Inter from Google Fonts (weights 400, 500, 600, 700)
- **Headings:** 600-700 weight, `#F1F5F9`
- **Body:** 400 weight, `#94A3B8`, 14-15px, line-height 1.6
- **Monospace (code/technical):** `'JetBrains Mono', 'SF Mono', Monaco, monospace`

### Spacing & Layout
- Max content width: 1200px, centered
- Page padding: 48px on sides (desktop), 20px (mobile)
- Card border-radius: 12px
- Section spacing: 64px between major sections
- Card gap: 16px

### Components

**Navigation bar (shared across all pages):**
- Fixed at top, background `#0A1628` with `backdrop-filter: blur(12px)` and slight transparency
- Left: Dolead logo (white version of the diamond + "Dolead" text from their SVG)
- Center/right: page links (Overview, Agents, Roadmap, Vlad Meeting, Changelog)
- Active page link has gold underline and `#F1F5F9` color
- Inactive links: `#64748B`, hover `#94A3B8`
- Mobile: hamburger menu

**Agent cards:**
- Background: `#132742`
- Border-left: 4px solid (color based on status: green=exists, orange=partial, blue=new)
- On hover: slight translateY(-2px), box-shadow glow matching status color, border changes to `rgba(253,191,13,0.3)`
- Content: agent name (16px, 600 weight), status badge, platform badge, description, metadata row
- Magnus card: special treatment, full-width gradient background `linear-gradient(135deg, #0F2041, #1E3A5F)` with gold accent border

**Status badges:**
- Pill-shaped, small (10px font, uppercase)
- Exists: `#10B981` bg with `#065F46` text (or inverted on dark: green text on dark green bg)
- Partial: orange variant
- New: blue variant
- Platform badges: purple variant, even smaller

**Stat cards (overview page):**
- Background: `#132742`
- Large number in the relevant status color
- Small uppercase label in `#94A3B8`
- Subtle border: `1px solid rgba(255,255,255,0.08)`

**Footer (shared):**
- Background: `#0A1628`
- Dolead logo, confidential notice, version, credits
- All text in `#64748B`

## Site Structure

All pages are static HTML files sharing the same CSS (in `css/style.css`) and JS (in `js/main.js`).

```
/
  index.html          (Overview page, the landing/executive page)
  agents.html         (Agent Catalog with dashboard filters)
  roadmap.html        (Visual timeline)
  vlad-meeting.html   (Meeting prep page)
  changelog.html      (Corrections + version history)
  css/
    style.css         (All shared styles)
  js/
    main.js           (Navigation, filters, interactions)
  .nojekyll           (Tells GitHub Pages not to use Jekyll)
```

## Page Specifications

### 1. index.html (Overview)

The executive page. What Vlad and leadership see first. Clean, high-impact, minimal.

**Hero section:**
- Full-width section with `#0F2041` background
- Dolead logo top-left
- Title: "AI Agents Masterplan" in large type (36-40px)
- Subtitle: "31 AI agents mapped to Dolead's operations. Orchestrated by Magnus."
- Version badge: "v2.0 — March 2026" (gold pill badge)
- Credit line: "Original by Arthur Saint-Pere, updated by Alfonso Canovas" in `#64748B`

**Key metrics row (5 stat cards, horizontal):**
- 31 Total Agents (1 orchestrator + 30 specialists)
- 8 Roles Covered
- 10 Already Exist (green number) — (Cowork + Neural Box)
- 5 Partially Built (orange number)
- 16 New to Build (blue number)

**Executive summary (1-2 paragraphs max):**
- What this document is, what Magnus is, what the Proven Process anchoring means
- v2.0 updates note (10 corrections, 4 Cowork agents added, platform convergence strategy, roadmap)

**Platform Strategy summary (condensed):**
- Two-column comparison: Neural Box vs Cowork (same data as current, but styled as dark cards)
- "Recommended Architecture" callout: Neural Box = backbone, Cowork = power-user layer

**Quick links to other pages:**
- Cards linking to: "View All 31 Agents →", "Implementation Roadmap →", "Vlad Meeting Agenda →"
- Styled as subtle cards with arrow, gold accent on hover

### 2. agents.html (Agent Catalog)

The dashboard page. Interactive, filterable.

**Filter bar (sticky below nav):**
- Background: `#0A1628`
- Filter buttons: All (31), Exists (10), Partial (5), New (16)
- Team filter dropdown: All Teams, TechOps, Traffic, PMM, CSM, Sales, RevOps, Cross-Functional
- Platform filter: All, Cowork, Neural Box, Both
- Active filter: gold background/border
- The counts in each filter button should update to reflect combined filters

**Agent grid:**
- Cards laid out in a responsive grid (2 columns on desktop, 1 on mobile)
- Magnus card: special full-width card at the top, always visible regardless of filters
- Each card shows: number, name, status badge, platform badge, 2-line description, metadata (who it augments, tools, key metric)
- Expandable: clicking a card expands it to show full description, process reference, and the "highlight" note
- Team sections: group cards under team headers (TechOps, Traffic, PMM, CSM, Sales, RevOps, Cross-Functional) with team icon and member listing

**Summary table (bottom of page):**
- Same table as current index.html, all 31 agents
- Styled for dark theme: dark header, subtle row striping with alternating `#132742` and `#0F2041`

### 3. roadmap.html (Roadmap)

Visual timeline page.

**Timeline visualization:**
- Vertical or horizontal timeline with 3 phases
- Each phase is a large card with its own color accent (green=Phase 1, orange=Phase 2, purple=Phase 3)

**Phase 1: Foundation (Weeks 1-4, March-April 2026)**
- Description: Get Magnus running + port existing agents to Neural Box
- Agent tags: Magnus (router), Morning-Brief, TechOps Expert (port), DealDesk, CallPrep, Forecast, ClickUp-Ops, TechOps-Tickets
- Milestone: Every Doleader can type @dolead-ai in Slack. 8 agents live.

**Phase 2: Core Agents (Weeks 5-12, April-June 2026)**
- Description: High-impact agents, prioritized by hours saved
- Agent tags: BR-Prep, Campaign-Watch, NRR-Optimizer, Quality-Monitor, LDR-Plug, LDR-Troubleshooter, LDR-Monitor, Market-Intel, Launch-Pilot, LP-Builder, WebService-Plug, Tech-Ticket
- Milestone: 20 agents live. 40+ hours/week saved.

**Phase 3: Advanced & Autonomous (Weeks 13-20, June-August 2026)**
- Description: Ad platform APIs, predictive models, autonomous workflows
- Agent tags: TrafficOptimizer-Search, TrafficOptimizer-Social, Quality-Optimizer, LP-ABTest, Form-ABTest, ABTest-Orchestrator, Dashboard-Builder, Outbound-Prospector
- Milestone: All 31 agents live. Fully autonomous optimization loop.

**What's Missing section (below timeline):**
- Cards for: Growth/Creative Team, HR/People Team, Finance Team, Recruitment, Infrastructure Gaps
- Same content as current, red left-border cards
- Title: "Gaps in Arthur's Original" or "What's Not Covered Yet"

### 4. vlad-meeting.html (Vlad Meeting)

Meeting prep page. 10 agenda items.

**Header:**
- Title: "Vlad Meeting Agenda"
- Subtitle: "10 topics to align on before building. Alfonso + Vlad convergence meeting."

**Agenda items:**
- Numbered cards (1-10), each with:
  - Bold title
  - Description paragraph
  - Tag for category (Architecture, Platform, Process, Cost)
- Same 10 items as current:
  1. Magnus Architecture
  2. Skill Format Convergence
  3. Cowork-to-Neural-Box Porting
  4. User Identity & Permissions
  5. Shared Tool Layer
  6. Ad Platform APIs
  7. Monitoring & Alerting Infrastructure
  8. Knowledge Base Architecture
  9. Cost Model
  10. Phase 1 Scope Agreement

### 5. changelog.html (Changelog)

Version history page. Low priority, clean but minimal.

**Current version (v2.0):**
- Title: "v2.0 — March 2026"
- List of 10 corrections (same content as current corrections section)
- Each correction: category label, old value (strikethrough), arrow, new value (bold)
- Additional v2.0 changes: 4 Cowork agents added, platform convergence strategy, roadmap, missing roles

**Future:**
- Space for v2.1, v3.0 entries as the document evolves

## Content Source

ALL content comes from the current `index.html` (857 lines). Do not invent or modify any agent descriptions, team listings, or factual content. Copy the text exactly. The redesign is purely visual/structural.

## Technical Notes

- Pure HTML/CSS/JS. No frameworks, no build tools.
- GitHub Pages hosting (already set up at alfonsocanovas3.github.io/dolead-ai-masterplan)
- Mobile responsive (cards stack, nav collapses)
- Smooth transitions on hover, filter changes
- Inter font loaded from Google Fonts CDN
- Dolead logo SVG from: `https://cdn.prod.website-files.com/67c93f279a8781c685d242b9/67e6a93d24de4eafbcb801c3_Dolead%20Logo.svg` (use a white/inverted version for dark background)
- Add `.nojekyll` file to root so GitHub Pages serves files directly

## Build Order

1. Start with `css/style.css` (full design system, all components)
2. Build `index.html` (overview page) — verify it looks good
3. Build `agents.html` (the most complex page, with filters)
4. Build `roadmap.html`
5. Build `vlad-meeting.html`
6. Build `changelog.html`
7. Add `js/main.js` (navigation active state, agent filters, card expand/collapse)
8. Test all pages, fix responsive issues
9. Commit and push

## Quality Checks

After building each page:
- Verify on localhost (python -m http.server 8000)
- Check mobile responsiveness
- Ensure all navigation links work
- Verify content matches the original index.html exactly
- Test filter functionality on agents page
