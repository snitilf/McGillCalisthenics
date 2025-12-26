import React, { useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'philosophy' | 'community'>('about');

  const tabImages: Record<typeof activeTab, string> = {
    about: '/images/logonotext.png',
    philosophy: '/images/handstand.jpg',
    community: '/images/group.jpeg',
  };

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <Hero />

      <section className="relative bg-mcgill-rose py-16 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left column: heading & graphic */}
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-black uppercase leading-none mb-8 text-mcgill-dark">
                
              </h2>
              <div className={`w-full aspect-square rounded-lg relative overflow-hidden group ${
                activeTab === 'about' ? 'bg-mcgill-rose' : 'bg-white'
              }`}>
                 <img src={tabImages[activeTab]} alt="Community" className="w-full h-full object-cover transition-all duration-500" />
              </div>
            </div>

            {/* Right column: tabs */}
            <div className="lg:w-2/3 pt-0 lg:pt-8">
              <div className="flex flex-wrap gap-8 mb-6">
                {(['about', 'philosophy', 'community'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-xl tracking-wide transition-all duration-300 relative font-figtree ${
                      activeTab === tab ? 'text-mcgill-red' : 'text-gray-600 hover:text-mcgill-dark'
                    }`}
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    {tab === 'about' && 'About Us'}
                    {tab === 'philosophy' && 'Training Philosophy'}
                    {tab === 'community' && 'Our Community'}
                    {activeTab === tab && (
                      <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-mcgill-red"></span>
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[300px]">
                {activeTab === 'about' && (
                  <div className="animate-fade-in space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                      Founded in 2024, McGill Calisthenics is a student-led community dedicated to bodyweight training, skill development, and accessible fitness for all levels. Whether you are just getting started with your first pull-up or working on complex movements, our club provides a supportive environment to learn, progress, and have fun.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                      We host weekly workshops, events, and friendly challenges. Come meet like-minded athletes, learn proper technique, and build lasting strength—no machines required.
                    </p>
                  </div>
                )}
                {activeTab === 'philosophy' && (
                  <div className="animate-fade-in space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                      Every session starts with a thorough full-body warm‑up to prep joints, tendons, and nervous system. We mobilize, activate, and groove key movement patterns so you feel ready and reduce injury risk.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                      Then we teach specific skills and progressions, breaking them down into clear steps. We build strength with structured workouts that target the exact muscles and movement patterns you need for steady, sustainable progress.
                    </p>
                  </div>
                )}
                {activeTab === 'community' && (
                  <div className="animate-fade-in space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                      This club is about lifting each other up. We show up, put in the work, and motivate one another to get better every week. Progress is more fun and sustainable when you have a supportive team behind you.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed font-figtree" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                      Whether you are trying to unlock your first pull‑up or chasing advanced skills like handstands and levers, you will find partners, accountability, and encouragement here. We train together, celebrate victories, and grow stronger as a community.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-mcgill-red py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-mcgill-white uppercase mb-8 font-figtree" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900 }}>Ready to Start?</h2>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <button className="bg-mcgill-white text-mcgill-red border-2 border-mcgill-red px-8 py-3 font-black uppercase tracking-wider hover:bg-mcgill-dark hover:text-white transition-all duration-300 font-figtree" style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900 }}>Follow our journey</button>
          </a>
        </div>
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
           <div className="absolute top-0 left-1/4 w-[1px] h-full bg-mcgill-white rotate-12"></div>
           <div className="absolute top-0 right-1/4 w-[1px] h-full bg-mcgill-white -rotate-12"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;