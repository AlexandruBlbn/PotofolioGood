import { gsap } from 'gsap';

export const fadeIn = (element) => {
  gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1 });
};

export const slideIn = (element, direction = 'left') => {
  const distance = direction === 'left' ? '-100%' : '100%';
  gsap.fromTo(element, { x: distance, opacity: 0 }, { x: '0%', opacity: 1, duration: 1 });
};

export const bounce = (element) => {
  gsap.to(element, { y: -20, duration: 0.5, yoyo: true, repeat: 1 });
};