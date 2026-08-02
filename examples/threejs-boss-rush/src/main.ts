import './style.css';
import { InputController } from './input';
import { CombatSimulation, type SimulationState } from './simulation';
import { CombatHud } from './ui';
import { CombatWorld } from './world';

declare global {
  interface Window {
    __counterTrial: {
      getState: () => SimulationState;
      renderer: CombatWorld['renderer'];
    };
  }
}

const app = document.querySelector<HTMLElement>('#app');
if (!app) throw new Error('Counter Trial app root was not found.');

app.innerHTML = `
  <main class="game-shell" aria-label="Counter Trial">
    <div id="viewport" class="viewport"></div>

    <header class="top-hud">
      <div class="brand-lockup" aria-label="Counter Trial">
        <span class="brand-mark" aria-hidden="true"></span>
        <div>
          <strong>COUNTER TRIAL</strong>
          <span>FORGE OBSERVATORY // 09</span>
        </div>
      </div>

      <section class="boss-readout" aria-label="Forge Warden status">
        <div class="readout-label">
          <span>FORGE WARDEN</span>
          <span id="boss-phase" data-phase="1">01 // TEMPERED</span>
        </div>
        <div class="boss-health-track" role="progressbar" aria-label="Boss health">
          <div id="boss-health-fill" class="boss-health-fill"></div>
          <span id="boss-health-value">100 / 100</span>
        </div>
      </section>

      <button class="icon-button restart-button" data-input="restart" type="button" aria-label="Restart trial" title="Restart trial">
        <span aria-hidden="true">↻</span>
      </button>
    </header>

    <section class="player-hud" aria-label="Sentinel status">
      <div class="player-id">
        <span class="sentinel-glyph" aria-hidden="true"></span>
        <div>
          <strong>SENTINEL 07</strong>
          <div id="player-health" class="player-health" aria-label="Player armor"></div>
        </div>
      </div>
      <div class="stamina-label"><span>STAMINA</span><span id="stamina-value">100</span></div>
      <div class="stamina-track" role="progressbar" aria-label="Player stamina">
        <div id="stamina-fill" class="stamina-fill"></div>
        <i></i><i></i><i></i>
      </div>
    </section>

    <div id="combat-banner" class="combat-banner is-visible" role="status">READ THE FORGE</div>
    <div id="counter-callout" class="counter-callout" role="status">
      <span>COUNTER</span>
      <i></i>
    </div>

    <nav class="desktop-actions" aria-label="Combat actions">
      <button data-input="dodge" type="button"><kbd>SPACE</kbd><span>DODGE</span></button>
      <button data-input="parry" type="button"><kbd>F</kbd><span>PARRY</span></button>
      <button class="counter-action" data-input="counter" type="button"><kbd>J</kbd><span>COUNTER</span></button>
    </nav>

    <div class="mobile-controls" aria-label="Touch combat controls">
      <div class="direction-pad" aria-label="Move">
        <button class="up" data-input="up" type="button" aria-label="Move up">▲</button>
        <button class="left" data-input="left" type="button" aria-label="Move left">◀</button>
        <span aria-hidden="true"></span>
        <button class="right" data-input="right" type="button" aria-label="Move right">▶</button>
        <button class="down" data-input="down" type="button" aria-label="Move down">▼</button>
      </div>
      <div class="touch-actions">
        <button data-input="dodge" type="button"><span aria-hidden="true">↯</span><small>DODGE</small></button>
        <button data-input="parry" type="button"><span aria-hidden="true">◇</span><small>PARRY</small></button>
        <button class="counter-action" data-input="counter" type="button"><span aria-hidden="true">✦</span><small>COUNTER</small></button>
      </div>
    </div>

    <section id="end-screen" class="end-screen" aria-hidden="true">
      <div class="end-panel">
        <span class="end-kicker">COUNTER TRIAL // REPORT</span>
        <h1 id="end-title">TRIAL CLEARED</h1>
        <p id="end-copy"></p>
        <button data-input="restart" type="button"><span aria-hidden="true">↻</span> RESTART</button>
      </div>
    </section>
  </main>
`;

const viewport = document.querySelector<HTMLElement>('#viewport');
if (!viewport) throw new Error('Combat viewport was not found.');

try {
  const simulation = new CombatSimulation();
  const input = new InputController(app);
  const hud = new CombatHud(simulation.tuning);
  const world = new CombatWorld(viewport, simulation.tuning);

  window.__counterTrial = {
    getState: () => simulation.state,
    renderer: world.renderer,
  };

  let previous = performance.now();
  let accumulator = 0;

  const animate = (now: number): void => {
    const frameDelta = Math.min((now - previous) / 1000, 0.1);
    previous = now;
    accumulator += frameDelta;
    const command = input.consumeFrame();
    let firstStep = true;

    while (accumulator >= simulation.tuning.fixedStep) {
      simulation.step(firstStep ? command : { ...command, dodge: false, parry: false, counter: false, restart: false });
      firstStep = false;
      accumulator -= simulation.tuning.fixedStep;
    }

    hud.update(simulation.state);
    world.update(simulation.state, now / 1000, frameDelta);
    requestAnimationFrame(animate);
  };

  hud.update(simulation.state);
  requestAnimationFrame(animate);
} catch (error) {
  console.error(error);
  viewport.innerHTML = `
    <div class="capability-error" role="alert">
      <strong>WEBGL2 REQUIRED</strong>
      <span>This prototype needs a browser and GPU with WebGL2 support.</span>
    </div>
  `;
}
