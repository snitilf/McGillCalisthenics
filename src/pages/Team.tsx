import React, { useState } from 'react';

// team member with image positioning controls
interface TeamMember {
  id: string;
  name: string;
  role: string;
  // image is optional — members without a photo render a branded initials monogram
  image?: string;
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

type TeamYear = '2026-2027' | '2025-2026';

const TEAM_YEARS: { value: TeamYear; label: string }[] = [
  { value: '2026-2027', label: '2026–2027' },
  { value: '2025-2026', label: '2025–2026' },
];

// derive initials from a full name: first char of first + last word, uppercased
const getInitials = (name: string): string => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return (first + last).toUpperCase();
};

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
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  style={{
                    objectPosition: `${member.offsetX ?? 50}% ${member.offsetY ?? 50}%`,
                    transform: `scale(${member.zoom ?? 1})`,
                  }}
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center rounded-full ring-2 ring-mcgill-red/30"
                  style={{
                    background: 'radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FFE1E6 60%, #FBC9D1 100%)',
                  }}
                  aria-label={member.name}
                >
                  <span
                    className="text-4xl text-mcgill-red"
                    style={{
                      fontFamily: 'Schibsted Grotesk, sans-serif',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {getInitials(member.name)}
                  </span>
                </div>
              )}
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

// current executive team
const TEAM_2026_2027: TeamGroup[] = [
  {
    title: 'Internal Team',
    members: [
      {
        id: 'f-2627',
        name: 'Filip Snítil',
        role: 'President',
        image: '/images/execs/Filip.webp',
        offsetX: 110,
        offsetY: 10,
        zoom: 3,
      },
      {
        id: 'c-2627',
        name: 'Charles Morin',
        role: 'VP Internal',
        image: '/images/execs/Charles.webp',
        offsetX: 50,
        offsetY: 55,
        zoom: 1,
      },
      {
        id: 'jo-2627',
        name: 'Jonathon Olien',
        role: 'VP Finance',
        image: '/images/execs/Jonathon.webp',
        offsetX: 80,
        offsetY: 12,
        zoom: 2.4,
      },
      {
        id: 'n-2627',
        name: 'Noah Havrot-Landry',
        role: 'Co-Founder & VP Branding',
        image: '/images/execs/Noah.webp',
        offsetX: 50,
        offsetY: 20,
        zoom: 1,
      },
      {
        id: 'mj-2627',
        name: 'Mael Jayet',
        role: 'VP Administration (Head Coach)',
      },
    ],
  },
  {
    title: 'External Team',
    members: [
      {
        id: 'lp-2627',
        name: 'Louis-Philippe Bejjani',
        role: 'VP External',
        image: '/images/execs/Louis.webp',
        offsetX: 50,
        offsetY: 100,
        zoom: 1.2,
      },
      {
        id: 'ls-2627',
        name: 'Laura Salem',
        role: 'VP Communications',
        image: '/images/execs/Laura.webp',
        offsetX: 50,
        offsetY: 100,
        zoom: 1.4,
      },
      {
        id: 'mc-2627',
        name: 'Maximilien Cousin',
        role: 'VP Sponsorship',
        image: '/images/execs/Maximilien.webp',
        offsetX: 50,
        offsetY: 60,
        zoom: 1.0,
      },
    ],
  },
  {
    title: 'Operations Team',
    members: [
      {
        id: 'ag-2627',
        name: 'Alexia Ghiurea',
        role: 'VP Operations & Logistics',
        image: '/images/execs/Alexia.webp',
        offsetX: 55,
        offsetY: 18,
        zoom: 1.1,
      },
      {
        id: 'niko-2627',
        name: 'Niko Vriniotis',
        role: 'Team Manager',
        image: '/images/execs/Niko.webp',
        offsetX: 50,
        offsetY: 90,
        zoom: 1.6,
      },
    ],
  },
  {
    title: 'Coaching Team',
    members: [
      {
        id: 'alek-2627',
        name: 'Alek Tanev',
        role: 'Co-Founder & Coach',
        image: '/images/execs/Alek.webp',
        offsetX: 50,
        offsetY: 50,
        zoom: 1,
      },
      {
        id: 'khalid-2627',
        name: 'Hassan-Khalid Zakaryaa',
        role: 'Coach',
        image: '/images/execs/Khalid.webp',
        offsetX: 50,
        offsetY: 50,
        zoom: 1,
      },
      {
        id: 'david-2627',
        name: 'David Maksimov',
        role: 'Coach',
        image: '/images/execs/David.webp',
        offsetX: 50,
        offsetY: 90,
        zoom: 1,
      },
    ],
  },
];

