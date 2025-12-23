import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-mcgill-rose flex justify-center items-center">
      
      {/* CENTRAL IMAGE STRIP */}
      {/* Fixed width (approx 30-35%), full height, centered. */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[35%] lg:w-[30%] overflow-hidden z-0">
         <img 
            // Random calisthenics/fitness photo
            src="https://images.unsplash.com/photo-1668980248211-8cef16722c5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop" 
            alt="McGill Calisthenics"
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* MAIN TYPOGRAPHY */}
      {/* Text overlap effect - text cuts into the image strip */}
      {/* High Z-index to sit on top of image strip, positioned to overlap */}
      <div className="relative z-20 text-center pointer-events-none w-full">
        <h1 
            className="font-figtree font-extrabold italic leading-[0.85] tracking-tight"
            style={{ 
                fontSize: 'clamp(3rem, 12vw, 10rem)',
                fontFamily: 'Figtree, sans-serif',
                fontWeight: 800,
                fontStyle: 'italic',
            }}
        >
            {/* McGill Calisthenics - McGill in white, Calisthenics in red */}
            <span className="text-white">McGill</span>
            <br />
            <span className="text-mcgill-red">Calisthenics</span>
        </h1>
      </div>

      {/* LEFT SIDE CONTENT: Est Year */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 md:translate-y-[-50px] z-10">
        <p className="font-display font-bold text-mcgill-dark text-xs md:text-sm tracking-[0.2em] opacity-80 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            © EST. 2024
        </p>
      </div>

      {/* RIGHT SIDE CONTENT: Removed as requested */}

    </section>
  );
};

export default Hero;

