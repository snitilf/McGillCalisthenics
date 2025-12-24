import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "Do I need prior experience to attend workshops?",
    answer: "Not at all. Our workshops are designed to be fully inclusive and beginner-friendly. To ensure everyone progresses safely, we group participants by experience level, providing coaching that is tailored to your specific abilities—from day one to advanced movements."
  },
  {
    question: "Is there a fee to join the club?",
    answer: "General club membership is completely free. However, athletes selected for the competitive Intercollegiate Calisthenics Team are required to pay team-specific dues, which are detailed during the registration process."
  },
  {
    question: "Will there be workshops during the Winter 2026 semester?",
    answer: "For the Winter 2026 semester, our schedule is dedicated exclusively to Team Practices. Our free community workshops will officially resume in Summer 2026. Stay tuned to our socials for the exact kickoff date."
  },
  {
    question: "What is the difference between the Club and the Team?",
    answer: "The Club is our community hub, offering free weekly workshops and coached classes for students of all fitness levels. The Team is our elite competitive branch; members receive private training sessions and travel internationally to represent McGill at major competitions, including events in New York City."
  },
  {
    question: "How can I become a sponsor for McGill Calisthenics?",
    answer: "We are always looking to partner with brands that share our dedication to training excellence. Please contact us via Instagram @mcgillcalisthenics or submit an inquiry through our Contact page to receive our sponsorship prospectus."
  },
  {
    question: "How do I join the Executive Team?",
    answer: "Our executive board for the 2025–2026 academic year has been finalized. If you are interested in a leadership role, applications for the 2026–2027 cycle will open in late Summer 2026."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-mcgill-rose">
      {/* Hero Section - Matching Team/Workshops style */}
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
            <span className="text-mcgill-dark">Got </span>
            <span className="text-mcgill-red">Questions?</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'Schibsted Grotesk, sans-serif', 
              fontWeight: 600 
            }}
          >
            Find answers to common questions about our club.
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="pb-8 bg-mcgill-rose">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`rounded-lg transition-all duration-300 shadow-sm ${
                    isOpen 
                      ? 'bg-white ring-1 ring-mcgill-red/20 shadow-md' 
                      : 'bg-white hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <h3 
                      className={`text-base md:text-lg font-bold pr-6 transition-colors duration-300 ${
                        isOpen ? 'text-mcgill-red' : 'text-mcgill-dark'
                      }`}
                      style={{ 
                        fontFamily: 'Schibsted Grotesk, sans-serif',
                        fontWeight: 700,
                      }}
                    >
                      {item.question}
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
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p 
                        className="text-gray-600 leading-relaxed"
                        style={{ 
                          fontFamily: 'Schibsted Grotesk, sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Link - Closer to questions */}
          <div className="max-w-3xl mx-auto text-center pt-14 pb-8">
            <p 
              className="text-gray-500 mb-2"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}
            >
              Can't find what you're looking for?
            </p>
            <a 
              href="/#/contact"
              className="inline-flex items-center text-mcgill-red font-bold hover:text-mcgill-dark transition-colors duration-300"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
            >
              Get in touch with us →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;