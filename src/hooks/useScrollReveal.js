import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const selector =
      '.fade-up, .fade-in, .slide-left, .slide-right, .scale-in';
    const targets = document.querySelectorAll(selector);

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => {
      el.classList.remove('visible');
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, [pathname]);
}
