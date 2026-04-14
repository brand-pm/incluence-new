

# Page Audit & Component-Level Standardization

## Current Page Inventory

The site has **~150 non-homepage pages** built from **3 templates + ~58 standalone pages**:

```text
Template                   Pages   Content Variations
──────────────────────────────────────────────────────
ServiceDetailPage           83     The universal fallback
LicenseDetailPage            4     Gambling jurisdiction leaves
HubPage                     5     Category hubs
Standalone (custom)         58     Each has its own layout
──────────────────────────────────────────────────────
```

## ServiceDetailPage — 83 pages, 4 content profiles

These 83 pages all pass different combinations of props. The template conditionally renders sections based on what's provided:

```text
Profile          Count   Props Present
────────────────────────────────────────────────
A: Minimal        13    title + description + faq only
B: With Sections  20    title + description + sections[] + faq
C: With Reqs      30    title + description + requirements[] + faq
D: Full           20    title + description + sections[] + requirements[] + faq
```

All 83 pages render through **one component** (`ServiceDetailPage.tsx`), so fixing it once fixes all 83.

## Problems Found Across All 3 Templates

All three templates share the same issues:

1. **No mobile responsiveness** — `px-12` everywhere (48px padding on 375px screen = content squeezed to 279px)
2. **`grid-cols-12` CTA form** — `col-span-5` / `col-span-7` with no mobile breakpoint → form breaks on mobile
3. **`grid-cols-3` cards** — "Why Us", Process, Jurisdictions all use 3-col grid with no responsive fallback
4. **`grid-cols-2` Pros/Cons** — no mobile stack
5. **Hero padding** — `pt-[140px]` on HubPage is excessive on mobile
6. **Breadcrumb** — `px-12` no mobile override
7. **Facts strip** — dynamic `gridTemplateColumns` doesn't collapse on mobile

## Plan — Fix at Component Level (3 files)

### 1. `ServiceDetailPage.tsx` — fixes 83 pages

- All `px-12` → `px-5 md:px-12`
- All `py-[72px]` → `py-12 md:py-[72px]`
- Hero `py-[80px]` → `py-16 md:py-[80px]`
- `grid grid-cols-3` (Why Us) → `grid-cols-1 md:grid-cols-3`
- CTA form `grid-cols-12` → `grid-cols-1 md:grid-cols-12`, `col-span-5`/`col-span-7` → `md:col-span-5`/`md:col-span-7`
- Form inputs `grid-cols-2` → `grid-cols-1 md:grid-cols-2`

### 2. `HubPage.tsx` — fixes 5 pages

- Same `px-12` → `px-5 md:px-12` pattern
- Hero `pt-[140px]` → `pt-24 md:pt-[140px]`
- Jurisdiction grid `grid-cols-3` → `grid-cols-1 md:grid-cols-3`
- Process grid `grid-cols-3` → `grid-cols-1 md:grid-cols-3`
- Why Us grid `grid-cols-3` → `grid-cols-1 md:grid-cols-3`
- Stats strip: add `grid-cols-2 md:grid-cols-4` responsive
- CTA form: same fix as ServiceDetailPage
- Hero buttons: `flex gap-3` → `flex flex-col md:flex-row gap-3`

### 3. `LicenseDetailPage.tsx` — fixes 4 pages

- Same `px-12` → `px-5 md:px-12` pattern
- Facts strip: responsive `grid-cols-2 md:grid-cols-N`
- Requirements `grid-cols-12` → stack on mobile (sidebar below content)
- Process `grid-cols-3` → `grid-cols-1 md:grid-cols-3`
- Pros/Cons `grid-cols-2` → `grid-cols-1 md:grid-cols-2`
- Related `grid-cols-3` → `grid-cols-1 md:grid-cols-3`
- CTA form: same fix

### Summary

**3 files edited = 92 pages fixed.** The 58 standalone pages are separate and would need individual attention in a follow-up pass.

