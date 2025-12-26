import React from 'react';

// Team member type with image crop controls
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  
  // === IMAGE CROP CONTROLS ===
  // offsetX: Horizontal position (0 = left edge, 50 = center, 100 = right edge)
  // offsetY: Vertical position (0 = top edge, 50 = center, 100 = bottom edge)
  // zoom: Scale level (1 = normal, 1.2 = 20% zoom in, 0.8 = 20% zoom out)
  offsetX?: number;
  offsetY?: number;
  zoom?: number;
}

// Grouped team structure
interface TeamGroup {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<{ title: string; members: TeamMember[] }> = ({ title, members }) => {
  return (
    <section className="mb-16">
      {/* Section Title */}
      <h2 
        className="mb-8 text-center text-3xl font-bold text-mcgill-dark"
        style={{ 
          fontFamily: 'Schibsted Grotesk, sans-serif',
          fontWeight: 700,
        }}
      >
        {title}
      </h2>

      {/* Members - Flexbox centered with responsive widths */}
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member) => (
          <div 
            key={member.id}
            className="flex w-full flex-col items-center rounded-xl bg-mcgill-red/40 p-6 text-center shadow-lg sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
          >

            <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
              <img 
                src={member.image} 
                alt={member.name}
                className="h-full w-full object-cover"
                style={{ 
                  objectPosition: `${member.offsetX ?? 50}% ${member.offsetY ?? 50}%`,
                  transform: `scale(${member.zoom ?? 1})`,
                }}
              />
            </div>

            {/* Name */}
            <h3 
              className="text-xl font-semibold text-white"
              style={{ 
                fontFamily: 'Schibsted Grotesk, sans-serif',
                fontWeight: 600,
              }}
            >
              {member.name}
            </h3>

            {/* Role */}
            <p 
              className="font-medium text-gray-200"
              style={{ 
                fontFamily: 'Schibsted Grotesk, sans-serif',
                fontWeight: 500,
              }}
            >
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Team: React.FC = () => {
  // HOW TO ADJUST PHOTOS:
  // - offsetX: Move LEFT (0) ← → Move RIGHT (100). Default: 50 (center)
  // - offsetY: Move UP (0) ↑ ↓ Move DOWN (100). Default: 50 (center)
  // - zoom: Zoom OUT (0.8) ← → Zoom IN (1.5). Default: 1 (no zoom)
  //
  const teamGroups: TeamGroup[] = [
    {
      title: 'Internal Team',
      members: [
        { 
          id: '1', 
          name: 'Noah Havrot-Landry', 
          role: 'President', 
          image: '/images/execs/Noah.jpg',
          offsetX: 50,   // left/right
          offsetY: 20,   // up/down (lower = more towards top of photo)
          zoom: 1,       // zoom level
        },
        { 
          id: '2', 
          name: 'Charles Morin', 
          role: 'VP Internal', 
          image: '/images/execs/Charles.png',
          offsetX: 50,   // left/right
          offsetY: 55,   // up/down (lower = more towards top of photo)
          zoom: 1,       // zoom level
        },
        { 
          id: '6', 
          name: 'Natalia Andrea Lucena Henao', 
          role: 'VP Finance', 
          image: '/images/execs/Natalia.jpg',
          offsetX: 50,   // left/right
          offsetY: 100,   // up/down (lower = more towards top of photo)
          zoom: 3,       // zoom level
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
          offsetX: 50,   // left/right
          offsetY: 25,   // up/down (lower = more towards top of photo)
          zoom: 1,       // zoom level
        },
        { 
          id: '4', 
          name: 'Louis Philippe Bejjani', 
          role: 'Co-VP External', 
          image: '/images/execs/Louis.jpg',
          offsetX: 50,   // left/right
          offsetY: 100,   // up/down (lower = more towards top of photo)
          zoom: 1.2,       // zoom level
        },
        { 
          id: '5', 
          name: 'Filip Snítil', 
          role: 'VP Tech', 
          image: '/images/execs/Filip.jpg',
          offsetX: 110,   // left/right
          offsetY: 10,   // up/down (lower = more towards top of photo)
          zoom: 3,       // zoom level
        },
        { 
          id: '7', 
          name: 'Mia Desgagné', 
          role: 'VP Communications', 
          image: '/images/execs/Mia.jpg',
          offsetX: 50,   // left/right
          offsetY: 20,   // up/down (lower = more towards top of photo)
          zoom: 1.3,       // zoom level
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
          offsetX: 50,   // left/right
          offsetY: 25,   // up/down (lower = more towards top of photo)
          zoom: 1,       // zoom level
        },
        { 
          id: '9', 
          name: 'Niko Vriniotis', 
          role: 'Team Manager', 
          image: '/images/execs/Niko.jpg',
          offsetX: 50,   // left/right
          offsetY: 90,   // up/down (lower = more towards top of photo)
          zoom: 1.6,       // zoom level
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-mcgill-rose">
      <section className="bg-mcgill-rose pt-32 pb-12">
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
            <span className="text-mcgill-dark">Meet The </span>
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

      {/* Team Sections */}
      <section className="pb-8 bg-mcgill-rose">
        <div className="container mx-auto px-6 max-w-7xl">
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