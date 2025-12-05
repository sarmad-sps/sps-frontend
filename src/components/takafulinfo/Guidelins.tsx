
import React from "react";
import { Zap, DollarSign, ShieldCheck, Headphones } from "lucide-react"; // Lucide icons

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Fast Claim Approval",
    description: "Get your claims approved quickly with minimal hassle.",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Affordable Premium",
    description: "Insurance coverage that suits every budget.",
    icon: <DollarSign className="w-8 h-8 text-green-500" />,
  },
  {
    title: "100% Shariah Compliant",
    description: "All our products are fully Shariah-compliant and ethical.",
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "24/7 Support",
    description: "Our team is available anytime to assist you.",
    icon: <Headphones className="w-8 h-8 text-orange-500" />,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Why Choose Us?</h2>
        <p className="text-gray-700 mb-12">
          Trust, quality, and support you can rely on
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center
                         shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
