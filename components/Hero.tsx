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
      
      {/* CENTRAL IMAGE STRIP - uses inset-0 variant for full coverage */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[35%] lg:w-[30%]"
        style={{ height: '100%' }}
      >
         <img 
            src="/images/mcgillflag.jpg" 
            alt="McGill Calisthenics"
            className="w-full h-full object-cover"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
         />
         <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* MAIN TYPOGRAPHY */}
      <div className="relative z-20 text-center pointer-events-none w-full">
        <h1 
            className="font-figtree font-extrabold italic leading-[0.85] tracking-tight"
            style={{ 
                fontSize: 'clamp(4rem, 12vw, 12rem)',
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

      {/* LEFT SIDE CONTENT: est Year */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 md:translate-y-[-50px] z-10">
        <p className="font-display font-bold text-black/80 text-xs md:text-sm tracking-[0.2em] rotate-180" style={{ writingMode: 'vertical-rl', fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}>
            © EST. 2024
        </p>
      </div>

    </section>
  );
};

export default Hero;