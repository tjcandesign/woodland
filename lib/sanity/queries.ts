import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const contactInfoQuery = groq`*[_type == "contactInfo"][0]`;

export const navigationQuery = groq`*[_type == "navigation"][0]`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    metaDescription,
    hero,
    sections
  }
`;

export const allPageSlugsQuery = groq`*[_type == "page" && defined(slug.current)][].slug.current`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc){
    _id, title, tag, audience, description, order
  }
`;

export const closingStepsQuery = groq`
  *[_type == "closingStep"] | order(order asc){
    _id, title, subhead, body, order
  }
`;

export const valuesQuery = groq`
  *[_type == "value"] | order(order asc){
    _id, title, label, description, order
  }
`;

export const utilityListingsQuery = groq`
  *[_type == "utilityListing"] | order(region asc, county asc, order asc){
    _id, provider, region, county, serviceType, linkLabel, url, phone, phoneTel, email, order
  }
`;
