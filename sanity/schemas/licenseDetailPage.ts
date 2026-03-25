export default {
  name: 'licenseDetailPage',
  title: 'License Detail Page',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL path segment, e.g. "malta-gaming-license"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'categoryLabel',
      title: 'Category Label',
      type: 'string',
      description: 'Breadcrumb category, e.g. "Gambling Licenses"',
    },
    {
      name: 'categoryHref',
      title: 'Category Link',
      type: 'string',
      description: 'Link to the parent hub page, e.g. "/gamble-license"',
    },
    {
      name: 'titleAccent',
      title: 'Title Accent',
      type: 'string',
      description: 'Gradient-colored part, e.g. "Malta"',
    },
    {
      name: 'titleRest',
      title: 'Title Rest',
      type: 'string',
      description: 'Plain part, e.g. "Gaming License"',
    },
    {
      name: 'description',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'aboutTag',
      title: 'About Tag',
      type: 'string',
    },
    {
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
    },
    {
      name: 'aboutParagraphs',
      title: 'About Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'iconName', title: 'Icon Name (Lucide)', type: 'string', description: 'Lucide icon name, e.g. "Shield", "Award", "Building2"' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
        },
      ],
    },
    {
      name: 'processTitle',
      title: 'Process Title',
      type: 'string',
    },
    {
      name: 'processSubtitle',
      title: 'Process Subtitle',
      type: 'text',
      rows: 2,
    },
    {
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Step Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
        },
      ],
    },
    {
      name: 'requirementsIntro',
      title: 'Requirements Intro',
      type: 'text',
      rows: 3,
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'keyFacts',
      title: 'Key Facts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'advantages',
      title: 'Advantages',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'limitations',
      title: 'Limitations',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 4 },
          ],
        },
      ],
    },
    {
      name: 'related',
      title: 'Related Licenses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'regulator', title: 'Regulator', type: 'string' },
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'href', title: 'Link (href)', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
    },
    {
      name: 'formSubtitle',
      title: 'Form Subtitle',
      type: 'text',
      rows: 2,
    },
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'formTextareaLabel',
      title: 'Form Textarea Label',
      type: 'string',
    },
    {
      name: 'formButtonText',
      title: 'Form Button Text',
      type: 'string',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text', rows: 3 },
        { name: 'keywords', title: 'Keywords', type: 'string' },
        { name: 'canonical', title: 'Canonical URL', type: 'url' },
        { name: 'schemaId', title: 'Schema ID', type: 'string' },
        { name: 'schemaName', title: 'Schema Name', type: 'string' },
        { name: 'schemaPrice', title: 'Schema Price', type: 'string' },
        { name: 'schemaCurrency', title: 'Schema Currency', type: 'string' },
      ],
    },
  ],
  preview: {
    select: { title: 'titleAccent', rest: 'titleRest', subtitle: 'slug.current' },
    prepare({ title, rest, subtitle }: { title: string; rest: string; subtitle: string }) {
      return { title: `${title} ${rest}`, subtitle: `/${subtitle}` };
    },
  },
};
