import * as THREE from 'three';
import type { SimulationState } from './simulation';
import type { CombatTuning } from './tuning';

interface PlayerRig {
  root: THREE.Group;
  torso: THREE.Group;
  swordArm: THREE.Group;
  shieldArm: THREE.Group;
  sword: THREE.Group;
  shield: THREE.Group;
}

interface BossRig {
  root: THREE.Group;
  torso: THREE.Group;
  hammerArm: THREE.Group;
  hammer: THREE.Group;
  core: THREE.Mesh<THREE.IcosahedronGeometry, THREE.MeshStandardMaterial>;
  armor: THREE.MeshStandardMaterial;
}

const material = (color: number, roughness = 0.72, metalness = 0.2): THREE.MeshStandardMaterial => (
  new THREE.MeshStandardMaterial({ color, roughness, metalness, flatShading: true })
);

const mesh = <T extends THREE.BufferGeometry, M extends THREE.Material | THREE.Material[]>(
  geometry: T,
  surface: M,
): THREE.Mesh<T, M> => {
  const item = new THREE.Mesh<T, M>(geometry, surface);
  item.castShadow = true;
  item.receiveShadow = true;
  return item;
};

const addLimb = (
  parent: THREE.Object3D,
  surface: THREE.Material,
  radius: number,
  length: number,
  position: [number, number, number],
  rotationZ = 0,
): THREE.Mesh => {
  const limb = mesh(new THREE.CylinderGeometry(radius * 0.8, radius, length, 5), surface);
  limb.position.set(...position);
  limb.rotation.z = rotationZ;
  parent.add(limb);
  return limb;
};

function createPlayer(): PlayerRig {
  const root = new THREE.Group();
  const torso = new THREE.Group();
  root.add(torso);

  const cloth = material(0x173d41, 0.86, 0.05);
  const armor = material(0x6fc6b5, 0.46, 0.58);
  const darkMetal = material(0x182125, 0.38, 0.7);
  const ivory = material(0xdde2d5, 0.6, 0.25);
  const blade = material(0xb8eee2, 0.22, 0.78);

  const chest = mesh(new THREE.CylinderGeometry(0.42, 0.58, 1.15, 6), cloth);
  chest.position.y = 1.55;
  torso.add(chest);
  const breastplate = mesh(new THREE.BoxGeometry(0.78, 0.72, 0.22), armor);
  breastplate.position.set(0, 1.68, -0.38);
  breastplate.rotation.x = -0.08;
  torso.add(breastplate);
  const waist = mesh(new THREE.CylinderGeometry(0.34, 0.48, 0.35, 6), darkMetal);
  waist.position.y = 0.92;
  torso.add(waist);

  const head = mesh(new THREE.IcosahedronGeometry(0.36, 0), ivory);
  head.scale.set(0.78, 1, 0.82);
  head.position.y = 2.38;
  torso.add(head);
  const visor = mesh(new THREE.BoxGeometry(0.4, 0.1, 0.08), darkMetal);
  visor.position.set(0, 2.41, -0.29);
  torso.add(visor);
  const crest = mesh(new THREE.ConeGeometry(0.11, 0.5, 4), armor);
  crest.position.set(0, 2.78, 0.05);
  crest.rotation.x = -0.25;
  torso.add(crest);

  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.27, 0.78, 0);
    torso.add(leg);
    addLimb(leg, darkMetal, 0.17, 0.75, [0, -0.28, 0], side * 0.04);
    const boot = mesh(new THREE.BoxGeometry(0.34, 0.28, 0.58), armor);
    boot.position.set(0, -0.76, -0.12);
    leg.add(boot);
    const shoulder = mesh(new THREE.ConeGeometry(0.34, 0.48, 5), armor);
    shoulder.position.set(side * 0.57, 1.92, 0);
    shoulder.rotation.z = side * -1.45;
    torso.add(shoulder);
  }

  const swordArm = new THREE.Group();
  swordArm.position.set(-0.6, 1.8, 0);
  torso.add(swordArm);
  addLimb(swordArm, cloth, 0.14, 0.85, [0, -0.38, 0], -0.14);
  const sword = new THREE.Group();
  sword.position.set(-0.08, -0.9, 0);
  sword.rotation.z = -0.15;
  swordArm.add(sword);
  const swordBlade = mesh(new THREE.BoxGeometry(0.13, 1.45, 0.08), blade);
  swordBlade.position.y = -0.75;
  sword.add(swordBlade);
  const tip = mesh(new THREE.ConeGeometry(0.095, 0.3, 4), blade);
  tip.position.y = -1.62;
  tip.rotation.z = Math.PI;
  sword.add(tip);
  const guard = mesh(new THREE.BoxGeometry(0.58, 0.09, 0.12), darkMetal);
  sword.add(guard);

  const shieldArm = new THREE.Group();
  shieldArm.position.set(0.61, 1.82, 0);
  torso.add(shieldArm);
  addLimb(shieldArm, cloth, 0.14, 0.78, [0, -0.34, 0], 0.15);
  const shield = new THREE.Group();
  shield.position.set(0.12, -0.73, -0.18);
  shieldArm.add(shield);
  const shieldFace = mesh(new THREE.CylinderGeometry(0.61, 0.61, 0.13, 6), armor);
  shieldFace.rotation.x = Math.PI / 2;
  shield.add(shieldFace);
  const shieldBoss = mesh(new THREE.ConeGeometry(0.22, 0.35, 6), ivory);
  shieldBoss.rotation.x = -Math.PI / 2;
  shieldBoss.position.z = -0.23;
  shield.add(shieldBoss);

  root.scale.setScalar(0.78);
  return { root, torso, swordArm, shieldArm, sword, shield };
}

function createBoss(): BossRig {
  const root = new THREE.Group();
  const torso = new THREE.Group();
  root.add(torso);

  const iron = material(0x26282a, 0.44, 0.74);
  const armor = material(0x8d3d2f, 0.54, 0.52);
  const brass = material(0xc28544, 0.42, 0.64);
  const coreMaterial = material(0xffb24a, 0.2, 0.1);
  coreMaterial.emissive.setHex(0xb72d16);
  coreMaterial.emissiveIntensity = 1.8;

  const hips = mesh(new THREE.CylinderGeometry(0.78, 1.08, 0.75, 7), iron);
  hips.position.y = 1.05;
  torso.add(hips);
  const chest = mesh(new THREE.CylinderGeometry(1.25, 0.88, 1.7, 7), armor);
  chest.position.y = 2.05;
  torso.add(chest);
  const collar = mesh(new THREE.TorusGeometry(0.84, 0.14, 5, 7), brass);
  collar.position.y = 2.88;
  collar.rotation.x = Math.PI / 2;
  torso.add(collar);
  const core = mesh(new THREE.IcosahedronGeometry(0.34, 0), coreMaterial);
  core.position.set(0, 2.1, -1.0);
  torso.add(core);

  const head = mesh(new THREE.DodecahedronGeometry(0.52, 0), iron);
  head.scale.set(1, 0.82, 0.9);
  head.position.y = 3.25;
  torso.add(head);
  const jaw = mesh(new THREE.BoxGeometry(0.7, 0.24, 0.48), brass);
  jaw.position.set(0, 3.02, -0.22);
  torso.add(jaw);
  for (const side of [-1, 1]) {
    const horn = mesh(new THREE.ConeGeometry(0.18, 0.82, 5), brass);
    horn.position.set(side * 0.47, 3.61, 0.05);
    horn.rotation.z = side * -0.62;
    torso.add(horn);

    const leg = new THREE.Group();
    leg.position.set(side * 0.57, 0.86, 0);
    torso.add(leg);
    addLimb(leg, iron, 0.28, 1.25, [0, -0.44, 0], side * -0.08);
    const foot = mesh(new THREE.BoxGeometry(0.7, 0.34, 0.95), armor);
    foot.position.set(0, -1.15, -0.17);
    leg.add(foot);
  }

  const freeArm = new THREE.Group();
  freeArm.position.set(1.15, 2.58, 0);
  torso.add(freeArm);
  const freeShoulder = mesh(new THREE.DodecahedronGeometry(0.54, 0), armor);
  freeShoulder.scale.set(1.18, 0.72, 0.92);
  freeArm.add(freeShoulder);
  addLimb(freeArm, iron, 0.25, 1.35, [0.17, -0.78, 0], 0.22);
  const claw = mesh(new THREE.ConeGeometry(0.32, 0.74, 5), brass);
  claw.position.set(0.32, -1.65, 0);
  claw.rotation.z = -0.18;
  freeArm.add(claw);

  const hammerArm = new THREE.Group();
  hammerArm.position.set(-1.15, 2.58, 0);
  torso.add(hammerArm);
  const hammerShoulder = mesh(new THREE.DodecahedronGeometry(0.58, 0), armor);
  hammerShoulder.scale.set(1.2, 0.72, 0.92);
  hammerArm.add(hammerShoulder);
  addLimb(hammerArm, iron, 0.28, 1.5, [-0.15, -0.82, 0], -0.22);
  const hammer = new THREE.Group();
  hammer.position.set(-0.3, -1.75, 0);
  hammerArm.add(hammer);
  const shaft = mesh(new THREE.CylinderGeometry(0.12, 0.14, 2.45, 6), brass);
  shaft.position.y = -0.9;
  hammer.add(shaft);
  const hammerHead = mesh(new THREE.BoxGeometry(1.3, 0.72, 0.78, 1, 1, 1), armor);
  hammerHead.position.y = -2.12;
  hammer.add(hammerHead);
  for (const side of [-1, 1]) {
    const spike = mesh(new THREE.ConeGeometry(0.17, 0.58, 5), brass);
    spike.position.set(side * 0.91, -2.12, 0);
    spike.rotation.z = side * -Math.PI / 2;
    hammer.add(spike);
  }

  root.scale.setScalar(0.74);
  return { root, torso, hammerArm, hammer, core, armor };
}

export class CombatWorld {
  readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
  private readonly player = createPlayer();
  private readonly boss = createBoss();
  private readonly telegraph: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  private readonly counterRing: THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>;
  private readonly impactLight = new THREE.PointLight(0xffb04b, 0, 7, 2);
  private readonly foregroundDecor: THREE.Object3D[] = [];
  private lastEventId = 0;
  private impactTime = 0;

  constructor(container: HTMLElement, private readonly tuning: CombatTuning) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.id = 'combat-canvas';
    this.renderer.domElement.setAttribute('aria-label', 'Counter Trial combat arena');
    container.append(this.renderer.domElement);

    this.scene.background = new THREE.Color(0x101416);
    this.scene.fog = new THREE.Fog(0x101416, 15, 29);
    this.buildArena();
    this.scene.add(this.player.root, this.boss.root);

    this.telegraph = mesh(
      new THREE.RingGeometry(3.8, 4.35, 48),
      new THREE.MeshBasicMaterial({ color: 0xff6648, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }),
    );
    this.telegraph.rotation.x = -Math.PI / 2;
    this.telegraph.position.y = 0.045;
    this.telegraph.visible = false;
    this.scene.add(this.telegraph);

    this.counterRing = mesh(
      new THREE.TorusGeometry(1.25, 0.07, 5, 36),
      new THREE.MeshBasicMaterial({ color: 0x8effd5, transparent: true, opacity: 0.9, depthWrite: false }),
    );
    this.counterRing.rotation.x = Math.PI / 2;
    this.counterRing.visible = false;
    this.scene.add(this.counterRing, this.impactLight);

