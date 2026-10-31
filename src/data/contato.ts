/** Endereço montado em base64 para não aparecer em texto no HTML (anti-spam); é decodificado no clique. */
const EMAIL = 'pedromenezescosta271@gmail.com';

export const emailB64 = Buffer.from(EMAIL).toString('base64');

export const links = [
  { chave: 'linkedin', rotulo: 'LinkedIn', curto: 'in/pedro-henrique-bohn-costa', href: 'https://www.linkedin.com/in/pedro-henrique-bohn-costa/' },
  { chave: 'github', rotulo: 'GitHub', curto: 'TheNewGuy100', href: 'https://github.com/TheNewGuy100' },
  { chave: 'epic', rotulo: 'Epic Developer Community', curto: 'Epic Developer Community', href: 'https://dev.epicgames.com/community/profile/QKlXQ/Mutei_voce' },
  { chave: 'unity', rotulo: 'Unity Learn', curto: 'Unity Learn', href: 'https://learn.unity.com/u/6165171dedbc2a38932a0287' },
];

/** Caminho do currículo em PDF (arquivo em public/). */
export const curriculo = '/curriculo.pdf';
