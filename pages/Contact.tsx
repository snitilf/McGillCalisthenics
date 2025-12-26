import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mcgill-rose">
      {/* Hero Section */}
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

      {/* Contact form section */}
      <section className="pb-16 bg-mcgill-rose">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 md:p-10">
              {!isSubmitted ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Hidden field for web3forms subject line */}
                  <input type="hidden" name="subject" value="New Contact Form Submission - McGill Calisthenics" />
                  
                  <div>
                    <label 
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
                      style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                    >
                      Full Name
                    </label>
                    <input 
                      type="text"
                      name="name"
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
                      name="email"
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
                      name="form_subject"
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
                      name="message"
                      rows={5} 
                      className="w-full border-2 border-gray-100 bg-gray-50 p-4 rounded-lg focus:outline-none focus:border-mcgill-red transition-colors text-base resize-none" 
                      style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                      placeholder="How can we help you?" 
                      required
                    ></textarea>
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p 
                        className="text-sm"
                        style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                      >
                        Something went wrong. Please try again or reach out via social media.
                      </p>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-mcgill-red text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-mcgill-dark transition-all duration-300 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    <span className="inline-flex items-center justify-center">
                      {isLoading ? (
                        <>
                          Sending... <Loader2 className="ml-2 w-4 h-4 animate-spin"/>
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4"/>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              ) : (
                /* Success message */
                <div className="py-12 text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mcgill-red/10 mb-6">
                    <CheckCircle className="w-8 h-8 text-mcgill-red" />
                  </div>
                  <h2 
                    className="text-2xl md:text-3xl font-bold text-mcgill-dark mb-4"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}
                  >
                    Message Sent!
                  </h2>
                  <p 
                    className="text-gray-600 leading-relaxed max-w-md mx-auto"
                    style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
                  >
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Subtle prompt pointing to footer - only show when form is visible */}
          {!isSubmitted && (
            <p 
              className="text-center text-gray-400 text-sm mt-6"
              style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 500 }}
            >
              Prefer social media? Find us below ↓
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;