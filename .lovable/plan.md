

# Чередование чёрный / синий фон по всем секциям

Тебе нравится фон ProcessSection — тёмно-синий gradient `#0f1029 → #111133 → #0f1029`. Применим его поочерёдно ко всем секциям: чёрный → синий → чёрный → синий.

## Текущий порядок и новые фоны

```text
Секция               Сейчас        →  Станет
─────────────────────────────────────────────────
Hero                 #080808          #080808 (без изменений)
IndustriesTicker     #080808          #080808 (без изменений)
LicenseCategories    #0d0d0d          🔵 СИНИЙ gradient
ProcessSection       #0f1029→#111133  #0d0d0d ЧЁРНЫЙ
OurServicesSection   #110f0d          🔵 СИНИЙ gradient
JurisdictionCompare  #111111          #0d0d0d ЧЁРНЫЙ
JurisdictionsSection #0d0e18          🔵 СИНИЙ gradient
MarketplaceTeaser    #161210          #0d0d0d ЧЁРНЫЙ
StatsBar             #1a1d4d          🔵 СИНИЙ gradient (ярче)
PartnersSection      #0d0d0d          #0d0d0d ЧЁРНЫЙ
ContactCTA           #080808          🔵 СИНИЙ gradient
```

## Что именно меняется

### Синий gradient (для LicenseCategories, OurServices, Jurisdictions, ContactCTA):
```css
background: linear-gradient(180deg, #0f1029 0%, #111133 50%, #0f1029 100%)
```

### StatsBar — более яркий синий (оставить текущий `#1a1d4d` gradient, он уже хорош)

### ProcessSection — переключить на чёрный `#0d0d0d`
Карточки шагов → `#111111` вместо `#12143a`

### Чёрные секции — стандартный `#0d0d0d`
JurisdictionComparison, MarketplaceTeaser, PartnersSection

## Файлы для изменения
- `src/components/LicenseCategories.tsx` — background → синий gradient
- `src/components/ProcessSection.tsx` — background → `#0d0d0d`, карточки → `#111111`
- `src/components/OurServicesSection.tsx` — background → синий gradient
- `src/components/sections/JurisdictionComparison.tsx` — background → `#0d0d0d`
- `src/components/JurisdictionsSection.tsx` — background → синий gradient
- `src/components/MarketplaceTeaser.tsx` — background → `#0d0d0d`
- `src/components/PartnersSection.tsx` — остаётся `#0d0d0d`
- `src/components/ContactCTA.tsx` — background → синий gradient

