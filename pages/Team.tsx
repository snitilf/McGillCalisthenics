import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import ChromaGrid, { ChromaItem } from '../components/ChromaGrid';

const Team: React.FC = () => {
  // McGill red color
  const MCGILL_RED = '#C4182D';
  
  // Gradient angles for visual variety
  const gradientAngles = [145, 180, 210, 165, 195, 225, 135, 240, 120];
  
  // Transform TEAM_MEMBERS to ChromaItem format
  const chromaItems: ChromaItem[] = TEAM_MEMBERS.map((member, index) => ({
    image: member.image,
    title: member.name,
    subtitle: member.role,
    borderColor: MCGILL_RED,
    gradient: `linear-gradient(${gradientAngles[index]}deg, ${MCGILL_RED}, #000)`
  }));

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
        <ChromaGrid 
          items={chromaItems}
        />
      </section>
    </div>
  );
};

export default Team;