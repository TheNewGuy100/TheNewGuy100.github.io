import type { CollectionEntry } from 'astro:content';
import type { Lang } from './index';

interface Traducao {
  resumo: string;
  /** Texto da seção "Sobre o projeto". */
  corpo: string;
  capaAlt?: string;
  destaques?: { titulo: string; texto: string }[];
}

/**
 * Traduções dos projetos, por slug. O português continua nos `.md` (fonte da verdade); aqui ficam EN e ES.
 * Campos que não mudam de idioma (título, stack, status, repo, capa, ordem) vêm sempre do `.md`.
 */
const traducoes: Record<string, Partial<Record<'en' | 'es', Traducao>>> = {
  ubergraph: {
    en: {
      resumo: 'Evidence-driven modding toolkit and AI bridge for Unreal Engine games.',
      corpo:
        'Evidence-driven modding toolkit and AI bridge for Unreal Engine games: read a running game, build and cook reversible mods, and deploy safely.',
      destaques: [
        { titulo: 'Read', texto: 'Reads the state of a running game.' },
        { titulo: 'Build', texto: 'Builds and cooks reversible mods.' },
        { titulo: 'Publish', texto: 'Deploys safely.' },
      ],
    },
    es: {
      resumo: 'Toolkit de modding orientado a evidencias y puente con IA para juegos de Unreal Engine.',
      corpo:
        'Toolkit de modding orientado a evidencias y puente con IA para juegos de Unreal Engine: leer un juego en ejecución, construir y cocinar (cook) mods reversibles y hacer el despliegue de forma segura.',
      destaques: [
        { titulo: 'Leer', texto: 'Lee el estado de un juego en ejecución.' },
        { titulo: 'Construir', texto: 'Arma y cocina mods reversibles.' },
        { titulo: 'Publicar', texto: 'Hace el despliegue de forma segura.' },
      ],
    },
  },
  'hollow-sign': {
    en: {
      resumo: 'First-person investigation horror game.',
      corpo:
        'First-person investigation and horror game built in Unity (URP, Input System, UI Toolkit). In development, with a domain-based architecture: one assembly per domain, communicating through interfaces and events.',
      capaAlt: 'Hollow Sign key art: the game name in gothic letters around the emblem, over a dark table with a blood-stained leather case, a radio with an amber display, bullets, a photo of a church and occult maps.',
    },
    es: {
      resumo: 'Terror de investigación en primera persona.',
      corpo:
        'Juego de investigación y terror en primera persona hecho en Unity (URP, Input System, UI Toolkit). En desarrollo, con arquitectura por dominios: un assembly por dominio y comunicación mediante interfaces y eventos.',
      capaAlt: 'Arte de Hollow Sign: el nombre del juego en letras góticas alrededor del emblema, sobre una mesa oscura con un maletín de cuero manchado de sangre, una radio con pantalla ámbar, balas, la foto de una iglesia y mapas ocultistas.',
    },
  },
  'personal-finance': {
    en: { resumo: 'Open-source personal finance manager.', corpo: 'Open-source personal finance manager.' },
    es: {
      resumo: 'Gestor de finanzas personales de código abierto.',
      corpo: 'Gestor de finanzas personales de código abierto.',
    },
  },
  'image-editor': {
    en: {
      resumo: 'Image editor with hand-written filters, pixel by pixel.',
      corpo:
        'Image editor in Windows Forms created for a university project. Every filter uses only matrix-manipulation concepts: rotation and flipping, grayscale conversion, median noise reduction, histogram equalization and edge detection with the Roberts cross gradient.',
      capaAlt:
        'Dark-themed image editor with tools on the left, a black-and-white beach in the center and the actions console open at the bottom.',
      destaques: [
        {
          titulo: 'Hand-written filters',
          texto: 'Median filter for noise reduction (3x3 to 15x15), histogram equalization and Roberts edges, with no image libraries.',
        },
        { titulo: 'Actions console', texto: 'Collapsible drawer (Ctrl+J) with timestamped, color-coded messages.' },
        { titulo: 'Interface', texto: 'Resizable window with a dark theme.' },
      ],
    },
    es: {
      resumo: 'Editor de imágenes con filtros escritos a mano, píxel por píxel.',
      corpo:
        'Editor de imágenes en Windows Forms creado para un proyecto de la carrera. Cada filtro usa solo conceptos de manipulación de matrices: giro y espejo, conversión a blanco y negro, reducción de ruido por mediana, ecualización de histograma y detección de bordes por el gradiente cruzado de Roberts.',
      capaAlt:
        'Editor de imágenes con tema oscuro, herramientas a la izquierda, una playa en blanco y negro en el centro y la consola de acciones abierta en la base.',
      destaques: [
        {
          titulo: 'Filtros a mano',
          texto: 'Mediana para reducir ruido (3x3 a 15x15), ecualización de histograma y bordes de Roberts, sin bibliotecas de imagen.',
        },
        { titulo: 'Consola de acciones', texto: 'Panel plegable (Ctrl+J) con mensajes con hora y color.' },
        { titulo: 'Interfaz', texto: 'Ventana redimensionable con tema oscuro.' },
      ],
    },
  },
  opengl: {
    en: {
      resumo: '3D C++ scene with SpongeBob built only from vertices and Bézier curves.',
      corpo:
        'A project to practice OpenGL: a 3D scene in C++ with freeglut, where SpongeBob is built only from simple vertex objects and Bézier curves, over a reference grid.',
      capaAlt:
        'OpenGL scene with SpongeBob waving his left arm, on a green floor and a grid, surrounded by colorful geometric shapes.',
      destaques: [
        { titulo: 'Vertices', texto: 'The character and the scene shapes are built from basic vertex objects.' },
        { titulo: 'Bézier curve', texto: 'The mouth is drawn with a quadratic Bézier curve.' },
        { titulo: 'Camera and animation', texto: 'Orbital camera with a movable pivot and an articulated arm that waves.' },
      ],
    },
    es: {
      resumo: 'Escena 3D en C++ con Bob Esponja armado solo con vértices y curvas de Bézier.',
      corpo:
        'Proyecto para practicar OpenGL: una escena 3D en C++ con freeglut, donde Bob Esponja se arma solo con objetos de vértices simples y curvas de Bézier, sobre una grilla de referencia.',
      capaAlt:
        'Escena en OpenGL con Bob Esponja saludando con el brazo izquierdo, sobre un suelo verde y una grilla, rodeado de formas geométricas coloridas.',
      destaques: [
        { titulo: 'Vértices', texto: 'El personaje y las formas de la escena se arman con objetos básicos de vértices.' },
        { titulo: 'Curva de Bézier', texto: 'La boca se dibuja con una curva de Bézier cuadrática.' },
        { titulo: 'Cámara y animación', texto: 'Cámara orbital con pivote móvil y un brazo articulado que saluda.' },
      ],
    },
  },
  vibedeck: {
    en: {
      resumo: 'Desktop player that combines local music and YouTube Music.',
      corpo: 'A personal desktop music client built with Tauri, Vue and Rust.',
    },
    es: {
      resumo: 'Reproductor de escritorio que une música local y YouTube Music.',
      corpo: 'Cliente de música de escritorio personal, hecho con Tauri, Vue y Rust.',
    },
  },
  'wagering-processor': {
    en: {
      resumo: 'Casino wagering processor that stays correct under duplicate, out-of-order and concurrent deliveries.',
      corpo:
        'Processes betting transactions from multiple game providers and stays financially correct even with duplicated, out-of-order or concurrent messages. Built with Bun, TypeScript, NestJS, MikroORM, PostgreSQL and SQS, with decisions and limitations documented in an ARCHITECTURE.md.',
      destaques: [
        { titulo: 'Idempotency', texto: 'BET, WIN, LOSS, REFUND and ROLLBACK transactions from several providers, with no double effect.' },
        { titulo: 'Concurrency', texto: 'Transactional core and per-wallet outbox, working with any number of instances.' },
        { titulo: 'Observability', texto: 'Grafana, Prometheus and Keycloak start with a single Docker Compose command.' },
      ],
    },
    es: {
      resumo: 'Procesador de apuestas de casino correcto ante entregas duplicadas, desordenadas y concurrentes.',
      corpo:
        'Procesa transacciones de apuestas de varios proveedores de juegos y se mantiene financieramente correcto incluso con mensajes duplicados, desordenados o concurrentes. Hecho con Bun, TypeScript, NestJS, MikroORM, PostgreSQL y SQS, con las decisiones y limitaciones documentadas en un ARCHITECTURE.md.',
      destaques: [
        { titulo: 'Idempotencia', texto: 'Transacciones BET, WIN, LOSS, REFUND y ROLLBACK de varios proveedores, sin efecto doble.' },
        { titulo: 'Concurrencia', texto: 'Núcleo transaccional y outbox por billetera, funcionando con cualquier número de instancias.' },
        { titulo: 'Observabilidad', texto: 'Grafana, Prometheus y Keycloak se levantan con un único comando de Docker Compose.' },
      ],
    },
  },
  b2u: {
    en: {
      resumo: 'Fast Blender-to-Unity importer with LODs, collision and a ready-made prefab.',
      corpo:
        'Two components that exchange data through a shared folder: a Blender add-on exports FBX and a manifest, and a Unity package builds the ready-made prefab in the project. It was born from the need to bring assets into Hollow Sign without rework.',
      destaques: [
        { titulo: 'Export', texto: 'Collections or objects with LODs, collision from the bounding box, sockets, materials and metadata.' },
        { titulo: 'Import', texto: 'Unity only imports what changed and preserves what you added to the prefab.' },
        { titulo: 'No live connection', texto: 'Blender and Unity talk through a shared folder; each side works with the other closed.' },
      ],
    },
    es: {
      resumo: 'Importador rápido de Blender a Unity, con LODs, colisión y prefab listo.',
      corpo:
        'Dos componentes que intercambian datos mediante una carpeta compartida: un add-on de Blender exporta FBX y un manifiesto, y un paquete de Unity arma el prefab listo en el proyecto. Nació de la necesidad de llevar assets a Hollow Sign sin retrabajo.',
      destaques: [
        { titulo: 'Exportar', texto: 'Colecciones u objetos con LODs, colisión por bounding box, sockets, materiales y metadatos.' },
        { titulo: 'Importar', texto: 'Unity solo importa lo que cambió y conserva lo que agregaste al prefab.' },
        { titulo: 'Sin conexión en vivo', texto: 'Blender y Unity se comunican por una carpeta compartida; cada lado funciona con el otro cerrado.' },
      ],
    },
  },
  'tab-diet': {
    en: {
      resumo: 'Firefox extension that unloads the least-used tabs to save RAM.',
      corpo:
        'Free Firefox extension that keeps a budget of loaded tabs. It protects tabs in use, pinned tabs and tabs playing audio, supports per-site rules, and has an interface in English and Portuguese.',
      destaques: [
        { titulo: 'Tab budget', texto: 'Discards the least used (LRU) and idle tabs, with Light, Normal and Strict modes.' },
        { titulo: 'Optional helper', texto: 'A native Rust helper measures real memory and adjusts the budget when the system gets tight.' },
        { titulo: 'Privacy', texto: 'Everything local, with no telemetry, accounts or network.' },
      ],
    },
    es: {
      resumo: 'Extensión de Firefox que descarga las pestañas menos usadas para ahorrar RAM.',
      corpo:
        'Extensión gratuita de Firefox que mantiene un presupuesto de pestañas cargadas. Protege pestañas en uso, fijadas o reproduciendo audio, admite reglas por sitio y tiene interfaz en inglés y portugués.',
      destaques: [
        { titulo: 'Presupuesto de pestañas', texto: 'Descarta las menos usadas (LRU) y por inactividad, con modos Ligero, Normal y Estricto.' },
        { titulo: 'Helper opcional', texto: 'Un helper nativo en Rust mide la memoria real y ajusta el presupuesto cuando el sistema anda justo.' },
        { titulo: 'Privacidad', texto: 'Todo local, sin telemetría, cuentas ni red.' },
      ],
    },
  },
  humansvszombies: {
    en: {
      resumo: 'Pixel-art zombie shooter made with Python and Pyxel.',
      corpo:
        'You are the last human on a street overrun by zombies. Shoot, grab ammo and medkits, and survive as long as you can. Headshots earn a bonus.',
      capaAlt: 'Pixel-art game where the player shoots zombies on a street with burning buildings in the background.',
      destaques: [
        { titulo: 'Adaptive spawning', texto: 'Zombies, ammo and medkits appear according to the score and the player’s needs.' },
        { titulo: 'Parallax', texto: 'Layered scenery with buildings, bushes, ground and animated fire.' },
        { titulo: 'Pause and controls', texto: 'Pause menu, game over with high score, and keyboard and gamepad support.' },
      ],
    },
    es: {
      resumo: 'Juego de disparos en pixel art contra zombis, hecho con Python y Pyxel.',
      corpo:
        'Eres el último humano en una calle tomada por zombis. Dispara, recoge munición y botiquines y sobrevive todo lo que puedas. Acertar en la cabeza da bonificación.',
      capaAlt: 'Juego en pixel art en el que el jugador dispara a zombis en una calle con edificios en llamas al fondo.',
      destaques: [
        { titulo: 'Generación adaptativa', texto: 'Zombis, munición y botiquines aparecen según la puntuación y la necesidad del jugador.' },
        { titulo: 'Parallax', texto: 'Escenario en capas, con edificios, arbustos, suelo y fuego animado.' },
        { titulo: 'Pausa y control', texto: 'Menú de pausa, fin de juego con récord y soporte para teclado y mando.' },
      ],
    },
  },
  shipvsmeteors: {
    en: {
      resumo: 'Top-down spaceship game made in Lua with LÖVE.',
      corpo:
        'A game created to study Lua and the LÖVE framework. You fly a jet over a city and must destroy 100 flaming meteors before one hits the ship. All movement uses frame time, so it runs the same at any refresh rate.',
      capaAlt: 'Jet firing at flaming meteors over a city seen from above.',
      destaques: [
        { titulo: 'Random meteors', texto: 'Three sizes, each with its own speed and drift, and difficulty that grows with the score.' },
        { titulo: 'Collisions', texto: 'The shot tests its whole path within the frame, so it never passes through meteors, even at low FPS.' },
        { titulo: 'Full cycle', texto: 'Pause, restart, and game-over and victory screens.' },
      ],
    },
    es: {
      resumo: 'Juego de nave con vista aérea, hecho en Lua con LÖVE.',
      corpo:
        'Juego creado para estudiar Lua y el framework LÖVE. Pilotas un jet sobre una ciudad y debes destruir 100 meteoros en llamas antes de que uno golpee la nave. Todo el movimiento usa el tiempo del cuadro, así que corre igual a cualquier frecuencia de actualización.',
      capaAlt: 'Jet disparando contra meteoros en llamas sobre una ciudad vista desde arriba.',
      destaques: [
        { titulo: 'Meteoros aleatorios', texto: 'Tres tamaños, con velocidad y deriva propias, y dificultad que crece con la puntuación.' },
        { titulo: 'Colisiones', texto: 'El disparo prueba todo el trayecto recorrido en el cuadro, así que no atraviesa meteoros ni con pocos FPS.' },
        { titulo: 'Ciclo completo', texto: 'Pausa, reinicio y pantallas de fin de juego y de victoria.' },
      ],
    },
  },
};

export interface ProjetoLocal {
  resumo: string;
  capaAlt?: string;
  destaques: { titulo: string; texto: string }[];
  /** Texto do "Sobre o projeto" para EN/ES; em português é `null` e a página renderiza o corpo do `.md`. */
  corpo: string | null;
}

/** Devolve os textos do projeto no idioma pedido; sem tradução cadastrada, cai para o português do `.md`. */
export function localizar(p: CollectionEntry<'projetos'>, lang: Lang): ProjetoLocal {
  const base: ProjetoLocal = {
    resumo: p.data.resumo,
    capaAlt: p.data.capa?.alt,
    destaques: p.data.destaques,
    corpo: null,
  };
  if (lang === 'pt') return base;
  const tr = traducoes[p.id]?.[lang];
  if (!tr) return base;
  return {
    resumo: tr.resumo,
    capaAlt: tr.capaAlt ?? base.capaAlt,
    destaques: tr.destaques ?? base.destaques,
    corpo: tr.corpo,
  };
}
