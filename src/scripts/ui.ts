import { isOn, onChange, setSound } from './audio';
import { startEqBars } from './eq';

/** O som só existe na página do VibeDeck. Os textos vêm de `data-on` / `data-off` no próprio elemento (já traduzidos). */
function syncSound(): void {
  const on = isOn();
  document.querySelectorAll<HTMLElement>('[data-sound-label]').forEach((el) => {
    el.textContent = (on ? el.dataset.on : el.dataset.off) ?? '';
  });
  document.querySelectorAll<HTMLElement>('[data-sound-toggle]').forEach((el) => {
    el.setAttribute('aria-pressed', String(on));
    el.classList.toggle('is-on', on);
  });
  document.querySelectorAll<HTMLElement>('[data-play-icon]').forEach((el) => {
    el.textContent = on ? '❚❚' : '▶';
  });
}

/** Navegou para uma página sem controle de som: pausa a trilha para não tocar sem ter como parar. */
function stopSoundWithoutControl(): void {
  if (isOn() && !document.querySelector('[data-sound-toggle]')) void setSound(false);
}

function setMenu(open: boolean): void {
  const menu = document.getElementById('menu');
  if (!menu) return;
  const was = menu.hasAttribute('data-open');
  menu.toggleAttribute('data-open', open);
  menu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
  if (open) menu.querySelector<HTMLElement>('[data-menu-close]')?.focus();
  else if (was) document.querySelector<HTMLElement>('[data-menu-open]')?.focus();
}

function initFilters(): void {
  const chips = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const rows = document.querySelectorAll<HTMLElement>('[data-cat]');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const f = chip.dataset.filter ?? 'todos';
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      rows.forEach((r) => {
        r.hidden = f !== 'todos' && r.dataset.cat !== f;
      });
    });
  });
}

function initEqs(): void {
  document.querySelectorAll<HTMLCanvasElement>('canvas[data-eq]').forEach((canvas) => {
    if (canvas.dataset.started) return;
    canvas.dataset.started = '1';
    startEqBars(canvas, {
      count: Number(canvas.dataset.count ?? 14),
      gap: Number(canvas.dataset.gap ?? 2),
      alpha: Number(canvas.dataset.alpha ?? 0.9),
      idle: Number(canvas.dataset.idle ?? 0.5),
    });
  });
}

let bound = false;

function bindGlobal(): void {
  if (bound) return;
  bound = true;
  onChange(syncSound);

  document.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement;

    if (target.closest('[data-sound-toggle]')) {
      await setSound(!isOn());
      return;
    }
    const choice = target.closest<HTMLElement>('[data-lang-choice]');
    if (choice) {
      try {
        localStorage.setItem('lang', choice.dataset.langChoice ?? '');
      } catch {
        // Sem armazenamento: a escolha vale só para esta navegação.
      }
      return;
    }
    if (target.closest('[data-menu-open]')) return setMenu(true);
    if (target.closest('[data-menu-close]')) return setMenu(false);
    if (target.closest('#menu a')) setMenu(false);

    const reveal = target.closest<HTMLElement>('[data-email-reveal]');
    if (reveal) {
      const addr = atob(reveal.dataset.b64 ?? '');
      const holder = reveal.parentElement;
      if (!holder) return;
      holder.innerHTML = '';
      const link = document.createElement('a');
      link.href = 'mailto:' + addr;
      link.className = 'email-addr';
      link.textContent = addr;
      const copy = document.createElement('button');
      copy.type = 'button';
      copy.className = 'email-copy';
      copy.dataset.emailCopy = addr;
      copy.textContent = reveal.dataset.copyLabel ?? '[ copy ]';
      holder.append(link, copy);
      return;
    }

    const copy = target.closest<HTMLElement>('[data-email-copy]');
    if (copy) {
      try {
        await navigator.clipboard.writeText(copy.dataset.emailCopy ?? '');
        document.querySelectorAll<HTMLElement>('[data-copy-status]').forEach((s) => {
          s.textContent = s.dataset.ok ?? '✓';
        });
      } catch {
        document.querySelectorAll<HTMLElement>('[data-copy-status]').forEach((s) => {
          s.textContent = s.dataset.err ?? '';
        });
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
}

function init(): void {
  bindGlobal();
  stopSoundWithoutControl();
  syncSound();
  initFilters();
  initEqs();
  setMenu(false);
}

document.addEventListener('astro:page-load', init);
init();
