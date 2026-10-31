import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    tagline: z.string().optional(),
    stack: z.array(z.string()),
    status: z.enum(['em desenvolvimento', 'open-source', 'concluído']),
    tipo: z.string(),
    /** Categoria do filtro na listagem. */
    categoria: z.enum(['jogos', 'ferramentas', 'web']),
    repo: z.string().url().optional(),
    /** Imagem de capa (caminho em public/) e o texto alternativo dela. */
    capa: z.object({ src: z.string(), alt: z.string() }).optional(),
    destaques: z.array(z.object({ titulo: z.string(), texto: z.string() })).default([]),
    /** Se true, a página tem design próprio em src/pages/projetos/<slug>.astro. */
    paginaPropria: z.boolean().default(false),
    ordem: z.number().default(100),
  }),
});

export const collections = { projetos };
