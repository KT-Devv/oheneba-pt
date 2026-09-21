/// <reference types="vite/client" />

// Deep lucide-react icon imports (used to keep the bundle small) ship without typings.
declare module 'lucide-react/dist/esm/icons/*.js' {
  import type { LucideIcon } from 'lucide-react';
  const icon: LucideIcon;
  export default icon;
}
