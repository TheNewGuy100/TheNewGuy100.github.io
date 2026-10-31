import * as si from 'simple-icons';

interface SimpleIcon {
  slug: string;
  path: string;
}

const bySlug = new Map<string, string>();
for (const icon of Object.values(si) as unknown[]) {
  const i = icon as Partial<SimpleIcon>;
  if (i && typeof i === 'object' && i.slug && i.path) bySlug.set(i.slug, i.path);
}

/** Retorna o path SVG (viewBox 0 0 24 24) de um ícone da Simple Icons, ou undefined se não existir. */
export function iconPath(slug?: string): string | undefined {
  return slug ? bySlug.get(slug) : undefined;
}
