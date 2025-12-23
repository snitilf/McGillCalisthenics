import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-mcgill-rose flex justify-center items-center">
      
      {/* CENTRAL IMAGE STRIP */}
      {/* Fixed width (approx 30-35%), full height. */}
      <div className="absolute top-0 bottom-0 w-full md:w-[35%] lg:w-[30%] overflow-hidden z-0">
         <img 
            // Random calisthenics/fitness photo
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
            alt="McGill Calisthenics"
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/10" />
         
         {/* Logo Icon acting as Home Button */}
         <Link to="/" className="absolute top-8 left-1/2 -translate-x-1/2 text-white z-20 hover:scale-110 transition-transform cursor-pointer">
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="font-display font-bold text-xl">M</span>
            </div>
         </Link>
      </div>

      {/* MAIN TYPOGRAPHY */}
      {/* Centered, spanning across the screen. High Z-index to sit on top of image strip. */}
      {/* Removed font-bold because MSung HK Bold is naturally bold. Added font-display. */}
      <div className="relative z-10 text-center mix-blend-normal pointer-events-none">
        <h1 
            className="font-display text-mcgill-red leading-[0.85] tracking-tight uppercase"
            style={{ 
                fontSize: 'clamp(3rem, 12vw, 10rem)',
            }}
        >
            McGill
            <br />
            Calisthenics
        </h1>
      </div>

      {/* LEFT SIDE CONTENT: Est Year */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 md:translate-y-[-50px] z-10">
        <p className="font-display text-mcgill-dark text-xs md:text-sm tracking-[0.2em] opacity-80 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            © EST. 2024
        </p>
      </div>

      {/* RIGHT SIDE CONTENT: Removed as requested */}

    </section>
  );
};

export default Hero;

