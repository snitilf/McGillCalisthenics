import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
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

  // hide navbar when scrolling down, show when at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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
      {/* desktop nav */}
      <div className="hidden md:flex items-center justify-between w-full pointer-events-auto">
        {/* left nav */}
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

        {/* logo */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className="pointer-events-auto">
            <img src="/images/logonotext.png" alt="McGill Calisthenics" className="h-8 md:h-10" />
          </Link>
        </div>

        {/* right nav */}
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
      
      {/* mobile nav */}
      <div className="md:hidden flex items-center justify-between w-full pointer-events-auto">
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

      {/* mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;

