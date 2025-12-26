import React from 'react';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = ''
}) => {
  const demo: ChromaItem[] = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://linkedin.com/in/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Morgan Blake',
      subtitle: 'UI/UX Designer',
      handle: '@morganblake',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://dribbble.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=16',
      title: 'Casey Park',
      subtitle: 'Data Scientist',
      handle: '@caseypark',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: 'https://kaggle.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=25',
      title: 'Sam Kim',
      subtitle: 'Mobile Developer',
      handle: '@thesamkim',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=60',
      title: 'Tyler Rodriguez',
      subtitle: 'Cloud Architect',
      handle: '@tylerrod',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://aws.amazon.com/'
    }
  ];

  const data = items?.length ? items : demo;

  return (
    <div
      className={`relative w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 ${className}`}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          style={{
            background: c.gradient,
          }}
        >
          {/* Image Container - Square aspect ratio with overlay */}
          <div className="relative aspect-square overflow-hidden">
            {/* Image with explicit sizing */}
            <img 
              src={c.image} 
              alt={c.title}
              width={300}
              height={300}
              loading="lazy" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Gradient overlay for text readability */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 35%, transparent 60%)'
              }}
            />
            
            {/* Name and Role Overlay - positioned at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <h3 
                className="m-0 text-sm md:text-base font-bold leading-tight mb-0.5 drop-shadow-lg"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 700,
                }}
              >
                {c.title}
              </h3>
              <p 
                className="m-0 text-xs md:text-sm text-white/80 leading-tight drop-shadow-md"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 500,
                }}
              >
                {c.subtitle}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;