import { useEffect, useRef } from 'react';

/**
 * Pauses every CSS animation inside the element while it is scrolled out of
 * view (see `[data-offscreen]` in index.css). Toggles a data attribute instead
 * of React state, so it never causes a re-render.
 */
export function usePauseOffscreen<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.dataset.offscreen = entry.isIntersecting ? 'false' : 'true';
      },
      { rootMargin: '100px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
