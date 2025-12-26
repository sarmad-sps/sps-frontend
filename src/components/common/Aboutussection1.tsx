import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsSection1 = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/Aboutusimage.png"
                alt="Business professionals"
                className="w-full h-[500px] md:h-[650px] lg:h-[700px] object-cover"
              />
            </div>

            {/* Blue Card Overlay */}
            <div className="absolute bottom-8 right-0  bg-[#1A3970] text-white p-8 rounded-2xl shadow-2xl w-full max-w-none lg:max-w-lg">
              <h3 className="text-xl font-bold mb-6 leading-relaxed lg:right-8 ">
                We Have 25 Years Of Experience in Business Consulting Services
              </h3>

              {/* Avatar Group */}
              {/* <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img
                    src="/Aboutusimage2.jpg"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                  <img
                    src="/Aboutusimage2.jpg"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-white overflow-hidden">
                  <img
                    src="/Aboutusimage2.jpg"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white overflow-hidden">
                  <img
                    src="/Aboutusimage2.jpg"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="self-center  -mt-2 lg:-mt-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Driving Your Peace Of Mind Through{" "}
              <span className="text-[#1894a4]">Trusted Insurance</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#1A3970] text-lg font-semibold mb-4">
              Our Goal is Clear: to Secure Your Today And Give You a Worry-Free
              Tomorrow.{" "}
            </p>

            {/* Description with left border */}

            <div className="border-l-4 border-[#1894a4] pl-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                At our company, we believe insurance is more than just a policy
                it’s a promise. We provide reliable and easy insurance solutions
                that protect your health, vehicles, travel, and future. With
                years of industry experience, we help individuals and businesses
                feel safe by offering simple, affordable, and transparent
                coverage plans designed to fit real-life needs.
              </p>
            </div>

            {/* Statistics */}
            <div className="space-y-6 mb-8">
              {/* Stat 1 */}
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-[#1894a4] flex-shrink-0 mt-4 " />
                <div className="flex items-start gap-3">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#1894a4]">
                    1,000+
                  </h3>
                  <p className="text-gray-700 font-medium mt-3">
                    Policies Successfully Issued <br /> Last 5 Years
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-[#1894a4] flex-shrink-0 mt-4" />
                <div className="flex items-start gap-3">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#1894a4]">
                    5,000+
                  </h3>
                  <p className="text-gray-700 font-medium mt-3">
                    Happy & Protected <br /> Customers
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Link to="/aboutus">
                <button className="bg-[#1A3970] text-white px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-4 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection1;
