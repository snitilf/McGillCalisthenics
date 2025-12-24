import React from 'react';
import { Instagram, Mail, Facebook, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-mcgill-dark py-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* left side: Logo + Text */}
          <div className="flex items-center gap-6">
             <img src="/images/logo.png" alt="McGill Calisthenics Club" className="h-20 object-contain" />
             <div>
               <h3 className="text-xl font-black tracking-tighter mb-0">McGill <span className="text-mcgill-red">Calisthenics</span></h3>
               <p 
                 className="text-black/90 text-sm max-w-sm leading-relaxed"
                 style={{ 
                   fontFamily: 'Schibsted Grotesk, sans-serif', 
                   fontWeight: 600 
                 }}
               >
                 Built Different. A student-led community dedicated to bodyweight training excellence at McGill University.
               </p>
             </div>
          </div>

          {/* connect - now left-aligned internally */}
          <div className="flex items-center gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-mcgill-red">Connect</h4>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-mcgill-dark hover:text-mcgill-red transition-colors"><Instagram size={20} /></a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-mcgill-dark hover:text-mcgill-red transition-colors"><Facebook size={20} /></a>
              <a href={SOCIAL_LINKS.messenger} target="_blank" rel="noreferrer" className="text-mcgill-dark hover:text-mcgill-red transition-colors"><MessageCircle size={20} /></a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-mcgill-dark hover:text-mcgill-red transition-colors"><Mail size={20} /></a>
            </div>
            <span 
              className="text-xs text-gray-600"
              style={{ fontWeight: 600 }}
            >
              © 2025
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;