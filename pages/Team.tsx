import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-mcgill-rose">
      {/* Page Header */}
      <section className="bg-mcgill-rose pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 
            className="font-figtree font-extrabold italic leading-[0.9] tracking-tight mb-6"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 800,
              fontStyle: 'italic',
            }}
          >
            <span className="text-mcgill-black">Meet The </span>
            <span className="text-mcgill-red">Team.</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'Schibsted Grotesk, sans-serif', 
              fontWeight: 600 
            }}
          >
            The students behind the movement. Dedicated to building the calisthenics community at McGill University.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* McGill Red Accent Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-mcgill-red"></div>
              
              {/* Portrait Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-full h-full object-cover ${
                    member.id === '5' 
                      ? 'scale-150' // Filip: zoomed in, no hover zoom
                      : '' // Others: normal scale, no hover zoom
                  }`}
                  style={
                    member.id === '5' 
                      ? { objectPosition: '90% 35%' } // crop position for Filip if needed
                      : {}
                  }
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-mcgill-red/0 group-hover:bg-mcgill-red/5 transition-colors duration-300"></div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 bg-white">
                <h3 
                  className="text-xl md:text-2xl font-figtree font-extrabold tracking-tight text-mcgill-dark mb-2 group-hover:text-mcgill-red transition-colors"
                  style={{ 
                    fontFamily: 'Figtree, sans-serif',
                    fontWeight: 800,
                  }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-sm md:text-base text-gray-600 font-medium tracking-wide"
                  style={{ 
                    fontFamily: 'Schibsted Grotesk, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;