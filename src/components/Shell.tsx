import { Suspense, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { MotionConfig, motion } from 'framer-motion';
import { Navigation, Footer } from './Layout';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

/** React Router keeps the previous scroll position on navigation; reset it (or honour #hash links). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

const pageFallback = (
  <div aria-busy="true" className="min-h-screen flex items-center justify-center font-mono text-sm text-accent">
    Loading...
  </div>
);

/**
 * App chrome: navigation, footer, global effects and the animated page
 * container. Kept in one lazily loaded chunk so animation code stays off the
 * critical path.
 */
export default function Shell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <SmoothCursor />
      <ScrollProgress />
      <Navigation />
      <main id="main-content" role="main">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Suspense fallback={pageFallback}>{children}</Suspense>
        </motion.div>
      </main>
      <Footer />
    </MotionConfig>
  );
}
