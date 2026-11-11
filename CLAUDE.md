# Portfólio (TheNewGuy100.github.io)

Site estático em Astro 5, publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml` a cada push na `main`.

## Design
- O design nasceu como protótipo no Penpot (`design/portfolio.penpot`). Isso valeu para a fase inicial: **o Penpot não é mais a fonte da verdade e não precisa ser atualizado.** O código é a referência; o arquivo fica só como registro do protótipo inicial (não exportar de novo).
- Telas e componentes mais novos (herói por projeto, seletor de idioma, linguagens por contexto de uso, marca do Hollow Sign) existem só no código.

## Tokens
- Cores: `bg #0A0B0D`, `surface #14161A`, `border #262A31`, `text #F2F4F7`, `muted #8A919C`, `accent #35F2A0`, `warn #FFB020`, `danger #FF4D4D`, `level-senior #4DA3FF` (hoje marca "em projetos" nas linguagens).
- Fontes: Barlow Condensed (títulos), JetBrains Mono (rótulos e detalhes), Inter (corpo).

## Idiomas (PT, EN, ES)
- Rotas: `src/pages/[...lang]/`. Português fica na raiz (`/`), os outros em `/en/` e `/es/`. O segmento `projetos` é o mesmo nos três idiomas.
- Componentes e páginas descobrem o idioma pela URL (`getLang(Astro.url)` em `src/i18n/index.ts`) e montam links com `href(lang, '/caminho/')`. Nunca escrever links internos fixos como `/projetos/`.
- Textos da interface: `src/i18n/ui.ts`. Em, es e pt precisam ter as mesmas chaves (o tipo do `pt` vale para os três). Textos do perfil (sobre, experiência, formação, práticas): `src/i18n/perfil.ts`.
- Projetos: o `.md` continua em português (fonte da verdade); as traduções EN e ES ficam em `src/i18n/projetos.ts`, por slug. Ao criar um projeto, cadastrar as duas traduções lá, senão a página cai para o português.
- Em `getStaticPaths` de página com código depois dele, usar `export function getStaticPaths() {}`. A forma `export const getStaticPaths = () => ...` faz o Astro içar o código seguinte para o escopo do módulo e o build quebra.
- Primeira visita à raiz: um script em `Base.astro` redireciona para `/en/` ou `/es/` se o navegador estiver nesses idiomas e não houver `lang` salvo em `localStorage`. O seletor do cabeçalho grava a escolha.

## Tela inicial
- `Hero.astro`: projeto em destaque com 65% da altura da janela + faixa de identidade com o resto. O destaque é o projeto com `atualizado` mais recente no frontmatter do `.md`; para trocar, atualizar a data do projeto novo.
- Heróis dedicados ficam em `src/components/heroes/`: `HeroFrame.astro` (palco, textos e botões; a arte entra no slot `art`), `HeroPadrao.astro` (reserva) e um `Hero<Nome>.astro` por projeto, registrado pelo slug em `heroes/index.ts`. Projeto novo sem herói dedicado usa o padrão. Para criar um: copiar `HeroPadrao.astro`, trocar a arte do slot e registrar.
- `HeroHollowSign.astro`: palavras que surgem e somem (JS, aleatórias, só na metade direita no desktop) e a "lanterna" do mouse. A máscara da lanterna precisa estar numa camada do tamanho do palco: se ficar numa caixa menor, o mouse só acende a parte da esquerda.
- Símbolo do Hollow Sign: `public/img/projetos/hollow-sign-marca.svg` (cor `#F1E9DB`, traço desgastado). No herói ele é usado como máscara CSS (`.sigilo`) nas duas camadas: apagado em `.dim` e cor de osso em `.lit`, revelado pela lanterna. No celular só a versão apagada aparece (sem mouse a lanterna ficaria parada e os fios claros cruzariam o título). A capa da página do projeto é a arte-chave com a logo completa, `public/img/projetos/hollow-sign-capa.webp` (2:1, otimizada de 2 MB para ~77 KB; o PNG original não fica no repositório). `capa.retrato: true` no `.md` continua disponível para imagens altas, que passam a ter a altura limitada em vez de esticar na largura. O SVG é um rastreio de pixels (só retas, sem curvas): bom até ~2x; para tamanhos maiores, refazer o vetor com curvas.
- Fonte das palavras do herói do Hollow Sign: **Help Me** (GGBotNet, SIL OFL 1.1), em `public/fonts/HelpMe.ttf` com a licença em `public/fonts/HelpMe-OFL.txt`. Manter o arquivo **original**: converter ou recortar a fonte a torna uma versão modificada, e a OFL proíbe o nome "Help Me" nela; e a licença precisa acompanhar toda cópia. Ela **não tem a maioria dos acentos** (á é í ó ú ã õ ê ô ñ...; só ç, ¿ e ü), então os textos em `HeroHollowSign.astro` devem ser escritos sem esses acentos; antes de incluir um texto novo, confira se todas as letras existem na fonte. Os textos têm dois tipos por idioma: `arquivo` (linhas pequenas de relatório de investigação) e `sussurros` (curtos e grandes); não afirmam nada sobre a história do jogo. O tamanho de cada texto se ajusta à largura da zona (que no desktop começa depois da borda direita do título e no celular termina antes do rótulo "Último projeto", ambos medidos na hora); se a fonte ou o espaçamento mudarem, reconfira as larguras estimadas (`k`) para nada passar da borda.
- O som e o equalizador só existem na página do VibeDeck. O áudio (`/audio/theme.mp3`) ainda não existe em `public/`; sem o arquivo o botão só anima o equalizador.

## Linguagens
- Em vez de nível (Básico/Júnior/Pleno/Sênior), cada linguagem mostra o contexto de uso (produção, projetos, estudo) e as provas (empresas e projetos). Editar em `src/data/perfil.ts`.

## Conteúdo
- Projetos: um `.md` por projeto em `src/content/projetos/`; páginas com design próprio ficam em `src/pages/[...lang]/projetos/<slug>.astro`.
- Ícones: pacote `simple-icons` (CC0). Sem telefone nem e-mail em texto no HTML (o e-mail é revelado por JavaScript).
- Currículo: `public/curriculo-pt.pdf` e `public/curriculo-en.pdf` (o espanhol usa o inglês; o mapeamento fica em `src/data/contato.ts`). Como o repositório é público, são versões **sem e-mail nem telefone**: nunca publicar a versão completa aqui. Os bullets da Innovo ainda não foram confirmados e ficaram de fora; ao incluir, usar só o que o Pedro confirmar.
