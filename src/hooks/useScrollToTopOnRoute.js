import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToTopOnRoute() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state && state.scrollTo) {
      requestAnimationFrame(() => {
        const el = document.getElementById(state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, state]);
}
