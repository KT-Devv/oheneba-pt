import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const pageLoaders: Record<string, () => Promise<unknown>> = {
  '/': () => import('./pages/Home'),
  '/about': () => import('./pages/About'),
  '/services': () => import('./pages/Services'),
  '/projects': () => import('./pages/Projects'),
  '/education': () => import('./pages/Education'),
  '/contact': () => import('./pages/Contact'),
};

// Start fetching the shell and the current route's page in parallel instead of
// waiting for the shell to render before discovering which page it needs.
const loadShell = () => import('./components/Shell');
void loadShell();
void pageLoaders[window.location.pathname.replace(/\/+$/, '') || '/']?.();

const Shell = lazy(loadShell);

// Warm the remaining page chunks when the browser is idle, so route changes don't wait on the network.
const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1500));
idle(() => Object.values(pageLoaders).forEach((load) => void load()));

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const Education = lazy(() => import('./pages/Education').then(m => ({ default: m.Education })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <Router>
      <Suspense fallback={<div aria-busy="true" className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Shell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Shell>
      </Suspense>
    </Router>
  );
}

export default App;
