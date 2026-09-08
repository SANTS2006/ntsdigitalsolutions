import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('main section, main article');

    if (reduceMotion) return undefined;

    elements.forEach((element, index) => {
      if (!element.classList.contains('no-scroll-reveal')) {
        element.classList.add('scroll-reveal');
        element.style.setProperty('--reveal-delay', `${Math.min((index % 4) * 70, 210)}ms`);
      }
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
