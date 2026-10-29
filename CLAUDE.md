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

## Conteúdo
- Projetos: um `.md` por projeto em `src/content/projetos/`; páginas com design próprio ficam em `src/pages/projetos/<slug>.astro`.
- Ícones: pacote `simple-icons` (CC0). Sem telefone nem e-mail em texto no HTML (o e-mail é revelado por JavaScript).
