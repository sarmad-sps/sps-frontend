import React from "react";
import {
  Car,
  Flame,
  ShieldCheck,
  Droplet,
  Users,
  Wrench,
  Clock,
  PhoneCall,
} from "lucide-react";

const CoverageHighlights: React.FC = () => {
  const highlights = [
    { 
      icon: <Car className="w-8 h-8 text-[#1894A4]" />, 
      label: "Accident",
      description: "Covers damages caused by vehicle accidents."
    },
    { 
      icon: <Flame className="w-8 h-8 text-[#1894A4]" />, 
      label: "Fire Damage",
      description: "Protection against fire-related vehicle damages."
    },
    { 
      icon: <ShieldCheck className="w-8 h-8 text-[#1894A4]" />, 
      label: "Theft",
      description: "Compensation in case your vehicle is stolen."
    },
    { 
      icon: <Droplet className="w-8 h-8 text-[#1894A4]" />, 
      label: "Flood Damage",
      description: "Coverage for damages due to water or floods."
    },
    { 
      icon: <Users className="w-8 h-8 text-[#1894A4]" />, 
      label: "Third-party Coverage",
      description: "Protects you against damages caused to others."
    },
    { 
      icon: <Wrench className="w-8 h-8 text-[#1894A4]" />, 
      label: "Towing Service",
      description: "Assistance to tow your vehicle when needed."
    },
    { 
      icon: <Clock className="w-8 h-8 text-[#1894A4]" />, 
      label: "24/7 Service",
      description: "Round-the-clock assistance anytime."
    },
    { 
      icon: <PhoneCall className="w-8 h-8 text-[#1894A4]" />, 
      label: "24/7 Helpline",
      description: "Get support from our helpline anytime."
    },
  ];

  return (
    <section className="py-16 bg-[#F8FBFF]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071B34] mb-10">
        Coverage Highlights
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 h-64"
          >
            {item.icon}
            <p className="text-gray-800 font-semibold">{item.label}</p>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoverageHighlights;
