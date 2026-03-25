export default {
  name: 'hubPage',
  title: 'Hub Page',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL path segment, e.g. "gamble-license"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'categoryTag',
      title: 'Category Tag',
      type: 'string',
      description: 'Small tag above the title, e.g. "GAMBLING LICENSES"',
    },
    {
      name: 'titleAccent',
      title: 'Title Accent',
      type: 'string',
      description: 'Gradient-colored part of the title',
    },
    {
      name: 'titleRest',
      title: 'Title Rest',
      type: 'string',
      description: 'Plain part of the title',
    },
    {
      name: 'description',
      title: 'Description',
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
      name: 'jurisdictionsTitle',
      title: 'Jurisdictions Title',
      type: 'string',
    },
    {
      name: 'jurisdictionsSubtitle',
      title: 'Jurisdictions Subtitle',
      type: 'text',
      rows: 2,
    },
    {
      name: 'jurisdictions',
      title: 'Jurisdiction Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'regulator', title: 'Regulator', type: 'string' },
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'timeline', title: 'Timeline', type: 'string' },
            { name: 'href', title: 'Link (href)', type: 'string' },
            { name: 'badge', title: 'Badge', type: 'string' },
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
      name: 'requirementsTitle',
      title: 'Requirements Title',
      type: 'string',
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
  ],
  preview: {
    select: { title: 'titleAccent', subtitle: 'slug.current' },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return { title: title || 'Hub Page', subtitle: `/${subtitle}` };
    },
  },
};
