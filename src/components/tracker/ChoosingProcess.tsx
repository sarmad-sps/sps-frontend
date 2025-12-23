import React from "react";
import { Calendar, MapPin, ThumbsUp } from "lucide-react";

const ServiceFeatures: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: "Hass­le-Free Booking",
      description:
        "Book your car in just a few clicks. Fast process, simple steps, and instant confirmation — making your travel experience smoother than ever.",
      color: "from-teal-400 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Multiple Pickup Points",
      description:
        "Choose from our wide range of pickup locations across the city. Easy access, convenient spots, and maximum flexibility for your journey.",
      color: "from-teal-400 to-teal-500",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description:
        "We prioritize your comfort and safety. Trusted service, professional support, and a smooth riding experience every single time.",
      color: "from-teal-400 to-teal-500",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16 w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" />
              <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
                WHY CHOOSE US
              </p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            WE ARE INNOVATIVE AND PASSIONATE
            <br />
            ABOUT THE WORK WE DO.
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative group">
                {/* Icon Badge */}
                <div className="absolute -top-6 right-8 z-10">
                  <div
                    className={`w-16 h-16 bg-[#1894A4] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-blue-900 bg-[#1A3970] rounded-3xl p-8 pt-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-[200px] lg:h-[250px] xl:h-[200px]">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  {/* <button className="bg-[#1894A4] hover:bg-[#14768f] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 group/btn">
                    Rent Now
                    <svg
                      className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;