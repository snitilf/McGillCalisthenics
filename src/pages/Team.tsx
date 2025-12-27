import React from 'react';

// team member with image positioning controls
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  // offsetX: 0 = left, 50 = center, 100 = right
  // offsetY: 0 = top, 50 = center, 100 = bottom
  // zoom: 1 = normal, >1 = zoom in, <1 = zoom out
  offsetX?: number;
  offsetY?: number;
  zoom?: number;
}

interface TeamGroup {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<{ title: string; members: TeamMember[] }> = ({ title, members }) => {
  return (
    <section className="mb-16">
      <h2 
        className="mb-8 text-center text-3xl font-bold text-mcgill-dark"
        style={{ 
          fontFamily: 'Schibsted Grotesk, sans-serif',
          fontWeight: 700,
        }}
      >
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member) => (
          <div 
            key={member.id}
            className="flex w-full flex-col items-center rounded-xl bg-white/40 p-4 sm:p-6 text-center shadow-lg sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
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

            <h3 
              className="text-xl font-semibold text-mcgill-dark"
              style={{ 
                fontFamily: 'Schibsted Grotesk, sans-serif',
                fontWeight: 600,
              }}
            >
              {member.name}
            </h3>

            <p 
              className="font-medium text-mcgill-gray"
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
  const teamGroups: TeamGroup[] = [
    {
      title: 'Internal Team',
      members: [
        { 
          id: '1', 
          name: 'Noah Havrot-Landry', 
          role: 'Co-Founder & President', 
          image: '/images/execs/Noah.jpg',
          offsetX: 50,
          offsetY: 20,
          zoom: 1,
        },
        { 
          id: '2', 
          name: 'Charles Morin', 
          role: 'VP Internal', 
          image: '/images/execs/Charles.png',
          offsetX: 50,
          offsetY: 55,
          zoom: 1,
        },
        { 
          id: '6', 
          name: 'Natalia Andrea Lucena Henao', 
          role: 'VP Finance', 
          image: '/images/execs/Natalia.jpg',
          offsetX: 50,
          offsetY: 100,
          zoom: 3,
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
          offsetX: 50,
          offsetY: 25,
          zoom: 1,
        },
        { 
          id: '4', 
          name: 'Louis Philippe Bejjani', 
          role: 'Co-VP External', 
          image: '/images/execs/Louis.jpg',
          offsetX: 50,
          offsetY: 100,
          zoom: 1.2,
        },
        { 
          id: '5', 
          name: 'Filip Snítil', 
          role: 'VP Tech', 
          image: '/images/execs/Filip.jpg',
          offsetX: 110,
          offsetY: 10,
          zoom: 3,
        },
        { 
          id: '7', 
          name: 'Mia Desgagné', 
          role: 'VP Communications', 
          image: '/images/execs/Mia.jpg',
          offsetX: 50,
          offsetY: 20,
          zoom: 1.3,
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
          offsetX: 50,
          offsetY: 25,
          zoom: 1,
        },
        { 
          id: '9', 
          name: 'Niko Vriniotis', 
          role: 'Team Manager', 
          image: '/images/execs/Niko.jpg',
          offsetX: 50,
          offsetY: 90,
          zoom: 1.6,
        },
      ]
    },
    {
      title: 'Coaching Team',
      members: [
        { 
          id: '10', 
          name: 'Alek Tanev', 
          role: 'Co-Founder & Coach', 
          image: '/images/execs/Alek.jpg',
          offsetX: 50,
          offsetY: 50,
          zoom: 1,
        },
        { 
          id: '11', 
          name: 'Hassan-Khalid Zakaryaa', 
          role: 'Coach', 
          image: '/images/execs/Khalid.jpg',
          offsetX: 50,
          offsetY: 50,
          zoom: 1,
        },
        { 
          id: '12', 
          name: 'David Maksimov', 
          role: 'Coach', 
          image: '/images/execs/David.jpg',
          offsetX: 50,
          offsetY: 90,
          zoom: 1,
        },
        { 
          id: '13', 
          name: 'Kenzo Dekkal-Furuya', 
          role: 'Coach', 
          image: '/images/execs/Kenzo.png',
          offsetX: 50,
          offsetY: 50,
          zoom: 1,
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-mcgill-rose">
      <section className="bg-mcgill-rose pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
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

      {/* team sections */}
      <section className="pb-2 bg-mcgill-rose">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
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