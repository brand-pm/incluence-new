

# Fix JurisdictionComparison — Verified Data Only

## Problem
The comparison table contains invented data: fake prices (€25,000 Malta, £30,000 Gibraltar, €30,000 Cyprus), invented capital requirements, tax rates, and mixes gambling jurisdictions with forex (Cyprus CySEC). Per project rules: no invented content, no prices we don't know.

## Verified Data from Actual Pages

| Field | Malta MGA | Curaçao CGA | Isle of Man GSC | Costa Rica |
|-------|-----------|-------------|-----------------|------------|
| Timeline | ~6 months | 3–4 months | 6–12 months | 2–5 weeks |
| Cost | On request | From €15,000 | On request | $15,000 |
| Capital | €100,000 | None | On request | 25% of share capital |
| Validity | 5 years | — | 5 years | Annual |
| Type | B2C / B2B | Master / Sub | All verticals | Data Processing |
| Market | EU passporting | Global | Crown Dependency | International |
| Presence | Required | Not required | Required | Office required |
| Renewal | — | Annual | Annual | $1,500/quarter |

**Gibraltar** — no detail page exists with verified facts. Remove from comparison.
**Cyprus CySEC** — this is forex, not gambling. Remove from this gambling-focused comparison.

## Changes

### `src/components/sections/JurisdictionComparison.tsx`

1. **Keep 4 jurisdictions**: Malta, Curaçao, Isle of Man, Costa Rica (all have gambling detail pages with verified data)
2. **Remove**: Gibraltar, Cyprus (no verified gambling data)
3. **Replace `cost` field** with "On request" where we don't know the price
4. **Update rows** to match verified facts:
   - License Cost → replace with verified values or "On request"
   - Timeline → verified from pages
   - Remove Tax Rate (not consistently documented)
   - Capital → verified
   - Replace "Permitted Games" with "License Type" (B2C/B2B, Master/Sub, etc.)
   - Add "Validity" row
   - Add "Physical Presence" row
   - Keep Banking, Reputation, Remote as qualitative assessments from page content
   - Remove Privacy Level (not documented)

5. **Update section title/subtitle** to focus on gambling comparison since all 4 are gambling jurisdictions

