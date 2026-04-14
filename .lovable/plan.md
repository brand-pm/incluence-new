

# Apply Homepage Color Blocking to All 3 Templates

## Current State
All three templates (ServiceDetailPage, HubPage, LicenseDetailPage) use flat dark backgrounds only: `#080808`, `#0d0d0d`, `#111111`. The homepage alternates between flat black sections and deep blue gradient sections (`linear-gradient(180deg, #0f1029 0%, #111133 50%, #0f1029 100%)`) with subtle accent glows. This creates visual rhythm that the inner pages lack.

## Color Pattern

The blue gradient block style from homepage:
```css
background: linear-gradient(180deg, #0f1029 0%, #111133 50%, #0f1029 100%)
```
Plus optional accent glow overlays for depth.

## Changes Per Template

### 1. ServiceDetailPage.tsx (83 pages)

Section order and new backgrounds:
```text
Breadcrumb     → #080808 (flat, unchanged)
Hero           → #080808 (flat, unchanged)
About          → BLUE GRADIENT + accent glow
Content[0]     → #0d0d0d (flat)
Content[1]     → BLUE GRADIENT
Content[N]     → alternating flat/blue
Requirements   → #0d0d0d (flat)
Why Us         → BLUE GRADIENT + grid dots
FAQ            → #0d0d0d (flat)
CTA Form       → BLUE GRADIENT + accent glow
```

Card backgrounds inside blue sections change from `#111111` to `#0f1029` to blend with gradient.

### 2. HubPage.tsx (5 pages)

```text
Hero           → #080808 (flat, unchanged)
Stats Strip    → keep gap-px pattern (flat)
Jurisdictions  → BLUE GRADIENT + accent glow
Requirements   → #0d0d0d (flat)
Process        → BLUE GRADIENT + grid dots
Why Us         → #0d0d0d (flat)
FAQ            → BLUE GRADIENT
CTA Form       → #080808 (flat)
```

### 3. LicenseDetailPage.tsx (4 pages)

```text
Breadcrumb     → #080808 (flat)
Hero           → #080808 (flat)
Facts Strip    → keep as-is
About          → BLUE GRADIENT + accent glow
Process        → #0d0d0d (flat)
Requirements   → BLUE GRADIENT + grid dots
Pros & Cons    → #0d0d0d (flat)
FAQ            → BLUE GRADIENT
Related        → #0d0d0d (flat)
CTA Form       → BLUE GRADIENT + accent glow
```

## Implementation Details

For each blue gradient section, add:
- `position: relative` on section
- Background: `linear-gradient(180deg, #0f1029 0%, #111133 50%, #0f1029 100%)`
- Accent glow overlay div (same as homepage components use)
- Update inner card backgrounds from `#111111`/`#0d0d0d` to `#0f1029` so cards blend with the gradient
- All content wrapped in `relative z-10` to stay above overlays

**3 files edited = 92 pages get the homepage color rhythm.**

