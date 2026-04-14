import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'pgbkmfzt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
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
