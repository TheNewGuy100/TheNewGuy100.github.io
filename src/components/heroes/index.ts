import HeroPadrao from './HeroPadrao.astro';
import HeroHollowSign from './HeroHollowSign.astro';

/**
 * Heróis dedicados, pelo slug do projeto (o nome do `.md` em `src/content/projetos/`).
 * Para dar um herói próprio a um projeto novo:
 *   1. copiar `HeroPadrao.astro` para `Hero<Nome>.astro` e trocar a arte do slot `art`;
 *   2. registrar aqui. Sem registro, o projeto usa `HeroPadrao`.
 */
export const herois: Record<string, typeof HeroPadrao> = {
  'hollow-sign': HeroHollowSign,
};

export { HeroPadrao };
