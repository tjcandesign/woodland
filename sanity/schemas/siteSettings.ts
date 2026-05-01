import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string' }),
    defineField({ name: 'description', title: 'Default Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'copyright', title: 'Footer Copyright', type: 'string' }),
    defineField({ name: 'tagline', title: 'Footer Tagline', type: 'text', rows: 2 }),
    defineField({ name: 'earnestMoneyUrl', title: 'Earnest Money Portal URL', type: 'url' }),
    defineField({ name: 'orderEmail', title: 'Order Services Email', type: 'string' }),
    defineField({ name: 'underwriters', title: 'Underwriters Line', type: 'string' }),
    defineField({
      name: 'projectProposalUrl',
      title: 'Project Proposal URL (dev pages)',
      type: 'url',
    }),
  ],
  preview: { select: { title: 'title' } },
});
