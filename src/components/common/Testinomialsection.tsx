import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-12"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Testimonial Card */}
          <div>
            {/* Section Tag */}
            <p className="text-gray-700 text-sm md:text-base font-semibold mb-2">
              Clients Testimonials
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-black">What Our Customers Say</span>
              <br />
              <span className="text-[#1894a4]">About Our Services</span>
            </h2>

            {/* Testimonial Card */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              {/* Quote Icon */}
              <div className="mb-6">
                <img src="/Testinomialimage2.png" alt="Quote Icon" className="w-10 h-10 text-gray-300" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                On the other hand, we denounce with righteous indignations dislike men who are so beguile demoralized by the charms of pleasure of the moment so blinded desire
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#1894a4] fill-[#1894a4]" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="/Testinomialimage3.jpg"
                    alt="Ronald B. Griffin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black">Ronald B. Griffin</h4>
                  <p className="text-sm text-[#1894a4]">Business Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/Testinomialimage1.png"
                alt="Happy customers"
                className="w-full h-[400px] md:h-[500px] object-contain"
              />
            </div>

            {/* Decorative wavy edge on left side */}
            <div className="absolute left-0 top-0 bottom-0 w-8">
              <svg
                viewBox="0 0 30 600"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 Q15,50 0,100 Q15,150 0,200 Q15,250 0,300 Q15,350 0,400 Q15,450 0,500 Q15,550 0,600 L0,0 Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;