// archived executive team
const TEAM_2025_2026: TeamGroup[] = [
  {
    title: 'Internal Team',
    members: [
      {
        id: '1',
        name: 'Noah Havrot-Landry',
        role: 'Co-Founder & President',
        image: '/images/execs/Noah.webp',
        offsetX: 50,
        offsetY: 20,
        zoom: 1,
      },
      {
        id: '2',
        name: 'Charles Morin',
        role: 'VP Internal',
        image: '/images/execs/Charles.webp',
        offsetX: 50,
        offsetY: 55,
        zoom: 1,
      },
      {
        id: '6',
        name: 'Natalia Andrea Lucena Henao',
        role: 'VP Finance',
        image: '/images/execs/Natalia.webp',
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
        image: '/images/execs/Adrian.webp',
        offsetX: 50,
        offsetY: 25,
        zoom: 1,
      },
      {
        id: '4',
        name: 'Louis Philippe Bejjani',
        role: 'Co-VP External',
        image: '/images/execs/Louis.webp',
        offsetX: 50,
        offsetY: 100,
        zoom: 1.2,
      },
      {
        id: '5',
        name: 'Filip Snítil',
        role: 'VP Tech',
        image: '/images/execs/Filip.webp',
        offsetX: 110,
        offsetY: 10,
        zoom: 3,
      },
      {
        id: '7',
        name: 'Mia Desgagné',
        role: 'VP Communications',
        image: '/images/execs/Mia.webp',
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
        image: '/images/execs/Katya.webp',
        offsetX: 50,
        offsetY: 25,
        zoom: 1,
      },
      {
        id: '9',
        name: 'Niko Vriniotis',
        role: 'Team Manager',
        image: '/images/execs/Niko.webp',
        offsetX: 50,
        offsetY: 90,
        zoom: 1.3,
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
        image: '/images/execs/Alek.webp',
        offsetX: 50,
        offsetY: 50,
        zoom: 1,
      },
      {
        id: '11',
        name: 'Hassan-Khalid Zakaryaa',
        role: 'Coach',
        image: '/images/execs/Khalid.webp',
        offsetX: 50,
        offsetY: 50,
        zoom: 1,
      },
      {
        id: '12',
        name: 'David Maksimov',
        role: 'Coach',
        image: '/images/execs/David.webp',
        offsetX: 50,
        offsetY: 90,
        zoom: 1,
      },
      {
        id: '13',
        name: 'Kenzo Dekkal-Furuya',
        role: 'Coach',
        image: '/images/execs/Kenzo.webp',
        offsetX: 50,
        offsetY: 50,
        zoom: 1,
      },
    ]
  },
];

const TEAMS_BY_YEAR: Record<TeamYear, TeamGroup[]> = {
  '2026-2027': TEAM_2026_2027,
  '2025-2026': TEAM_2025_2026,
};

const Team: React.FC = () => {
  const [year, setYear] = useState<TeamYear>('2026-2027');
  const teamGroups = TEAMS_BY_YEAR[year];

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

          {/* year switcher */}
          <div
            className="mx-auto mt-8 inline-flex rounded-full bg-white/40 p-1.5 shadow-md"
            role="group"
            aria-label="Select executive team year"
          >
            {TEAM_YEARS.map((option) => {
              const isActive = year === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setYear(option.value)}
                  aria-pressed={isActive}
                  className={`rounded-full px-5 py-2 text-sm sm:text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mcgill-red focus-visible:ring-offset-2 focus-visible:ring-offset-mcgill-rose ${
                    isActive
                      ? 'bg-mcgill-red text-white shadow-sm'
                      : 'text-mcgill-dark hover:bg-white/50'
                  }`}
                  style={{
                    fontFamily: 'Schibsted Grotesk, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* team sections */}
      <section className="pb-2 bg-mcgill-rose">
        <div key={year} className="container mx-auto px-4 sm:px-6 max-w-7xl animate-team-fade">
          {teamGroups.map((group, index) => (
            <TeamSection
              key={index}
              title={group.title}
              members={group.members}
            />
          ))}
        </div>
      </section>

      {/* fade-in when switching years */}
      <style>{`
        @keyframes teamFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-team-fade {
          animation: teamFade 0.4s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Team;
