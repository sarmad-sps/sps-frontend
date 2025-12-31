import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Signal,
  Cloud,
  Smartphone,
  PhoneCall,
  BatteryWarning,
  LifeBuoy,
} from "lucide-react";

type ServiceCardProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, text, icon }) => {
  return (
    <div className="relative service-card-hover rounded-3xl overflow-hidden h-72 flex flex-col shadow-lg bg-gradient-to-br from-[#1A3970] via-[#1894A4] to-[#00D9D9]">
      {/* Icon */}
      <div className="absolute top-5 left-5 lg:top-7 lg:left-7 neon-icon-square p-3 shadow-lg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {icon}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-3xl pointer-events-none"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 text-white z-10">
        <h3 className="text-base sm:text-sm md:text-sm lg:text-base font-bold drop-shadow-2xl leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h3>
        <p className="mt-2 text-sm font-medium leading-snug drop-shadow-lg line-clamp-3">
          {text}
        </p>
      </div>
    </div>
  );
};



const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Live GPS Tracking",
      text: "Track your vehicle’s location in real time with instant updates.",
      icon: <MapPin className="w-6 h-6 text-[#1894A4]" />,
    },
    {
      title: "3G/4G Connectivity",
      text: "Strong network support for smooth and stable tracking.",
      icon: <Signal className="w-6 h-6 text-[#1894A4]" />,
    },
    {
      title: "Secure Cloud Servers",
      text: "Fast, safe and reliable cloud storage for your tracking data.",
      icon: <Cloud className="w-6 h-6 text-[#1894A4]" />,
    },
    {
      title: "Web & App Tracking",
      text: "Monitor your vehicle live movement seamlessly on app and web dashboard.",
      icon: <Smartphone className="w-6 h-6 text-[#1894A4]" />,
    },
    {
      title: "Geofence Robotic Call",
      text: "Instant call alerts on entering or leaving a defined area.",
      icon: <PhoneCall className="w-6 h-6 text-[#1894A4]" />,
    },
    {
      title: "Battery Tampering",
      text: "Immediate alerts in case of battery disconnection or tampering attempts.",
      icon: <BatteryWarning className="w-6 h-6 text-[#1894A4]" />,
    },
    {
      title: "Recovery Assistance",
      text: "Get round-the-clock help and vehicle recovery whenever required.",
      icon: <LifeBuoy className="w-6 h-6 text-[#1894A4]" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateLayout = () => {
    if (window.innerWidth < 640) setCardsPerPage(1);
    else if (window.innerWidth < 768) setCardsPerPage(2);
    else if (window.innerWidth < 1024) setCardsPerPage(3);
    else setCardsPerPage(4);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [services.length]);

  const cardWidth = 100 / cardsPerPage;

  return (
    <section className="py-14 lg:py-20 bg-white relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-32">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900">
            SERVICES WE'RE PROVIDING
          </h2>
          <p className="mt-3 text-gray-600">
            Smart tracking & security solutions for complete peace of mind
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + services.length) % services.length
              )
            }
            className="hidden lg:flex absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-[#1894A4] hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <div className="overflow-hidden" ref={sliderRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}%)`,
              }}
            >
              {services
                .concat(services.slice(0, cardsPerPage))
                .map((service, idx) => (
                  <div
                    key={idx}
                    className="px-3 flex-shrink-0"
                    style={{ flex: `0 0 ${cardWidth}%` }}
                  >
                    <ServiceCard {...service} />
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % services.length)
            }
            className="hidden lg:flex absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-[#1894A4] hover:text-white transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
