import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Instagram, Facebook, MessageCircle, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-mcgill-rose">
      <section className="bg-mcgill-rose pt-40 pb-6">
        <div className="container mx-auto px-6 text-center">
           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-mcgill-red mb-2">Get In Touch</h1>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto">Have questions about membership, workshops, or collaborations?</p>
        </div>
      </section>

      <section className="py-8 container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white relative z-10 shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
           <div className="p-8 md:p-12">
              <form className="space-y-6">
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-mcgill-red transition-colors text-lg" placeholder="Arnold Schwarzenegger
" required />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                    <input type="email" className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-mcgill-red transition-colors text-lg" placeholder="arnold@mail.mcgill.ca" required />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Subject</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-mcgill-red transition-colors text-lg" placeholder="Workshop Inquiry" required />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
                    <textarea rows={6} className="w-full border-2 border-gray-100 bg-gray-50 p-4 rounded focus:outline-none focus:border-mcgill-red transition-colors text-base resize-none" placeholder="How can we help you?" required></textarea>
                 </div>
                 <button type="submit" className="w-full bg-mcgill-red text-white border-2 border-mcgill-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-mcgill-dark hover:text-white transition-all duration-300">
                   <span className="inline-flex items-center justify-center">Send Message <Send className="ml-2 w-4 h-4"/></span>
                 </button>
              </form>
           </div>
           
           <div className="bg-mcgill-red p-8 md:p-12 text-center">
              <h3 className="text-white font-bold uppercase tracking-widest mb-8">Connect With Us</h3>
              <div className="flex justify-center gap-8">
                 <a href={SOCIAL_LINKS.instagram} target="_blank" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-mcgill-red hover:bg-mcgill-dark hover:text-white transition-all duration-300"><Instagram /></a>
                 <a href={SOCIAL_LINKS.messenger} target="_blank" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-mcgill-red hover:bg-mcgill-dark hover:text-white transition-all duration-300"><MessageCircle /></a>
                 <a href={SOCIAL_LINKS.facebook} target="_blank" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-mcgill-red hover:bg-mcgill-dark hover:text-white transition-all duration-300"><Facebook /></a>
                 <a href={`mailto:${SOCIAL_LINKS.email}`} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-mcgill-red hover:bg-mcgill-dark hover:text-white transition-all duration-300"><Mail /></a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;