import { useState, useEffect } from "react";

export default function TrackingProcess() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [slideStep, setSlideStep] = useState(1);

  const stepCards = [
    {
      title: "Enter Tracking Details",
      icon: "/card1.svg",
      image: "/carhover.jpg",
      text: "Add shipment, vehicle, or policy information.",
    },
    {
      title: "System Verification",
      icon: "/card2.svg",
      image: "/carhover.jpg",
      text: "We verify your details instantly.",
    },
    {
      title: "Connect Providers",
      icon: "/card3.svg",
      image: "/carhover.jpg",
      text: "We link your request with trusted tracking partners.",
    },
    {
      title: "Live Status Updates",
      icon: "/card4.svg",
      image: "/carhover.jpg",
      text: "Track real-time location and progress.",
    },
    {
      title: "Smart Alerts",
      icon: "/card4.svg",
      image: "/carhover.jpg",
      text: "Get instant notifications on status changes.",
    },
    {
      title: "Secure Tracking",
      icon: "/card4.svg",
      image: "/carhover.jpg",
      text: "Your data remains safe and private.",
    },
  ];

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
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/splogo.png"
              className="w-9 h-9 sm:w-11 sm:h-11"
              alt="Logo"
            />
            <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Steps
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            TRACKING PROCESS
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
            }}
          >
            {stepCards
              .concat(stepCards.slice(0, cardsPerPage))
              .map((card, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{ width: `${100 / cardsPerPage}%` }}
                >
                  <div className="px-3 sm:px-4 md:px-6">
                    {/* Step Card */}
                    <div
                      className="relative w-full h-[260px] sm:h-[280px] md:h-[300px] rounded-3xl overflow-hidden shadow-2xl"
                      style={{
                        backgroundColor: "#1A3970", // Base dark blue
                      }}
                    >
                      {/* Flipped Car Image */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${card.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transform: "scaleX(-1)", // Flip horizontally
                          backgroundBlendMode: "overlay",
                        }}
                      />
                      {/* Semi-Dark Overlay for readability */}
                      <div className="absolute inset-0 bg-[#1A3970]/90" />

                      {/* Icon */}
                      <div className="absolute top-5 left-5 z-20">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm ring-4 ring-white/20 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#1894A4] flex items-center justify-center shadow-lg">
                            <img
                              src={card.icon}
                              alt={card.title}
                              className="w-6 h-6"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Arrow Line */}
                      <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden md:block z-10">
                        <svg
                          width="70"
                          height="40"
                          viewBox="0 0 70 40"
                          fill="none"
                        >
                          <line
                            x1="0"
                            y1="20"
                            x2="50"
                            y2="20"
                            stroke="rgba(24,148,164,0.6)"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>

                      {/* Content - Fixed Position at Bottom */}
                      <div className="h-[120px] absolute bottom-0 left-0 right-0 z-10 px-6 pb-6">
                        <h3 className="text-xl md:text-2xl font-extrabold text-white">
                          {card.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/80 leading-snug mb-2">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: Math.ceil(stepCards.length / slideStep) }).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * slideStep)}
                className={`transition-all ${
                  currentIndex === i * slideStep
                    ? "bg-[#1894A4] w-10 h-2 rounded-full"
                    : "bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
