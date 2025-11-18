export default function WhyUsSection2() {
  const features = [
    {
      id: 1,
      title: "Dedicated Team Member",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    },
    {
      id: 2,
      title: "Dedicated Team Member",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    },
    {
      id: 3,
      title: "Dedicated Team Member",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    },
    {
      id: 4,
      title: "Dedicated Team Member",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    },
  ];

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden bg-white">
      {/* Split Background - Only on large screens */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Left half - colored background */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#E3EFF0]"></div>
        {/* Right half - white background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white"></div>
      </div>

      {/* Removed max-w-7xl */}
      <div className="relative z-10 w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-1810">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Image */}
          <div className="relative lg:bg-transparent bg-[#E3EFF0] rounded-2xl lg:rounded-none p-4 lg:p-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Whyussection2image1.png"
                alt="Team collaboration"
                className="w-full h-[530px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <p className="text-gray-700 text-sm md:text-base font-semibold mb-3">
                Get Know Why Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Transforming Vision Into
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1894a4] mb-4">
                Business Success
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis et quasi
              </p>
            </div>

            {/* Features Grid - 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.id} className="group">
                  {/* Icon */}
                  <div className="mb-3">
                    <img
                      src="/Servicesection2Icon1.png"
                      alt={feature.title}
                      className="w-8 h-8"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
