

## /mica-license — Dedicated MiCA CASP Landing Page

Создаём новую страницу `/mica-license` строго по предоставленному ТЗ (3 блока: Hero+Urgency, Jurisdictions+Capital, Process+FAQ+CTA). Вместо общей `HubPage` строим кастомный компонент — структура нестандартная (8-юрисдикционная таблица, 3 capital-карточки, EU-карта с пульсацией, JSON-LD).

### 1. Новая страница

**Файл:** `src/pages/MiCALicensePage.tsx` — кастомный одностраничный компонент.
**Роут:** `<Route path="/mica-license" element={<MiCALicensePage />} />` в `src/App.tsx` (lazy-loaded, до catch-all).
**Navbar:** в `LICENSES_FLAT` и top-level `MiCA` link меняем `/cryptocurrency-exchange-license` → `/mica-license` (CASP/MiCA pункт + прямая ссылка). Меняется в `src/components/Navbar.tsx`.

### 2. Структура страницы (3 блока + meta)

**`<head>` инъекция** через `react-helmet-async` (если установлен) или нативный `useEffect` с `document.head` манипуляциями — посмотрю что используется в проекте, выберу единый подход:
- Title, description, canonical, OG tags
- JSON-LD `@graph` (Service + FAQPage) — точно по ТЗ

**BLOCK 1 — Hero + Urgency**
- 2-column layout (text 55% / EU-map 45%), stack на mobile
- Eyebrow `EU MICA REGULATION · LIVE SINCE 30 DEC 2024` (`#444CE7`, uppercase 12px)
- H1 `MiCA CASP License` (48/32px)
- Sub `EU authorization for crypto-asset service providers — 8 jurisdictions, one team`
- Body parag (точно по ТЗ)
- CTA: Primary `Get Free Consultation` (открывает `FormBlock` dialog) + Secondary text-link `Download MiCA Checklist PDF` (anchor `#`, заглушка пока без файла)
- Visual: SVG EU-map (упрощённая контурная) с 8 анимированными `<circle>` + pulsing rings (CSS keyframes 2s ease-in-out). Hover на точке → tooltip (страна + регулятор + timeline)
- Urgency strip снизу: dark-card `#1A1A24`, `Transition deadline: national cut-offs run through Q3–Q4 2026  ·  Lithuania · Estonia · France · Germany — specific dates vary` + `Check your deadline →` (anchor `#jurisdictions`)

**BLOCK 2 — Jurisdictions + Capital**
- Часть A: Heading `8 EU jurisdictions we cover` + sub
- Desktop: таблица 6 колонок (Flag+Country · Regulator · Timeline · Language · Best for · arrow), row hover `#1A1A24`, вся строка clickable
- Mobile: горизонтальный snap-swiper с карточками (85vw)
- 8 строк данных (Germany BaFin, France AMF/ACPR, Netherlands AFM/DNB, Ireland CBI, Malta MFSA, Lithuania LB, Poland KNF, Luxembourg CSSF) — точные значения возьму из ТЗ-блока (документ обрезан на этом месте, **прошу подтвердить полный список из ТЗ при имплементации** — пока проставлю стандартные регуляторы EU)
- Внизу таблицы: `Compare all 8 jurisdictions side-by-side →` (anchor)
- Часть B: 3-column capital cards (`€50,000` Class 1 / `€125,000` Class 2 / `€150,000` Class 3) с расшифровкой услуг (точно по ТЗ Article 67)
- Footer-note курсивом про own funds maintenance

**BLOCK 3 — Process + FAQ + Final CTA**
- Soft gradient `#0E0E14 → #141420`
- 5-step process timeline (горизонтальная на desktop с пунктирной линией, вертикальная на mobile). Steps возьму стандартные для CASP: Scoping → Jurisdiction selection → Substance & docs prep → Filing & regulator dialogue → Authorization & post-launch (если нет точного списка в ТЗ — детали уточним при имплементации)
- FAQ accordion — 5 Q/A точно по ТЗ (single-expand, slide 200ms, chevron rotate). Используем `@/components/ui/accordion`
- Final CTA card: `max-w-720px`, `#1A1A24` (zero radius согласно дизайн-системе — переопределим `border-radius: 24px` из ТЗ на `0` чтобы не нарушать core правило, либо оставим как ТЗ — **прошу подтвердить**)
- 2 кнопки + Telegram contact line `@incluence_manager` → `https://t.me/incluence_manager`

### 3. Дизайн-система

ТЗ использует цвета `#0E0E14`, `#1A1A24`, `#5B54F4`, `#B0B3B8`, `#D4D4D8` — это **отличается** от текущей системы (`#0a0a0a`, `#444CE7`, `#F0EBE0`, `#9A9590`). 

