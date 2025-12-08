import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ProgressBar: React.FC<{
  label: string;
  percentage: number;
  color: string;
}> = ({ label, percentage, color }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-semibold text-sm md:text-base">
          {label}
        </span>
        <span className="text-[#1894A4] font-bold text-lg">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`${color} h-3 rounded-full transition-all duration-1500 ease-out origin-left`}
          style={{
            width: inView ? `${percentage}%` : "0%",
            transition: inView ? "width 1.5s ease-out" : "none",
          }}
        />
      </div>
    </div>
  );
};

const HeaderSection: React.FC = () => {
  const mainColor = "bg-[#1894A4]";
  const darkBlueText = "text-[#1F3A6A]";
  const lightGreyText = "text-gray-600";

  return (
    <section className="bg-white py-16 w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Images */}
        <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[550px] flex items-center justify-center">
          {/* Bottom Left Image */}
          <div className="absolute top-[35%] sm:top-[40%] left-0 w-[240px] h-[180px] sm:w-[320px] sm:h-[240px] md:w-[380px] md:h-[280px] lg:w-[450px] lg:h-[350px] z-10 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/boy.jpg"
              alt="Boy with car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Image */}
          <div className="absolute top-0 right-0 w-[240px] h-[180px] sm:w-[320px] sm:h-[240px] md:w-[380px] md:h-[280px] lg:w-[450px] lg:h-[350px] z-20 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/womencar.jpg"
              alt="Woman in car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Car Image */}
          <img
            src="/car.png"
            alt="Car behind images"
            className="absolute bottom-[40px] sm:bottom-[60px] lg:bottom-[70px] right-[-10px] sm:right-[-15px] lg:right-[-20px] w-32 sm:w-44 lg:w-56 object-contain rotate-[-5deg]"
            style={{ zIndex: 5 }}
          />

          {/* Experience Tag */}
          <div className="absolute top-4 sm:top-8 lg:top-10 left-8 sm:left-12 lg:left-20 bg-[#1894A4] text-white font-bold text-sm sm:text-base lg:text-lg px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6 rounded-lg shadow-lg z-20">
            50+ <br /> Years of <br /> Experience
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
          <p className="flex items-center gap-2 text-[#00B5AD] font-semibold mb-4 text-sm">
            <img
              src="/splogo.png"
              alt="SP Logo"
              className="w-6 h-6 object-contain"
            />
            <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
              About Secure Path
            </p>
          </p>

          <h1
            className={`text-4xl md:text-5xl font-extrabold ${darkBlueText} leading-tight mb-6`}
          >
            WELCOME TO SECURE <br /> PATH COMPANY
          </h1>

          <p className={`${lightGreyText} text-lg mb-6`}>
            Delivering smart, fast and secure tracking solutions for everyone.
          </p>

          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            We provide reliable GPS tracking with real-time monitoring, strong
            connectivity and complete safety for your vehicles.
          </p>

          {/* Progress Bars */}
          <div className="mb-8">
            <ProgressBar
              label="Time Awareness"
              percentage={50}
              color={mainColor}
            />
            <ProgressBar
              label="Driver Experience"
              percentage={70}
              color={mainColor}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
            ,
            <Link to="/aboutus">
              <button
                className={`${mainColor} hover:bg-[#009E97] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors duration-300 shadow-lg group`}
              >
                Read More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <div className="flex items-center text-gray-700 font-semibold">
              <Phone className="w-5 h-5 mr-2 text-gray-500" />
              <span>
                Call Anytime <br /> +1 (550) 250 5280
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
