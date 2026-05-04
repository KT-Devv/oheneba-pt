import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navigation, Footer } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const Education = lazy(() => import('./pages/Education').then(m => ({ default: m.Education })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div aria-busy="true" className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
