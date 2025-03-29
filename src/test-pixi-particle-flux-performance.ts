import {ParticleEmitter, Point2d, ViewParticle} from 'particle-flux';
import {Container, ContainerChild} from 'pixi.js';

class TestViewParticle implements ViewParticle {
  position: Point2d = {x: 0, y: 0};
  scale: Point2d = {x: 1, y: 1};
  alpha: number = 1;
  tint: string | number = 0xffffff;
  angle: number = 0;
  width: number = 1;
  height: number = 1;
  destroyed: boolean = false;
}

export function testPixiParticleFluxPerformance() {
  const emitter = new ParticleEmitter<ContainerChild>(new Container<ContainerChild>(), () => new TestViewParticle(), {
    emitterConfig: {
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
      alpha: {
        value: 0.5,
      },
    },
  });

  emitter.emitOnce(100000);

  return () => emitter.updateContainer(1, 1000 / 60);
}
