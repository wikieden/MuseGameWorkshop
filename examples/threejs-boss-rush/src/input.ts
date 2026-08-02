import { EMPTY_INPUT, type InputFrame } from './simulation';

const movementKeys: Record<string, 'up' | 'down' | 'left' | 'right'> = {
  KeyW: 'up',
  ArrowUp: 'up',
  KeyS: 'down',
  ArrowDown: 'down',
  KeyA: 'left',
  ArrowLeft: 'left',
  KeyD: 'right',
  ArrowRight: 'right',
};

const actionKeys: Record<string, 'dodge' | 'parry' | 'counter' | 'restart'> = {
  Space: 'dodge',
  KeyF: 'parry',
  KeyJ: 'counter',
  KeyR: 'restart',
  Enter: 'restart',
};

export class InputController {
  private readonly held = new Set<string>();
  private readonly pulses = new Set<string>();

  constructor(root: HTMLElement) {
    window.addEventListener('keydown', this.onKeyDown, { passive: false });
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.clear);

    for (const button of root.querySelectorAll<HTMLElement>('[data-input]')) {
      const input = button.dataset.input;
      if (!input) continue;
      button.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        button.setPointerCapture(event.pointerId);
        button.classList.add('is-active');
        if (['up', 'down', 'left', 'right'].includes(input)) this.held.add(input);
        else this.pulses.add(input);
      });
      const release = (event: PointerEvent) => {
        event.preventDefault();
        button.classList.remove('is-active');
        this.held.delete(input);
      };
      button.addEventListener('pointerup', release);
      button.addEventListener('pointercancel', release);
      button.addEventListener('lostpointercapture', release);
    }
  }

  consumeFrame(): InputFrame {
    const value = {
      ...EMPTY_INPUT,
      moveX: Number(this.held.has('right')) - Number(this.held.has('left')),
      moveZ: Number(this.held.has('down')) - Number(this.held.has('up')),
      dodge: this.pulses.has('dodge'),
      parry: this.pulses.has('parry'),
      counter: this.pulses.has('counter'),
      restart: this.pulses.has('restart'),
    };
    this.pulses.clear();
    return value;
  }

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    const movement = movementKeys[event.code];
    const action = actionKeys[event.code];
    if (!movement && !action) return;
    event.preventDefault();
    if (movement) this.held.add(movement);
    if (action && !event.repeat) this.pulses.add(action);
  };

  private readonly onKeyUp = (event: KeyboardEvent): void => {
    const movement = movementKeys[event.code];
    if (movement) this.held.delete(movement);
  };

  private readonly clear = (): void => {
    this.held.clear();
    this.pulses.clear();
  };
}
