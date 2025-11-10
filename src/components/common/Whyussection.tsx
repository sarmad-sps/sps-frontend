import { Handshake } from "lucide-react";

const WhyUsSection = () => {
  return (
    <section className="w-full bg-[#E3EFF0] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Section Tag */}
            <p className="text-gray-700 text-sm md:text-base font-semibold mb-2">
              Get Know Why Us
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-black">Strategic Edge Advisors</span>
              <br />
              <span className="text-[#1894a4]">Innovating Your</span>
              <br />
              <span className="text-[#1A3970]">Business Landscape</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque abillo
              inventore veritatis quasi architecto beatae vitae dicta sunt
              explicabo nemo enim ipsam voluptatem quia.
            </p>

            {/* Progress Circles */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Business Strategy */}
              <div>
                <div className="relative w-32 h-32 mb-4">
                  {/* Circular progress */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#1894a4"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="351.68"
                      strokeDashoffset="116"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#1A3970]">
                      65%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  Business Strategy
                </h3>
                <p className="text-gray-600 text-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit volupta
                </p>
              </div>

              {/* Financial Planning */}
              <div>
                <div className="relative w-32 h-32 mb-4">
                  {/* Circular progress */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#1894a4"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="351.68"
                      strokeDashoffset="77"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#1A3970]">
                      78%
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  Financial Planning
                </h3>
                <p className="text-gray-600 text-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit volupta
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#1A3970] text-white px-8 py-4 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Side - Image with Decorative Elements */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center xl:justify-start xl:-ml-10 gap-4 sm:gap-1">
            {/* Decorative Circle - Large Teal Ring (Green circle - separate from image) */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border-[30px] sm:border-[40px] md:border-[50px] lg:border-[70px] border-[#1894a4] rounded-full flex-shrink-0"></div>

            {/* Image Container */}
            <div className="relative flex-shrink-0">
              {/* Main Image */}
              <img
                src="/Whyusimage.png"
                alt="Team collaboration"
                className="w-[240px] h-[380px] sm:w-[280px] sm:h-[450px] md:w-[320px] md:h-[520px] lg:w-[375px] lg:h-[600px] object-cover rounded-2xl transform scale-x-[-1]"
              />

              {/* Decorative Circle - Top Left (Blue circle on top-left of image) */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-8 md:-left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#1A3970] rounded-full flex items-center justify-center z-20">
                <Handshake className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white" />
              </div>

              {/* Decorative Element - Bottom Right Orange */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
