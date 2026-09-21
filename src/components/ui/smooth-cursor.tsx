import { useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import { motion, useSpring } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

export interface SmoothCursorProps {
  cursor?: ReactNode;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

// The arrow's tip sits at (25, ~5.5) in its 50x54 viewBox — used to pin the tip to the real pointer.
const TIP_X = 0.5;
const TIP_Y = 0.1;

const DefaultCursorSVG: FC = () => (
  <svg width="20" height="22" viewBox="0 0 50 54" fill="none" aria-hidden="true" style={{ display: 'block' }}>
    <g filter="url(#smooth_cursor_shadow)">
      <path
        d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
        fill="#0a0a0f"
      />
      <path
        d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
        stroke="#00d4aa"
        strokeWidth="3.5"
      />
    </g>
    <defs>
      <filter id="smooth_cursor_shadow" x="0.602397" y="0.952444" width="49.0584" height="52.428" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="2.25825" />
        <feGaussianBlur stdDeviation="2.25825" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0.83 0 0 0 0 0.67 0 0 0 0.35 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/**
 * Only enable the custom cursor for mouse-like pointers. Touch devices and
 * users who prefer reduced motion keep the native cursor.
 */
function useCursorEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia(FINE_POINTER);
    const reduced = window.matchMedia(REDUCED_MOTION);
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      fine.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);

  return enabled;
}

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  // Stiff and close to critically damped: follows the pointer within a couple of frames, no overshoot.
  springConfig = { damping: 40, stiffness: 1000, mass: 0.6, restDelta: 0.01 },
}: SmoothCursorProps) {
  const enabled = useCursorEnabled();
  const [visible, setVisible] = useState(false);
  const lastMousePos = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(0);
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const hasMoved = useRef(false);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, { damping: 35, stiffness: 450, mass: 0.6, restDelta: 0.01 });
  const scale = useSpring(1, { damping: 30, stiffness: 700, mass: 0.5, restDelta: 0.001 });

  useEffect(() => {
    if (!enabled) return;

    let settleTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleMove = (e: MouseEvent) => {
      const now = performance.now();
      const currentPos = { x: e.clientX, y: e.clientY };

      // First movement: snap to the pointer instead of springing in from (0, 0).
      if (!hasMoved.current) {
        hasMoved.current = true;
        cursorX.jump(currentPos.x);
        cursorY.jump(currentPos.y);
        lastMousePos.current = currentPos;
        lastUpdateTime.current = now;
        setVisible(true);
        return;
      }

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      const dx = currentPos.x - lastMousePos.current.x;
      const dy = currentPos.y - lastMousePos.current.y;
      const dt = now - lastUpdateTime.current;

      // Only steer the arrow on real movement so tiny jitters don't spin it.
      if (dt > 0 && Math.hypot(dx, dy) >= 2) {
        const speed = Math.hypot(dx, dy) / dt;
        const currentAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;
        lastMousePos.current = currentPos;
        lastUpdateTime.current = now;

        if (speed > 0.1) {
          scale.set(0.92);
          clearTimeout(settleTimeout);
          settleTimeout = setTimeout(() => scale.set(1), 120);
        }
      }
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => {
      if (hasMoved.current) setVisible(true);
    };

    document.documentElement.classList.add('smooth-cursor-active');
    window.addEventListener('mousemove', handleMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleLeave);
    document.documentElement.addEventListener('mouseenter', handleEnter);

    return () => {
      document.documentElement.classList.remove('smooth-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.documentElement.removeEventListener('mouseenter', handleEnter);
      clearTimeout(settleTimeout);
    };
  }, [enabled, cursorX, cursorY, rotation, scale]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        // Anchor the arrow's tip to the pointer and rotate around it.
        translateX: `${-TIP_X * 100}%`,
        translateY: `${-TIP_Y * 100}%`,
        originX: TIP_X,
        originY: TIP_Y,
        rotate: rotation,
        scale,
        zIndex: 100,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.12 }}
    >
      {cursor}
    </motion.div>
  );
}
