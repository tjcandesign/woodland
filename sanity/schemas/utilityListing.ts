import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'utilityListing',
  title: 'Utility Listing',
  type: 'document',
  fields: [
    defineField({ name: 'provider', title: 'Provider Name', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'District of Columbia', value: 'dc' },
          { title: 'Maryland', value: 'md' },
          { title: 'Virginia', value: 'va' },
        ],
      },
      validation: r => r.required(),
    }),
    defineField({ name: 'county', title: 'County / City', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Water', value: 'water' },
          { title: 'Gas', value: 'gas' },
          { title: 'Electric', value: 'electric' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({ name: 'linkLabel', title: 'Link Label', type: 'string' }),
    defineField({ name: 'url', title: 'URL', type: 'url' }),
    defineField({ name: 'phone', title: 'Phone (display)', type: 'string' }),
    defineField({ name: 'phoneTel', title: 'Phone (tel: link)', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 0 }),
  ],
  orderings: [
    {
      title: 'Region, County, Order',
      name: 'regionCountyOrder',
      by: [
        { field: 'region', direction: 'asc' },
        { field: 'county', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'provider', subtitle: 'county', region: 'region' },
    prepare: ({ title, subtitle, region }) => ({
      title,
      subtitle: `${region?.toUpperCase()} · ${subtitle ?? ''}`,
    }),
  },
});
