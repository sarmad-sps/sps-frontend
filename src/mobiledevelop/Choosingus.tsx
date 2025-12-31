import React from "react";
import { CheckCircle } from "lucide-react";

interface ReasonGridSectionProps {
  title: string;
  reasons: string[];
  background?: string;
  columns?: string;
}

const Choosingus: React.FC<ReasonGridSectionProps> = ({
  title,
  reasons,
  background = "bg-gray-50",
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}) => {
  return (
    <section
      className={`w-full flex items-center justify-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 ${background}`}
    >
      <div className="w-full max-w-8xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-16 text-center text-gray-800 leading-snug tracking-tight">
          {title}
        </h2>

        {/* Grid */}
        <div className={`grid ${columns} gap-8`}>
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`
                relative flex flex-col sm:flex-row items-center sm:items-start gap-4
                p-6 rounded-2xl overflow-hidden
                bg-gradient-to-r from-[#1A3970] to-[#2ba9b4]
                text-white font-medium
                shadow-lg
                transition-all duration-500
                hover:scale-105 hover:shadow-[0_0_35px_rgba(43,169,180,0.6)]
                group
              `}
            >
              {/* Icon Box */}
              <div
                className={`
                  relative p-4 rounded-2xl flex items-center justify-center flex-shrink-0
                  bg-white/10 backdrop-blur-lg
                  shadow-md
                  w-16 h-16 sm:w-18 sm:h-18
                  group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
                  transition-all duration-500
                `}
              >
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg" />

                {/* Icon Shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 transform -skew-x-12 animate-shine pointer-events-none"></span>
              </div>

              {/* Text */}
              <span className="relative z-10 text-center sm:text-left text-base sm:text-lg md:text-xl break-words">
                {reason}
              </span>

              {/* Card Glow Overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#2ba9b4] to-[#1A3970] opacity-0 transition-opacity duration-500 group-hover:opacity-40 animate-pulse pointer-events-none rounded-2xl"></span>

              {/* Shine Animation */}
              <style>
                {`
                  @keyframes shine {
                    0% { left: -100%; }
                    20% { left: 100%; }
                    100% { left: 100%; }
                  }
                  .animate-shine {
                    animation: shine 2.5s infinite ease-in-out;
                  }
                `}
              </style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choosingus;
