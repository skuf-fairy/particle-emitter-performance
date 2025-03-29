import {measureFuncExecuteTime} from './measureFuncExecuteTime';
// import {testParticleFluxPerformance} from './test-particle-flux-performance';
// import {testPixiParticleEmitterPerformance} from './test-pixi-particle-emitter-performance';
import {testPixiParticleFluxPerformance} from './test-pixi-particle-flux-performance';

const RUNS_COUNT = 100;

console.log('run measure pixi.js + particle-flux performance');
console.log(measureFuncExecuteTime(testPixiParticleFluxPerformance(), RUNS_COUNT));

// console.log('run measure  particle-flux performance');
// console.log(measureFuncExecuteTime(testParticleFluxPerformance(), runsCount));

// console.log('run measure pixi.js particle-emitter performance');
// console.log(measureFuncExecuteTime(testPixiParticleEmitterPerformance(), runsCount));
