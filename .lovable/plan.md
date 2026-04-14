

# Fix Bold Highlighting Regex — Complete Meaningful Phrases

## Problem
The `highlightText` function uses a regex that catches isolated numbers+units (`5 weeks`, `20%`) but misses the surrounding context that makes the highlight meaningful. For example, it bolds only `5 weeks` instead of `from 3 to 5 weeks`.

## Current Regex (identical in 3 files)
```
/((?:\$|€|£)?\d[\d.,]*\s*(?:%|percent|years?|months?|weeks?|days?|hours?)|\d[\d.,]*\s*(?:EUR|USD|GBP)|\b\d{1,2}\s*(?:–|-)\s*\d{1,2}\s*(?:months?|weeks?))/gi
```

## Phrases It Misses (found across 60+ pages)
- **"from 3 to 5 weeks"** — catches only `5 weeks`
- **"up to 3 months"** — catches only `3 months`
- **"at least 25%"** — catches only `25%`
- **"starting from €100,000"** — catches only `€100,000`
- **"no more than 2 weeks"** — catches only `2 weeks`
- **"about 3 weeks to 1.5 months"** — catches only parts

## Fix
Expand the regex with optional contextual prefixes and "X to Y" range patterns:

```text
Added patterns:
  (?:from\s+\d[\d.,]*\s+to\s+)   → "from 3 to 5 weeks"
  (?:up\s+to\s+)                  → "up to 3 months"  
  (?:at\s+least\s+)               → "at least 25%"
  (?:starting\s+from\s+)          → "starting from €100,000"
  (?:no\s+more\s+than\s+)         → "no more than 2 weeks"
  (?:about\s+)                    → "about 3 weeks"
  (?:approximately\s+)            → "approximately 2 months"
  (\d+\s+to\s+\d+[\d.,]*\s+unit) → "2 to 5 weeks" (without "from")
```

## Files to Edit (3)
1. **`src/components/templates/ServiceDetailPage.tsx`** — line 44, update regex
2. **`src/components/templates/HubPage.tsx`** — line 57, update regex  
3. **`src/components/templates/LicenseDetailPage.tsx`** — line 74, update regex

Same regex change in all 3 files. No text content changes — only formatting logic.

