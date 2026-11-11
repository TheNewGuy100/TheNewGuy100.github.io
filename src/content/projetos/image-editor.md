---
titulo: ImageEditor
resumo: Editor de imagens com filtros escritos à mão, pixel a pixel.
stack: [C#, Windows Forms]
status: concluído
tipo: Estudo
categoria: ferramentas
repo: https://github.com/TheNewGuy100/Image-Editor
capa:
  src: /img/projetos/image-editor.png
  alt: Editor de imagem com tema escuro, ferramentas à esquerda, uma praia em preto e branco no centro e o console de ações aberto na base.
destaques:
  - titulo: Filtros à mão
    texto: Mediana para reduzir ruído (3x3 a 15x15), equalização de histograma e bordas de Roberts, sem bibliotecas de imagem.
  - titulo: Console de ações
    texto: Gaveta recolhível (Ctrl+J) com mensagens com horário e cor.
  - titulo: Interface
    texto: Janela redimensionável com tema escuro.
ordem: 4
---
Editor de imagens em Windows Forms criado para um projeto da graduação. Cada filtro usa só conceitos de manipulação de matrizes: giro e espelhamento, conversão para preto e branco, redução de ruído por mediana, equalização de histograma e detecção de bordas pelo gradiente cruzado de Roberts.
