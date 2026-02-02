import React, { useState, useEffect } from "react";
import benefitImg from "../../assets/benefit.webp";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import icon1 from "../../assets/realtime.svg"
import icon2 from "../../assets/geo.svg"
import icon3 from "../../assets/driving.svg"
import splogo from "../../assets/splogo.webp"
import pta from "../../assets/pta.webp"
import secp from "../../assets/SECP logo.webp"
import pcsir from "../../assets/pcs.webp"
const VehicleTrackingHero: React.FC = () => {
  const features = [
    { icon: icon1, title: "Real-Time Tracking", desc: "Live vehicle location updates with precision" },
    { icon: icon2, title: "Geo-Fencing Alerts", desc: "Instant alerts for route deviations" },
    { icon: icon3, title: "Driver Monitoring", desc: "Track speed, braking & fuel efficiency" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Mobile slider auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1C4D8D] overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Left Side - Text Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <img src={splogo} className="w-9 h-9 sm:w-11" alt="Logo" />
                  <p className="text-cyan-400 font-bold text-sm uppercase tracking-[0.2em]">BENEFITS</p>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Key Features & <span className="text-cyan-400 italic">Benefits</span>
                </h1>
                <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 opacity-80">
                  Experience unmatched convenience and security with our advanced vehicle tracking solutions.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link to="/aboutus">
                  <button className="neon-btn">Learn More
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                  </button>
                </Link>
              </div>

              {/* Certifications - White Circles */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8">
                {[ 
                  { src: pta, label: "PTA Approved" },
                  { src: secp, label: "ISO Certified" },
                  { src: pcsir, label: "PCSIR Certified", long: true }
                ].map((cert, i) => (
                  <div key={i} className="flex flex-col items-center space-y-3">
                    <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-lg p-4 transition-transform hover:scale-110 border-4 border-white/10">
                      <img src={cert.src} alt="Cert" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider text-center max-w-[100px]">
                      {cert.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Features Section */}
            <div className="space-y-12">
              
              {/* Desktop View: Transparent Cards, Whole Div Hover */}
              <div className="hidden lg:grid grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} isDesktop={true} />
                ))}
              </div>

              {/* Mobile View: White Background Slider */}
              <div className="lg:hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <FeatureCard feature={features[currentIndex]} isDesktop={false} />
                  </motion.div>
                </AnimatePresence>

                {/* Mobile Dots */}
                <div className="flex justify-center gap-3 mt-8">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`transition-all duration-500 rounded-full h-1.5 ${
                        index === currentIndex ? "bg-cyan-400 w-6" : "bg-white/40 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Image with Glow */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative mx-auto pt-6 lg:pt-0 group"
              >
                <div className="absolute -inset-1 bg-cyan-400/20 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-2xl">
                  <img src={benefitImg} alt="Tracking System" className="w-full h-auto object-cover" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ feature, isDesktop }: { feature: any, isDesktop: boolean }) => (
  <div
    className={`group text-center p-6 rounded-[2.5rem] transition-all duration-500
      ${isDesktop
        ? 'bg-transparent border-none shadow-none cursor-pointer'
        : 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg'}`} // ✅ Mobile: transparent + blur + shadow
  >
    {/* Icon Container */}
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-cyan-400
        transition-all duration-500 ease-out
        ${isDesktop
          ? 'group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]'
          : 'shadow-md'}`}
    >
      <img src={feature.icon} alt={feature.title} className="w-7 h-7 brightness-0 invert" />
    </div>

    <h3
      className={`font-bold text-md mb-2 uppercase tracking-tight transition-colors duration-300
        ${isDesktop ? 'text-white group-hover:text-cyan-400' : 'text-white'}`} // Mobile text white for contrast
    >
      {feature.title}
    </h3>

    <p
      className={`text-xs leading-relaxed line-clamp-3 transition-opacity duration-300
        ${isDesktop ? 'text-blue-100/60 group-hover:opacity-100' : 'text-white/70'}`} // Mobile desc semi-white
    >
      {feature.desc}
    </p>
  </div>
);


export default VehicleTrackingHero;