import {Emitter} from '@barvynkoa/particle-emitter';
import {Container} from 'pixi.js';

export function testPixiParticleEmitterPerformance() {
  const emitter = new Emitter(new Container(), {
    lifetime: {
      min: 1000000,
      max: 1000000,
    },
    frequency: 2,
    particlesPerWave: 100000,
    emitterLifetime: -1,
    maxParticles: 100000,
    pos: {
      x: 0,
      y: 0,
    },
    addAtBack: false,
    behaviors: [
      {
        type: 'moveSpeedStatic',
        config: {
          min: 100,
          max: 100,
        },
      },
      {
        type: 'rotationStatic',
        config: {
          min: 0,
          max: 360,
        },
      },
      {
        type: 'spawnShape',
        config: {
          type: 'rect',
          data: {x: 0, y: 0, w: 100, h: 10},
        },
      },
    ],
  });

  emitter.update(1);

  return () => emitter.update(1);
}
