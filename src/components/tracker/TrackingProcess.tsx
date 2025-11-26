import React, { useState, useEffect } from "react";

type StepCardProps = {
  title: string;
  text: string;
  iconImage: string;
  imageUrl: string;
  showArrow?: boolean;
};

const StepCard: React.FC<StepCardProps> = ({
  title,
  text,
  iconImage,
  imageUrl,
  showArrow = true,
}) => {
  return (
    <div
      className="relative w-full h-[260px] sm:h-[280px] md:h-[300px] rounded-3xl overflow-hidden shadow-2xl 
                 bg-[#1A3970] flex flex-col justify-end"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Icon */}
      <div className="absolute top-5 left-5 z-20">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm ring-4 ring-white/20 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#1894A4] flex items-center justify-center shadow-lg">
            <img src={iconImage} alt={title} className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Arrow - Sirf desktop pe dikhega */}
      {showArrow && (
        <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden md:block z-10">
          <svg width="70" height="40" viewBox="0 0 70 40" fill="none">
            <line x1="0" y1="20" x2="50" y2="20" stroke="rgba(24,148,164,0.6)" strokeWidth="3" />
            <polygon points="50,20 65,10 65,30" fill="#1894A4" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-6 pb-8 pt-16">
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">{title}</h3>
        <p className="text-sm md:text-base text-white/80 leading-snug">{text}</p>
      </div>
    </div>
  );
};

export default function TrackingProcess() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [slideStep, setSlideStep] = useState(1);

  const cardText = "Open multiply a green form lesser their from in made herb multiply";

  const stepCards = [
    { title: "Choose A Car", icon: "/card1.svg", image: "/carhover.jpg" },
    { title: "Come In Contact", icon: "/card2.svg", image: "/carhover.jpg" },
    { title: "Pick-Up Locations", icon: "/card3.svg", image: "/carhover.jpg" },
    { title: "Enjoy Driving", icon: "/card4.svg", image: "/carhover.jpg" },
  ];

  // Teri original logic — bilkul same
  const updateLayout = () => {
    if (window.innerWidth < 640) {
      setCardsPerPage(1);
      setSlideStep(1);
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(2);
      setSlideStep(1);
    } else {
      setCardsPerPage(3);
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
      setCurrentIndex((prev) => (prev + slideStep) % stepCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideStep, stepCards.length]);

  const cardWidthPercent = 100 / cardsPerPage;

  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24 w-full">
      <div className="w-full px-4 md:px-10 lg:px-16 mx-auto max-w-7xl">
        {/* Title - Same */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" />
            <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Steps
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            TRACKING PROCESS
          </h2>
        </div>

        {/* Slider - Sirf spacing tight kiya */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidthPercent}%)` }}
          >
            {stepCards.concat(stepCards.slice(0, cardsPerPage)).map((card, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{ width: `${100 / cardsPerPage}%` }}
              >
                <div className="px-3 sm:px-4 md:px-6">
                  <StepCard
                    title={card.title}
                    text={cardText}
                    iconImage={card.icon}
                    imageUrl={card.image}
                    showArrow={idx < stepCards.length - 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots - Thoda better banaya */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: Math.ceil(stepCards.length / slideStep) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * slideStep)}
              className={`transition-all ${
                currentIndex === i * slideStep
                  ? "bg-[#1894A4] w-10 h-2 rounded-full"
                  : "bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}