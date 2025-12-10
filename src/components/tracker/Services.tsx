import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";
import icon4 from "../../assets/Icon4.svg";

type ServiceCardProps = {
  title: string;
  text: string;
  icon: string;
  image: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, text, icon, image }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden h-full flex flex-col">
      <img src={image} alt={title} className="w-full h-56 sm:h-64 md:h-72 lg:h-[280px] object-cover" />
      <div className="absolute top-5 left-5 lg:top-7 lg:left-7">
        <img src={icon} alt={title} className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 drop-shadow-2xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 text-white">
        <h3 className="text-lg sm:text-xl lg:text-xl font-bold drop-shadow-2xl min-h-[56px] flex items-end">{title}</h3>
        <p className="text-sm lg:text-sm font-medium mt-1 leading-snug drop-shadow-lg">{text}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    { title: "Live GPS Tracking", text: "Track your vehicle’s location in real time with instant updates.", icon: icon1, image: "/Background.png" },
    { title: "2G/4G Connectivity", text: "Strong network support for smooth and stable tracking.", icon: icon2, image: "/Background.png" },
    { title: "Secure Cloud Servers", text: "Fast, safe and reliable cloud storage for your tracking data.", icon: icon3, image: "/Background.png" },
    { title: "Web & App Tracking", text: "Track live movement on app/web.", icon: icon4, image: "/Background.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [slideStep, setSlideStep] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Update layout based on screen width
  const updateLayout = () => {
    if (window.innerWidth < 640) {
      setCardsPerPage(1);
      setSlideStep(1);
    } else if (window.innerWidth < 768) {
      setCardsPerPage(2);
      setSlideStep(1);
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(3);
      setSlideStep(1);
    } else {
      setCardsPerPage(4);
      setSlideStep(1);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsPerPage]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - slideStep + services.length) % services.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + slideStep) % services.length);
  };

  const cardWidthPercent = 100 / cardsPerPage;

  // Touch / swipe support
  useEffect(() => {
    let startX = 0;
    let isDragging = false;

    const slider = sliderRef.current;
    if (!slider) return;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      if (diff > 50) {
        nextSlide();
        isDragging = false;
      } else if (diff < -50) {
        prevSlide();
        isDragging = false;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    slider.addEventListener("touchstart", onTouchStart);
    slider.addEventListener("touchmove", onTouchMove);
    slider.addEventListener("touchend", onTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", onTouchStart);
      slider.removeEventListener("touchmove", onTouchMove);
      slider.removeEventListener("touchend", onTouchEnd);
    };
  }, [cardsPerPage]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-10 lg:px-32 ">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-[#1894A4] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">What We're Offering</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-tight">
            SERVICES WE'RE PROVIDING
            <br />
            <span className="text-[#1894A4]">TO CUSTOMERS</span>
          </h2>
        </div>
<button
  onClick={prevSlide}
  className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-[#1894A4] hover:text-white transition mt-12 ml-20"
>
  <ChevronLeft />
</button>
        {/* Slider */}
        <div className="relative">
          {/* Left / Right buttons */}
        {/* Left / Right buttons */}




          <div className="overflow-hidden w-full mb-6" ref={sliderRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * cardWidthPercent}%)` }}
            >
              {services.concat(services.slice(0, cardsPerPage)).map((service, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-3 sm:px-3 lg:px-3"
                  style={{ flex: `0 0 ${cardWidthPercent}%` }}
                >
                  <ServiceCard title={service.title} text={service.text} icon={service.icon} image={service.image} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(services.length / slideStep) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * slideStep)}
                aria-label={`Go to slide ${i + 1}`}
                className={`cursor-pointer transition-all duration-300 ${
                  currentIndex === i * slideStep
                    ? "bg-[#1894A4] w-8 h-2 rounded-full"
                    : "bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <button
  onClick={nextSlide}
  className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-[#1894A4] hover:text-white transition mt-12 mr-20"
>
  <ChevronRight />
</button>
      </div>
    </section>
  );
};

export default ServicesSection;
