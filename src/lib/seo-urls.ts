// Canonical list of all indexed URLs for the new site structure.
// Keep in sync as pages are added/removed.
// Paths are byte-for-byte: non-www, lowercase, trailing slash.

export interface SeoUrl {
  path: string;
  lastModified: string;
  priority: number;
}

export const SEO_URLS: SeoUrl[] = [
  { path: '/', lastModified: '2026-11-18', priority: 1.0 },
  { path: '/umrah-packages/', lastModified: '2026-11-18', priority: 0.9 },
  { path: '/umrah-packages/3-star/', lastModified: '2026-11-18', priority: 0.8 },
  { path: '/umrah-packages/4-star/', lastModified: '2026-11-18', priority: 0.8 },
  { path: '/umrah-packages/5-star/', lastModified: '2026-11-18', priority: 0.8 },
  { path: '/umrah-packages/ramadan/', lastModified: '2026-11-18', priority: 0.7 },
  { path: '/umrah-packages/december/', lastModified: '2026-11-18', priority: 0.7 },
  { path: '/hajj-packages/', lastModified: '2026-11-18', priority: 0.9 },
  { path: '/umrah-transport/', lastModified: '2026-11-18', priority: 0.8 },
  { path: '/umrah-transport/vehicles/', lastModified: '2026-11-18', priority: 0.7 },
  { path: '/umrah-transport/routes/', lastModified: '2026-11-18', priority: 0.6 },
  { path: '/ziyarat/', lastModified: '2026-11-18', priority: 0.8 },
  { path: '/hotels/', lastModified: '2026-11-18', priority: 0.8 },
  { path: '/about/', lastModified: '2026-11-18', priority: 0.7 },
  { path: '/contact/', lastModified: '2026-11-18', priority: 0.7 },
  { path: '/payments-refunds/', lastModified: '2026-11-18', priority: 0.4 },
  { path: '/complaints/', lastModified: '2026-11-18', priority: 0.4 },
  { path: '/privacy-policy/', lastModified: '2026-11-18', priority: 0.4 },
  { path: '/terms-and-conditions/', lastModified: '2026-11-18', priority: 0.4 },
];
