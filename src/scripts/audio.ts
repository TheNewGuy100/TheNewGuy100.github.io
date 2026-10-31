/** Motor de áudio do site: toca a trilha (se existir em /audio/theme.mp3) e expõe níveis de frequência para os equalizadores. */
const SRC = '/audio/theme.mp3';

let audio: HTMLAudioElement | null = null;
let ctx: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let buf: Uint8Array<ArrayBuffer> | null = null;
let on = false;
const listeners = new Set<() => void>();

function notify(): void {
  listeners.forEach((fn) => fn());
}

/** Indica se o som está tocando. */
export function isOn(): boolean {
  return on;
}

/** Registra um callback para mudanças de estado do som. */
export function onChange(fn: () => void): void {
  listeners.add(fn);
}

/** Liga ou desliga o som. Precisa ser chamado a partir de um gesto do usuário para ligar. */
export async function setSound(next: boolean): Promise<void> {
  if (next) {
    try {
      if (!audio) {
        audio = new Audio(SRC);
        audio.loop = true;
      }
      if (!ctx) {
        ctx = new AudioContext();
        const source = ctx.createMediaElementSource(audio);
        analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        analyser.connect(ctx.destination);
        buf = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount));
      }
      await ctx.resume();
      await audio.play();
      on = true;
    } catch {
      // Sem arquivo de áudio ou bloqueado pelo navegador: segue com a animação em repouso.
      on = false;
    }
  } else {
    audio?.pause();
    on = false;
  }
  notify();
}

/**
 * Retorna `n` níveis entre 0 e 1. Com som tocando usa o espectro real; sem som, uma oscilação suave
 * cuja amplitude é controlada por `idle`.
 */
export function levels(n: number, t: number, idle = 0.5): number[] {
  const out = new Array<number>(n);
  if (on && analyser && buf) {
    analyser.getByteFrequencyData(buf);
    const usable = Math.floor(buf.length * 0.75);
    for (let i = 0; i < n; i++) {
      const a = Math.floor((i / n) * usable);
      const b = Math.max(a + 1, Math.floor(((i + 1) / n) * usable));
      let sum = 0;
      for (let j = a; j < b; j++) sum += buf[j];
      out[i] = Math.min(1, sum / (b - a) / 190);
    }
    return out;
  }
  for (let i = 0; i < n; i++) {
    const p = i / n;
    const raw =
      Math.abs(Math.sin(p * 9.1 + t * 0.0006) * 0.6 + Math.sin(p * 23.7 + 1.3 + t * 0.0009) * 0.4) *
      (0.45 + 0.55 * Math.sin(p * Math.PI));
    out[i] = 0.06 + idle * raw;
  }
  return out;
}
