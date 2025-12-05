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
    <section className="py-16 bg-[#F8FBFF]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071B34] mb-4">
        {title}
      </h2>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        SecurePath Solutions (Private) Limited offers an exceptional motor insurance plan, 
        the Auto Sure Plan, designed to provide comprehensive protection and peace of mind 
        to our clients. Our affordable packages are packed with benefits and services 
        that cater to your specific needs.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
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

            <button 
              onClick={scrollToQuote}
              className="mt-auto bg-[#1894A4] hover:bg-[#11707c] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Get Quote
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClaimProcess;
