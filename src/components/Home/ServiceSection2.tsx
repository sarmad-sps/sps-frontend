import { ArrowLeft } from "lucide-react";

const ServicesSection2 = () => {
  const services = [
    {
      id: 1,
      icon: "/Servicesection2Icon1.png",
      title: "Business Strategy",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
      image: "/Servicesection2image1.jpg",
    },
    {
      id: 2,
      icon: "/Servicesection2Icon2.png",
      title: "Financial Planning",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
      image: "/Servicesection2image2.jpg",
    },
    {
      id: 3,
      icon: "/Servicesection2Icon3.png",
      title: "Consultancy & Advice",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
      image: "/Servicesection2image3.jpg",
    },
  ];

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden">
      {/* Background with gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-[#E3EFF0]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-700 text-sm md:text-base font-semibold mb-2">
            Services We Provide
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            <span className="text-[#1894a4]">Modern Consulting</span> Services
            To
            <br />
            Grow Business
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#1894a4] transition-colors duration-300">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A3970]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 mb-4"></div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-[#1894a4] transition-colors group/button">
                    <span>Read More</span>
                    <ArrowLeft className="w-4 h-4 rotate-180 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection2;
