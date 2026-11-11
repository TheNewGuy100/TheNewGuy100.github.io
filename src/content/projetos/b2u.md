---
titulo: B2U
resumo: Importador rápido de Blender para Unity, com LODs, colisão e prefab pronto.
stack: [C#, Python, Unity, Blender]
status: em desenvolvimento
tipo: Ferramenta
categoria: ferramentas
destaques:
  - titulo: Exportar
    texto: Coleções ou objetos com LODs, colisão pela bounding box, sockets, materiais e metadados.
  - titulo: Importar
    texto: O Unity só importa o que mudou e preserva o que você adicionou ao prefab.
  - titulo: Sem conexão ao vivo
    texto: Blender e Unity conversam por uma pasta compartilhada, cada lado funciona com o outro fechado.
ordem: 8
---
Dois componentes que trocam dados por uma pasta compartilhada: um add-on do Blender exporta FBX e um manifesto, e um pacote do Unity monta o prefab pronto no projeto. Nasceu da necessidade de levar assets para o Hollow Sign sem retrabalho.
