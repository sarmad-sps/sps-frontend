import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Growth from "../../assets/growth.png"
import icon from "../../assets/Servicesection2Icon1.png"

export default function WhyUsSection2() {
  const features = [
    {
      id: 1,
      title: " Wide Range of Insurance Options",
      description:
        " We partner with top insurance providers to give you access to multiple plans in one place, so you can easily find coverage that fits your needs and budget.",
    },
    {
      id: 2,
      title: "Quick & Easy Comparison",
      description:
        " Our smart comparison tools help you evaluate policies side by side, making it easy to choose the right insurance without confusion.",
    },
    {
      id: 3,
      title: "Trusted by Customers",
      description:
        "We focus on transparency, honest advice, and customer-first service to make insurance simple, fair, and reliable.",
    },
    {
      id: 4,
      title: " Expert Support Team",
      description:
        "Our experienced support team is always ready to guide you through policy selection, claims processes, and renewals.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden bg-[#1C4D8D]">

      {/* Split Background - Only on large screens */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Left half - colored background */}
        <div className="absolute top-0 left-0 w-1/2 h-full "></div>
        {/* Right half - white background */}
        <div className="absolute top-0 right-0 w-1/2 h-full"></div>
      </div>

      {/* Removed max-w-7xl */}
      <div className="relative z-10 w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-1810">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative lg:bg-transparent bg-[#E3EFF0] rounded-2xl lg:rounded-none p-4 lg:p-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={Growth}
                alt="Team collaboration"
                className="w-full h-[530px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <p className="text-white text-sm md:text-base font-semibold mb-3">
                Get Know Why Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Connecting You With The
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-[#ffff] mb-4">
                Right Insurance,Made Simple
              </h2>
              <p className="text-white text-sm leading-relaxed">
                We are a trusted insurance aggregator that helps individuals and
                businesses compare, choose, and secure the best insurance plans
                from leading providers. Our goal is to simplify insurance by
                offering transparent comparisons, expert guidance, and fast,
                hassle-free service.
              </p>
            </div>

            {/* Features Grid - 2x2 on larger screens */}
           <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-8">
  {features.map((feature) => (
    <div key={feature.id} className="group">
      {/* Icon - Ab white hoga */}
      <div className="mb-3">
        <img
          src={icon}
          alt={feature.title}
          className="w-8 h-8 brightness-0 invert transition-all duration-300"
        />
      </div>

      <h3 className="text-base font-bold text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-white text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  ))}
</div>

            {/* Slider for small screens */}
            <div className="sm:hidden">
              <Slider {...sliderSettings}>
                {features.map((feature) => (
                  <div key={feature.id} className="px-2">
                    <div className="group pb-8">
                      {/* Icon */}
                      <div className="mb-3">
                      <img
  src="/Servicesection2Icon1.png"
  alt={feature.title}
  className="w-8 h-8 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
/>

                      </div>

                      {/* Content */}
                      <h3 className="text-base font-bold text-black mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
