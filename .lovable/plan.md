

## Navbar Refactor — Final TZ Implementation

Реструктурируем навбар согласно ТЗ: упрощённая структура верхнего уровня, плоские дропдауны, новая CTA-кнопка, языковой переключатель и аналитика GA4.

### 1. Новая структура (слева → направо)

```
[Logo]  Licenses ▾   Company Formation ▾   MiCA   Ready-Made   Services ▾   Resources ▾   EN/RU ▾   [Get Free Consultation]
```

### 2. Содержимое дропдаунов

**Licenses ▾** — плоский список (без юрисдикций):
- Crypto / VASP → `/cryptocurrency-exchange-license`
- CASP → `/cryptocurrency-exchange-license` (та же хаб-страница, MiCA-контекст)
- EMI → `/emi-license`
- PSP → `/provider-payment-systems`
- Gambling / iGaming → `/gamble-license`
- Forex → `/forex-license`

**Company Formation ▾** — плоский список регионов:
- UK → `/register-company-in-uk`
- USA → `/open-company-in-usa`
- EU Jurisdictions → `/company-registration-in-europe`
- Worldwide (Asia & Americas) → `/registration-of-companies-abroad`
- Offshore → `/offshore-company-formation`

**MiCA** — прямая ссылка (без дропдауна) → `/cryptocurrency-exchange-license` (хаб содержит MICA_FACTS-секцию). Визуально подсвечен как «hot»: маленький точечный индикатор `#444CE7` + тултип «July 2026 deadline».

**Ready-Made** — прямая ссылка → `/marketplace`.

**Services ▾** — всё остальное, сгруппировано:
- *Banking & Payments*: Bank Accounts, Merchant Account, Payment Systems, PSP License
- *Investment & Residency*: Investment Funds, Hedge Fund, Residence Permit
- *Legal Services*: Legitimization, Tax & Reporting, Legal Support, Contracts

(Двухколоночная навигация — слева категории, справа ссылки. Сохраняем текущий стиль mega-menu.)

**Resources ▾** — плоский список:
- About → `/about`
- Blog → `/blog`
- Affiliate Program → `/affiliate-program`
- Contacts → `/contact`

**EN / RU ▾** — переключатель языка. RU ведёт на `/ru/` (внешний редирект пока нет страниц — ставим `<a href="/ru/">`, чтобы не ломать SPA-роутинг). Текущий выбор отмечен галочкой.

### 3. CTA-кнопка «Get Free Consultation»

Заменяем текст «Start a Project» во всех CTA-точках на **«Get Free Consultation»**:
- Desktop navbar (строка 598)
- Mobile navbar (строка 703)
- Project dialog title (строка 1064)
- `BlogPage.tsx` (375), `BlogPostPage.tsx` (455), `PaymentSystemsPage.tsx` (144, 303, 351)

Стиль кнопки: оставляем `#444CE7`, но добавляем лёгкое свечение (`box-shadow: 0 0 0 1px rgba(68,76,231,0.4), 0 8px 24px rgba(68,76,231,0.25)`) — выделяет среди прочих элементов.

### 4. Поведение

- **Sticky** при скролле — уже реализовано (`fixed top-0`).
- **Hover на десктопе / тап на мобиле** — переключение дропдаунов (текущая логика hover + click сохраняется).
- **Mobile**: бургер с аккордеоном; кнопка «Get Free Consultation» **фиксируется снизу** экрана на мобиле (`fixed bottom-0`, full-width, `z-[100]`) — всегда видна.
- **GA4 события** на клик по основным пунктам:
  ```ts
  window.gtag?.('event', 'nav_click', { item: 'Licenses' });
  ```
  обёртка `trackNav(label)` вызывается в `onClick` каждого top-level пункта (включая пункты дропдаунов).

### 5. Технические изменения

**Файлы:**

- `src/components/Navbar.tsx` — полный рефакторинг:
  - Новые типы: `FlatMenuItem` для плоских списков (Licenses, Company Formation, Resources).
  - Новые константы: `LICENSES_FLAT`, `COMPANY_FLAT`, `SERVICES_GROUPED`, `RESOURCES_FLAT`, `LANGUAGES`.
  - Состояния: `activeMenu: 'licenses' | 'company' | 'services' | 'resources' | 'lang' | null`.
  - Новый компонент `FlatDropdown` (компактная карточка-список 240–280px шириной, hover-подсветка строк).
  - Компонент `LangSwitcher` (мини-дропдаун EN/RU).
  - `MegaMenuServices` — оставляем двухколоночный (3 группы слева, ссылки справа).
  - Mobile-меню: новый аккордеон по новой структуре + sticky bottom CTA.
  - Хелпер `trackNav(label)` для GA4.
- `src/pages/BlogPage.tsx`, `BlogPostPage.tsx`, `PaymentSystemsPage.tsx` — заменить текст CTA.

### 6. Layout / диаграмма

```text
DESKTOP NAVBAR (60px height)
┌──────────────────────────────────────────────────────────────────────────────┐
│ Inclu·ence  Licenses▾ Company▾ MiCA• Ready-Made Services▾ Resources▾  EN▾  [GET FREE CONSULTATION] │
└──────────────────────────────────────────────────────────────────────────────┘
                  ↓ hover
         ┌─────────────────────┐
         │ — LICENSES          │
         │  Crypto / VASP   →  │
         │  CASP            →  │
         │  EMI             →  │
         │  PSP             →  │
         │  Gambling/iGaming →  │
         │  Forex           →  │
         └─────────────────────┘
```

### 7. Сохраняемое поведение

- Дизайн-система (Manrope, zero radius, `#444CE7` accent, `#F0EBE0` text) — без изменений.
- Existing project dialog (`projectDialogOpen`) — переиспользуется, только меняется текст.
- Telegram/WhatsApp иконки — остаются справа от CTA на десктопе.

### 8. Открытые вопросы

- `/ru/` страниц пока нет — RU-ссылка ведёт на `/ru/` через нативный `<a href>` (внешний редирект подхватит, когда RU-локаль появится). Если нужно скрыть RU до релиза — отметим как `disabled` с тултипом «Coming soon».

