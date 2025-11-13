
interface HeroProps {
  backgroundImage?: string;
  title?: React.ReactNode;
  isCarPage?: boolean;
  isBikePage?: boolean;
  isKafalaPage?: boolean;
  height?: string;
  titleSize?: string;
}

const HeroSection = ({
  backgroundImage = "/Hero.jpg",
  title = "Empowering Your Business Goal And Success Us",
  isCarPage = false,
  isBikePage = false,
  isKafalaPage = false,
  height = "h-[500px] md:h-[600px] lg:h-[700px]",
  titleSize = "text-5xl md:text-6xl",
}: HeroProps) => {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {isKafalaPage ? (
        // Kafala Insurance Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="Kafala Insurance Business Meeting"
              className="w-full h-full object-cover"
              style={{ objectPosition: "right center" }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3970] via-[#1A3970]/95 to-transparent w-3/5 xl:w-1/2"></div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-12 w-full"> 
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <h1 className={`text-white ${titleSize} font-bold leading-tight`}>
                  {title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl mt-4 leading-relaxed">
                  Comprehensive protection for your employees and domestic workers
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : isCarPage ? (
        // Car Insurance Split Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="Car insurance family"
              className="w-full h-full object-cover"
              style={{ objectPosition: "8% center" }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-2/5 xl:w-1/2.5"></div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-12 w-full">
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <h1 className={`text-[#002244] ${titleSize} md:leading-tight font-bold`}>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : isBikePage ? (
        // Bike Insurance Split Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="Bike insurance"
              className="w-full h-full object-cover"
              style={{ objectPosition: "30% center" }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-2/5 xl:w-1/2.5"></div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-12 w-full"> 
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <h1 className={`text-[#002244] ${titleSize} md:leading-tight font-bold`}>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Home Page Layout
        <>
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="Business consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-12 h-full flex items-center"> 
            <div className="max-w-2xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4">
                {title}
              </h1>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-white"></div>
                <p className="text-white text-lg md:text-xl font-medium">
                  25+ Years Of Experience In Consulting Services
                </p>
              </div>

              <button className="bg-[#1A3970] text-white px-8 py-3 rounded font-semibold hover:bg-[#132B55] transition-colors mb-8">
                Free Consulting
              </button>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white overflow-hidden">
                    <img src="/HeroImage1.png" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-purple-500 border-2 border-white overflow-hidden">
                    <img src="/HeroImage1.png" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-pink-500 border-2 border-white overflow-hidden">
                    <img src="/HeroImage1.png" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-teal-500 border-2 border-white overflow-hidden">
                    <img src="/HeroImage1.png" alt="Client" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="text-white">
                  <p className="font-bold text-lg">+12k Testimonials</p>
                  <p className="text-sm text-gray-300">Client feedback</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSection;