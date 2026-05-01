import { defineType, defineField, defineArrayMember } from 'sanity';

const navLink = defineArrayMember({
  type: 'object',
  name: 'navLink',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', validation: r => r.required() }),
    defineField({ name: 'href', title: 'Link / URL', type: 'string', validation: r => r.required() }),
    defineField({ name: 'external', title: 'Opens in new tab', type: 'boolean', initialValue: false }),
    defineField({ name: 'cta', title: 'Render as CTA button (header only)', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'href' },
  },
});

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header Links',
      type: 'array',
      of: [navLink],
    }),
    defineField({
      name: 'footerExplore',
      title: 'Footer · Explore Column',
      type: 'array',
      of: [navLink],
    }),
    defineField({
      name: 'footerResources',
      title: 'Footer · Resources Column',
      type: 'array',
      of: [navLink],
    }),
  ],
});
