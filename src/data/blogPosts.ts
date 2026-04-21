// Local fallback for the blog. If/when Sanity content is published,
// the same shape is fetched via GROQ in src/lib/sanity.ts.

export type BlogCategoryId = "licensing" | "company-offshore";

export interface BlogCategory {
  id: BlogCategoryId;
  label: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: "licensing", label: "Licensing" },
  { id: "company-offshore", label: "Company & Offshore" },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategoryId;
  excerpt: string;
  author: string;
  publishedAt: string; // ISO
  readingTime: number; // minutes
  /** Array of paragraphs (and optional H2 headings prefixed with "## "). */
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-jurisdiction-for-gambling-license-in-2026",
    title: "How to Choose a Jurisdiction for Your Gambling License in 2026",
    category: "licensing",
    excerpt:
      "Malta, Curaçao, Isle of Man or Costa Rica — a practical comparison of the four most popular gaming jurisdictions, focused on cost, timing and payment-rail acceptance.",
    author: "Incluence Legal Desk",
    publishedAt: "2026-04-02T09:00:00Z",
    readingTime: 7,
    body: [
      "Choosing the right gambling jurisdiction is the single most important commercial decision an online operator makes. It defines tax exposure, the speed of go-to-market and — perhaps most importantly in 2026 — which payment processors and banks will agree to onboard your business.",
      "## Malta (MGA)",
      "Malta remains the gold standard inside the EU. The MGA license unlocks European banking, Tier-1 payment service providers and a strong reputational signal for B2B partners. Expect 4–6 months for a full B2C licence, with substance requirements (local director, local AML officer) that materially affect operating costs.",
      "## Curaçao",
      "Following the 2023–2024 reform Curaçao is no longer a fully unregulated jurisdiction. The new framework requires substance, audited reporting and proper AML programs, but timelines stay attractive (8–12 weeks) and entry costs remain the lowest of the four.",
      "## Isle of Man",
      "Isle of Man is positioned for operators that need a premium licence outside the EU but with comparable compliance standards. It is the strongest option for B2B aggregators and software suppliers that sell into other regulated markets.",
      "## Costa Rica",
      "Costa Rica is technically a data-processing licence, not a gambling licence — which makes it the fastest and cheapest path to launch, but with limited banking support. We recommend it only as a temporary structure or for very specific traffic geographies.",
      "## Decision matrix",
      "If your priority is European banking → MGA. If it is speed and cost with proper compliance → Curaçao. If you sell B2B into regulated markets → Isle of Man. If you need to launch in 4 weeks for a soft test → Costa Rica.",
    ],
  },
  {
    slug: "emi-vs-psp-license-which-fits-your-fintech",
    title: "EMI vs PSP License: Which One Fits Your Fintech",
    category: "licensing",
    excerpt:
      "Both licences let you move money for clients, but they cover very different business models. Here is the line we draw between EMI and PSP for our clients.",
    author: "Incluence Legal Desk",
    publishedAt: "2026-03-21T09:00:00Z",
    readingTime: 6,
    body: [
      "We get this question every week: should we apply for an EMI licence or a Payment Institution / PSP licence? The honest answer is that they solve different problems, and choosing the wrong one is expensive.",
      "## What an EMI licence gives you",
      "An Electronic Money Institution can issue e-money — that is, store client funds on a balance, issue IBANs in its own name and issue payment cards. This is the right licence if your product is a wallet, a neobank, a card issuer or a multi-currency account.",
      "## What a PSP licence gives you",
      "A Payment Service Provider / Payment Institution can initiate and execute payments on behalf of clients but cannot store e-money. This is the right licence if your product is acquiring, payment initiation, account information services or B2B payouts.",
      "## Capital and timeline",
      "EMI requires higher initial capital (typically EUR 350,000 in the EU) and a longer authorisation cycle (9–14 months). PSP / API capital starts at EUR 20,000–125,000 depending on the services, with authorisation in 6–10 months.",
      "## Practical advice",
      "Most fintech founders end up needing an EMI eventually, but start with a PSP because it is faster to revenue. We frequently structure clients so that the PSP entity operates first and the group later applies for an EMI on top — without rebuilding compliance from scratch.",
    ],
  },
  {
    slug: "crypto-vasp-license-estonia-lithuania-comparison",
    title: "Crypto VASP License: Estonia vs Lithuania After MiCA",
    category: "licensing",
    excerpt:
      "MiCA changed the European crypto licensing map. We compare Estonia and Lithuania as launchpads for a CASP authorisation in 2026.",
    author: "Incluence Legal Desk",
    publishedAt: "2026-03-08T09:00:00Z",
    readingTime: 8,
    body: [
      "MiCA is now the single rulebook for crypto-asset service providers across the EU. National VASP regimes in Estonia and Lithuania still exist as transition vehicles, but the destination is the same: a CASP authorisation that passports across all 27 member states.",
      "## Estonia",
      "Estonia tightened its VASP regime aggressively in 2022–2024 and only experienced operators with real local substance now make it through. Authorisation takes 4–6 months, requires a local AML officer, audited financials and a real Tallinn office. The reward is one of the most respected European crypto licences.",
      "## Lithuania",
      "Lithuania remains the most accessible entry point for new market participants. The Bank of Lithuania has built deep institutional knowledge of the sector and offers clearer pre-application guidance than most EU regulators. Timeline is comparable, capital requirements slightly lower.",
      "## What MiCA changes in practice",
      "Both jurisdictions are now intermediate steps. From late 2025 every operator must hold a CASP authorisation — issued by the same regulator, but to a uniform European standard. Capital requirements (EUR 50,000 to 150,000 depending on services), governance, market-abuse rules and white-paper obligations are all harmonised.",
      "## Our recommendation",
      "For a brand-new operator: start in Lithuania. For a group with existing operations and a senior compliance team: Estonia signals quality to institutional partners. In both cases, design the application with the CASP migration in mind from day one.",
    ],
  },
  {
    slug: "company-formation-in-estonia-step-by-step",
    title: "Company Formation in Estonia: Step-by-step for Non-residents",
    category: "company-offshore",
    excerpt:
      "Estonian e-Residency makes it possible to incorporate, open accounts and run a fully digital EU company without ever boarding a flight. Here is the exact workflow.",
    author: "Incluence Legal Desk",
    publishedAt: "2026-02-19T09:00:00Z",
    readingTime: 5,
    body: [
      "Estonia is still the easiest jurisdiction in the European Union to incorporate as a non-resident. The key enabler is the e-Residency programme, which gives you a digital ID that is legally equivalent to an in-person signature.",
      "## Step 1 — e-Residency",
      "Apply online; the card is issued in 4–8 weeks at the Estonian embassy or consulate of your choice. You do not become a tax resident — the card only gives you the right to sign documents digitally and use Estonian e-government services.",
      "## Step 2 — Incorporation",
      "Register an OÜ (private limited company) directly in the Estonian business register. Minimum share capital is EUR 2,500 and can now be paid up after registration. The whole filing takes 1–3 business days.",
      "## Step 3 — Banking",
      "This is the step that surprises most founders. Estonian banks are selective with non-resident shareholders, and we usually open the operating account with an EU EMI (such as Wise Business or a Lithuanian provider) and add a traditional bank later, once revenue is real.",
      "## Step 4 — Tax",
      "Estonian distributed profit tax means retained earnings are taxed at 0% — you only pay 22% (from 2025) when profits are distributed as dividends. This makes Estonia particularly attractive for software, SaaS and consulting businesses that reinvest.",
    ],
  },
  {
    slug: "offshore-bvi-vs-cayman-vs-seychelles",
    title: "BVI vs Cayman vs Seychelles: Choosing an Offshore Jurisdiction",
    category: "company-offshore",
    excerpt:
      "Three classic offshore centres compared on the four metrics that actually matter today: substance rules, banking access, reputation and reporting.",
    author: "Incluence Legal Desk",
    publishedAt: "2026-01-30T09:00:00Z",
    readingTime: 6,
    body: [
      "The classic offshore trio — BVI, Cayman Islands and Seychelles — still serves a real purpose for holding structures, fund vehicles and certain operating companies. But the differences between them are bigger today than they were five years ago.",
      "## BVI",
      "The British Virgin Islands remain the default holding-company jurisdiction for international groups. Economic substance rules apply only to specific activities (banking, insurance, IP holding, distribution). For a pure holding vehicle the requirements are minimal and annual costs are low.",
      "## Cayman Islands",
      "Cayman is the institutional choice — preferred by funds, family offices and groups that anticipate raising capital from Tier-1 investors. Reputation is the strongest of the three; costs and reporting obligations are correspondingly higher.",
      "## Seychelles",
      "Seychelles offers the lowest setup and maintenance cost, with a flexible IBC framework. The trade-off is reputational: an increasing number of payment processors and banks now treat Seychelles entities with extra caution, which can slow account opening.",
      "## How we choose",
      "If the entity will hold shares of operating companies in OECD jurisdictions → BVI. If the entity will receive institutional capital → Cayman. If the entity is a personal holding vehicle with no banking ambitions inside the OECD → Seychelles can still be the right answer.",
    ],
  },
];
