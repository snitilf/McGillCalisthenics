import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useLenis } from './hooks/useLenis';

// Route-based code splitting — keeps the initial bundle small; pages load on demand.
const Home = lazy(() => import('./pages/Home'));
const Team = lazy(() => import('./pages/Team'));
const Workshops = lazy(() => import('./pages/Workshops'));
const Competitions = lazy(() => import('./pages/Competitions'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));

// Minimal branded fallback while a route chunk loads.
const PageFallback: React.FC = () => (
  <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true">
    <span className="h-6 w-6 animate-spin rounded-full border-2 border-mcgill-red border-t-transparent" />
  </div>
);

const App: React.FC = () => {
  useLenis();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans selection:bg-mcgill-red selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
