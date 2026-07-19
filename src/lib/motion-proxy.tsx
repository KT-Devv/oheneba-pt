/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

let loadedMotion: any = null;
let loader: Promise<any> | null = null;

function ensureLoaded() {
  if (!loader) {
    loader = import('framer-motion').then((mod) => {
      loadedMotion = mod.motion || mod;
      return loadedMotion;
    });
  }
  return loader;
}

function createTag(tag: string) {
  const Component = React.forwardRef(function MotionTag(props: any, ref: any) {
    const [ready, setReady] = useState(!!loadedMotion);

    useEffect(() => {
      if (!ready) {
        ensureLoaded().then(() => setReady(true)).catch(() => {});
      }
    }, [ready]);

    // Strip animation-specific props when rendering fallback
    const { initial, animate, whileInView, transition, viewport, whileHover, whileTap, exit, layout, layoutId, variants, ...rest } = props;

    if (ready && loadedMotion && (loadedMotion as any)[tag]) {
      const MotionComp = (loadedMotion as any)[tag] as React.ComponentType<any>;
      return <MotionComp ref={ref} {...props} />;
    }

    return React.createElement(tag, { ...rest, ref }, props.children);
  });

  Component.displayName = `MaybeMotion(${tag})`;
  return Component;
}

const tags = [
  'div', 'p', 'h1', 'h2', 'h3', 'section', 'span', 'img', 'header', 'footer', 'li', 'ul', 'a', 'main', 'blockquote'
];

export const motion: Record<string, any> = {};
for (const t of tags) motion[t] = createTag(t);

export default motion;
