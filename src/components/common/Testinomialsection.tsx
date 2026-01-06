import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="w-full  bg-[#1C4D8D] py-16 md:py-20 ">
      <div className="w-full px-4 sm:px-6  md:px-10 lg:px-16 xl:px-20 2xl:px-18 "> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          
          {/* Left Side - Testimonial Card */}
          <div>
            {/* Section Tag */}
            <p className="text-white text-sm md:text-base font-semibold mb-2">
              Clients Testimonials
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-white">What Our Customers Say</span>
              <br />
              <span className="text-[#ffff]">About Our Services</span>
            </h2>

            {/* Testimonial Card */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              {/* Quote Icon */}
              <div className="mb-6">
                <img src="/Testinomialimage2.png" alt="Quote Icon" className="w-10 h-10 text-gray-300" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
               “This platform has completely transformed how we manage our fleet. 
                The service is intuitive, reliable, and gives us real-time insights that save time and costs. 
                Highly recommended for anyone looking for professional vehicle tracking solutions.”
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#1894a4] fill-[#1894a4]" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="/Testinomialimage3.jpg"
                    alt="Ronald B. Griffin"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div>
                  <h4 className="text-lg font-bold text-black">Maria</h4>
                  <p className="text-sm text-[#1894a4]">Business Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            {/* Main Image */}
          {/* Main Image */}
<div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
  <img
    src="/testimonial.png"
    alt="Happy customers"
    className="w-full h-full object-cover"
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