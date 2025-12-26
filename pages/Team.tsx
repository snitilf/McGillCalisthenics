import React from 'react';

// Team member type with image position control
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  // Control which part of the photo is visible in the circle
  // Use CSS object-position values: 'center', 'top', 'center 20%', '50% 30%', etc.
  imagePosition?: string;
}

// Grouped team structure
interface TeamGroup {
  title: string;
  members: TeamMember[];
}

// Reusable Team Section Component (like MindVista's TeamSection)
const TeamSection: React.FC<{ title: string; members: TeamMember[] }> = ({ title, members }) => {
  return (
    <div className="py-10">
      {/* Section Title */}
      <h2 
        className="text-2xl md:text-3xl font-bold text-white text-center mb-10"
        style={{ 
          fontFamily: 'Schibsted Grotesk, sans-serif',
          fontWeight: 700,
        }}
      >
        {title}
      </h2>

      {/* Members - Flexbox centered */}
      <div className="flex flex-wrap justify-center gap-5 md:gap-6">
        {members.map((member) => (
          <div 
            key={member.id}
            className="flex flex-col items-center"
          >
            {/* Card Container - Wide rectangle like MindVista */}
            <div 
              className="bg-[#1e1b4b]/40 rounded-2xl px-10 py-8 flex flex-col items-center"
              style={{ width: '280px', minHeight: '220px' }}
            >
              {/* Circular Photo - Large like MindVista */}
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-5 flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: member.imagePosition || 'center center'
                  }}
                />
              </div>

              {/* Name */}
              <h3 
                className="text-white text-center font-bold text-base md:text-lg leading-tight mb-1"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 700,
                }}
              >
                {member.name}
              </h3>

              {/* Role */}
              <p 
                className="text-gray-400 text-center text-sm leading-tight"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 500,
                }}
              >
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  // Define team groups with adjustable image positioning per member
  const teamGroups: TeamGroup[] = [
    {
      title: 'Internal Team',
      members: [
        { 
          id: '1', 
          name: 'Noah Havrot-Landry', 
          role: 'President', 
          image: '/images/execs/Noah.jpg',
          imagePosition: 'center 20%'
        },
        { 
          id: '2', 
          name: 'Charles Morin', 
          role: 'VP Internal', 
          image: '/images/execs/Charles.png',
          imagePosition: 'center 15%'
        },
        { 
          id: '6', 
          name: 'Natalia Andrea Lucena Henao', 
          role: 'VP Finance', 
          image: '/images/execs/Natalia.jpg',
          imagePosition: 'center 20%'
        },
      ]
    },
    {
      title: 'External Team',
      members: [
        { 
          id: '3', 
          name: 'Adrian Marinov', 
          role: 'Co-VP External', 
          image: '/images/execs/Adrian.jpg',
          imagePosition: 'center 25%'
        },
        { 
          id: '4', 
          name: 'Louis Philippe Bejjani', 
          role: 'Co-VP External', 
          image: '/images/execs/Louis.jpg',
          imagePosition: 'center 20%'
        },
        { 
          id: '5', 
          name: 'Filip Snítil', 
          role: 'VP Tech', 
          image: '/images/execs/Filip.jpg',
          imagePosition: 'center 15%'
        },
        { 
          id: '7', 
          name: 'Mia Desgagné', 
          role: 'VP Communications', 
          image: '/images/execs/Mia.jpg',
          imagePosition: 'center 20%'
        },
      ]
    },
    {
      title: 'Operations Team',
      members: [
        { 
          id: '8', 
          name: 'Katya Shubochkin', 
          role: 'VP Operations & Logistics', 
          image: '/images/execs/Katya.jpg',
          imagePosition: 'center 25%'
        },
        { 
          id: '9', 
          name: 'Niko Vriniotis', 
          role: 'Team Manager', 
          image: '/images/execs/Niko.jpg',
          imagePosition: 'center 20%'
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark theme matching Competitions */}
      <section 
        className="pt-32 pb-4"
        style={{
          background: 'linear-gradient(180deg, #4a151d 0%, #3a1219 15%, #2a0e14 30%, #1a0a0c 50%, #120608 70%, #0f0405 100%)',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 
            className="font-figtree font-extrabold italic leading-[0.9] tracking-tight mb-4"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 800,
              fontStyle: 'italic',
            }}
          >
            <span className="text-white">Meet The </span>
            <span className="text-mcgill-red">Team.</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'Schibsted Grotesk, sans-serif', 
              fontWeight: 500 
            }}
          >
            The students behind the movement. Dedicated to building the calisthenics community at McGill University.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <section 
        className="pb-20"
        style={{
          background: 'linear-gradient(to bottom, #0f0405 0%, #150708 50%, #1a0a0c 100%)',
        }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          {teamGroups.map((group, index) => (
            <TeamSection 
              key={index} 
              title={group.title} 
              members={group.members} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;