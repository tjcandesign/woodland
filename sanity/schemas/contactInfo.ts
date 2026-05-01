import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({ name: 'addressLine1', title: 'Address Line 1', type: 'string' }),
    defineField({ name: 'addressLine2', title: 'Address Line 2', type: 'string' }),
    defineField({ name: 'mapUrl', title: 'Google Maps URL', type: 'url' }),
    defineField({ name: 'mapEmbedUrl', title: 'Google Maps Embed URL', type: 'url' }),
    defineField({ name: 'phone', title: 'Phone (display)', type: 'string' }),
    defineField({ name: 'phoneTel', title: 'Phone (tel: link)', type: 'string' }),
    defineField({ name: 'fax', title: 'Fax', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'hours', title: 'Office Hours', type: 'string' }),
  ],
  preview: { select: { title: 'addressLine1' } },
});
