import { useEffect } from 'react';

export default function useNavScroll() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('mainNav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
