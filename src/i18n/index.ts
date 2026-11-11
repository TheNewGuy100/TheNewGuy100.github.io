export const langs = ['pt', 'en', 'es'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'pt';

/** Valor do atributo `lang` do <html> e do hreflang. */
export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
export const langNames: Record<Lang, string> = { pt: 'Português', en: 'English', es: 'Español' };
const intlLocale: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };

/** Idioma da página atual, pelo primeiro segmento do caminho (`/en/...`, `/es/...`; o resto é português). */
export function getLang(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' || seg === 'es' ? seg : 'pt';
}

/** Caminho sem o prefixo de idioma, sempre começando com `/`. */
export function stripLang(pathname: string): string {
  return pathname.replace(/^\/(en|es)(?=\/|$)/, '') || '/';
}

/** Monta o link de uma rota (`/`, `/projetos/`, `/#sobre`...) no idioma pedido. Português fica na raiz. */
export function href(lang: Lang, path: string): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return path === '/' ? `${prefix}/` : `${prefix}${path}`;
}

/** Parâmetros para `getStaticPaths` das rotas `[...lang]`: português sem prefixo, os demais com. */
export function langPaths(): { params: { lang: string | undefined } }[] {
  return langs.map((l) => ({ params: { lang: l === defaultLang ? undefined : l } }));
}

export const pad = (n: number): string => String(n).padStart(2, '0');

/** Mês abreviado e ano, no idioma da página (ex.: "nov. de 2026", "Nov 2026"). */
export function mesAno(lang: Lang, date: Date): string {
  return new Intl.DateTimeFormat(intlLocale[lang], { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
}
