import type { Lang } from '../i18n';

/** Endereço montado em base64 para não aparecer em texto no HTML (anti-spam); é decodificado no clique. */
const EMAIL = 'pedromenezescosta271@gmail.com';

export const emailB64 = Buffer.from(EMAIL).toString('base64');

export const links = [
  { chave: 'linkedin', rotulo: 'LinkedIn', curto: 'in/pedro-henrique-bohn-costa', href: 'https://www.linkedin.com/in/pedro-henrique-bohn-costa/' },
  { chave: 'github', rotulo: 'GitHub', curto: 'TheNewGuy100', href: 'https://github.com/TheNewGuy100' },
  { chave: 'epic', rotulo: 'Epic Developer Community', curto: 'Epic Developer Community', href: 'https://dev.epicgames.com/community/profile/QKlXQ/Mutei_voce' },
  { chave: 'unity', rotulo: 'Unity Learn', curto: 'Unity Learn', href: 'https://learn.unity.com/u/6165171dedbc2a38932a0287' },
];

/**
 * Currículo em PDF por idioma. Os arquivos ficam em public/ e são versões públicas: sem e-mail nem telefone
 * (o repositório é aberto). O espanhol usa a versão em inglês até existir uma em espanhol.
 * `arquivo` é o nome mostrado no terminal de contato; `nome` é o nome do arquivo baixado.
 */
const curriculos: Record<Lang, { href: string; arquivo: string; nome: string }> = {
  pt: { href: '/curriculo-pt.pdf', arquivo: 'curriculo-pt.pdf', nome: 'Pedro-Henrique-Bohn-Costa-Curriculo-PT.pdf' },
  en: { href: '/curriculo-en.pdf', arquivo: 'resume-en.pdf', nome: 'Pedro-Henrique-Bohn-Costa-Resume-EN.pdf' },
  es: { href: '/curriculo-en.pdf', arquivo: 'resume-en.pdf', nome: 'Pedro-Henrique-Bohn-Costa-Resume-EN.pdf' },
};

export const curriculo = (lang: Lang) => curriculos[lang];
