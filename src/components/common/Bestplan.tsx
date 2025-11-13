import { useState } from "react";
import { Check } from "lucide-react";

export default function PricingPlans() {
  const [planType, setPlanType] = useState("monthly");

  const plans = [
    {
      name: "Business plan",
      icon: "/Bestplanicon1.png",
      price: 25,
      features: [
        "Invoices/Estimates",
        "Online Payments",
        "Projects and Time Sheet",
        "Recurring Transitions",
        "Client Portal",
      ],
    },
    {
      name: "Vehicle plan",
      icon: "/Bestplanicon2.png",
      price: 45,
      features: [
        "Invoices/Estimates",
        "Online Payments",
        "Projects and Time Sheet",
        "Recurring Transitions",
        "Client Portal",
      ],
    },
    {
      name: "Rental plan",
      icon: "/Bestplanicon3.png",
      price: 65,
      features: [
        "Invoices/Estimates",
        "Online Payments",
        "Projects and Time Sheet",
        "Recurring Transitions",
        "Client Portal",
      ],
    },
  ];

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-12"> 
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#1894a4] font-bold text-sm">»»</span>
            <p className="text-gray-700 text-sm md:text-base font-semibold uppercase tracking-wider">
              Pricing Plans
            </p>
            <span className="text-[#1894a4] font-bold text-sm">««</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            <span className="text-[#1894a4]">Choose the best plans</span>
            <br />
            for yourself
          </h2>

          {/* Plan Toggle */}
          <div className="inline-flex bg-white rounded-lg shadow-lg p-1 mt-8">
            <button
              onClick={() => setPlanType("monthly")}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                planType === "monthly"
                  ? "bg-[#1894a4] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => setPlanType("yearly")}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                planType === "yearly"
                  ? "bg-[#1894a4] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Yearly Plan
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Icon and Price Row */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  {/* Icon on Left */}
                  <div className="w-24 h-24 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {plan.icon.startsWith("/") ? (
                      <img
                        src={plan.icon}
                        alt={plan.name}
                        className="w-36 h-36 object-contain"
                      />
                    ) : (
                      <span className="text-5xl">{plan.icon}</span>
                    )}
                  </div>

                  {/* Price on Right */}
                  <div className="text-right">
                    <div className="flex items-start justify-end gap-1">
                      <span className="text-5xl font-bold text-[#1A3970]">
                        {plan.price}
                      </span>
                      <span className="text-3xl font-bold text-[#1A3970]">
                        $
                      </span>
                    </div>
                    <p className="text-[#1894a4] font-semibold mt-1">
                      Per {planType === "monthly" ? "month" : "year"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-[#1A3970] mb-4">
                  {plan.name}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-6"></div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1894a4] bg-opacity-10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-[#1894a4]" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-[#1A3970] hover:bg-[#2A4D8F] text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Select Policy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="w-3 h-3 rounded-full bg-[#1894a4] hover:bg-[#1A3970] transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
        </div>
      </div>
    </section>
  );
}