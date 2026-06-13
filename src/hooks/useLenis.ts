import { useEffect } from 'react';
import Lenis from 'lenis';

// Module-level singleton so non-hook callers (ScrollToTop, Contact form) can
// drive the same scroll instance without prop-drilling or context.
let lenisInstance: Lenis | null = null;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Scroll the page to the top, honoring reduced-motion and the Lenis instance. */
export const scrollToTop = (immediate = false) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: immediate || prefersReducedMotion() });
  } else {
    window.scrollTo({ top: 0, behavior: immediate || prefersReducedMotion() ? 'auto' : 'smooth' });
  }
};

/**
 * Sets up Lenis momentum scrolling for the app lifetime.
 * No-op (native scroll) when the user prefers reduced motion.
 */
export const useLenis = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
};
