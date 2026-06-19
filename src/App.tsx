import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Branded fallback while a route chunk loads. Holds back the spinner briefly so
// fast (cached) chunk loads don't flash a spinner for a frame or two.
const PageFallback: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true">
      {show && (
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-mcgill-red border-t-transparent" />
      )}
    </div>
  );
};

// Routes + a per-navigation fade. Re-keying on pathname remounts the wrapper so
// each page eases in; the global reduced-motion block neutralizes it.
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<PageFallback />}>
      <div key={location.pathname} className="animate-fade-in">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Suspense>
  );
};

const App: React.FC = () => {
  useLenis();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans selection:bg-mcgill-red selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
