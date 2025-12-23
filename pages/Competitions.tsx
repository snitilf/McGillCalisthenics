import React from 'react';

const Competitions: React.FC = () => {
  return (
    <div className="min-h-screen bg-mcgill-dark text-white pt-32 pb-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl md:text-9xl font-black uppercase text-transparent text-outline tracking-tighter opacity-50 select-none">
            Coming Soon
        </h1>
        <div className="absolute mt-12 text-center">
            <h2 className="text-3xl font-bold uppercase mb-4 text-white">Competitions</h2>
            <p className="text-gray-400 max-w-md mx-auto">
                We are currently planning upcoming challenges and events. Stay tuned to our social media for announcements.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Competitions;