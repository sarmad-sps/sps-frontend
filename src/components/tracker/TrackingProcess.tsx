import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TrackingSection = () => {
  const packages = [
    {
      id: 1,
      title: "Track Me",
      status: "Available",
      progress: 75,
      isCenter: false,
      features: [
        "Nationwide GSM coverage",
        "Real time tracking",
        "24/7 customer care",
        "Battery tampering",
        "Theft recovery assistance",
      ],
    },
    {
      id: 2,
      title: "Fleet Minder",
      status: "In Transit",
      progress: 95,
      isCenter: true,
      features: [
        "Nationwide GSM coverage",
        "Round the clock tracking",
        "Jammer detection device",
        "Location on call",
        "Call on geo fence",
        "Live web access",
        "Sms on alerts",
        "Remote immobilization",
      ],
    },
    {
      id: 3,
      title: "Secure On",
      status: "Premium",
      progress: 60,
      isCenter: false,
      features: [
        "Everything in Fleet Minder",
        "Fuel Monitoring System",
        "Temperature Sensor",
        "Driver Identification",
        "Door Open/Close Alert",
      ],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const goToForm = () => {
    if (location.pathname === "/tracker") {
      document.getElementById("tracker-form")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/tracker#tracker-form");
    }
  };

  // Mobile Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Auto Slider - har 5 seconds mein next
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % packages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Minimum swipe distance 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left → next card
        setCurrentIndex((prev) => (prev + 1) % packages.length);
      } else {
        // Swipe right → previous card
        setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
      }
    }
    touchStartX.current = null;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center p-6 overflow-hidden">

      {/* Flip CSS */}
      <style>{`
        .card-container { perspective: 2000px; }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .card-container:hover .card-inner {
          transform: rotateY(180deg);
        }
        .card-front,
        .card-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 2rem;
        }
        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-[#1C4D8D] text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
          Tracker <span className="text-cyan-400">Packages</span>
        </h1>
        <div className="h-1.5 w-48 bg-cyan-400 mx-auto mt-4 rounded-full shadow-lg" />
      </div>

      {/* Mobile Slider with Touch Swipe */}
      <div className="w-full max-w-md mx-auto md:hidden">
        <div className="relative">
          {/* Slider Container - Touch Events Added */}
          <div
            className="overflow-hidden rounded-3xl select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {packages.map((pkg, idx) => (
                <div key={pkg.id} className="w-full flex-shrink-0 px-4">
                  <div className="card-container h-[520px]">
                    <div className="card-inner rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                      {/* FRONT */}
                      <div
                        className="card-front cursor-pointer flex flex-col items-center justify-center p-8 text-white rounded-3xl"
                        style={{
                          background:
                            idx === 0
                              ? "linear-gradient(135deg, #1C4D8D, #0f2e54)"
                              : idx === 1
                              ? "linear-gradient(135deg, #0f2e54, #1C4D8D)"
                              : "linear-gradient(135deg, #143d71, #0f2e54)",
                        }}
                      >
                        <span className="mb-3 px-4 py-1 rounded-full text-[10px] font-bold bg-white/20">
                          {pkg.status}
                        </span>
                        <h2 className="text-4xl font-black italic uppercase mb-6">
                          {pkg.title}
                        </h2>
                        <div className="w-full bg-black/20 p-4 rounded-xl border border-white/10">
                          <div className="flex justify-between text-xs mb-2">
                            <span>System Ready</span>
                            <span className="text-cyan-300">{pkg.progress}%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-cyan-400"
                              style={{ width: `${pkg.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* BACK */}
                      <div className="card-back cursor-pointer flex flex-col rounded-3xl" style={{ background: "#0f2e54" }}>
                        <div className="p-6 border-b border-white/10">
                          <h3 className="text-2xl font-black italic uppercase text-white">
                            {pkg.title}
                          </h3>
                          <p className="text-[10px] uppercase tracking-[3px] text-orange-400 mt-1">
                            Features
                          </p>
                        </div>
                        <div className="flex-1 px-8 py-6 overflow-y-auto">
                          <ul className="space-y-4">
                            {pkg.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-[11px] font-bold uppercase italic text-white transition-colors duration-300 hover:text-orange-400"
                              >
                                <div className="mt-1 w-2 h-4 skew-x-[-20deg] bg-orange-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-6">
                          <button
                            onClick={goToForm}
                            className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic tracking-[4px] text-xs active:scale-95"
                          >
                            Select Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {packages.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? "bg-cyan-400 w-8" : "bg-gray-500 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View - Original Style */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.id}
            className={`card-container w-full md:w-[340px] h-[520px] ${
              pkg.isCenter ? "scale-105" : "scale-95"
            }`}
          >
            <div className="card-inner rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              {/* FRONT */}
              <div
                className="card-front cursor-pointer flex flex-col items-center justify-center p-8 text-white"
                style={{
                  background:
                    idx === 0
                      ? "linear-gradient(135deg, #1C4D8D, #0f2e54)"
                      : idx === 1
                      ? "linear-gradient(135deg, #0f2e54, #1C4D8D)"
                      : "linear-gradient(135deg, #143d71, #0f2e54)",
                }}
              >
                <span className="mb-3 px-4 py-1 rounded-full text-[10px] font-bold bg-white/20">
                  {pkg.status}
                </span>
                <h2 className="text-4xl font-black italic uppercase mb-6">
                  {pkg.title}
                </h2>
                <div className="w-full bg-black/20 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between text-xs mb-2">
                    <span>System Ready</span>
                    <span className="text-cyan-300">{pkg.progress}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-400"
                      style={{ width: `${pkg.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="card-back cursor-pointer flex flex-col" style={{ background: "#0f2e54" }}>
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-2xl font-black italic uppercase text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[3px] text-orange-400 mt-1">
                    Features
                  </p>
                </div>
                <div className="flex-1 px-8 py-6 overflow-y-auto">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[11px] font-bold uppercase italic text-white transition-colors duration-300 hover:text-orange-400"
                      >
                        <div className="mt-1 w-2 h-4 skew-x-[-20deg] bg-orange-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <button
                    onClick={goToForm}
                    className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic tracking-[4px] text-xs active:scale-95"
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingSection;