import React, { useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';
import Hero from '../components/Hero';
import { Plus, Minus } from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'philosophy' | 'community'>('about');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const tabImages: Record<typeof activeTab, string | string[]> = {
    about: '/images/logonotext.png',
    philosophy: '/images/handstand.jpg',
    community: ['/images/workshops/IMG_8856.jpeg', 'public/images/workshops/IMG_8906.jpeg'],
  };

  const sections = [
    {
      id: 'about',
      title: 'About Us',
      content: [
        "Founded in 2024, McGill Calisthenics is a student-led community dedicated to bodyweight training, skill development, and accessible fitness for all levels. We welcome everyone from complete beginners to advanced athletes looking to refine their craft.",
        "Whether you're working on your first pull-up or mastering complex movements like levers and planches, our club provides the coaching, progressions, and supportive environment you need to reach your goals safely and effectively.",
        "We host weekly workshops, university & community events, and competitions throughout the year. Come meet like-minded athletes, learn proper technique, and build lasting strength—no gym machines required."
      ]
    },
    {
      id: 'philosophy',
      title: 'Training Philosophy',
      content: [
        "Every session begins with a thorough full-body warm-up designed to prepare your joints, tendons, and nervous system. We mobilize, activate, and groove key movement patterns so you feel ready and minimize injury risk.",
        "Then we teach specific skills and progressions, breaking them down into clear steps. We build strength with structured workouts that target the exact muscles and movement patterns you need for steady, sustainable progress.",
        "Each session concludes with dedicated cooldown and stretching. Our approach balances pushing your limits with smart recovery, ensuring you build strength consistently without burning out or getting injured along the way."
      ]
    },
    {
      id: 'community',
      title: 'Our Community',
      content: [
        "This club is about lifting each other up. We show up, put in the work, and motivate one another to improve every week. Progress is more fun and sustainable when you have a supportive team behind you.",
        "Whether you're trying to unlock your first muscle-up or chasing skills like handstands and handstand push-ups, you'll find training partners, accountability, and encouragement here. No one trains alone at McGill Calisthenics.",
        "We train together, celebrate victories, and grow stronger as a community. From casual Wednesday sessions to organized competitions, there's always an opportunity to connect with fellow athletes who share your passion."
      ]
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="relative bg-mcgill-rose py-12 lg:py-16 z-30">
        <div className="container mx-auto px-4 sm:px-6">
          
          {/* mobile accordion layout */}
          <div className="lg:hidden space-y-3">
            {sections.map((section) => {
              const isOpen = openAccordion === section.id;
              
              return (
                <div 
                  key={section.id}
                  className={`rounded-lg transition-all duration-300 shadow-sm ${
                    isOpen 
                      ? 'bg-white ring-1 ring-mcgill-red/20 shadow-md' 
                      : 'bg-white hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full px-4 py-4 flex items-center justify-between text-left"
                  >
                    <h3 
                      className={`text-lg font-bold pr-4 transition-colors duration-300 ${
                        isOpen ? 'text-mcgill-red' : 'text-mcgill-dark'
                      }`}
                      style={{ 
                        fontFamily: 'Schibsted Grotesk, sans-serif',
                        fontWeight: 700,
                      }}
                    >
                      {section.title}
                    </h3>
                    <div 
                      className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-mcgill-red text-white' 
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 pb-4">
                      <div className="h-px bg-gray-100 mb-4" />
                      <div className="space-y-4">
                        {section.content.map((paragraph, idx) => (
                          <p 
                            key={idx}
                            className="text-gray-600 leading-relaxed"
                            style={{ 
                              fontFamily: 'Schibsted Grotesk, sans-serif',
                              fontWeight: 600,
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* desktop tabs layout */}
          <div className="hidden lg:flex flex-row gap-16">
            {/* image */}
            <div className="lg:w-1/3">
              <div className={`w-full aspect-square rounded-lg relative overflow-hidden group ${
                activeTab === 'about' ? 'bg-mcgill-rose' : 'bg-white'
              }`}>
                {activeTab === 'community' && Array.isArray(tabImages[activeTab]) ? (
                  <div className="w-full h-full flex flex-col gap-0">
                    {tabImages[activeTab].map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt="Community" 
                        className="w-full h-1/2 object-cover transition-all duration-500" 
                      />
                    ))}
                  </div>
                ) : (
                  <img 
                    src={typeof tabImages[activeTab] === 'string' ? tabImages[activeTab] : tabImages[activeTab][0]} 
                    alt={activeTab === 'about' ? 'Logo' : activeTab === 'philosophy' ? 'Handstand' : 'Community'} 
                    className="w-full h-full object-cover transition-all duration-500" 
                    loading="lazy"
                  />
                )}
              </div>
            </div>

            {/* tabs and content - aspect-[2/1] matches image height (2/3 width ÷ 1/3 height = 2:1) */}
            <div className="lg:w-2/3">
              <div className="aspect-[2/1] flex flex-col overflow-hidden">
                {/* tabs - fixed height */}
                <div className="flex-shrink-0 flex flex-wrap gap-4 sm:gap-8 mb-5">
                  {(['about', 'philosophy', 'community'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-xl tracking-wide transition-all duration-300 relative font-figtree ${
                        activeTab === tab ? 'text-mcgill-red' : 'text-gray-600 hover:text-mcgill-dark'
                      }`}
                      style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                    >
                      {tab === 'about' && 'About Us'}
                      {tab === 'philosophy' && 'Training Philosophy'}
                      {tab === 'community' && 'Our Community'}
                      {/* active underline */}
                      <span className={`absolute bottom-[-2px] left-0 w-full h-[2px] transition-colors duration-300 ${
                        activeTab === tab ? 'bg-mcgill-red' : 'bg-gray-300'
                      }`}></span>
                    </button>
                  ))}
                </div>

                {/* content - fills remaining space with scroll if needed */}
                <div className="flex-1 overflow-y-auto min-h-0">
                  {activeTab === 'about' && (
                    <div className="animate-fade-in space-y-4">
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        Founded in 2024, McGill Calisthenics is a student-led community dedicated to bodyweight training, skill development, and accessible fitness for all levels. We welcome everyone from complete beginners to advanced athletes looking to refine their craft.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        Whether you're working on your first pull-up or mastering complex movements like levers and planches, our club provides the coaching, progressions, and supportive environment you need to reach your goals safely and effectively.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        We host weekly workshops, university & community events, and competitions throughout the year. Come meet like-minded athletes, learn proper technique, and build lasting strength—no gym machines required.
                      </p>
                    </div>
                  )}
                  {activeTab === 'philosophy' && (
                    <div className="animate-fade-in space-y-4">
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        Every session begins with a thorough full-body warm-up designed to prepare your joints, tendons, and nervous system. We mobilize, activate, and groove key movement patterns so you feel ready and minimize injury risk.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        Then we teach specific skills and progressions, breaking them down into clear steps. We build strength with structured workouts that target the exact muscles and movement patterns you need for steady, sustainable progress.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        Each session concludes with dedicated cooldown and stretching. Our approach balances pushing your limits with smart recovery, ensuring you build strength consistently without burning out or getting injured along the way.
                      </p>
                    </div>
                  )}
                  {activeTab === 'community' && (
                    <div className="animate-fade-in space-y-4">
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        This club is about lifting each other up. We show up, put in the work, and motivate one another to improve every week. Progress is more fun and sustainable when you have a supportive team behind you.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        Whether you're trying to unlock your first muscle-up or chasing skills like handstands and handstand push-ups, you'll find training partners, accountability, and encouragement here. No one trains alone at McGill Calisthenics.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                        We train together, celebrate victories, and grow stronger as a community. From casual Wednesday sessions to organized competitions, there's always an opportunity to connect with fellow athletes who share your passion.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* cta - smaller on desktop */}
      <section className="bg-mcgill-red py-10 md:py-14 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-mcgill-white uppercase mb-3 md:mb-5 font-figtree" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900 }}>Ready to Start?</h2>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <button className="bg-mcgill-white text-mcgill-red border-2 border-mcgill-red px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-black uppercase tracking-wider hover:bg-mcgill-dark hover:text-white transition-all duration-300 font-figtree" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900 }}>Follow our journey</button>
          </a>
        </div>
        {/* decorative lines - hidden on mobile */}
        <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none hidden md:block">
           <div className="absolute top-0 left-1/4 w-[1px] h-full bg-mcgill-white rotate-12"></div>
           <div className="absolute top-0 right-1/4 w-[1px] h-full bg-mcgill-white -rotate-12"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;