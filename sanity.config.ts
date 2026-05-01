import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import { apiVersion, dataset, projectId } from './sanity/env';

const SINGLETON_TYPES = new Set(['siteSettings', 'contactInfo', 'navigation']);

export default defineConfig({
  name: 'woodland',
  title: 'Woodland Estate & Title',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Contact Info')
              .id('contactInfo')
              .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
            S.listItem()
              .title('Navigation')
              .id('navigation')
              .child(S.document().schemaType('navigation').documentId('navigation')),
            S.divider(),
            S.documentTypeListItem('page').title('Pages'),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('closingStep').title('Closing Steps'),
            S.documentTypeListItem('value').title('Values'),
            S.documentTypeListItem('utilityListing').title('Utility Listings'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },
  document: {
    actions: (input, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? input.filter(({ action }) => action !== 'duplicate' && action !== 'delete')
        : input,
  },
});
