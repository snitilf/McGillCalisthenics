import React from 'react';
import { Flame, Dumbbell, Target, Sparkles, Trophy, Users, Medal, ChevronRight } from 'lucide-react';

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
      description: 'Master holds like front lever, planche, and more.',
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
      description: 'Experienced competitive calisthenics athletes will train your subdivision and design personalized programs.',
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
      description: 'Opportunities to train in different subdivisions to master many calisthenics skills.',
    },
  ];

  const commitments = [
    {
      title: 'Weekly Team Training',
      description: 'Show up to weekly group sessions with your subdivision and train hard.',
    },
    {
      title: 'Independent Training',
      description: 'Train on your own at least twice per week on top of group sessions.',
    },
    {
      title: "Follow Your Subdivision's Approach",
      description: 'Commit to the training style and structure specific to your subdivision.',
    },
    {
      title: 'Represent the Team',
      description: "Represent McGill's Intercollegiate Calisthenics Team with pride and sportsmanship.",
    },
  ];

  return (
    <div className="min-h-screen bg-mcgill-rose">
      {/* Hero section */}
      <section className="bg-mcgill-rose pt-32 pb-0">
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
            <span className="text-mcgill-dark">Compete </span>
            <span className="text-mcgill-red">Different.</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-3"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
          >
            Represent calisthenics as a sport for McGill University.
          </p>

          <p 
            className="text-mcgill-red text-sm md:text-base font-bold tracking-wide"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif' }}
          >
          </p>
        </div>
      </section>

      {/* Subdivisions Section */}
      <section className="py-12 bg-mcgill-rose">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-mcgill-dark mb-3"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
            >
              Four <span className="text-mcgill-red">Subdivisions.</span>
            </h2>
            <p 
              className="text-base text-gray-700 max-w-xl mx-auto"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
            >
              Choose your path to excellence. Each subdivision offers unique challenges and specialized coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subdivisions.map((sub, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* McGill Red Accent Border Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-mcgill-red"></div>
                
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-mcgill-red/10 flex items-center justify-center mb-4">
                    <sub.icon className="w-6 h-6 text-mcgill-red" />
                  </div>
                  
                  <h3 
                    className="text-xl font-bold text-mcgill-dark mb-2"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    {sub.name}
                  </h3>
                  
                  <p 
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
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
      <section className="py-12 bg-mcgill-rose">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-mcgill-dark mb-3"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
            >
              What You <span className="text-mcgill-red">Get.</span>
            </h2>
            <p 
              className="text-base text-gray-700 max-w-xl mx-auto"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
            >
              Join the team and unlock access to elite training, competition opportunities, and a dedicated community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* McGill Red Accent Border Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-mcgill-red"></div>
                
                <div className="flex gap-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-mcgill-red/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-mcgill-red" />
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-bold text-mcgill-dark mb-1"
                      style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                    >
                      {benefit.title}
                    </h3>
                    <p 
                      className="text-sm text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 bg-mcgill-rose">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-mcgill-dark mb-3"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
            >
              What's <span className="text-mcgill-red">Expected.</span>
            </h2>
            <p 
              className="text-base text-gray-700 max-w-xl mx-auto"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
            >
              Being part of the team requires dedication, consistency, and commitment to excellence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* McGill Red Accent Border Top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-mcgill-red"></div>
                  
                  <div className="flex gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-10 h-10 rounded-lg bg-mcgill-red/10 flex items-center justify-center text-mcgill-red font-bold text-sm"
                        style={{ fontFamily: 'Schibsted Grotesk, sans-serif' }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 
                        className="text-base font-bold text-mcgill-dark mb-1"
                        style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                      >
                        {commitment.title}
                      </h3>
                      <p 
                        className="text-sm text-gray-600 leading-relaxed"
                        style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
                      >
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 pb-20 bg-mcgill-rose">
        <div className="container mx-auto px-6 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-mcgill-dark mb-2"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
          >
            Ready to <span className="text-mcgill-red">Compete?</span>
          </h2>
          
          <p 
            className="text-base text-gray-700 max-w-lg mx-auto mb-6"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
          >
            Join McGill's Intercollegiate Calisthenics Team and represent the university.
          </p>

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe..." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-mcgill-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-mcgill-red border-2 border-mcgill-red transition-all duration-300 group"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
          >
            Apply Now
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <p 
            className="text-xs text-gray-600 mt-4"
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