import type { Lang } from './index';

type L = Record<Lang, string>;

export const sobre: L = {
  pt: 'Desenvolvedor Full Stack com mais de 5 anos construindo APIs, SaaS e e-commerce em Node.js, TypeScript e React/Next.js — e, fora do expediente, criador de jogos e ferramentas de modding.',
  en: 'Full Stack Developer with 5+ years building APIs, SaaS platforms and e-commerce with Node.js, TypeScript and React/Next.js — and, off the clock, a builder of games and modding tools.',
  es: 'Desarrollador Full Stack con más de 5 años creando APIs, SaaS y e-commerce con Node.js, TypeScript y React/Next.js — y, fuera del horario laboral, creador de juegos y herramientas de modding.',
};

export const presente: L = { pt: 'atual', en: 'present', es: 'actual' };

export const experiencia: { inicio: string; fim: string | null; cargo: L; empresa: string }[] = [
  {
    inicio: '08/2026',
    fim: null,
    cargo: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    empresa: 'Innovo',
  },
  {
    inicio: '01/2024',
    fim: '12/2025',
    cargo: { pt: 'Analista de Desenvolvimento', en: 'Development Analyst', es: 'Analista de Desarrollo' },
    empresa: 'FI Group',
  },
  {
    inicio: '10/2023',
    fim: '01/2024',
    cargo: {
      pt: 'Desenvolvedor de automação de testes',
      en: 'Test Automation Developer',
      es: 'Desarrollador de automatización de pruebas',
    },
    empresa: 'Aliare',
  },
  {
    inicio: '04/2021',
    fim: '04/2023',
    cargo: { pt: 'Desenvolvedor Back-end Júnior', en: 'Junior Back-end Developer', es: 'Desarrollador Back-end Junior' },
    empresa: 'Compasso UOL',
  },
  {
    inicio: '12/2020',
    fim: '02/2021',
    cargo: {
      pt: 'Estagiário, Formação em Desenvolvimento Web',
      en: 'Intern, Web Development Training',
      es: 'Pasante, Formación en Desarrollo Web',
    },
    empresa: 'Metta',
  },
];

export const formacao: L[] = [
  {
    pt: 'Bacharelado em Ciências da Computação · URI · 2025',
    en: 'Bachelor’s in Computer Science · URI · 2025',
    es: 'Grado en Ciencias de la Computación · URI · 2025',
  },
  {
    pt: 'Pós-graduação em Segurança Ofensiva e Red Team Operations · Impacta · previsto 05/2027',
    en: 'Postgraduate in Offensive Cyber Security and Red Team Operations · Impacta · expected 05/2027',
    es: 'Posgrado en Seguridad Ofensiva y Red Team Operations · Impacta · previsto 05/2027',
  },
];

export const praticas: L[] = [
  { pt: 'Scrum', en: 'Scrum', es: 'Scrum' },
  { pt: 'Kanban', en: 'Kanban', es: 'Kanban' },
  { pt: 'REST APIs', en: 'REST APIs', es: 'REST APIs' },
  { pt: 'Microsserviços', en: 'Microservices', es: 'Microservicios' },
  { pt: 'Revisão de código', en: 'Code review', es: 'Revisión de código' },
  { pt: 'Automação de testes', en: 'Test automation', es: 'Automatización de pruebas' },
  { pt: 'Documentação técnica', en: 'Technical documentation', es: 'Documentación técnica' },
  { pt: 'IA para eficiência', en: 'AI for efficiency', es: 'IA para la eficiencia' },
];

/** Nomes dos grupos da seção Stack, pelo `id` definido em `data/perfil.ts`. */
export const stackGrupos: Record<string, L> = {
  frontend: { pt: 'Frontend', en: 'Frontend', es: 'Frontend' },
  backend: { pt: 'Backend e dados', en: 'Backend and data', es: 'Backend y datos' },
  testes: { pt: 'Testes e DevOps', en: 'Testing and DevOps', es: 'Pruebas y DevOps' },
  versionamento: { pt: 'Versionamento e IDE', en: 'Version control and IDE', es: 'Control de versiones e IDE' },
  gestao: { pt: 'Gestão, APIs e design', en: 'Management, APIs and design', es: 'Gestión, APIs y diseño' },
  game: { pt: 'Game dev', en: 'Game dev', es: 'Game dev' },
};
