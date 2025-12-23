import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-mcgill-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Spacer to maintain layout */}
        <div className="w-10"></div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:text-mcgill-red ${
                  isActive ? 'text-mcgill-red' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe..." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:text-mcgill-red text-white"
          >
            Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-mcgill-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-mcgill-dark border-t border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-8' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-4 px-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-lg font-bold uppercase tracking-widest ${
                  isActive ? 'text-mcgill-red' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-gray-800">
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSe..." target="_blank" rel="noopener noreferrer" className="text-lg font-bold uppercase tracking-widest text-white hover:text-mcgill-red transition-colors">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;