import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  // Left side: Team, Workshops, Competitions
  const leftLinks = NAV_ITEMS.filter(item => 
    item.path === '/team' || item.path === '/workshops' || item.path === '/competitions'
  );
  
  // Right side: FAQ, Contact, Register
  const rightLinks = NAV_ITEMS.filter(item => 
    item.path === '/faq' || item.path === '/contact'
  );

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll detection and sliding effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar only when at the top of the page (within 100px)
      // Hide navbar when scrolled past 100px, regardless of scroll direction
      // Navbar will only reappear when scrolling back to the top
      setIsVisible(currentScrollY <= 80);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-16 flex justify-between items-center pointer-events-none bg-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* pointer-events-none on container, auto on children to allow clicking through empty spaces if needed, 
          though nav usually sits on top. We keep standard block layout for simplicity. 
      */}
      
      {/* Desktop Layout: Left Nav | Center Logo | Right Nav */}
      <div className="hidden md:flex items-center justify-between w-full pointer-events-auto">
        {/* Left Side: Nav Links */}
        <div className="flex gap-8 flex-1 justify-start">
          {leftLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-xl tracking-wide ${
                  link.label === 'FAQ' ? 'uppercase' : ''
                } ${
                  isActive ? 'text-mcgill-red' : ''
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

        {/* Center: Logo - Home Button */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className="pointer-events-auto">
            <img src="/images/logonotext.png" alt="McGill Calisthenics" className="h-8 md:h-10" />
          </Link>
        </div>

        {/* Right Side: Nav Links + Register */}
        <div className="flex gap-8 flex-1 justify-end">
          {rightLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-xl tracking-wide ${
                  link.label === 'FAQ' ? 'uppercase' : ''
                } ${
                  isActive ? 'text-mcgill-red' : ''
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSd5T0OMTWnBxIo8WqaZ-pJLxklhQKtw0ZNljD5lD8yJ3_N5gA/viewform?fbclid=IwY2xjawH1Ok1leHRuA2FlbQIxMAABHVdl15rm5jPz5GzAFI3W95ZRkOJ3QLpeSB9NurorVM9KDcZqJxyjDvamFg_aem_RiVoFaQEp_0BR-Y5XMV_RQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-xl tracking-wide"
            style={{
              fontFamily: 'Schibsted Grotesk, sans-serif',
              fontWeight: 700,
            }}
          >
            Register
          </a>
        </div>
      </div>
      
      {/* Mobile: Logo + Menu Button */}
      <div className="md:hidden flex items-center gap-4 pointer-events-auto">
        <Link to="/" className="pointer-events-auto">
          <img src="/images/logonotext.png" alt="McGill Calisthenics" className="h-8" />
        </Link>
        <button 
          className="text-mcgill-dark pointer-events-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-mcgill-rose z-40 flex flex-col items-center justify-center gap-8 pointer-events-auto">
          {/* Left side links: Team, Workshops, Competitions */}
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
          {/* Right side links: FAQ, Contact */}
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
          {/* Register link at the end */}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSd5T0OMTWnBxIo8WqaZ-pJLxklhQKtw0ZNljD5lD8yJ3_N5gA/viewform?fbclid=IwY2xjawH1Ok1leHRuA2FlbQIxMAABHVdl15rm5jPz5GzAFI3W95ZRkOJ3QLpeSB9NurorVM9KDcZqJxyjDvamFg_aem_RiVoFaQEp_0BR-Y5XMV_RQ" 
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
      )}
    </nav>
  );
};

export default Navbar;