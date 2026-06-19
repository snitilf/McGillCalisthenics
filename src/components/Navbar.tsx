import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

// hide navbar only after scrolling past the hero-ish zone; ignore tiny jitters
const SHOW_THRESHOLD = 120; // always visible within this many px of the top
const SCROLL_DEADZONE = 10; // min delta before we flip direction (kills trackpad jitter)

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollRef = useRef(0);
  const tickingRef = useRef(false);
  const location = useLocation();

  // left nav links
  const leftLinks = NAV_ITEMS.filter(item => 
    item.path === '/team' || item.path === '/workshops' || item.path === '/competitions'
  );
  
  // right nav links
  const rightLinks = NAV_ITEMS.filter(item => 
    item.path === '/faq' || item.path === '/contact'
  );

  // close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // hide on scroll-down, show on scroll-up — with a threshold + deadzone so the
  // bar doesn't snap back on the slightest movement. rAF-throttled.
  useEffect(() => {
    lastScrollRef.current = window.scrollY;

    const update = () => {
      tickingRef.current = false;
      const currentY = window.scrollY;
      const delta = currentY - lastScrollRef.current;

      setScrolled(currentY > SHOW_THRESHOLD);

      if (currentY <= SHOW_THRESHOLD) {
        // near the top: always show
        setIsVisible(true);
      } else if (Math.abs(delta) > SCROLL_DEADZONE) {
        // only react to a deliberate scroll, not jitter
        setIsVisible(delta < 0);
      }

      // only advance the reference once we've moved beyond the deadzone,
      // so slow drift accumulates instead of being swallowed every frame
      if (currentY <= SHOW_THRESHOLD || Math.abs(delta) > SCROLL_DEADZONE) {
        lastScrollRef.current = currentY;
      }
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-16 flex justify-between items-center pointer-events-none transition-[transform,background-color,box-shadow,backdrop-filter] duration-300 ease-premium ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled && !mobileMenuOpen
          ? 'bg-mcgill-rose/70 backdrop-blur-md shadow-[0_1px_20px_rgba(17,17,17,0.06)]'
          : 'bg-transparent'
      }`}
    >
      {/* desktop nav */}
      <div className="hidden md:flex items-center justify-between w-full pointer-events-auto">
        {/* left nav */}
        <div className="flex gap-8 flex-1 justify-start">
          {leftLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-xl tracking-wide ${
                  link.label === 'FAQ' ? 'uppercase' : ''
                } ${
                  isActive ? 'text-mcgill-red is-active' : ''
                }`}
              style={{
                fontFamily: 'Schibsted Grotesk, sans-serif',
                fontWeight: 700,
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* logo */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className="pointer-events-auto">
            <img 
              src="/images/logonotext.webp" 
              alt="McGill Calisthenics" 
              className="h-8 md:h-10"
              width="40"
              height="40"
            />
          </Link>
        </div>

        {/* right nav */}
        <div className="flex gap-8 flex-1 justify-end">
          {rightLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-xl tracking-wide ${
                  link.label === 'FAQ' ? 'uppercase' : ''
                } ${
                  isActive ? 'text-mcgill-red is-active' : ''
                }`}
              style={{
                fontFamily: 'Schibsted Grotesk, sans-serif',
                fontWeight: 700,
              }}
            >
              {link.label}
            </NavLink>
          ))}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-ukBEfFMjiUunl6uppZhCIrpm9awe94pr5BpayGZ8wE6Ytg/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-xl tracking-wide"
            style={{
              fontFamily: 'Schibsted Grotesk, sans-serif',
              fontWeight: 700,
            }}
          >
            Register
          </a>
        </div>
      </div>
      
      {/* mobile nav */}
      <div className="md:hidden flex items-center justify-between w-full pointer-events-auto">
        <Link to="/" className="pointer-events-auto">
          <img 
            src="/images/logonotext.webp" 
            alt="McGill Calisthenics" 
            className="h-8"
            width="32"
            height="32"
          />
        </Link>
        <button
          className="text-mcgill-dark pointer-events-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mcgill-red focus-visible:ring-offset-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-0 left-0 w-full min-h-[100dvh] bg-mcgill-rose/70 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 pointer-events-auto"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* menu items - stops click propagation */}
          <div 
            className="flex flex-col items-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <NavLink
              to="/"
              className={({ isActive }) => 
                `font-figtree font-bold text-3xl text-mcgill-dark ${
                  isActive ? 'text-mcgill-red' : ''
                }`}
              style={{
                fontFamily: 'Schibsted Grotesk, sans-serif',
                fontWeight: 700,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            {leftLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `font-figtree font-bold text-3xl text-mcgill-dark ${
                    link.label === 'FAQ' ? 'uppercase' : ''
                  } ${
                    isActive ? 'text-mcgill-red' : ''
                  }`}
                style={{
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 700,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {rightLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `font-figtree font-bold text-3xl text-mcgill-dark ${
                    link.label === 'FAQ' ? 'uppercase' : ''
                  } ${
                    isActive ? 'text-mcgill-red' : ''
                  }`}
                style={{
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 700,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf-ukBEfFMjiUunl6uppZhCIrpm9awe94pr5BpayGZ8wE6Ytg/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-figtree font-bold text-3xl text-mcgill-dark"
              style={{
                fontFamily: 'Schibsted Grotesk, sans-serif',
                fontWeight: 700,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;