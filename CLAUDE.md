# Portfólio (TheNewGuy100.github.io)

Site estático em Astro 5, publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml` a cada push na `main`.

## Regra de sincronia com o Penpot
- O Penpot é a fonte da verdade do design. **Sempre atualizar o Penpot antes de alterar o design do app.**
- Vale para layout, cores, tipografia, espaçamento, componentes e conteúdo visual. Fluxo: ajustar no Penpot, conferir o export, só então replicar no código.
- Mudanças puramente técnicas (build, dependências, bug sem efeito visual) não precisam passar pelo Penpot.
- Se um pedido vier direto para o código, atualizar o Penpot antes ou avisar que ficou fora de sincronia.

## Documento do Penpot no repositório
- O arquivo do Penpot é versionado em `design/portfolio.penpot` (exportação `.penpot`, com bibliotecas incluídas).
- **A cada commit neste repositório, se o Penpot foi alterado desde o último commit, subir o documento atualizado no mesmo commit.** Se não houve alteração no Penpot, não mexer no arquivo.
- Na dúvida (por exemplo, o usuário editou o Penpot à mão), perguntar antes de commitar.
- O `.penpot` é um arquivo zip: o diff do Git não é legível, então a mensagem do commit deve dizer o que mudou no design.
- Tamanho: o arquivo tem cerca de 4 MB (em 2026-10-29), o que é aceitável. Reavaliar (Git LFS, ou versionar o conteúdo descompactado) se passar de ~20 MB ou se o repositório passar de ~300 MB.
- Exportação: pelo Penpot (File > Export, formato `.penpot`) para `design/portfolio.penpot`. A exportação automática pelo plugin não foi validada.

## Telas no Penpot
Desktop 1440 e mobile 390: Entrada, Home, Menu aberto, Projetos, Projeto (uberGraph) e Projeto / VibeDeck. Os exemplos de animação (hover da linha, equalizador, toggle de som) ficam em boards separados.

## Tokens (mesmos nomes no Penpot: biblioteca de cores e set `core`)
- Cores: `bg #0A0B0D`, `surface #14161A`, `border #262A31`, `text #F2F4F7`, `muted #8A919C`, `accent #35F2A0`, `warn #FFB020`, `danger #FF4D4D`, `level-senior #4DA3FF`.
- Fontes: Barlow Condensed (títulos), JetBrains Mono (rótulos e detalhes), Inter (corpo).
- Níveis de linguagem: Básico vermelho, Júnior amarelo, Pleno verde, Sênior azul.

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
- Símbolo do Hollow Sign: `public/img/projetos/hollow-sign-marca.svg` (cor `#F1E9DB`, traço desgastado). No herói ele é usado como máscara CSS (`.sigilo`) nas duas camadas: apagado em `.dim` e cor de osso em `.lit`, revelado pela lanterna. No celular só a versão apagada aparece (sem mouse a lanterna ficaria parada e os fios claros cruzariam o título). Na página do projeto é a capa (`capa.retrato: true` no `.md`, que limita a altura de imagens altas). O SVG é um rastreio de pixels (só retas, sem curvas): bom até ~2x; para tamanhos maiores, refazer o vetor com curvas.
- Fonte das palavras do herói do Hollow Sign: **Help Me** (GGBotNet, SIL OFL 1.1), em `public/fonts/HelpMe.ttf` com a licença em `public/fonts/HelpMe-OFL.txt`. Manter o arquivo **original**: converter ou recortar a fonte a torna uma versão modificada, e a OFL proíbe o nome "Help Me" nela; e a licença precisa acompanhar toda cópia. Ela **não tem a maioria dos acentos** (á é í ó ú ã õ ê ô ñ...; só ç, ¿ e ü), então os textos em `HeroHollowSign.astro` devem ser escritos sem esses acentos; antes de incluir um texto novo, confira se todas as letras existem na fonte. Os textos têm dois tipos por idioma: `arquivo` (linhas pequenas de relatório de investigação) e `sussurros` (curtos e grandes); não afirmam nada sobre a história do jogo. O tamanho de cada texto se ajusta à largura da zona (que no desktop começa depois da borda direita do título e no celular termina antes do rótulo "Último projeto", ambos medidos na hora); se a fonte ou o espaçamento mudarem, reconfira as larguras estimadas (`k`) para nada passar da borda.
- O som e o equalizador só existem na página do VibeDeck. O áudio (`/audio/theme.mp3`) ainda não existe em `public/`; sem o arquivo o botão só anima o equalizador.

## Linguagens
- Em vez de nível (Básico/Júnior/Pleno/Sênior), cada linguagem mostra o contexto de uso (produção, projetos, estudo) e as provas (empresas e projetos). Editar em `src/data/perfil.ts`.

## Conteúdo
- Projetos: um `.md` por projeto em `src/content/projetos/`; páginas com design próprio ficam em `src/pages/[...lang]/projetos/<slug>.astro`.
- Ícones: pacote `simple-icons` (CC0). Sem telefone nem e-mail em texto no HTML (o e-mail é revelado por JavaScript).
