import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'closingStep',
  title: 'Closing Step',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'subhead', title: 'Subhead', type: 'string' }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'order', title: 'Step Order', type: 'number', validation: r => r.required().min(1) }),
  ],
  orderings: [
    {
      title: 'Step Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: { select: { title: 'title', subtitle: 'subhead', order: 'order' }, prepare: ({ title, subtitle, order }) => ({ title: `${String(order).padStart(2, '0')} · ${title}`, subtitle }) },
});
