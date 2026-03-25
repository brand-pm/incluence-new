import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: import.meta.env.VITE_SANITY_TOKEN || import.meta.env.VITE_SANITY_API_TOKEN || '',
});

// GROQ queries for each page type

export const SERVICE_PAGE_QUERY = `*[_type == "servicePage" && slug.current == $slug][0]{
  title,
  description,
  sections[]{heading, body},
  requirements,
  faq[]{question, answer}
}`;

export const HUB_PAGE_QUERY = `*[_type == "hubPage" && slug.current == $slug][0]{
  categoryTag,
  titleAccent,
  titleRest,
  description,
  stats[]{value, label},
  jurisdictionsTitle,
  jurisdictionsSubtitle,
  jurisdictions[]{regulator, name, description, timeline, href, badge},
  processTitle,
  processSubtitle,
  steps[]{number, title, description},
  requirementsTitle,
  requirementsIntro,
  requirements,
  faq[]{question, answer},
  formTitle,
  formSubtitle
}`;

export const LICENSE_PAGE_QUERY = `*[_type == "licenseDetailPage" && slug.current == $slug][0]{
  categoryLabel,
  categoryHref,
  titleAccent,
  titleRest,
  description,
  stats[]{value, label},
  aboutTag,
  aboutTitle,
  aboutParagraphs,
  benefits[]{title, description, iconName},
  processTitle,
  processSubtitle,
  steps[]{number, title, description},
  requirementsIntro,
  requirements,
  keyFacts[]{label, value},
  advantages,
  limitations,
  faq[]{question, answer},
  related[]{regulator, name, description, href},
  formTitle,
  formSubtitle,
  formFields,
  formTextareaLabel,
  formButtonText,
  seo{title, description, keywords, canonical, schemaId, schemaName, schemaPrice, schemaCurrency}
}`;
