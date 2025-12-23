import React from 'react';

const FAQ_ITEMS = [
  {
    question: "Do I need any experience to attend the workshops?",
    answer: "Absolutely not! All our workshops are beginner-friendly. We separate participants into groups based on their experience level to ensure everyone receives appropriate instruction. We aim to be as inclusive as possible and accommodate all fitness levels."
  },
  {
    question: "Do I have to pay to join the club?",
    answer: "Joining the club is completely free! However, members of the Intercollegiate Calisthenics Team are required to pay the fees mentioned in the registration form."
  },
  {
    question: "Are there workshops during Winter 2026?",
    answer: "There are no weekly workshops during the Winter 2026 semester—only team practices will take place. The free weekly workshops will resume in the summer of 2026!"
  },
  {
    question: "What's the difference between the club and the team?",
    answer: "The club offers free weekly calisthenics classes (workshops) for all members at all levels with coaches. The team offers additional private training sessions for participating athletes. Team members get to travel internationally for competitions (including NYC) and represent McGill as a student intercollegiate calisthenics team."
  },
  {
    question: "How do I become a sponsor for the McGill Calisthenics Club?",
    answer: "Send us a message on Instagram at @mcgillcalisthenics or fill out the form on the contact page."
  },
  {
    question: "How do I become an executive and join the team?",
    answer: "The executives have already been chosen for the 2025-2026 academic year. Applications will open for the 2026-2027 academic year towards the end of Summer 2026."
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-mcgill-dark pt-40 pb-20 flex items-center">
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
