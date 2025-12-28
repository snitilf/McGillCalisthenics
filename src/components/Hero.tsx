import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-mcgill-rose flex justify-center items-center"
      style={{ 
        height: '100vh',
        minHeight: '100vh',
      }}
    >
      
      {/* center image strip */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[35%] lg:w-[30%]"
        style={{ height: '100%' }}
      >
         <img 
            src="/images/mcgillflag.webp" 
            alt="McGill Calisthenics"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
         />
         <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* main title */}
      <div className="relative z-20 text-center pointer-events-none w-full px-4">
        <h1 
            className="font-figtree font-extrabold italic leading-[0.85] tracking-tight"
            style={{ 
                fontSize: 'clamp(4rem, 10vw, 12rem)',
                fontFamily: 'Figtree, sans-serif',
                fontWeight: 800,
                fontStyle: 'italic',
            }}
        >
            <span className="text-white">McGill</span>
            <br />
            <span className="text-mcgill-red">Calisthenics</span>
        </h1>
      </div>

      {/* est. 2024 - desktop only */}
      <div className="absolute left-4 lg:left-16 top-1/2 -translate-y-1/2 lg:-translate-y-[120px] z-10 hidden md:block">
        <p className="font-display text-black/80 text-sm lg:text-lg leading-relaxed rotate-180" style={{ writingMode: 'vertical-rl', fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
            <span style={{ display: 'inline-block', transform: 'rotate(90deg)' }}>©</span> EST. 2024
        </p>
      </div>

      {/* tagline - desktop only */}
      <div className="absolute left-[68%] lg:left-[75%] bottom-[18%] lg:bottom-[10%] z-10 text-left hidden md:block w-[28%] lg:w-[20%]">
        <p className="text-black/90 text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
          Built Different.
          <br />
          A student-led community dedicated to bodyweight training excellence.
        </p>
      </div>
    </section>
  );
};

export default Hero;