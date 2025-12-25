import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-mcgill-rose">
      {/* Hero Section - Matching FAQ/Team/Workshops style */}
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
            <span className="text-mcgill-dark">Get In </span>
            <span className="text-mcgill-red">Touch.</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'Schibsted Grotesk, sans-serif', 
              fontWeight: 600 
            }}
          >
            Have questions about membership, workshops, or collaborations?
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-16 bg-mcgill-rose">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 md:p-10">
              <form className="space-y-6">
                <div>
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-mcgill-red transition-colors text-base" 
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                    placeholder="Arnold Schwarzenegger" 
                    required 
                  />
                </div>
                <div>
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-mcgill-red transition-colors text-base" 
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                    placeholder="arnold@mail.mcgill.ca" 
                    required 
                  />
                </div>
                <div>
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-mcgill-red transition-colors text-base" 
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                    placeholder="Workshop Inquiry" 
                    required 
                  />
                </div>
                <div>
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    Message
                  </label>
                  <textarea 
                    rows={5} 
                    className="w-full border-2 border-gray-100 bg-gray-50 p-4 rounded-lg focus:outline-none focus:border-mcgill-red transition-colors text-base resize-none" 
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                    placeholder="How can we help you?" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-mcgill-red text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-mcgill-dark transition-all duration-300 rounded-lg"
                  style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                >
                  <span className="inline-flex items-center justify-center">
                    Send Message <Send className="ml-2 w-4 h-4"/>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Subtle prompt pointing to footer */}
          <p 
            className="text-center text-gray-400 text-sm mt-6"
            style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
          >
            Prefer social media? Find us below ↓
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;