export const sobre =
  'Desenvolvedor Full Stack desde 2020, com foco em back-end e automação de testes — e, fora do expediente, criador de jogos e ferramentas de modding.';

export const experiencia = [
  { periodo: '01/2024 – 12/2025', cargo: 'Analista de Desenvolvimento', empresa: 'FI Group' },
  { periodo: '10/2023 – 01/2024', cargo: 'Desenvolvedor de automação de testes', empresa: 'Aliare' },
  { periodo: '04/2021 – 04/2023', cargo: 'Desenvolvedor Back-end Júnior', empresa: 'Compass UOL' },
  { periodo: '12/2020 – 02/2021', cargo: 'Estagiário, Formação em Desenvolvimento Web', empresa: 'Metta' },
];

export const formacao = [
  'Bacharelado em Ciências da Computação · URI · 2025',
  'Pós em Cyber Offensive e Red Team Operations · Impacta Digital · previsto 05/2027',
];

export type Nivel = 'basico' | 'junior' | 'pleno' | 'senior';

export const niveis: Record<Nivel, { rotulo: string; cor: string; pct: number }> = {
  basico: { rotulo: 'Básico', cor: 'var(--danger)', pct: 25 },
  junior: { rotulo: 'Júnior', cor: 'var(--warn)', pct: 50 },
  pleno: { rotulo: 'Pleno', cor: 'var(--accent)', pct: 75 },
  senior: { rotulo: 'Sênior', cor: 'var(--senior)', pct: 100 },
};

export interface Item {
  nome: string;
  /** Slug da Simple Icons; sem slug usa o monograma. */
  slug?: string;
  mono?: string;
}

export const linguagens: (Item & { nivel: Nivel })[] = [
  { nome: 'TypeScript', slug: 'typescript', nivel: 'pleno' },
  { nome: 'JavaScript', slug: 'javascript', nivel: 'pleno' },
  { nome: 'C#', mono: 'C#', nivel: 'pleno' },
  { nome: 'Java', slug: 'openjdk', nivel: 'pleno' },
  { nome: 'Python', slug: 'python', nivel: 'junior' },
  { nome: 'C++', slug: 'cplusplus', nivel: 'junior' },
  { nome: 'C', slug: 'c', nivel: 'basico' },
  { nome: 'Lua', mono: 'Lua', nivel: 'junior' },
];

export const stack: { grupo: string; itens: Item[] }[] = [
  {
    grupo: 'Frontend',
    itens: [
      { nome: 'Angular', slug: 'angular' },
      { nome: 'React', slug: 'react' },
      { nome: 'Next.js', slug: 'nextdotjs' },
      { nome: 'Ant Design', slug: 'antdesign' },
      { nome: 'SCSS', slug: 'sass' },
    ],
  },
  {
    grupo: 'Backend e dados',
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
    grupo: 'Testes e DevOps',
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
    grupo: 'Versionamento e IDE',
    itens: [
      { nome: 'Git', slug: 'git' },
      { nome: 'GitLab', slug: 'gitlab' },
      { nome: 'Bitbucket', slug: 'bitbucket' },
      { nome: 'VS Code', mono: 'VSC' },
      { nome: 'Visual Studio', mono: 'VS' },
    ],
  },
  {
    grupo: 'Gestão, APIs e design',
    itens: [
      { nome: 'Jira', slug: 'jira' },
      { nome: 'Confluence', slug: 'confluence' },
      { nome: 'Postman', slug: 'postman' },
      { nome: 'Insomnia', slug: 'insomnia' },
      { nome: 'Figma', slug: 'figma' },
    ],
  },
  {
    grupo: 'Game dev',
    itens: [
      { nome: 'Unity', slug: 'unity' },
      { nome: 'Unreal Engine', slug: 'unrealengine' },
      { nome: 'OpenGL', slug: 'opengl' },
      { nome: 'Lua', mono: 'Lua' },
    ],
  },
];

export const praticas = [
  'Scrum',
  'Kanban',
  'REST APIs',
  'Microsserviços',
  'Revisão de código',
  'Automação de testes',
  'Documentação técnica',
  'IA para eficiência',
];
