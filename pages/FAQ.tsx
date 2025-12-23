import React from 'react';

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
  return (
    <div className="min-h-screen bg-mcgill-rose text-mcgill-dark pt-40 pb-20 flex items-center">
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-[3.5rem] font-black uppercase tracking-tighter mb-12 text-mcgill-red">Frequently Asked Questions</h1>
          
          <div className="grid gap-8 max-w-3xl w-full">
             {FAQ_ITEMS.map((item, index) => (
               <div key={index} className="pb-8">
                  <div className="flex justify-between items-center mb-4 cursor-pointer group">
                     <h3 className="text-xl font-bold uppercase group-hover:text-mcgill-red transition-colors">{item.question}</h3>
                     <span className="text-2xl text-mcgill-red font-light">+</span>
                  </div>
                  <p className="text-gray-600">
                     {item.answer}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
