import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'tag', title: 'Eyebrow / Tag', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'sub', title: 'Subheading', type: 'text', rows: 3 }),
        defineField({ name: 'compact', title: 'Compact (smaller hero)', type: 'boolean', initialValue: true }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'textSection',
          title: 'Text Section',
          fields: [
            defineField({ name: 'tag', title: 'Eyebrow', type: 'string' }),
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'variant',
              title: 'Variant',
              type: 'string',
              options: {
                list: [
                  { title: 'Default', value: 'default' },
                  { title: 'Alt background', value: 'alt' },
                  { title: 'Dark', value: 'dark' },
                  { title: 'Narrow', value: 'narrow' },
                ],
              },
              initialValue: 'default',
            }),
          ],
          preview: { select: { title: 'heading', subtitle: 'tag' } },
        }),
        defineArrayMember({
          type: 'object',
          name: 'ctaBand',
          title: 'CTA Band',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'text', rows: 2 }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
});
