import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const initEngine = async (engine) => {
  await loadSlim(engine);
};

const options = {
  fullScreen: { enable: false },
  detectRetina: true,
  fpsLimit: 60,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  particles: {
    number: { value: 300, density: { enable: true, width: 1200, height: 400 } },
    shape: { type: 'square' },
    paint: { color: { value: ['#ffffff', '#dbeafe', '#f5d9a6'] } },
    size: { value: { min: 0.01, max: 1.5 } },
    opacity: {
      value: { min: 0.25, max: 0.9 },
      animation: { enable: true, speed: 0.8, sync: false, startValue: 'random' },
    },
    move: {
      enable: true,
      direction: 'right',
      straight: true,
      speed: { min: 0.1, max: 0.2 },
      outModes: 'out',
    },
  },
};

const StarField = ({ id }) => (
  <ParticlesProvider init={initEngine}>
    <Particles id={id} options={options} className="starfield" />
  </ParticlesProvider>
);

export default StarField;
