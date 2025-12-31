import React from "react";
import { Check } from "lucide-react";

interface Plan {
  title: string;
  features: string[];
}

interface ClaimProcessProps {
  title?: string;
  plans: Plan[];
}

const ClaimProcess: React.FC<ClaimProcessProps> = ({ 
  title = "Bike Insurance Claim Process", 
  plans 
}) => {

  const scrollToQuote = () => {
    document.getElementById("vehicle-info-header")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section className="py-16 bg-[#F8FBFF]  px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071B34] mb-4">
        {title}
      </h2>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        SecurePath Solutions (Private) Limited offers an exceptional motor insurance plan, 
        the Auto Sure Plan, designed to provide comprehensive protection and peace of mind 
        to our clients. Our affordable packages are packed with benefits and services 
        that cater to your specific needs.
      </p>

      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {plans.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold text-[#071B34] mb-6">{p.title}</h3>
            <ul className="space-y-4 mb-6">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-700">
                  <Check className="text-[#1894A4] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800">{f}</span>
                </li>
              ))}
            </ul>

            {/* <button 
              onClick={scrollToQuote}
              className="mt-auto bg-[#1894A4] hover:bg-[#11707c] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Get Quote
            </button> */}
              <button
            onClick={scrollToQuote}
  className={`
    relative px-8 py-3 font-black uppercase italic tracking-wider text-sm
    flex items-center justify-center gap-2 text-white overflow-hidden 
    transition-all duration-500 rounded-lg
    bg-gradient-to-r from-[#1A3970] to-[#2ba9b4] 
    hover:shadow-[0_0_30px_rgba(43,169,180,0.5)] 
    hover:scale-105 active:scale-95 transform group
  `}
>
  {/* Button Text + Arrow */}
  <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
    Read More
    <svg 
      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 shadow-sm" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>

  {/* Subtle animated glow overlay (Becomes active on hover) */}
  <span className="absolute inset-0 bg-gradient-to-r from-[#2ba9b4] to-[#1A3970] opacity-0 transition-opacity duration-500 group-hover:opacity-40 animate-pulse pointer-events-none"></span>

  {/* High-speed shine effect */}
  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine pointer-events-none"></span>

  <style>
    {`
      @keyframes shine {
        0% { left: -100%; }
        20% { left: 100%; }
        100% { left: 100%; }
      }
      .animate-shine {
        animation: shine 3s infinite ease-in-out;
      }
    `}
  </style>
</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClaimProcess;
