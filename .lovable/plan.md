## Цель правок

Закрыть 3 крупных проблемы воронки и навигации:
1. CTA "Start project" сейчас ведёт на `/gamble-license` — это баг. Заменим на единый popup "Get Free Consultation" по всему сайту.
2. В футере отсутствует UK-реквизит (London, College House).
3. Перекос в структуре Services: Banking задвинут на 4-е место, Merchant Accounts нигде не упомянут, Company Formation в футере представлен только Offshore.

---

## 1. Единый CTA `Get Free Consultation` (popup)

### Новый компонент `src/components/ConsultationDialog.tsx`
- Управляется через лёгкий контекст `ConsultationProvider` (в `App.tsx`), чтобы любой компонент мог вызвать `openConsultation({ service?: string })` без проп-дриллинга.
- Использует существующий `Dialog` из `ui/dialog.tsx` + `useLeadForm` (как в `ContactCTA.tsx`).
- Поля формы:
  - Name *
  - Email *
  - Phone (опционально, простой `tel` input — country-picker сделаем флажком в `+CC` префиксе, без сторонних либ; полноценный picker — отдельная задача)
  - Service of interest * — `<select>` с опциями: Crypto / MiCA, Forex, EMI / PSP, Gambling, Company Formation, Banking & Merchant, Buy Ready-Made Company, Other. Принимает `defaultValue` через пропс.
  - Message (textarea)
- Под формой блок **"Or reach us directly"** — иконки/ссылки Telegram, WhatsApp, Email, Phone (значения берём из `ContactCTA.tsx`: `+852 8192 6676`, `info@incluence.net`; placeholders для Telegram/WhatsApp до получения реальных).
- Thank-you state: после успешного submit показываем экран "Thanks! Our consultant will reply within 24h" + дубль кнопок Telegram/WhatsApp. Кнопка "Close" закрывает диалог.
- GA4 событие: `window.gtag?.("event", "lead_submit", { service })` после успеха. Pipedrive — указать в плане как требующий отдельной интеграции (нужен API-ключ от клиента; в этой итерации только GA4).

### Замены кнопок (Start project → Get Free Consultation)
- `src/components/HeroContent.tsx`: обе кнопки (mobile L114-118 и desktop L200-203) — заменить `<Link to="/gamble-license">` на `<button onClick={() => openConsultation()}>`. Текст: `Get Free Consultation`.
- `src/components/Navbar.tsx`: правая CTA-кнопка (использует `setProjectDialogOpen` / `FormBlock`) — переключить на общий `openConsultation()`, чтобы поведение и форма были едиными. Текст уже `Get Free Consultation` (`CTA_LABEL`).
- Внутренние страницы услуг (LicensePageTemplate, ServiceDetailPage, отдельные страницы Gambling/Crypto/EMI и т.д.) — все локальные CTA "Start project / Talk to specialist" заменить на `openConsultation({ service: <контекст страницы> })`. Маппинг service-of-interest по path:
  - `/mica-license`, `/cryptocurrency-exchange-license`, `/*-crypto-*` → `Crypto / MiCA`
  - `/forex-license`, `/*-forex-*` → `Forex`
  - `/emi-license`, `/provider-payment-systems`, `/*-emi-*`, `/*-payment-*` → `EMI / PSP`
  - `/gamble-license`, `/gambling/*`, `/*-gaming-*` → `Gambling`
  - `/offshore-company-formation`, `/company-registration-*`, `/register-company-*`, `/open-company-*` → `Company Formation`
  - `/accounts-bank`, `/opening-a-merchant-account`, `/open-an-account-*`, `/*-bank-account-*` → `Banking & Merchant`
  - `/marketplace`, `/*ready-made*` → `Buy Ready-Made Company`
  - всё остальное → `""` (пользователь выберет вручную)
- В Footer/secondary CTA — оставляем поведение "ведёт на `/contact`" (это требование клиента), но саму страницу `/contact` в будущем расширим (вне этой итерации — флагнем).

### Что увидит пользователь
- Клик на любой CTA "Get Free Consultation" / "Start project" нигде не уходит на страницу услуги.
- Открывается popup с формой. На страницах услуг поле Service предзаполнено.
- Под формой кликабельные Telegram / WhatsApp / Email / Phone.
- После submit — thank-you + GA4 событие `lead_submit`.

---

## 2. Footer — добавить UK-реквизит

В `src/components/Footer.tsx` блок "Col 1 — Brand" (L60-63) расширить: вместо одного абзаца с HK — два блока с заголовками "Hong Kong" и "United Kingdom":
- HK: Incluence Ltd · Rm 7B, One Capital Place, 18 Luard Rd, Wan Chai
- UK: Incluence Ltd · 2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE · Reg. 15743262

Стиль: те же `fontSize: 11, color: #5A5550`, разделитель — мини-заголовок `text-[10px] uppercase tracking-[0.1em] text-[#444CE7]` над каждым адресом.

---

## 3. Реструктуризация Services

### 3.1 Footer — колонка Services (`Footer.tsx` L3-13)
Заменить плоский список на 2 группы (через под-заголовки):

