import React from 'react';
import { Flame, Dumbbell, Target, Sparkles, Trophy, Users, Calendar, ClipboardCheck, Medal, ChevronRight } from 'lucide-react';

const Competitions: React.FC = () => {
  const subdivisions = [
    {
      name: 'Endurance',
      icon: Flame,
      description: 'Push your limits with high-rep challenges and stamina-focused training.',
    },
    {
      name: 'Weighted',
      icon: Dumbbell,
      description: 'Add resistance to bodyweight movements for maximum strength gains.',
    },
    {
      name: 'Statics',
      icon: Target,
      description: 'Master holds like front lever, planche, and iron cross positions.',
    },
    {
      name: 'Freestyle',
      icon: Sparkles,
      description: 'Express yourself through dynamic flows, transitions, and creative movement.',
    },
  ];

  const benefits = [
    {
      icon: Trophy,
      title: 'Certified Coaching',
      description: 'Experienced competitive calisthenics athletes will train your subdivision and design personalized programs to guide you towards athletic excellence.',
    },
    {
      icon: Medal,
      title: 'Intercollegiate Competitions',
      description: 'Travel with our team to competitions within North America to face-off with other university teams.',
    },
    {
      icon: Users,
      title: 'Train as a Team',
      description: 'Train alongside a passionate community of like-minded athletes pushing each other to improve.',
    },
    {
      icon: Sparkles,
      title: 'Cross-Train Subdivisions',
      description: 'Opportunities to train in different subdivisions by different coaches to master many calisthenics skills based on performance.',
    },
  ];

  const commitments = [
    {
      title: 'Bi-Weekly Training Sessions',
      description: 'Meet with your subdivision coach at least every two weeks in a group session to evaluate individual performance and team improvement.',
    },
    {
      title: 'Dedicated Personal Training',
      description: 'Train outside bi-weekly sessions at least three times a week (or as specified by coach) to work on your skills and performance.',
    },
    {
      title: 'Follow Your Program',
      description: 'Follow the program developed by your coach, keeping them updated on your progress, challenges, or questions.',
    },
    {
      title: 'Represent the Team',
      description: "Represent McGill's Intercollegiate Calisthenics Team during North American competitions with pride and sportsmanship.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Maroon to Black Gradient */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #5a1520 0%, #2a0a10 25%, #150508 50%, #0a0203 75%, #050101 100%)',
        }}
      >
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial glow effect */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(196,24,45,0.3) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p 
            className="text-mcgill-red uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-bold"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif' }}
          >
            McGill Intercollegiate Team
          </p>
          
          <h1 
            className="font-figtree font-extrabold italic leading-[0.85] tracking-tight mb-8"
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 800,
              fontStyle: 'italic',
            }}
          >
            <span className="text-white">Compete </span>
            <span className="text-mcgill-red">Different.</span>
          </h1>

          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
          >
            Be the first students to represent calisthenics as a sport at McGill University.
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-mcgill-red rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Subdivisions Section */}
      <section 
        className="py-24 relative"
        style={{
          background: 'linear-gradient(to bottom, #050101 0%, #0a0203 50%, #0f0405 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
            >
              Four <span className="text-mcgill-red">Subdivisions.</span>
            </h2>
            <p 
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
            >
              Choose your path to excellence. Each subdivision offers unique challenges and specialized coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subdivisions.map((sub, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-xl p-8 hover:border-mcgill-red/50 transition-all duration-500 hover:-translate-y-2"
                style={{
                  boxShadow: '0 0 0 0 rgba(196,24,45,0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(196,24,45,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(196,24,45,0)';
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-mcgill-red/0 to-mcgill-red/0 group-hover:from-mcgill-red/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-mcgill-red/10 border border-mcgill-red/30 flex items-center justify-center mb-6 group-hover:bg-mcgill-red/20 group-hover:border-mcgill-red/50 transition-all duration-300">
                    <sub.icon className="w-8 h-8 text-mcgill-red" />
                  </div>
                  
                  <h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-mcgill-red transition-colors duration-300"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    {sub.name}
                  </h3>
                  
                  <p 
                    className="text-gray-400 leading-relaxed"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                  >
                    {sub.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="py-24 relative"
        style={{
          background: 'linear-gradient(to bottom, #0f0405 0%, #1a0a0c 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
            >
              What You <span className="text-mcgill-red">Get.</span>
            </h2>
            <p 
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
            >
              Join the team and unlock access to elite training, competition opportunities, and a dedicated community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-mcgill-red/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-mcgill-red flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="text-gray-400 leading-relaxed"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #1a0a0c 0%, #0f0405 100%)',
        }}
      >
        {/* Decorative side lines */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-mcgill-red/30 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-mcgill-red/30 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
            >
              What's <span className="text-mcgill-red">Expected.</span>
            </h2>
            <p 
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
            >
              Being part of the team requires dedication, consistency, and commitment to excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-mcgill-red via-mcgill-red/50 to-mcgill-red/20 hidden md:block" />

              <div className="space-y-8">
                {commitments.map((commitment, index) => (
                  <div 
                    key={index}
                    className="flex gap-6 items-start group"
                  >
                    {/* Number badge */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-mcgill-red flex items-center justify-center text-white font-bold text-lg border-4 border-[#0f0405] group-hover:scale-110 transition-transform duration-300"
                        style={{ fontFamily: 'Schibsted Grotesk, sans-serif' }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 
                        className="text-xl font-bold text-white mb-2 group-hover:text-mcgill-red transition-colors duration-300"
                        style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                      >
                        {commitment.title}
                      </h3>
                      <p 
                        className="text-gray-400 leading-relaxed"
                        style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                      >
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #0f0405 0%, #1a0a0c 50%, #2a0f12 100%)',
        }}
      >
        {/* Decorative glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(196,24,45,0.4) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
          >
            Ready to <span className="text-mcgill-red">Compete?</span>
          </h2>
          
          <p 
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
          >
            Join McGill's first-ever Intercollegiate Calisthenics Team and make history.
          </p>

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe..." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-mcgill-red text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-mcgill-red border-2 border-mcgill-red transition-all duration-300 group"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
          >
            Apply Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <p 
            className="text-sm text-gray-500 mt-6"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
          >
            Applications reviewed on a rolling basis
          </p>
        </div>
      </section>
    </div>
  );
};

export default Competitions;
