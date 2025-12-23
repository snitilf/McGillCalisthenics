import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { getWorkshopTopic } from '../constants';
import { WeekDay } from '../types';

const Workshops: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Get current month and year
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Month names for display
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  // Helper to generate calendar days for current month with accurate dates
  const generateCalendarDays = () => {
    const days = [];
    
    // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    // Get the total number of days in the current month
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add empty slots for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push({ day: null, isWednesday: false });
    }
    
    // Add all days of the month
    for (let i = 1; i <= totalDays; i++) {
        const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
        days.push({ 
            day: i, 
            isWednesday: dayOfWeek === WeekDay.Wednesday 
        });
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleDayClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day); 
    setSelectedDate(date);
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-mcgill-dark text-white pt-40 pb-20 diagonal-clip relative">
         <div className="absolute inset-0 z-0 opacity-20">
            <img src="/images/montreal/matthias-mullie-VAxCHgJvZ0g-unsplash.jpg" className="w-full h-full object-cover" />
         </div>
         <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Our Workshops.</h1>
            <div className="flex flex-wrap gap-4 mt-8">
                <span className="bg-mcgill-red px-4 py-2 font-bold uppercase text-sm tracking-wider">Wednesdays 6:30 PM</span>
                <span className="border border-white px-4 py-2 font-bold uppercase text-sm tracking-wider">Bassin Peel</span>
            </div>
         </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Text & Location */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-black uppercase text-mcgill-dark mb-6 border-b-4 border-mcgill-red inline-block pb-2">What Are Our Workshops?</h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Our weekly calisthenics workshops are <strong className="text-mcgill-dark">designed to be inclusive for all fitness levels.</strong> Each session is carefully structured to accommodate everyone, with participants divided into three skill-based groups: beginner, intermediate, and advanced.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Each workshop centers around <strong className="text-mcgill-dark">one core skill per session</strong>. After a comprehensive warm-up, we guide participants through a diverse range of exercises—from foundational movements like pull-ups, dips, and squats, to advanced skills such as muscle-ups, human flags, front levers, and handstand push-ups.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              We believe in <strong className="text-mcgill-dark">pushing boundaries and inspiring excellence</strong>. Each session concludes with a dedicated cooldown and stretching period, ensuring a well-rounded calisthenics experience.
            </p>

            {/* Location */}
            <div className="relative group overflow-hidden rounded-2xl mt-8">
               <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.838795015198!2d-73.55405329999999!3d45.493190899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b9d2a54417b%3A0x70b904106b910831!2sDe%20la%20Commune%20outdoor%20gym!5e0!3m2!1sen!2sca!4v1766438721710!5m2!1sen!2sca" 
                   width="100%" 
                   height="300" 
                   style={{border:0}} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="w-full"
               ></iframe>
            </div>
          </div>

          {/* Calendar */}
          <div className="lg:w-1/2">
             <div className="bg-mcgill-rose p-8 rounded-3xl shadow-inner">
                <h3 className="text-2xl font-bold uppercase text-mcgill-dark mb-6 flex items-center">
                    <Calendar className="mr-3 text-mcgill-red" />
                    Workshop Schedule
                </h3>

                {/* Month/Year Header */}
                <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-mcgill-dark">{monthNames[currentMonth]} {currentYear}</h4>
                </div>

                {/* Grid Calendar */}
                <div className="grid grid-cols-7 gap-2 mb-6 text-center">
                    {['S','M','T','W','T','F','S'].map((d, i) => <span key={i} className="font-bold text-gray-400 text-sm">{d}</span>)}
                    {calendarDays.map((d, i) => {
                        const isSelected = selectedDate?.getDate() === d.day && selectedDate?.getMonth() === currentMonth;
                        return (
                            <button 
                                key={i}
                                disabled={!d.day || !d.isWednesday}
                                onClick={() => d.day && handleDayClick(d.day)}
                                className={`
                                    aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all
                                    ${!d.day ? 'invisible' : ''}
                                    ${d.isWednesday && !isSelected ? 'bg-white border-2 border-mcgill-red text-mcgill-red hover:bg-mcgill-red hover:text-white cursor-pointer shadow-sm' : ''}
                                    ${d.isWednesday && isSelected ? 'bg-mcgill-red text-white border-2 border-mcgill-red ring-4 ring-red-200 cursor-pointer shadow-sm' : ''}
                                    ${!d.isWednesday ? 'text-gray-400 cursor-default' : ''}
                                `}
                            >
                                {d.day}
                            </button>
                        );
                    })}
                </div>

                {/* Selected Date Details */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg min-h-[140px] flex flex-col justify-center">
                    {selectedDate ? (
                        <div className="animate-fade-in">
                            <h4 className="text-xl font-black uppercase text-mcgill-dark mb-2">
                                Wednesday, {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
                            </h4>
                            <div className="flex items-center text-gray-600 mb-2">
                                <Clock className="w-4 h-4 mr-2" /> 6:30 p.m. – 8:00 p.m.
                            </div>
                            <div className="inline-block bg-mcgill-dark text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded">
                                Topic: {getWorkshopTopic(selectedDate)}
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-400 text-center italic">Click on a highlighted Wednesday to see details.</p>
                    )}
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Workshops;