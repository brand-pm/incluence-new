

# Typography and Spacing Audit — Fix Readability Across All Components

## Problems Found

1. **Section headings** use `lineHeight: 1.15` which causes text overlap on mobile when titles wrap to 2-3 lines
2. **Inconsistent vertical rhythm** — gap between section-tag → h2 → subtitle varies (12/16/20px) across sections
3. **Card body text** at 13px with tight line-height makes long descriptions hard to read
4. **StatsBar labels** at 10px are below minimum readable size
5. **Footer links** have only 10px gap between items
6. **JurisdictionCard** has cramped internal spacing
7. **ServiceCard** inconsistent padding and text sizing

## Standardized Typography Rules

```text
Component          Current → Fixed
─────────────────────────────────────────
Section tag → h2   12px mb → 16px mb (consistent)
h2 line-height     1.15 → 1.2 (prevents overlap)
h2 → subtitle      varies → 16px gap (consistent)
Subtitle → content varies → 32px gap on desktop, 24px mobile
Card desc text     13px/1.6 → 14px/1.7
Card padding       varies → 28px 24px (uniform)
Stats labels       10px → 11px
Footer link gap    10px → 12px
```

## Files to Edit (10 components)

### 1. `src/components/LicenseCategories.tsx`
- h2 lineHeight: 1.15 → 1.2
- Card desc fontSize: 13 → 14, lineHeight: 1.6 → 1.7
- Section-tag marginBottom: 12 → 16

### 2. `src/components/ProcessSection.tsx`
- h2 lineHeight: 1.15 → 1.2
- Section-tag marginBottom: 12 → 16
- Step desc lineHeight: 1.75 (already good, keep)

### 3. `src/components/OurServicesSection.tsx`
- h2 lineHeight: 1.15 → 1.2
- Section-tag marginBottom: 12 → 16
- Add marginBottom: 16 to h2

### 4. `src/components/ServiceCard.tsx`
- Title fontSize: 18 → 17, marginTop: 32 → 24
- Desc fontSize: 13 → 14, lineHeight: 1.7 (keep)

### 5. `src/components/JurisdictionsSection.tsx`
- h2 lineHeight: 1.15 → 1.2
- Section-tag marginBottom: 12 → 16

### 6. `src/components/JurisdictionCard.tsx`
- License text fontSize: 13 → 14
- Subtitle marginBottom: 16 → 14 (reduce gap before divider)
- Price row marginTop: 16 → 14

### 7. `src/components/MarketplaceTeaser.tsx`
- h2 lineHeight: 1.15 → 1.2
- Section-tag marginBottom: 12 → 16

### 8. `src/components/StatsBar.tsx`
- Label fontSize: 10 → 11, marginTop: 6 → 8

### 9. `src/components/ContactCTA.tsx`
- h2 lineHeight: 1.2 (already ok)
- Section-tag marginBottom: 12 → 16

### 10. `src/components/Footer.tsx`
- Link gap: 10 → 12
- colHeading marginBottom: 16 → 20

### 11. `src/components/sections/JurisdictionComparison.tsx`
- h2 lineHeight: 1.15 → 1.2
- Fix `{'\n'}` in h2 (renders as literal text, not line break)

### 12. `src/components/HeroContent.tsx`
- Mobile stats label fontSize: 8 → 10
- Mobile h1 marginBottom: 12 → 16

## No structural changes, no layout changes — only font sizes, line heights, and margins adjusted for readability.

