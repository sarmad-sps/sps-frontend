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
      icon: <ShieldCheck className="w-8 h-8 text-[#1894A4]" />, 
      label: "Theft/Snatch",
      description: "Compensation in case your vehicle is stolen."
    },
    { 
      icon: <Droplet className="w-8 h-8 text-[#1894A4]" />, 
      label: "Natural Disaster",
      description: "Coverage for damages due to water or floods."
    },
    { 
      icon: <Users className="w-8 h-8 text-[#1894A4]" />, 
      label: "Third-party Coverage",
      description: "Protects you against damages caused to others."
    },
    { 
      icon: <Clock className="w-8 h-8 text-[#1894A4]" />, 
      label: "24/7 Service",
      description: "Round-the-clock assistance anytime."
    },
    { 
      icon: <Clock className="w-8 h-8 text-[#1894A4]" />, 
      label: "Total Loss Coverage",
      description: "Compensation for total loss situations."
    },
  ];

  return (
    <section className="py-16 bg-[#F8FBFF]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071B34] mb-10">
        Coverage Highlights
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 h-64"
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
