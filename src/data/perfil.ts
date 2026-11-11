/** Dados do perfil que não mudam de idioma. Os textos traduzíveis (sobre, experiência, formação, práticas) ficam em `src/i18n/perfil.ts`. */

export interface Item {
  nome: string;
  /** Slug da Simple Icons; sem slug usa o monograma. */
  slug?: string;
  mono?: string;
}

/**
 * Em vez de um nível autodeclarado (Básico/Júnior/Pleno/Sênior), cada linguagem mostra onde ela já foi usada de verdade:
 * - producao: trabalho profissional;
 * - projetos: projetos pessoais ou acadêmicos que estão no portfólio;
 * - estudo: ainda em aprendizado.
 * `provas` lista empresas ou projetos que comprovam o uso (nomes próprios, iguais em todos os idiomas).
 */
export type Contexto = 'producao' | 'projetos' | 'estudo';

export const contextos: Record<Contexto, { cor: string }> = {
  producao: { cor: 'var(--accent)' },
  projetos: { cor: 'var(--senior)' },
  estudo: { cor: 'var(--warn)' },
};

export const linguagens: (Item & { contexto: Contexto; provas: string[] })[] = [
  { nome: 'TypeScript', slug: 'typescript', contexto: 'producao', provas: ['FI Group', 'Compasso UOL'] },
  { nome: 'JavaScript', slug: 'javascript', contexto: 'producao', provas: ['FI Group', 'Compasso UOL'] },
  { nome: 'C#', mono: 'C#', contexto: 'projetos', provas: ['Hollow Sign', 'B2U', 'ImageEditor'] },
  { nome: 'Java', slug: 'openjdk', contexto: 'projetos', provas: [] },
  { nome: 'Python', slug: 'python', contexto: 'projetos', provas: ['HumansVSZombies', 'uberGraph'] },
  { nome: 'C++', slug: 'cplusplus', contexto: 'projetos', provas: ['OpenGL'] },
  { nome: 'C', slug: 'c', contexto: 'estudo', provas: [] },
  { nome: 'Lua', mono: 'Lua', contexto: 'projetos', provas: ['ShipVsMeteors'] },
];

/** `id` liga o grupo ao nome traduzido em `stackGrupos` (`src/i18n/perfil.ts`). */
export const stack: { id: string; itens: Item[] }[] = [
  {
    id: 'frontend',
    itens: [
      { nome: 'Angular', slug: 'angular' },
      { nome: 'React', slug: 'react' },
      { nome: 'Next.js', slug: 'nextdotjs' },
      { nome: 'Ant Design', slug: 'antdesign' },
      { nome: 'SCSS', slug: 'sass' },
    ],
  },
  {
    id: 'backend',
    itens: [
      { nome: 'Node.js', slug: 'nodedotjs' },
      { nome: 'Express', slug: 'express' },
      { nome: 'NestJS', slug: 'nestjs' },
      { nome: 'GraphQL', slug: 'graphql' },
      { nome: 'Socket.IO', slug: 'socketdotio' },
      { nome: 'PostgreSQL', slug: 'postgresql' },
      { nome: 'MySQL', slug: 'mysql' },
    ],
  },
  {
    id: 'testes',
    itens: [
      { nome: 'Jest', slug: 'jest' },
      { nome: 'Cypress', slug: 'cypress' },
      { nome: 'Playwright', mono: 'Pw' },
      { nome: 'Docker', slug: 'docker' },
      { nome: 'Jenkins', slug: 'jenkins' },
      { nome: 'Azure DevOps', mono: 'Az' },
      { nome: 'AWS', mono: 'AWS' },
    ],
  },
  {
    id: 'versionamento',
    itens: [
      { nome: 'Git', slug: 'git' },
      { nome: 'GitLab', slug: 'gitlab' },
      { nome: 'Bitbucket', slug: 'bitbucket' },
      { nome: 'VS Code', mono: 'VSC' },
      { nome: 'Visual Studio', mono: 'VS' },
    ],
  },
  {
    id: 'gestao',
    itens: [
      { nome: 'Jira', slug: 'jira' },
      { nome: 'Confluence', slug: 'confluence' },
      { nome: 'Postman', slug: 'postman' },
      { nome: 'Insomnia', slug: 'insomnia' },
      { nome: 'Figma', slug: 'figma' },
    ],
  },
  {
    id: 'game',
    itens: [
      { nome: 'Unity', slug: 'unity' },
      { nome: 'Unreal Engine', slug: 'unrealengine' },
      { nome: 'OpenGL', slug: 'opengl' },
      { nome: 'Lua', mono: 'Lua' },
    ],
  },
];
