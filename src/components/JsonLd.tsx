/**
 * Renders a JSON-LD <script> tag. Pass any schema object (or array of them).
 *
 *   <JsonLd data={organizationSchema()} />
 *   <JsonLd data={[breadcrumbSchema(...), articleSchema(...)]} />
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; it is our own structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
