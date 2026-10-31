import { levels } from './audio';

const ACCENT = '#35F2A0';
const WARN = '#FFB020';

function fit(canvas: HTMLCanvasElement): { w: number; h: number } {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const r = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.round(r.width * dpr));
  canvas.height = Math.max(1, Math.round(r.height * dpr));
  const c = canvas.getContext('2d');
  c?.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { w: r.width, h: r.height };
}

interface Row {
  base: number;
  scale: number;
  alpha: number;
  shift: number;
}

function prism(
  c: CanvasRenderingContext2D,
  x: number,
  base: number,
  w: number,
  h: number,
  dx: number,
  dy: number,
  alpha: number,
  hot: boolean,
): void {
  const y = base - h;
  c.globalAlpha = alpha;
  c.fillStyle = hot ? WARN : ACCENT;
  c.fillRect(x, y, w, h);
  c.fillStyle = hot ? '#B37400' : '#12906A';
  c.beginPath();
  c.moveTo(x + w, y);
  c.lineTo(x + w + dx, y + dy);
  c.lineTo(x + w + dx, base + dy);
  c.lineTo(x + w, base);
  c.closePath();
  c.fill();
  c.fillStyle = hot ? '#FFD98A' : '#9CFFD6';
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x + dx, y + dy);
  c.lineTo(x + w + dx, y + dy);
  c.lineTo(x + w, y);
  c.closePath();
  c.fill();
}

/** Equalizador em prismas 3D (duas fileiras) usado na tela de entrada. Para sozinho quando o canvas sai do DOM. */
export function startEq3D(canvas: HTMLCanvasElement): void {
  let size = fit(canvas);
  const ro = new ResizeObserver(() => (size = fit(canvas)));
  ro.observe(canvas);
  const c = canvas.getContext('2d');
  if (!c) return;
  const frame = (t: number): void => {
    if (!canvas.isConnected) {
      ro.disconnect();
      return;
    }
    const { w, h } = size;
    c.clearRect(0, 0, w, h);
    const small = w < 600;
    const pitch = small ? 14 : 22;
    const bw = Math.round(pitch * 0.73);
    const dx = bw * 0.55;
    const dy = -bw * 0.5;
    const n = Math.floor(w / pitch);
    const rows: Row[] = [
      { base: h - 36, scale: 0.8, alpha: 0.38, shift: Math.floor(n / 3) },
      { base: h, scale: 1, alpha: 1, shift: 0 },
    ];
    const lv = levels(n, t, 0.62);
    for (const row of rows) {
      for (let i = 0; i < n; i++) {
        const v = lv[(i + row.shift) % n];
        const bh = Math.max(6, v * h * 0.52 * row.scale);
        prism(c, i * pitch + 2, row.base, bw, bh, dx, dy, row.alpha, row.alpha === 1 && v > 0.85);
      }
    }
    c.globalAlpha = 1;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/** Barras 2D simples (mini player e menu). */
export function startEqBars(canvas: HTMLCanvasElement, opts: { count: number; gap: number; alpha?: number; idle?: number }): void {
  let size = fit(canvas);
  const ro = new ResizeObserver(() => (size = fit(canvas)));
  ro.observe(canvas);
  const c = canvas.getContext('2d');
  if (!c) return;
  const frame = (t: number): void => {
    if (!canvas.isConnected) {
      ro.disconnect();
      return;
    }
    const { w, h } = size;
    c.clearRect(0, 0, w, h);
    const { count, gap } = opts;
    const bw = (w - gap * (count - 1)) / count;
    const lv = levels(count, t, opts.idle ?? 0.5);
    c.fillStyle = ACCENT;
    c.globalAlpha = opts.alpha ?? 0.9;
    for (let i = 0; i < count; i++) {
      const bh = Math.max(3, lv[i] * h);
      c.fillRect(i * (bw + gap), h - bh, bw, bh);
    }
    c.globalAlpha = 1;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
