

# Project Improvement Audit — Prioritized Fixes

## Critical Issues

### 1. No Scroll-to-Top on Route Change
When navigating between pages via `<Link>`, the browser stays at the current scroll position. User lands mid-page on every internal navigation. This is the single biggest UX problem.

**Fix**: Add a `ScrollToTop` component in `App.tsx` that calls `window.scrollTo(0,0)` on every `location.pathname` change.

### 2. All Forms Are Non-Functional
Every contact form across all templates (`ServiceDetailPage`, `HubPage`, `LicenseDetailPage`, `ContactCTA`, `ContactPage`) calls `e.preventDefault()` and does nothing. No data is sent anywhere — leads are lost.

**Fix**: Create a `leads` table in the database and an edge function to receive form submissions. Update all 5 form locations to POST data and show a success toast.

### 3. Footer Jurisdiction Links All Point to "/"
The `jurisdictionLinks` array in `Footer.tsx` renders 12 country names that all link to `"/"` — they go nowhere.

**Fix**: Map each jurisdiction name to its correct page URL (e.g., "Malta" → `/company-registration-in-malta`, "Cyprus" → `/company-registration-in-cyprus`).

### 4. 404 Page Uses Default Styling
`NotFound.tsx` uses generic Tailwind classes (`bg-muted`, `text-primary`) that don't match the site's dark theme at all.

**Fix**: Restyle with the project's design system — `#080808` background, Manrope font, accent color, proper navigation back.

## SEO Improvements

### 5. No `og:image` on Any Page
None of the 150+ pages set an Open Graph image. Social shares show no preview image.

**Fix**: Add a default `og:image` meta tag in `index.html` pointing to a branded social card image (needs to be created/uploaded to `/public`).

### 6. Copyright Year Hardcoded to 2024
Footer says `© 2024 Incluence Ltd` — should be dynamic or at least updated to 2026.

**Fix**: Use `new Date().getFullYear()` in `Footer.tsx`.

### 7. Duplicate `@import` for Manrope Font
`HeroContent.tsx` has an inline `@import url(...)` for Manrope that's already loaded in `index.html`. Causes a redundant network request.

**Fix**: Remove the `@import` line from `HeroContent.tsx`.

## UX Polish

### 8. StatsBar Data Inconsistencies
`HeroContent.tsx` says "12 yrs Experience" while `StatsBar.tsx` says "9 yrs Legal Experience". The About page also says "12 yrs".

**Fix**: Align all stats to consistent values across components.

### 9. Contact Info Inconsistencies
- Navbar WhatsApp: `+37281703037` (Estonia number)
- ContactPage phone: `+852 8192 6676` (HK number)
- ContactPage WhatsApp: `+85281926676` (HK number)
- Footer: no phone/email at all

**Fix**: Standardize all contact details across Navbar, Footer, and Contact page.

### 10. Suspense Fallback Width Not Responsive
The loading skeleton has `w-[400px]` which overflows on mobile screens (375px).

**Fix**: Change to `w-full max-w-[400px]`.

## Files to Edit

| # | File | Change |
|---|------|--------|
| 1 | `src/App.tsx` | Add `ScrollToTop` component, fix fallback width |
| 2 | `src/components/Footer.tsx` | Fix jurisdiction links, dynamic year |
| 3 | `src/pages/NotFound.tsx` | Restyle to match design system |
| 4 | `src/components/HeroContent.tsx` | Remove duplicate font import |
| 5 | `src/components/StatsBar.tsx` | Align stats values |
| 6 | `index.html` | Add default og:image meta |
| 7 | `src/components/ContactCTA.tsx` | Wire form submission |
| 8 | `src/components/templates/ServiceDetailPage.tsx` | Wire form submission |
| 9 | `src/components/templates/HubPage.tsx` | Wire form submission |
| 10 | `src/components/templates/LicenseDetailPage.tsx` | Wire form submission |
| 11 | `src/pages/ContactPage.tsx` | Wire form submission |
| 12 | Database migration | Create `leads` table |
| 13 | `supabase/functions/submit-lead/index.ts` | Edge function for form handling |

No URL changes. No text content changes. Only structural/functional improvements.

