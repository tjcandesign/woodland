import { PortableText, type PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener">{children}</a>
    ),
  },
};

// Renders an array of Portable Text blocks as <p> paragraphs (the site's
// body copy is plain prose with occasional bold/italic/links).
export default function PortableBody({ value }: { value: unknown }) {
  if (!value || !Array.isArray(value)) return null;
  return <PortableText value={value as never} components={components} />;
}
