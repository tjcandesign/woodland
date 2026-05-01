import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'value',
  title: 'Value (Code of Conduct)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'label', title: 'Label (e.g., "Value 01")', type: 'string' }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 0 }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: { select: { title: 'title', subtitle: 'label' } },
});
