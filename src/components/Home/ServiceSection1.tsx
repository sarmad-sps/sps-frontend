import { Link } from "react-router-dom";



const ServicesSection1 = () => {
  const services = [
    {
      id: "01",
      iconSrc: "/caricon.png",
      title: "Car",
      subtitle: "Insurance",
      description: "We are dedicated to helping the buyers of services",
      route: "/car"
    },
    {
      id: "02",
      iconSrc: "/Healthicon.png",
      title: "Health",
      subtitle: "Insurance",
      description: "We are dedicated to helping the buyers of services",
      route: "/health"
    },
    {
      id: "03",
      iconSrc: "/motorcycleicon.png",
      title: "Bike",
      subtitle: "Insurance",
      description: "We are dedicated to helping the buyers of services",
      route: "/bike"
    },
    {
      id: "04",
      iconSrc: "/Travelicon.png",
      title: "Travel",
      subtitle: "Insurance",
      description: "We are dedicated to helping the buyers of services",
      route: "/travel"
    },
  ];

  return (
    <section className="w-full bg-[#F5F8Fc] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#1A3970] text-sm md:text-base font-semibold mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Services We Offered
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Card Content */}
                <div className="p-6 relative">
                  {/* Number Badge */}
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#1894a4] text-white w-24 h-24 flex items-center justify-center rounded-bl-full font-bold text-3xl">
                      <span className="ml-4 mb-4">{service.id}</span>
                    </div>
                   
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div
                      className={`w-24 h-24 flex items-center justify-start rounded-lg `}
                    >
                      <img
                        src={service.iconSrc}
                        alt={`${service.title} Icon`}
                        className={`object-contain ${
                          service.id === "02"
                            ? "w-16 h-16 filter grayscale brightness-0"
                            : "w-24 h-24"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xl font-bold text-black mb-4">
                    {service.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                   <Link to={service.route} className="absolute inset-0"></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection1;
