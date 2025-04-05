import {ParticleEmitter} from 'particle-flux';
import {Container, ContainerChild, Sprite, Texture} from 'pixi.js';

export function testPixiParticleFluxPerformance() {
  const emitter = new ParticleEmitter<ContainerChild>(
    new Container<ContainerChild>(),
    () => new Sprite(Texture.EMPTY),
    {
      emitterConfig: {
        maxParticles: 100000,
        autoStart: false,
      },
      particleConfig: {
        lifeTime: {
          value: 600000,
        },
        speed: {
          value: 1,
        },
        direction: {
          minAngle: 0,
          maxAngle: 360,
        },
        // alpha: {
        //   value: 0.5,
        // },
      },
    },
  );

  emitter.emitOnce(100000);

  return () => emitter.updateContainer(1, 1000 / 60);
}
