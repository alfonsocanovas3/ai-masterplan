# Dolead AI Agents Masterplan - Site Redesign

## Build Instructions
Read SPEC.md for the complete design specification. Build in this order:
1. css/style.css (full design system, all components)
2. index.html (Overview/executive page) - verify it looks good
3. agents.html (Agent Catalog with dashboard filters - most complex page)
4. roadmap.html (Visual timeline with 3 phases)
5. vlad-meeting.html (Meeting prep, 10 agenda items)
6. changelog.html (Corrections + version history)
7. js/main.js (Navigation active state, agent filters, card expand/collapse, mobile menu)
8. Test all pages, fix responsive issues

## Key Rules
- ALL content comes from the current index.html (857 lines). Do not invent or modify any agent descriptions, team listings, or factual content. Copy text exactly.
- Pure HTML/CSS/JS. No frameworks, no build tools.
- Mobile responsive (cards stack, nav collapses to hamburger).
- Inter font from Google Fonts CDN.
- Add .nojekyll file to repo root.

## Testing
python3 -m http.server 8000

## Deployment
git add -A && git commit -m 'description' && git push origin main
Site: https://alfonsocanovas3.github.io/dolead-ai-masterplan/
