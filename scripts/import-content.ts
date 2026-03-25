/**
 * Import content from service-texts.md into Sanity CMS.
 *
 * Usage:
 *   SANITY_API_TOKEN=<write-token> npx tsx scripts/import-content.ts
 *   npx tsx scripts/import-content.ts --dry-run    # parse only, no API calls
 *
 * Requires: npm install -D tsx  (if not already installed)
 */

import { createClient, type SanityClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const DRY_RUN = process.argv.includes('--dry-run');

const TOKEN = process.env.SANITY_API_TOKEN;
if (!TOKEN && !DRY_RUN) {
  console.error('Missing SANITY_API_TOKEN env variable.');
  console.error('Create one at: https://www.sanity.io/manage → project pgbkmfzt → API → Tokens → Add API token (Editor role)');
  console.error('Or run with --dry-run to test parsing without uploading.');
  process.exit(1);
}

const client: SanityClient | null = TOKEN
  ? createClient({
      projectId: 'pgbkmfzt',
      dataset: 'production',
      apiVersion: '2024-01-01',
      token: TOKEN,
      useCdn: false,
    })
  : null;

// ---------------------------------------------------------------------------
// Hub page slugs — these map to HubPage template
// ---------------------------------------------------------------------------

const HUB_SLUGS = new Set([
  'gamble-license',
  'forex-license',
  'cryptocurrency-exchange-license',
  'emi-license',
]);

// ---------------------------------------------------------------------------
// License detail slugs — these map to LicenseDetailPage template
// Identified by known license-detail routes in App.tsx
// ---------------------------------------------------------------------------

const LICENSE_SLUGS = new Set([
  'malta-gaming-license',
  'curacao-gaming-license',
  'gambling-license-of-the-isle-of-man',
  'gambling-license-in-costa-rica',
  'forex-broker-licence-in-malta',
  'cyprus-forex-license',
  'forex-broker-licence-in-vanuatu',
  'forex-broker-licence-in-mauritius',
  'forex-broker-licence-in-montenegro',
  'forex-license-seychelles',
  'cryptocurrency-exchange-license-in-estonia',
  'cryptocurrency-exchange-license-in-the-usa',
  'cryptocurrency-exchange-license-in-switzerland',
  'cryptocurrency-license-in-malta',
  'lithuania-crypto-license',
  'poland-crypto-license',
  'e-money-license-malta',
  'e-money-license-uk',
  'e-money-license-lithuania',
  'emi-license-in-estonia',
]);

// ---------------------------------------------------------------------------
// Slugs to skip (non-content pages)
// ---------------------------------------------------------------------------

const SKIP_SLUGS = new Set([
  '',               // homepage
  'about-us',
  'marketplace',
  'cookie-policy',
  'privacy-policy',
  'affiliate-program',
]);

// ---------------------------------------------------------------------------
// Parser
// ---------------------------------------------------------------------------

interface ParsedPage {
  heading: string;
  url: string;
  slug: string;
  heroTitle: string;
  heroDescription: string;
  sections: { heading: string; body: string }[];
  requirements: string[];
  faq: { question: string; answer: string }[];
}

function parseServiceTexts(content: string): ParsedPage[] {
  // Split on ## headings (level 2)
  const pageBlocks = content.split(/\n(?=## [^\n]+\n)/).filter((b) => b.startsWith('## '));

  const pages: ParsedPage[] = [];

  for (const block of pageBlocks) {
    const lines = block.split('\n');
    const heading = lines[0].replace(/^## /, '').trim();

    // Find URL line
    const urlLine = lines.find((l) => /^URL:\s*\//.test(l));
    if (!urlLine) continue;

    const url = urlLine.replace(/^URL:\s*/, '').trim();
    const slug = url.replace(/^\//, '');

    if (SKIP_SLUGS.has(slug)) continue;

    // Split into ### sections
    const sectionBlocks: { name: string; body: string }[] = [];
    let currentSection: { name: string; lines: string[] } | null = null;

    for (const line of lines.slice(1)) {
      if (line.startsWith('### ')) {
        if (currentSection) {
          sectionBlocks.push({
            name: currentSection.name,
            body: currentSection.lines.join('\n').trim(),
          });
        }
        currentSection = { name: line.replace(/^### /, '').trim(), lines: [] };
      } else if (currentSection) {
        currentSection.lines.push(line);
      }
    }
    if (currentSection) {
      sectionBlocks.push({
        name: currentSection.name,
        body: currentSection.lines.join('\n').trim(),
      });
    }

    // Extract hero
    const heroBlock = sectionBlocks.find((s) => s.name === 'Hero');
    const heroLines = (heroBlock?.body || '').split('\n').filter(Boolean);
    const heroTitle = heroLines[0] || heading;
    const heroDescription = heroLines.slice(1).join(' ').trim();

    // Extract content sections (Описание услуги, Этапы / Steps, Цены и сроки)
    const contentSectionNames = ['Описание услуги', 'Этапы / Steps', 'Цены и сроки', 'Дополнительные услуги'];
    const sections: { heading: string; body: string }[] = [];

    for (const sb of sectionBlocks) {
      if (contentSectionNames.includes(sb.name)) {
        // Split on bold headings (**...**)
        const subSections = splitOnBoldHeadings(sb.body);
        sections.push(...subSections);
      }
    }

    // Extract requirements
    const reqBlock = sectionBlocks.find((s) => s.name === 'Требования');
    const requirements: string[] = [];
    if (reqBlock) {
      const reqSections = splitOnBoldHeadings(reqBlock.body);
      for (const rs of reqSections) {
        requirements.push(rs.body);
      }
    }

    // Extract FAQ
    const faqBlock = sectionBlocks.find((s) => s.name === 'FAQ');
    const faq: { question: string; answer: string }[] = [];
    if (faqBlock) {
      const qaPairs = faqBlock.body.split(/\nQ:\s*/).filter(Boolean);
      for (const pair of qaPairs) {
        const cleaned = pair.startsWith('Q: ') ? pair.slice(3) : pair;
        const [qPart, ...aParts] = cleaned.split(/\nA:\s*/);
        if (qPart && aParts.length > 0) {
          faq.push({
            question: qPart.replace(/^Q:\s*/, '').trim(),
            answer: aParts.join('\n').trim(),
          });
        }
      }
    }

    pages.push({
      heading,
      url,
      slug,
      heroTitle,
      heroDescription,
      sections,
      requirements,
      faq,
    });
  }

  return pages;
}

function splitOnBoldHeadings(text: string): { heading: string; body: string }[] {
  const results: { heading: string; body: string }[] = [];
  // Split text on lines that start with **...**
  const parts = text.split(/\n(?=\*\*[^*]+\*\*)/);

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    const boldMatch = trimmed.match(/^\*\*([^*]+)\*\*/);
    if (boldMatch) {
      const heading = boldMatch[1].trim();
      const body = trimmed.slice(boldMatch[0].length).trim();
      if (body && !body.startsWith('See all countries') && !body.startsWith('Additional services')) {
        results.push({ heading, body });
      }
    } else {
      // No bold heading — use as body of a generic section
      if (trimmed && !trimmed.startsWith('See all countries') && !trimmed.startsWith('Additional services')) {
        results.push({ heading: '', body: trimmed });
      }
    }
  }

  return results.filter((r) => r.body.length > 10);
}

// ---------------------------------------------------------------------------
// Document builders
// ---------------------------------------------------------------------------

function buildServiceDoc(page: ParsedPage) {
  return {
    _type: 'servicePage' as const,
    _id: `servicePage-${page.slug}`,
    title: page.heroTitle,
    slug: { _type: 'slug', current: page.slug },
    description: page.heroDescription || page.sections[0]?.body?.slice(0, 300) || '',
    sections: page.sections.map((s) => ({
      _key: randomKey(),
      heading: s.heading,
      body: s.body,
    })),
    requirements: page.requirements.length > 0 ? page.requirements : undefined,
    faq: page.faq.map((f) => ({
      _key: randomKey(),
      question: f.question,
      answer: f.answer,
    })),
  };
}

function buildHubDoc(page: ParsedPage) {
  return {
    _type: 'hubPage' as const,
    _id: `hubPage-${page.slug}`,
    slug: { _type: 'slug', current: page.slug },
    categoryTag: inferCategoryTag(page.slug),
    titleAccent: inferTitleAccent(page.heroTitle),
    titleRest: inferTitleRest(page.heroTitle),
    description: page.heroDescription || page.sections[0]?.body?.slice(0, 400) || '',
    stats: [],
    jurisdictionsTitle: 'Choose Your Jurisdiction',
    jurisdictionsSubtitle: 'Each option serves different markets, budgets and timelines.',
    jurisdictions: [],
    processTitle: 'How It Works',
    processSubtitle: 'Our step-by-step process for obtaining your license.',
    steps: [],
    requirementsTitle: 'General Requirements',
    requirementsIntro: page.requirements[0] || 'Standard requirements apply.',
    requirements: page.requirements,
    faq: page.faq.map((f) => ({
      _key: randomKey(),
      question: f.question,
      answer: f.answer,
    })),
    formTitle: 'Ready to Get Started?',
    formSubtitle: 'Fill out the form and our team will contact you within 24 hours.',
  };
}

function buildLicenseDoc(page: ParsedPage) {
  const category = inferLicenseCategory(page.slug);
  return {
    _type: 'licenseDetailPage' as const,
    _id: `licenseDetailPage-${page.slug}`,
    slug: { _type: 'slug', current: page.slug },
    categoryLabel: category.label,
    categoryHref: category.href,
    titleAccent: inferTitleAccent(page.heroTitle),
    titleRest: inferTitleRest(page.heroTitle),
    description: page.heroDescription || page.sections[0]?.body?.slice(0, 400) || '',
    stats: [],
    aboutTag: category.label,
    aboutTitle: `About ${page.heroTitle}`,
    aboutParagraphs: page.sections.slice(0, 3).map((s) => s.body),
    benefits: [],
    processTitle: 'Licensing Process',
    processSubtitle: 'Our step-by-step guide to obtaining your license.',
    steps: [],
    requirementsIntro: page.requirements[0] || 'Standard requirements apply to all applicants.',
    requirements: page.requirements.length > 1 ? page.requirements.slice(1) : page.requirements,
    keyFacts: [],
    advantages: [],
    limitations: [],
    faq: page.faq.map((f) => ({
      _key: randomKey(),
      question: f.question,
      answer: f.answer,
    })),
    related: [],
    formTitle: 'Get a Free Consultation',
    formSubtitle: 'Our licensing experts will assess your situation and recommend the best path forward.',
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function randomKey(): string {
  return Math.random().toString(36).slice(2, 10);
}

function inferCategoryTag(slug: string): string {
  if (slug.includes('gambl')) return 'GAMBLING LICENSES';
  if (slug.includes('forex')) return 'FOREX LICENSES';
  if (slug.includes('crypto')) return 'CRYPTO LICENSES';
  if (slug.includes('emi')) return 'EMI LICENSES';
  return 'LICENSING';
}

function inferTitleAccent(title: string): string {
  // First word is usually the accent
  const words = title.split(/\s+/);
  return words[0] || title;
}

function inferTitleRest(title: string): string {
  const words = title.split(/\s+/);
  return words.slice(1).join(' ') || '';
}

function inferLicenseCategory(slug: string): { label: string; href: string } {
  if (slug.includes('gaming') || slug.includes('gambl'))
    return { label: 'Gambling Licenses', href: '/gamble-license' };
  if (slug.includes('forex') || slug.includes('broker'))
    return { label: 'Forex Licenses', href: '/forex-license' };
  if (slug.includes('crypto') || slug.includes('cryptocurrency'))
    return { label: 'Crypto Licenses', href: '/cryptocurrency-exchange-license' };
  if (slug.includes('emi') || slug.includes('e-money') || slug.includes('electronic-money'))
    return { label: 'EMI Licenses', href: '/emi-license' };
  return { label: 'Licenses', href: '/' };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const filePath = resolve(__dirname, '..', 'service-texts.md');
  console.log(`Reading ${filePath}...`);

  const raw = readFileSync(filePath, 'utf-8');
  const pages = parseServiceTexts(raw);

  console.log(`Parsed ${pages.length} pages from service-texts.md\n`);

  let created = 0;
  let skipped = 0;
  let errors = 0;

  const hubCount = pages.filter((p) => HUB_SLUGS.has(p.slug)).length;
  const licenseCount = pages.filter((p) => LICENSE_SLUGS.has(p.slug)).length;
  const serviceCount = pages.filter((p) => !HUB_SLUGS.has(p.slug) && !LICENSE_SLUGS.has(p.slug)).length;

  console.log(`Type breakdown:`);
  console.log(`  Hub pages:            ${hubCount}`);
  console.log(`  License detail pages: ${licenseCount}`);
  console.log(`  Service pages:        ${serviceCount}`);
  console.log('');

  for (const page of pages) {
    let doc: Record<string, unknown>;

    if (HUB_SLUGS.has(page.slug)) {
      doc = buildHubDoc(page);
    } else if (LICENSE_SLUGS.has(page.slug)) {
      doc = buildLicenseDoc(page);
    } else {
      doc = buildServiceDoc(page);
    }

    if (DRY_RUN) {
      created++;
      console.log(`  ✓ [${doc._type}] ${page.slug} (dry-run)`);
      continue;
    }

    try {
      await client.createOrReplace(doc as any);
      created++;
      console.log(`  ✓ [${doc._type}] ${page.slug}`);
    } catch (err: any) {
      errors++;
      console.error(`  ✗ [${doc._type}] ${page.slug}: ${err.message}`);
    }
  }

  console.log(`\nDone. Created: ${created}, Errors: ${errors}, Skipped: ${skipped}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
