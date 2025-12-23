import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-8 px-8 md:px-16 flex justify-between items-start pointer-events-none">
      {/* pointer-events-none on container, auto on children to allow clicking through empty spaces if needed, 
          though nav usually sits on top. We keep standard block layout for simplicity. 
      */}
      
      {/* Left Side: Socials + Left Nav */}
      <div className="hidden md:flex items-center gap-12 pointer-events-auto">
        <div className="flex gap-4 text-mcgill-dark">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-mcgill-red transition-colors">
              <Instagram size={20} />
            </a>
        </div>
        <div className="flex gap-8">
            {leftLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `font-sans font-medium text-mcgill-dark hover:text-mcgill-red transition-colors text-sm uppercase tracking-wide ${
                      isActive ? 'text-mcgill-red' : ''
                    }`
                  }
                >
                    {link.label}
                </NavLink>
            ))}
        </div>
      </div>

      {/* Mobile Menu Button (Visible only on small screens) */}
      <button 
        className="md:hidden text-mcgill-dark pointer-events-auto"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Right Side: Right Nav */}
      <div className="hidden md:flex items-center gap-8 pointer-events-auto">
        {rightLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `font-sans font-medium text-mcgill-dark hover:text-mcgill-red transition-colors text-sm uppercase tracking-wide ${
                  isActive ? 'text-mcgill-red' : ''
                }`
              }
            >
                {link.label}
            </NavLink>
        ))}
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSe..." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-sans font-medium text-mcgill-dark hover:text-mcgill-red transition-colors text-sm uppercase tracking-wide"
        >
          Register
        </a>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-mcgill-rose z-40 flex flex-col items-center justify-center gap-8 pointer-events-auto">
           {NAV_ITEMS.map((link, index) => (
            <React.Fragment key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `font-display font-bold text-3xl text-mcgill-dark uppercase ${
                    isActive ? 'text-mcgill-red' : ''
                  }`
                }
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
                  className="font-display font-bold text-3xl text-mcgill-dark uppercase"
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