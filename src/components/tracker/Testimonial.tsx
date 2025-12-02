import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  rating: number;
  imageSrc: string;
}

const testimonialsData: Testimonial[] = [
  { id: 1, quote: "Their GPS tracking accuracy is outstanding. I can monitor all my vehicles in real-time without delays. Highly recommended for fleet owners!", name: "Ahmed Khan", title: "Fleet Manager", rating: 5, imageSrc: "/testimonial1.jpg" },
  { id: 2, quote: "The instant alerts feature has saved us multiple times from unauthorized vehicle movement. Excellent service and reliable support team!", name: "Sarah Malik", title: "Logistics Supervisor", rating: 5, imageSrc: "/testimonial2.jpg" },
  { id: 3, quote: "I love the detailed trip history and fuel monitoring. Helps us reduce costs and improve driver performance. Great experience so far.", name: "Usman Raza", title: "Operations Manager", rating: 4, imageSrc: "/testimonial3.jpg" },
  { id: 4, quote: "Best tracking solution I’ve used! The mobile app is smooth and provides every detail I need on the go.", name: "Huma Yousaf", title: "Business Owner", rating: 5, imageSrc: "/testimonial1.jpg" },
  { id: 5, quote: "Their customer service is excellent. Whenever we needed help setting up devices, their team responded instantly.", name: "Zain Shah", title: "Administrator", rating: 5, imageSrc: "/testimonial2.jpg" },
  { id: 6, quote: "Vehicle security has improved a lot after installing their tracker. Real-time notifications are very helpful.", name: "Maria Ali", title: "Customer", rating: 4, imageSrc: "/testimonial3.jpg" },
  { id: 7, quote: "Their platform is simple to use yet powerful. Highly satisfied with the performance and tracking speed.", name: "Bilal Akhtar", title: "Transport Incharge", rating: 5, imageSrc: "/testimonial1.jpg" },
  { id: 8, quote: "Affordable pricing with premium tracking features. It’s definitely worth the investment for vehicle safety.", name: "Nimra Faisal", title: "Customer", rating: 5, imageSrc: "/testimonial2.jpg" },
];

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-[#1894A4]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.055 8.72c-.784-.57-.382-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const stars = Array(5).fill(false).map((_, i) => i < testimonial.rating);

  return (
   <div className="bg-white rounded-xl flex flex-col h-full relative overflow-hidden
                    shadow-2xl  transition-shadow duration-300
                    border-t-8 border-[#1894A4] ">
      
      {/* Fixed Top Area */}
      <div className="relative pt-24 px-8 pb-6">
        {/* Big Quote Symbol - Top Left (same color as stars) */}
        <div className="absolute top-8 left-8 text-8xl text-[#1894A4] font-serif leading-none  select-none">
          “
        </div>

        {/* Profile Image - Top Right with margin from top */}
        <div className="absolute top-4 right-8">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-8 ring-white shadow-2xl border-4 border-[#1894A4]">
            <img 
              src={testimonial.imageSrc} 
              alt={testimonial.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Quote Text - Always starts from same position */}
      <div className="px-8 flex-1">
        <p className="text-gray-700 text-sm leading-relaxed">
          {testimonial.quote}
        </p>
      </div>

      {/* Footer */}
      <div className="px-8 py-6 mt-6 border-t-2 border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
          <div className="flex space-x-1">
            {stars.map((filled, i) => <StarIcon key={i} filled={filled} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const totalCards = testimonialsData.length;

  const updateLayout = () => {
    if (window.innerWidth < 640) setCardsPerPage(1);
    else if (window.innerWidth < 1024) setCardsPerPage(2);
    else setCardsPerPage(3);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // Auto slide - smooth infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next >= totalCards) {
          setTimeout(() => setCurrentIndex(0), 700);
          return totalCards;
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [totalCards]);

  const cardWidth = 100 / cardsPerPage;
  const displayTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <img src="/splogo.png" className="w-14 h-14" alt="Logo" />
          <h2 className="text-[#1894A4] font-bold uppercase tracking-widest text-2xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}%)`,
              transition: currentIndex === totalCards ? 'none' : 'transform 700ms ease-in-out'
            }}
          >
            {displayTestimonials.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-shrink-0 px-4"
                style={{ width: `${cardWidth}%` }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex % totalCards === i
                  ? 'bg-[#1894A4] w-14 h-3'
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;