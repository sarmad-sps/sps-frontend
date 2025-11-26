import React, { useState, useEffect } from "react";
import icon1 from "../../assets/Icon1.svg"
import  icon2 from '../../assets/Icon2.svg'

import  icon3 from '../../assets/Icon3.svg'
import  icon4 from '../../assets/Icon4.svg'
type ServiceCardProps = {
  title: string;
  text: string;
  icon: string;
  image: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, text, icon, image }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden ">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="absolute top-5 left-5 lg:top-7 lg:left-7">
        <img src={icon} alt={title} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 drop-shadow-2xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-5 lg:p-7 text-white">
        <h3 className="text-base sm:text-base lg:text-lg font-bold drop-shadow-2xl">{title}</h3>
        <p className="text-sm lg:text-sm font-medium mt-2 leading-snug drop-shadow-lg">{text}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    { title: "Tracking Device Logs Location", text: "Open multiply a green form lesser their from in made herb multiply", icon: icon1, image: "/Background.png" },
    { title: "2G/4G Network", text: "Open multiply a green form lesser their from in made herb multiply", icon: icon2, image: "/Background.png" },
    { title: "SPS Track Servers", text: "Open multiply a green form lesser their from in made herb multiply", icon: icon3, image: "/Background.png" },
    { title: "Real-Time on Web & Mobile", text: "Open multiply a green form lesser their from in made herb multiply", icon: icon4, image: "/Background.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [slideStep, setSlideStep] = useState(1);

  const updateLayout = () => {
    if (window.innerWidth < 640) {
      setCardsPerPage(1);
      setSlideStep(1);
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(2);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + slideStep) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideStep, services.length]);

  const cardWidthPercent = 100 / cardsPerPage;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-[#1894A4] font-bold text-[12px] sm:text-[13px] uppercase tracking-widest mb-3">
            What We're Offering
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            SERVICES WE'RE PROVIDING
            <br />
            <span className="text-[#1894A4]">TO CUSTOMERS</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-hidden w-full mb-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidthPercent}%)` }}
          >
            {services.concat(services.slice(0, cardsPerPage)).map((service, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-2"
                style={{ flex: `0 0 ${cardWidthPercent}%` }}
              >
                <ServiceCard
                  title={service.title}
                  text={service.text}
                  icon={service.icon}
                  image={service.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(services.length / slideStep) }).map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentIndex(i * slideStep)}
              className={`cursor-pointer transition-all duration-300 ${
                currentIndex === i * slideStep
                  ? "bg-[#1894A4] w-4 h-1 rounded-full lg:w-6 lg:h-2"
                  : "bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400 lg:w-3 lg:h-3"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