**Решение:** маппим к существующим токенам сайта чтобы страница не выглядела чужой:
- `#5B54F4` → `#444CE7` (project accent)
- `#0E0E14` / `#1A1A24` → `#0a0a0a` / `#0d0d0d`
- `#B0B3B8` → `#9A9590`
- `#D4D4D8` → `#F0EBE0`

Manrope, zero border-radius (включая Final CTA card → переопределяем 24px на 0), gap-px grid trick для разделителей.

### 4. Аналитика GA4

Хелпер `trackEvent(name, params)` для:
- `mica_hero_cta_click`
- `mica_jurisdiction_click` (label = country)
- `mica_pdf_download`
- `mica_telegram_click`
- `mica_consultation_click`

### 5. Технические детали

- **EU map SVG**: inline в компоненте (упрощённый контур EU + 8 точек с координатами). Без внешнего ассета `/hero/eu-map-mica.svg`.
- **PDF download**: пока заглушка (`href="#"` + `disabled` стиль) — ассет PDF не предоставлен. **Прошу подтвердить либо предоставить файл.**
- **Lazy-loading** изображений (`loading="lazy"`) — кроме hero.
- **Sanity:** ТЗ упоминает `hubPage` тип — но контентные блоки уникальны (8-юрисдикционная таблица, capital cards). **Решение:** хардкодим контент в компоненте `MiCALicensePage.tsx` (быстрее и точнее по ТЗ). Sanity-интеграция — отдельный шаг при необходимости.
- **`dangerouslySetInnerHTML`** для JSON-LD `<script type="application/ld+json">` в `<head>` через `useEffect`.

### 6. Layout схема

```text
┌─────────────────────────────────────────────┐
│ NAVBAR (sticky)                             │
├─────────────────────────────────────────────┤
│ HERO (min-h 520)                            │
│ ┌───────────────┬─────────────────────────┐ │
│ │ Eyebrow       │   EU MAP SVG            │ │
│ │ H1            │   • 8 pulsing dots      │ │
│ │ H2 sub        │   tooltip on hover      │ │
│ │ Body          │                         │ │
│ │ [CTA] [link]  │                         │ │
│ └───────────────┴─────────────────────────┘ │
│ [URGENCY STRIP — clock icon + deadline]     │
├─────────────────────────────────────────────┤
│ #jurisdictions                              │
│ H2 + sub                                    │
│ ┌─────────────────────────────────────────┐ │
│ │ TABLE (8 rows, 6 cols) / mobile swiper  │ │
│ └─────────────────────────────────────────┘ │
│ → Compare all 8 jurisdictions               │
│                                             │
│ H3: CASP capital by service class           │
│ ┌────────┬────────┬────────┐                │
│ │ €50K   │ €125K  │ €150K  │                │
│ │ Class1 │ Class2 │ Class3 │                │
│ └────────┴────────┴────────┘                │
│ [own funds note]                            │
├─────────────────────────────────────────────┤
│ H2: How we deliver your CASP authorization  │
│ ① ─── ② ─── ③ ─── ④ ─── ⑤  (timeline)        │
│                                             │
│ H2: Frequently asked questions              │
│ [accordion × 5]                             │
│                                             │
│ ┌──── FINAL CTA CARD (max-w 720) ────────┐  │
│ │ H2 + body                               │  │
│ │ [Book Free Consultation] [PDF]          │  │
│ │ ── Telegram @incluence_manager          │  │
│ └─────────────────────────────────────────┘  │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

### 7. Файлы

- **Новый:** `src/pages/MiCALicensePage.tsx`
- **Изменения:** `src/App.tsx` (lazy import + route), `src/components/Navbar.tsx` (CASP/MiCA href + top-level MiCA href → `/mica-license`)

### 8. Открытые вопросы (требуют подтверждения перед стартом)

1. **Полная таблица 8 юрисдикций** в ТЗ обрезана (`* PSAN transition — греенфилд 9–12 мес`). Использовать стандартные значения по EU regulators (BaFin, AMF, AFM, CBI, MFSA, LB, KNF, CSSF) с шаблонными timeline 6–12 мес — или дождаться полного списка?
2. **Final CTA border-radius**: ТЗ требует `24px` — это нарушает zero-radius правило сайта. Оставляем `24px` (по ТЗ) или `0` (по дизайн-системе)?
3. **PDF файл** для download — есть готовый ассет, или заглушка `#`?
4. **Process steps**: ТЗ говорит «5 steps» но содержимое обрезано — придумать стандартные CASP-шаги или дождаться текста?

