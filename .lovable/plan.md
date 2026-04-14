

# Redesign Mega Menu — Clean Column Layout

## Problem
Current menu: 4 abstract tabs → 2-column card grid → hover for jurisdiction sidebar. Too many layers, overlapping categories (offshore in 2 tabs), hard to find what you need.

## Solution
Replace with a **5-column flat layout** — no tabs, no hover previews. Everything visible at once. Each column = one service group with direct links to hubs and top jurisdictions.

## New Structure

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  LICENSING        │  BANKING &       │  COMPANY         │  INVESTMENT  │  LEGAL           │
│                   │  PAYMENTS        │  FORMATION       │  & RESIDENCY │  SERVICES        │
│                   │                  │                  │              │                  │
│  Gambling →       │  Bank Accounts → │  Registration →  │  Funds →     │  Legitimization →│
│   Malta           │   Cyprus         │   Estonia        │   Luxembourg │  Tax Reporting → │
│   Curaçao         │   Germany        │   UK             │   Malta      │  Legal Support → │
│   Isle of Man     │   Switzerland    │   UAE            │   Estonia    │  Contracts →     │
│   Costa Rica      │   UK             │   Singapore      │   Czech      │                  │
│                   │   USA            │   Hong Kong      │              │                  │
│  Forex →          │   +15 more       │   +23 more       │  Hedge Fund →│                  │
│   Cyprus          │                  │                  │              │                  │
│   Malta           │  Merchant →      │  Ready-Made →    │  Residence → │                  │
│   Vanuatu         │                  │   Estonia        │   Portugal   │                  │
│   Mauritius       │  Payment         │   Malta          │   Dubai      │                  │
│                   │  Systems →       │   Cyprus         │   Cyprus     │                  │
│  Crypto/VASP →    │   Wise           │   England        │   Lithuania  │                  │
│   Estonia         │   PayPal         │                  │              │                  │
│   Lithuania       │   Revolut        │  Offshore →      │              │                  │
│   Switzerland     │                  │   BVI            │              │                  │
│   Malta           │  PSP License →   │   Cayman         │              │                  │
│                   │   Cyprus         │   Seychelles     │              │                  │
│  EMI →            │   Lithuania      │   Panama         │              │                  │
│   UK              │   UK             │                  │              │                  │
│   Lithuania       │   Czech          │                  │              │                  │
│   Malta           │                  │                  │              │                  │
│   Estonia         │                  │                  │              │                  │
└─────────────────────────────────────────────────────────────────────────┘
│  Quick: Gambling·MGA  │  Estonia·VASP  │  UK·EMI  │  BVI·Offshore  │  Start a Project →  │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Key Design Decisions

1. **No tabs** — all 5 columns visible immediately on hover/click of "Services"
2. **Hub links as bold headers** with `→` arrow, jurisdiction links as simple text list below
3. **Max 4 jurisdictions per hub** shown, with "+N more" link to hub page
4. **Scrollable on smaller screens** — columns wrap or get horizontal scroll
5. **Visual hierarchy**: Column headers are accent-colored section labels (`— LICENSING`), hub names are white bold, jurisdictions are muted gray
6. **Bottom bar** stays with Quick Access pills
7. **Right sidebar removed** — no more hover-for-preview, jurisdictions are inline

## Visual Style
- Background: `#0a0a0a` with `border-bottom: 1px solid rgba(255,255,255,0.07)`
- Column dividers: `1px solid rgba(255,255,255,0.04)` between columns
- Hub link: `14px`, `#F0EBE0`, `font-weight: 600`, hover → accent color
- Jurisdiction link: `12px`, `#9A9590`, hover → `#F0EBE0` with left accent border
- Section label: `10px`, `#444CE7`, uppercase tracking
- Same animation: `megaMenuIn 0.18s ease-out`

## Mobile Menu
- Keep accordion-style: tap category → expand list of hubs → tap hub → see jurisdictions
- Simpler than current flat list

## Files to Change
- `src/components/Navbar.tsx` — complete rewrite of mega menu panel (lines ~559-836), simplify NAV_DATA structure, remove LICENSE_PREVIEWS, remove tab system. Keep navbar bar, contact dropdown, mobile menu structure.

## What Gets Removed
- `CATS` array (4 tabs)
- `LICENSE_PREVIEWS` object
- Tab bar with sliding indicator
- `LicensePreviewPanel` component
- `hoveredItem` state
- `tabRefs` / `indicatorStyle` state
- Right sidebar panel

## What Gets Added
- `MENU_COLUMNS` — 5 columns, each with section label + array of hubs (each hub has name, href, top jurisdictions)
- Simple 5-column CSS grid layout
- Cleaner mobile accordion

