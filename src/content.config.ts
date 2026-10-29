import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    destaque: z.boolean().default(false),
    ordem: z.number().default(100),
  }),
});

export const collections = { projetos };
