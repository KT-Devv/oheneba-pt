export const SITE_URL = 'https://www.ktdevv.me';
const SITE_NAME = 'K.T Devv';

interface PageMeta {
  title: string;
  description: string;
}

/** Per-route metadata. Keep the paths in sync with public/sitemap.xml. */
export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'K.T Devv — Oheneba Ntim | Full-Stack, IoT & Robotics Developer',
    description:
      'Oheneba Kwaku Tawiah Ntim — Full-Stack developer specializing in IoT, robotics, and web development. Explore projects, services and contact details.',
  },
  '/about': {
    title: 'About — K.T Devv',
    description:
      'Computer Science student at KNUST, robotics competitor (RiSE 2021 winner, WRO 2022 and 2025) and STEM mentor. Learn my story.',
  },
  '/services': {
    title: 'Services & Skills — K.T Devv',
    description:
      'Full-stack development, robotics and IoT, STEM tutoring, and tech consulting — plus the skills and tools I work with.',
  },
  '/projects': {
    title: 'Projects — K.T Devv',
    description:
      'Featured work: mobile and web apps, an AI banking site, a construction management system, and LEGO Mindstorms robotics for WRO 2025.',
  },
  '/education': {
    title: 'Education — K.T Devv',
    description:
      'BSc Computer Science at Kwame Nkrumah University of Science and Technology (KNUST), and General Science at Our Lady of Grace SHS.',
  },
  '/contact': {
    title: 'Contact — K.T Devv',
    description: 'Get in touch about opportunities, collaboration, or STEM outreach.',
  },
};

const notFoundMeta: PageMeta = {
  title: `Page not found — ${SITE_NAME}`,
  description: 'This page does not exist.',
};

function upsertTag(selector: string, create: () => HTMLElement): HTMLElement {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  const el = upsertTag(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute('content', content);
}

/** Normalises "/about/" → "/about" so canonical URLs and lookups match the sitemap. */
function normalizePath(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

/**
 * Updates title, description, canonical, Open Graph and robots tags for the
 * current route. Unknown routes are marked `noindex` (they render the 404 page).
 */
export function applyPageMeta(pathname: string) {
  const path = normalizePath(pathname);
  const known = path in pageMeta;
  const meta = known ? pageMeta[path] : notFoundMeta;
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;

  document.title = meta.title;
  setMeta('name', 'description', meta.description);
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);

  const canonical = upsertTag('link[rel="canonical"]', () => {
    const l = document.createElement('link');
    l.setAttribute('rel', 'canonical');
    return l;
  });

  if (known) {
    canonical.setAttribute('href', url);
    setMeta('property', 'og:url', url);
    document.head.querySelector('meta[name="robots"]')?.remove();
  } else {
    canonical.removeAttribute('href');
    setMeta('name', 'robots', 'noindex');
  }
}
