import type { SimulationState } from './simulation';
import type { CombatTuning } from './tuning';

const percent = (value: number, maximum: number) => `${Math.max(0, (value / maximum) * 100).toFixed(2)}%`;

export class CombatHud {
  private readonly bossFill = this.required('#boss-health-fill');
  private readonly bossValue = this.required('#boss-health-value');
  private readonly staminaFill = this.required('#stamina-fill');
  private readonly staminaValue = this.required('#stamina-value');
  private readonly hearts = this.required('#player-health');
  private readonly phase = this.required('#boss-phase');
  private readonly banner = this.required('#combat-banner');
  private readonly counter = this.required('#counter-callout');
  private readonly endScreen = this.required('#end-screen');
  private readonly endTitle = this.required('#end-title');
  private readonly endCopy = this.required('#end-copy');

  constructor(private readonly tuning: CombatTuning) {}

  update(state: SimulationState): void {
    const bossPercent = percent(state.boss.health, this.tuning.boss.maxHealth);
    const staminaPercent = percent(state.player.stamina, this.tuning.player.maxStamina);
    this.bossFill.style.width = bossPercent;
    this.bossValue.textContent = `${Math.ceil(state.boss.health)} / ${this.tuning.boss.maxHealth}`;
    this.staminaFill.style.width = staminaPercent;
    this.staminaValue.textContent = Math.floor(state.player.stamina).toString();
    this.hearts.innerHTML = Array.from({ length: this.tuning.player.maxHealth }, (_, index) => (
      `<span class="armor-pip${index < state.player.health ? ' is-full' : ''}" aria-hidden="true"></span>`
    )).join('');

    this.phase.textContent = `0${state.boss.phase} // ${this.tuning.boss.phases[state.boss.phase - 1].name.toUpperCase()}`;
    this.phase.dataset.phase = state.boss.phase.toString();
    this.banner.textContent = state.banner;
    this.banner.classList.toggle('is-visible', state.bannerTime > 0);
    this.counter.classList.toggle('is-visible', state.counterWindow > 0);
    this.counter.style.setProperty('--counter-progress', percent(state.counterWindow, this.tuning.boss.counterWindow));

    const finished = state.status !== 'playing';
    this.endScreen.classList.toggle('is-visible', finished);
    this.endScreen.setAttribute('aria-hidden', String(!finished));
    if (finished) {
      const victory = state.status === 'victory';
      this.endTitle.textContent = victory ? 'TRIAL CLEARED' : 'SENTINEL FALLEN';
      this.endCopy.textContent = victory
        ? `Forge Warden broken in ${state.elapsed.toFixed(1)} seconds.`
        : `The forge held through phase ${state.boss.phase}.`;
    }

    document.body.dataset.gameStatus = state.status;
    document.body.dataset.playerX = state.player.x.toFixed(3);
    document.body.dataset.playerZ = state.player.z.toFixed(3);
    document.body.dataset.bossPhase = state.boss.phase.toString();
  }

  private required(selector: string): HTMLElement {
    const element = document.querySelector<HTMLElement>(selector);
    if (!element) throw new Error(`Missing HUD element: ${selector}`);
    return element;
  }
}