```
COMPANY FORMATION
- EU Companies            → /company-registration-in-europe
- UK & Switzerland        → /register-company-in-uk
- USA & Canada            → /open-company-in-usa
- Asia (HK, SG, UAE)      → /registration-of-companies-abroad
- Offshore Companies      → /offshore-company-formation
- Ready-Made Companies    → /marketplace

LICENSING & SERVICES
- Crypto / VASP License   → /cryptocurrency-exchange-license
- MiCA License            → /mica-license
- EMI License             → /emi-license
- Forex Broker License    → /forex-license
- Gambling License        → /gamble-license
- Investment Funds        → /offshore-investment-funds

BANKING & PAYMENTS
- Bank Account Opening    → /accounts-bank
- Merchant Accounts       → /opening-a-merchant-account
- PSP & Payment Solutions → /provider-payment-systems

LEGAL
- AML / Compliance        → /legal-business
- Tax Structuring         → /finance-reporting
```

Колонка Services занимает 2 sm:col-span под групповой layout (двух-колоночная сетка внутри). Если визуально перегружено — оставить 1 колонку, но с под-заголовками. Уточним при реализации.

### 3.2 Главная — секция Our Services (`OurServicesSection.tsx`)
Поменять порядок и формулировки в массиве `services`:

```
/01 Licensing (Crypto / MiCA / EMI / PSP / Forex / Gambling)
/02 Company Formation (EU / Non-EU / Offshore / Ready-Made)
/03 Banking & Merchant Accounts            ← поднять
/04 Investment Funds & Residency
/05 AML / KYC Compliance
/06 Legal Support & Tax Structuring
```

Tags и desc — переписать соответственно (Banking карточка получит теги `Banking, Merchant, PSP`).

### 3.3 Hero-чипы (`HeroContent.tsx` L11-18)
Добавить чип `Banking` → `/accounts-bank` в массив `serviceTags`. Порядок для desktop: VASP, EMI/PSP, **Banking**, Gambling, Offshore Company, Fund Registration, Crypto Regulation. На mobile (`.slice(0, 4)`) Banking войдёт в первые 4.

### 3.4 Navbar
- В `LICENSES_FLAT` уже есть PSP — ок.
- В `COMPANY_FLAT` (L25-31) добавить пункт **`Ready-Made Companies`** → `/marketplace`. Также проверить, что в шапке пункт "Ready-Made" (L415) переименовать в **`Ready-Made Company`** (как просит клиент в формулировке).
- В `SERVICES_GROUPED` группа "Banking & Payments" уже первая и содержит Bank Accounts / Merchant Account / Payment Systems / PSP License — структура совпадает с тем, что просит клиент. Изменений минимум: переименовать `Bank Accounts` → `Corporate Bank Accounts (EU / Asia / USA / Offshore)` для соответствия ТЗ. Добавить hint `Crypto-friendly` — добавим как 5-й пункт `Crypto-Friendly Banks` со ссылкой на `/accounts-bank` (пока тот же URL; отдельная страница — отдельная задача).

### 3.5 Страница `/accounts-bank`
В рамках этой итерации — **минимально**: добавить разделы Merchant Accounts и PSP integrations как короткие блоки с кросс-ссылками на `/opening-a-merchant-account` и `/provider-payment-systems` (уже существующие страницы). Полноценный рерайт контента — отдельная задача (флагнем клиенту).

---

## Файлы, которые будут затронуты

**Новые:**
- `src/components/ConsultationDialog.tsx` — popup-форма + provider/контекст
- `src/hooks/useConsultation.tsx` — хук `openConsultation({service})`

**Изменения:**
- `src/App.tsx` — обернуть в `ConsultationProvider`
- `src/components/HeroContent.tsx` — кнопки + чип Banking
- `src/components/Navbar.tsx` — заменить локальный диалог на общий, переименование Ready-Made, добавить Crypto-Friendly Banks
- `src/components/Footer.tsx` — UK-реквизит + новая структура Services
- `src/components/OurServicesSection.tsx` — порядок и тексты карточек
- `src/components/LicensePageTemplate.tsx`, `src/components/templates/ServiceDetailPage.tsx`, `src/components/templates/LicenseDetailPage.tsx` — заменить локальные CTA на `openConsultation`
- `src/pages/AccountsBankPage` (или соответствующая) — добавить блоки Merchant/PSP

---

## Что вне итерации (флагнем клиенту)

- **Pipedrive интеграция**: требуется API-ключ + endpoint Edge Function. Сделаем после получения доступа.
- **Полноценный country-picker для phone**: пока простой `tel` input с placeholder `+44 20 ...`. При желании добавим `react-phone-number-input` отдельной задачей.
- **Реальные Telegram/WhatsApp ссылки**: нужны username/номер от клиента. Пока в коде placeholder с TODO.
- **Полный рерайт `/accounts-bank`** + новые URLs `/merchant-accounts`, `/psp-payment-solutions`: предлагаем после согласования копирайта.
- **Расширение страницы `/contact`** (офисы UK + HK, карта, часы работы): отдельная задача.

---

Подтвердите план — и я приступаю к реализации.