    window.addEventListener('resize', this.resize);
    this.resize();
  }

  update(state: SimulationState, elapsed: number, dt: number): void {
    this.player.root.position.set(state.player.x, 0.02, state.player.z);
    this.boss.root.position.set(state.boss.x, 0.02, state.boss.z);

    const playerFacing = Math.atan2(state.boss.x - state.player.x, state.boss.z - state.player.z);
    const bossFacing = Math.atan2(state.player.x - state.boss.x, state.player.z - state.boss.z);
    this.player.root.rotation.y = playerFacing;
    this.boss.root.rotation.y = bossFacing;

    const playerMotion = state.player.action === 'idle' ? Math.sin(elapsed * 7) * 0.035 : 0;
    this.player.torso.position.y = playerMotion;
    this.player.torso.rotation.z = state.player.action === 'dodge' ? -0.34 : 0;
    this.player.swordArm.rotation.x = state.player.action === 'counter' ? -2.25 : -0.18;
    this.player.swordArm.rotation.z = state.player.action === 'counter' ? 0.55 : 0;
    this.player.shieldArm.rotation.x = state.player.action === 'parry' ? -1.25 : -0.12;
    this.player.shield.rotation.x = state.player.action === 'parry' ? -0.35 : 0;

    const phasePulse = 1 + Math.sin(elapsed * (4 + state.boss.phase * 1.3)) * 0.08;
    this.boss.core.scale.setScalar(phasePulse * (1 + (state.boss.phase - 1) * 0.16));
    this.boss.core.material.emissiveIntensity = 1.6 + state.boss.phase * 0.75;
    this.boss.armor.color.setHex(state.boss.phase === 1 ? 0x8d3d2f : state.boss.phase === 2 ? 0xb34c2f : 0xd34a28);

    const phase = this.tuning.boss.phases[state.boss.phase - 1];
    const windupProgress = state.boss.action === 'windup' ? 1 - state.boss.actionTime / phase.windup : 0;
    const strikeProgress = state.boss.action === 'strike' ? 1 - state.boss.actionTime / phase.strike : 0;
    this.boss.hammerArm.rotation.x = state.boss.action === 'windup'
      ? -windupProgress * 2.1
      : state.boss.action === 'strike'
        ? -2.1 + strikeProgress * 3.9
        : THREE.MathUtils.lerp(this.boss.hammerArm.rotation.x, -0.18, Math.min(1, dt * 9));
    this.boss.torso.rotation.z = state.boss.action === 'stagger' ? Math.sin(elapsed * 18) * 0.08 : 0;

    this.telegraph.visible = state.boss.action === 'windup';
    this.telegraph.position.set(state.boss.x, 0.045, state.boss.z);
    this.telegraph.scale.setScalar(phase.attackRadius / 4.35);
    this.telegraph.material.opacity = 0.22 + windupProgress * 0.65;
    this.telegraph.material.color.setHex(windupProgress > 0.78 ? 0xffd15c : 0xff6345);

    this.counterRing.visible = state.counterWindow > 0;
    this.counterRing.position.set(state.boss.x, 1.8, state.boss.z);
    const counterScale = 0.9 + Math.sin(elapsed * 13) * 0.08;
    this.counterRing.scale.setScalar(counterScale);

    if (state.event.id !== this.lastEventId) {
      this.lastEventId = state.event.id;
      if (['parry', 'counter', 'hit', 'phase'].includes(state.event.type)) this.impactTime = 0.24;
    }
    this.impactTime = Math.max(0, this.impactTime - dt);
    this.impactLight.position.set(
      (state.player.x + state.boss.x) * 0.5,
      1.5,
      (state.player.z + state.boss.z) * 0.5,
    );
    this.impactLight.intensity = this.impactTime > 0 ? (this.impactTime / 0.24) * 16 : 0;

    const cameraShake = this.impactTime > 0 ? Math.sin(this.impactTime * 95) * this.impactTime * 0.18 : 0;
    this.camera.position.x += cameraShake;
    this.camera.lookAt(0, 1.15, 0.2);
    this.renderer.render(this.scene, this.camera);
    this.camera.position.x -= cameraShake;
  }

  private buildArena(): void {
    const ambient = new THREE.HemisphereLight(0xbfe5e0, 0x251b18, 1.65);
    this.scene.add(ambient);
    const key = new THREE.DirectionalLight(0xffdfb8, 3.3);
    key.position.set(-6, 12, 8);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -12;
    key.shadow.camera.right = 12;
    key.shadow.camera.top = 12;
    key.shadow.camera.bottom = -12;
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x68b7c1, 2.4);
    rim.position.set(8, 6, -9);
    this.scene.add(rim);

    const floorMaterial = material(0x303538, 0.92, 0.12);
    const floor = mesh(new THREE.CylinderGeometry(8.5, 9.15, 0.5, 48), floorMaterial);
    floor.position.y = -0.28;
    this.scene.add(floor);

    const inner = mesh(new THREE.CylinderGeometry(6.95, 7.15, 0.06, 48), material(0x22282a, 0.78, 0.22));
    inner.position.y = 0.015;
    this.scene.add(inner);
    const inlay = mesh(new THREE.RingGeometry(5.7, 5.83, 48), new THREE.MeshBasicMaterial({ color: 0x8c6b42 }));
    inlay.rotation.x = -Math.PI / 2;
    inlay.position.y = 0.052;
    this.scene.add(inlay);
    const centerSeal = mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.07, 8), material(0x4d5554, 0.75, 0.35));
    centerSeal.position.y = 0.055;
    this.scene.add(centerSeal);

    const wallMaterial = material(0x3e4140, 0.88, 0.2);
    const brass = material(0x8e6c3e, 0.52, 0.55);
    for (let index = 0; index < 12; index += 1) {
      const angle = (index / 12) * Math.PI * 2;
      const radius = 9.6;
      const pillar = new THREE.Group();
      pillar.position.set(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
      pillar.rotation.y = angle;
      const base = mesh(new THREE.CylinderGeometry(0.52, 0.72, 0.45, 6), brass);
      base.position.y = 0.22;
      pillar.add(base);
      const column = mesh(new THREE.CylinderGeometry(0.4, 0.5, 4.7, 6), wallMaterial);
      column.position.y = 2.72;
      pillar.add(column);
      const crown = mesh(new THREE.ConeGeometry(0.68, 1.2, 6), brass);
      crown.position.y = 5.65;
      pillar.add(crown);
      this.scene.add(pillar);
      if (pillar.position.z > 5) this.foregroundDecor.push(pillar);
    }

    for (let index = 0; index < 24; index += 1) {
      const angle = (index / 24) * Math.PI * 2;
      const slab = mesh(new THREE.BoxGeometry(0.8, 1.6, 0.44), wallMaterial);
      slab.position.set(Math.sin(angle) * 10.25, 0.72, Math.cos(angle) * 10.25);
      slab.rotation.y = angle;
      this.scene.add(slab);
      if (slab.position.z > 8) this.foregroundDecor.push(slab);
    }
  }

  private readonly resize = (): void => {
    const canvas = this.renderer.domElement;
    const parent = canvas.parentElement;
    if (!parent) return;
    const width = Math.max(1, parent.clientWidth);
    const height = Math.max(1, parent.clientHeight);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    if (width < 700) {
      this.camera.position.set(9.5, 13.5, 16.5);
      this.camera.fov = 48;
      for (const decor of this.foregroundDecor) decor.visible = false;
    } else {
      this.camera.position.set(10.8, 10.2, 13.8);
      this.camera.fov = 42;
      for (const decor of this.foregroundDecor) decor.visible = true;
    }
    this.camera.updateProjectionMatrix();
  };
}
