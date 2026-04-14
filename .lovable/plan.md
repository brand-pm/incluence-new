

# Редизайн секций — цветовые блоки вместо линий

## Проблема
Сейчас все секции #080808 / #0d0d0d / #111111 + тонкие accent-линии. Разница минимальна — всё сливается. Нужны реальные цветовые блоки, а не просто разделители.

## Решение
Каждая 2-я секция получает заметный accent-tinted фон. Не subtle 3-4% opacity, а полноценные 8-15% тонировки + gradient-переходы между секциями. Плюс отдельные "акцентные блоки" внутри секций.

## Конкретные изменения

### 1. Убрать SectionDivider полностью
Линии-разделители удалить. Вместо них — gradient fade между секциями через CSS на самих секциях (padding-top/bottom gradient).

### 2. ProcessSection — accent-tinted фон
```
background: linear-gradient(180deg, 
  #0f1029 0%,      /* тёмный синий */
  #111133 50%,     /* чуть насыщеннее */
  #0f1029 100%)
```
Это даст секции явный "синий" оттенок, визуально отделяя от соседей. Карточки шагов — фон `#12143a` вместо `#111111`.

### 3. StatsBar — "highlight block"
Полноценный accent-бэнд:
```
background: linear-gradient(135deg, #1a1d4d 0%, #141638 50%, #1a1d4d 100%)
border-top/bottom: 1px solid hsl(233 84% 60% / 0.25)
```
Это выделит статистику как отдельный "яркий" блок.

### 4. MarketplaceTeaser — warm accent
Тёплый оттенок для разнообразия:
```
background: #161210  /* тёмно-тёплый */
```
С радиальным warm glow `rgba(200,149,96,0.06)`. Это создаст контраст с холодными синими секциями.

### 5. ContactCTA — strong accent glow
Усилить accent-фон до заметного:
```
background: radial-gradient(ellipse 80% 60% at 50% 0%, 
  hsl(233 84% 60% / 0.15) 0%, #080808 70%)
```

### 6. OurServicesSection — subtle warm tint
```
background: #110f0d  /* чуть тёплее чем #0d0d0d */
```
С grid-dots увеличенной opacity.

### 7. LicenseCategories — accent bottom glow усилить
Radial gradient снизу увеличить до 10% opacity.

### 8. PartnersSection — остаётся нейтральной (#0d0d0d) для контраста

### 9. JurisdictionsSection — лёгкий accent tint
```
background: #0d0e18  /* еле-еле синий */
```

## Визуальный ритм (сверху вниз)
```text
Hero           #080808        — нейтральный
Ticker         #080808        — нейтральный
LicenseCateg   #0d0d0d+glow   — нейтральный + glow снизу
ProcessSection #0f1029        — СИНИЙ (акцент!)
OurServices    #110f0d        — ТЁПЛЫЙ
JurisdCompare  #111111        — нейтральный  
Jurisdictions  #0d0e18        — лёгкий синий
Marketplace    #161210        — ТЁПЛЫЙ
StatsBar       #1a1d4d        — ЯРКИЙ СИНИЙ
Partners       #0d0d0d        — нейтральный
ContactCTA     #080808+glow   — нейтральный + сильный glow
```

Такое чередование cold → warm → cold → warm + 2 ярких accent-блока создаст чёткий визуальный ритм.

## Файлы для изменения
- `src/pages/Index.tsx` — убрать все `<SectionDivider />`
- `src/components/SectionDivider.tsx` — удалить файл
- `src/components/ProcessSection.tsx` — синий tinted background + карточки
- `src/components/StatsBar.tsx` — яркий accent background
- `src/components/MarketplaceTeaser.tsx` — warm tint
- `src/components/OurServicesSection.tsx` — warm tint
- `src/components/JurisdictionsSection.tsx` — лёгкий синий tint
- `src/components/LicenseCategories.tsx` — усилить glow
- `src/components/ContactCTA.tsx` — усилить accent glow

