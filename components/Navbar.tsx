import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  // Updated links structure - left side: Team, Workshops, Competitions
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
      
      if (currentScrollY > 100) {
        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-8 md:px-16 flex justify-between items-start pointer-events-none bg-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* pointer-events-none on container, auto on children to allow clicking through empty spaces if needed, 
          though nav usually sits on top. We keep standard block layout for simplicity. 
      */}
      
      {/* Left Side: Logo + Left Nav */}
      <div className="hidden md:flex items-center gap-12 pointer-events-auto">
        {/* Logo - Home Button */}
        <Link to="/" className="pointer-events-auto">
          <img src="/images/logonotext.png" alt="McGill Calisthenics" className="h-8 md:h-10" />
        </Link>
        <div className="flex gap-8">
            {leftLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-sm uppercase tracking-wide ${
                      isActive ? 'text-mcgill-red' : ''
                    }`}
                  style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontWeight: 700,
                  }}
                >
                    {link.label}
                </NavLink>
            ))}
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

      {/* Right Side: Right Nav */}
      <div className="hidden md:flex items-center gap-8 pointer-events-auto">
        {rightLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-sm uppercase tracking-wide ${
                  isActive ? 'text-mcgill-red' : ''
                }`}
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontWeight: 700,
              }}
            >
                {link.label}
            </NavLink>
        ))}
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSe..." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-figtree font-bold text-mcgill-dark hover:text-mcgill-red transition-colors text-sm uppercase tracking-wide"
          style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 700,
          }}
        >
          Register
        </a>
        {/* Instagram Icon */}
        <div className="flex gap-4 text-mcgill-dark">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-mcgill-red transition-colors">
              <Instagram size={20} />
            </a>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-mcgill-rose z-40 flex flex-col items-center justify-center gap-8 pointer-events-auto">
           {NAV_ITEMS.map((link, index) => (
            <React.Fragment key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `font-figtree font-bold text-3xl text-mcgill-dark uppercase ${
                    isActive ? 'text-mcgill-red' : ''
                  }`}
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontWeight: 700,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
              {/* Insert Register after Competitions (index 3) */}
              {index === 3 && (
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe..." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-figtree font-bold text-3xl text-mcgill-dark uppercase"
                  style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontWeight: 700,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;