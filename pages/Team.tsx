import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-mcgill-dark text-white pt-40 pb-24 diagonal-clip relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="images/workshops/IMG_9066.jpeg" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">The Executive Team.</h1>
          <p className="text-xl text-gray-400 max-w-2xl">The students behind the movement. Dedicated to building the calisthenics community at McGill University.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group relative">
              {/* Card Background Element */}
              <div className="absolute top-4 left-4 w-full h-full bg-mcgill-rose -z-10 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              <div className="bg-white border border-gray-100 shadow-xl overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden">
                   <div className="absolute inset-0 bg-mcgill-red/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 bg-white border-t border-gray-100 relative z-20">
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-mcgill-dark group-hover:text-mcgill-red transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 font-medium tracking-wide text-sm mt-1 uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;