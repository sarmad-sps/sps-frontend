import { Link } from "react-router-dom";

const ServicesSection1 = () => {
  const services = [
    {
      id: "01",
      iconSrc: "/caricon.png",
      title: "Car",
      subtitle: "Insurance",
      description: "We are dedicated to helping the buyers of services",
      route: "/car",
    },
    {
      id: "02",
      iconSrc: "/Healthicon.png",
      title: "Health",
      subtitle: "Insurance",
      description: "We are dedicated to helping the buyers of services",
      route: "/health",
    },
    {
      id: "03",
      iconSrc: "/motorcycleicon.png",
      title: "Bike",
      subtitle: "Insurance",
      description: "We are dedicated to helping the buyers of services",
      route: "/bike",
    },
    {
      id: "04",
      iconSrc: "/Travelicon.png",
      title: "Travel",
      subtitle: "Insurance",
      description: "We are dedicated to helping the buyers of services",
      route: "/travel",
    },
  ];

  return (
    <section className="w-full bg-[#F5F8Fc] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-12"> 
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#1A3970] text-sm md:text-base font-semibold mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Services We Offered
          </h2>
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white hover:bg-[#1894a4] rounded-lg shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
            >
              {/* Card Content */}
              <div className="p-6 relative">
                {/* Number Badge */}
                <div className="absolute top-0 right-0">
                  <div className="bg-[#1894a4] group-hover:bg-white text-white group-hover:text-[#1894a4] w-24 h-24 flex items-center justify-center rounded-bl-full font-bold text-3xl transition-colors duration-500">
                    <span className="ml-4 mb-4">{service.id}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-24 h-24 flex items-center justify-start rounded-lg">
                    <img
                      src={service.iconSrc}
                      alt={`${service.title} Icon`}
                      className={`object-contain transition-all duration-500 ${
                        service.id === "02"
                          ? "w-16 h-16 filter grayscale brightness-0 group-hover:brightness-0 group-hover:invert"
                          : "w-24 h-24 group-hover:brightness-0 group-hover:invert"
                      }`}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black group-hover:text-white mb-1 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-500">
                  {service.subtitle}
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-gray-300 group-hover:bg-white/30 mb-4 transition-colors duration-500"></div>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>
                <Link to={service.route} className="absolute inset-0"></Link>
              </div>
            </div>
          ))}
        </div>

        {/* Services Scroller - Mobile */}
        <div className="md:hidden">
          <div className="overflow-x-auto pb-4 snap-x snap-mandatory">
            <div className="flex gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white hover:bg-[#1894a4] rounded-lg shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer min-w-full snap-center flex-shrink-0"
                >
                  {/* Card Content */}
                  <div className="p-5 relative">
                    {/* Number Badge */}
                    <div className="absolute top-0 right-0">
                      <div className="bg-[#1894a4] group-hover:bg-white text-white group-hover:text-[#1894a4] w-20 h-20 flex items-center justify-center rounded-bl-full font-bold text-2xl transition-colors duration-500">
                        <span className="ml-3 mb-3">{service.id}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-5 mt-3">
                      <div className="w-20 h-20 flex items-center justify-start rounded-lg">
                        <img
                          src={service.iconSrc}
                          alt={`${service.title} Icon`}
                          className={`object-contain transition-all duration-500 ${
                            service.id === "02"
                              ? "w-14 h-14 filter grayscale brightness-0 group-hover:brightness-0 group-hover:invert"
                              : "w-20 h-20 group-hover:brightness-0 group-hover:invert"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-black group-hover:text-white mb-1 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-lg font-bold text-black group-hover:text-white mb-3 transition-colors duration-500">
                      {service.subtitle}
                    </p>

                    {/* Divider */}
                    <div className="w-10 h-0.5 bg-gray-300 group-hover:bg-white/30 mb-3 transition-colors duration-500"></div>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-500">
                      {service.description}
                    </p>
                    <Link to={service.route} className="absolute inset-0"></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection1;