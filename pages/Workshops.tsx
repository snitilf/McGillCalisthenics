import React, { useState } from 'react';
import { Clock } from 'lucide-react';
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
    <div className="min-h-screen bg-mcgill-rose">
      {/* Hero Section */}
      <section className="bg-mcgill-rose pt-32 pb-16">
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
            <span className="text-mcgill-black">Our </span>
            <span className="text-mcgill-red">Workshops.</span>
          </h1>
        </div>
      </section>

      {/* What Are Our Workshops? Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-mcgill-dark mb-4"
            style={{ 
              fontFamily: 'Schibsted Grotesk, sans-serif',
              fontWeight: 700,
            }}
          >
            What Are Our Workshops?
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 mt-6">
            {/* Text Content */}
            <div className="lg:w-2/3 space-y-6">
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 600,
                }}
              >
                Our weekly calisthenics workshops are <strong className="text-mcgill-red">designed to be inclusive for all fitness levels.</strong> Each session is carefully structured to accommodate everyone, with participants divided into three skill-based groups: beginner, intermediate, and advanced.
              </p>
              
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 600,
                }}
              >
                Each workshop centers around <strong className="text-mcgill-red">one core skill per session</strong>. After a comprehensive warm-up, we guide participants through a diverse range of exercises—from foundational movements like pull-ups, dips, and squats, to advanced skills such as muscle-ups, human flags, front levers, and handstand push-ups.
              </p>

              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 600,
                }}
              >
                We believe in <strong className="text-mcgill-red">pushing boundaries and inspiring excellence</strong>. Each session concludes with a dedicated cooldown and stretching period, ensuring a well-rounded calisthenics experience.
              </p>
            </div>

            {/* Image */}
            <div className="lg:w-1/3">
              <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* McGill Red Accent Border Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-mcgill-red"></div>
                
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src="/images/workshops/IMG_8856.jpeg" 
                    alt="Workshop session" 
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-mcgill-red/0 group-hover:bg-mcgill-red/5 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Schedule Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-mcgill-dark mb-4"
            style={{ 
              fontFamily: 'Schibsted Grotesk, sans-serif',
              fontWeight: 700,
            }}
          >
            Workshop Schedule
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8 mt-6">
            {/* Month/Year Header */}
            <div className="text-center mb-6">
              <h3 
                className="text-2xl font-bold text-mcgill-dark"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 700,
                }}
              >
                {monthNames[currentMonth]} {currentYear}
              </h3>
            </div>

            {/* Grid Calendar */}
            <div className="grid grid-cols-7 gap-2 mb-6 text-center">
              {['S','M','T','W','T','F','S'].map((d, i) => (
                <span 
                  key={i} 
                  className="font-bold text-gray-400 text-sm"
                  style={{ 
                    fontFamily: 'Schibsted Grotesk, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {d}
                </span>
              ))}
              {calendarDays.map((d, i) => {
                const isSelected = selectedDate?.getDate() === d.day && selectedDate?.getMonth() === currentMonth;
                return (
                  <button 
                    key={i}
                    disabled={!d.day || !d.isWednesday}
                    onClick={() => d.day && handleDayClick(d.day)}
                    className={`
                      aspect-square flex items-center justify-center text-sm font-bold rounded-lg transition-all
                      ${!d.day ? 'invisible' : ''}
                      ${d.isWednesday && !isSelected ? 'bg-mcgill-red/10 border-2 border-mcgill-red text-mcgill-red hover:bg-mcgill-red hover:text-white cursor-pointer shadow-sm' : ''}
                      ${d.isWednesday && isSelected ? 'bg-mcgill-red text-white border-2 border-mcgill-red ring-4 ring-red-200 cursor-pointer shadow-lg' : ''}
                      ${!d.isWednesday ? 'text-gray-400 cursor-default' : ''}
                    `}
                    style={{ 
                      fontFamily: 'Schibsted Grotesk, sans-serif',
                      fontWeight: d.isWednesday ? 700 : 400,
                    }}
                  >
                    {d.day}
                  </button>
                );
              })}
            </div>

            {/* Helper Text */}
            <p 
              className="text-sm text-gray-500 text-center mb-6"
              style={{ 
                fontFamily: 'Schibsted Grotesk, sans-serif',
                fontWeight: 500,
              }}
            >
              Click on a highlighted Wednesday to see workshop details
            </p>

            {/* Selected Date Details */}
            <div className="bg-mcgill-rose p-6 rounded-xl border border-gray-200 shadow-sm min-h-[140px] flex flex-col justify-center">
              {selectedDate ? (
                <div className="animate-fade-in">
                  <h4 
                    className="text-xl font-black uppercase text-mcgill-dark mb-3"
                    style={{ 
                      fontFamily: 'Schibsted Grotesk, sans-serif',
                      fontWeight: 800,
                    }}
                  >
                    Wednesday, {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
                  </h4>
                  <div className="flex items-center text-gray-600 mb-3" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 600 }}>
                    <Clock className="w-4 h-4 mr-2" /> 6:30 p.m. – 8:00 p.m.
                  </div>
                  <div className="inline-block bg-mcgill-red text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded" style={{ fontFamily: 'Schibsted Grotesk, sans-serif', fontWeight: 700 }}>
                    Topic: {getWorkshopTopic(selectedDate)}
                  </div>
                </div>
              ) : (
                <p 
                  className="text-gray-400 text-center italic"
                  style={{ 
                    fontFamily: 'Schibsted Grotesk, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Select a date above to view details
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Where We Train Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-mcgill-dark mb-4"
            style={{ 
              fontFamily: 'Schibsted Grotesk, sans-serif',
              fontWeight: 700,
            }}
          >
            Where We Train
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
            <div className="p-6 border-b border-gray-200">
              <h3 
                className="text-xl font-bold text-mcgill-dark mb-1"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 700,
                }}
              >
                De la Commune outdoor gym
              </h3>
              <p 
                className="text-gray-600"
                style={{ 
                  fontFamily: 'Schibsted Grotesk, sans-serif',
                  fontWeight: 500,
                }}
              >
                Montreal, QC
              </p>
            </div>
            <div className="relative w-full" style={{ height: '450px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.838795015198!2d-73.55405329999999!3d45.493190899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b9d2a54417b%3A0x70b904106b910831!2sDe%20la%20Commune%20outdoor%20gym!5e0!3m2!1sen!2sca!4v1766438721710!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;