
import { ArrowRight } from 'lucide-react';

const AboutUsSection1 = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="/Aboutusimage.png" 
                alt="Business professionals" 
                className="w-full h-[600px] md:h-[650px] lg:h-[700px] object-cover"
              />
            </div>

            {/* Blue Card Overlay */}
            <div className="absolute bottom-8 right-8 bg-[#1A3970] text-white p-8 rounded-2xl shadow-2xl max-w-sm">
              <h3 className="text-xl font-bold mb-6 leading-relaxed">
                We Have 25 Years Of Experience in Business Consulting Services
              </h3>
              
              {/* Avatar Group */}
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="/Aboutusimage2.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                  <img src="/Aboutusimage2.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-white overflow-hidden">
                  <img src="/Aboutusimage2.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white overflow-hidden">
                  <img src="/Aboutusimage2.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Radio Buttons */}
            <div className="flex flex-wrap gap-8 mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Vehicle for:</p>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="vehicle" className="w-4 h-4 text-[#1894a4]" />
                    <span className="text-gray-700">Commercial use</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="vehicle" className="w-4 h-4 text-[#1894a4]" defaultChecked />
                    <span className="text-gray-700">Personal Use</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Policy status:</p>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="policy" className="w-4 h-4 text-[#1894a4]" />
                    <span className="text-gray-700">Policy Expired</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="policy" className="w-4 h-4 text-[#1894a4]" defaultChecked />
                    <span className="text-gray-700">Policy not expired</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Section Title */}
            <p className="text-[#1894a4] text-sm md:text-base font-semibold mb-2">About Company</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Driving Your Business Success Through{' '}
              <span className="text-[#1894a4]">Expert Guidance</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#1A3970] text-lg font-semibold mb-4">
              Unlocking Growth Exploring The Powerhouse Features Of Our{' '}
              <span className="text-[#1894a4]">Business Solutions</span>
            </p>

            {/* Description with left border */}
            <div className="border-l-4 border-[#1894a4] pl-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia.
              </p>
            </div>

            {/* Statistics */}
            <div className="space-y-6 mb-8">
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <ArrowRight className="w-6 h-6 text-[#1894a4] flex-shrink-0" />
                <div className="flex items-baseline gap-3">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#1894a4]">2359</h3>
                  <p className="text-gray-700 font-medium">
                    Projects Completed in<br />Last 5 Years
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <ArrowRight className="w-6 h-6 text-[#1894a4] flex-shrink-0" />
                <div className="flex items-baseline gap-3">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#1894a4]">5368</h3>
                  <p className="text-gray-700 font-medium">
                    Happy Global Customers<br />Who Trusted Us
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#1A3970] text-white px-8 py-4 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection1;