import { Handshake } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number; // diameter in px
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  triggerAnimation?: boolean;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 128,
  strokeWidth = 12,
  color = "#1894a4",
  bgColor = "#e5e7eb",
  triggerAnimation = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    if (triggerAnimation) {
      const timeout = setTimeout(() => {
        setOffset(circumference * (1 - percentage / 100));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setOffset(circumference);
    }
  }, [circumference, percentage, triggerAnimation]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-[2500ms] ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1A3970]">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

const WhyUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting); // animate every time section comes into view
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#E3EFF0] py-16 md:py-20">
      <div className="relative w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <p className="text-gray-700 text-sm md:text-base font-semibold mb-2">
              Get Know Why Us
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-black">Strategic Edge Advisors</span>
              <br />
              <span className="text-[#1894a4]">Innovating Your</span>
              <br />
              <span className="text-[#1A3970]">Business Landscape</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque abillo
              inventore veritatis quasi architecto beatae vitae dicta sunt
              explicabo nemo enim ipsam voluptatem quia.
            </p>

            {/* Progress Circles */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Business Strategy */}
              <div className="flex flex-col items-center">
                <CircularProgress
                  percentage={56}
                  size={128}
                  strokeWidth={12}
                  triggerAnimation={inView}
                />
                <h3 className="text-lg font-bold text-black mt-4 mb-2">
                  Business Strategy
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit volupta
                </p>
              </div>

              {/* Financial Planning */}
              <div className="flex flex-col items-center">
                <CircularProgress
                  percentage={78}
                  size={128}
                  strokeWidth={12}
                  triggerAnimation={inView}
                />
                <h3 className="text-lg font-bold text-black mt-4 mb-2">
                  Financial Planning
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit volupta
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#1A3970] text-white px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-4 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Side - Image with Large Animated Ring */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center xl:justify-start xl:-ml-10 gap-4 sm:gap-1">
            {/* Animated Large Teal Ring */}
            <div className="relative flex-shrink-0">
              <CircularProgress
                percentage={90} // main ring percentage
                size={180} // bigger size
                strokeWidth={22} // thick border
                color="#1894a4"
                bgColor="#E3EFF0"
                triggerAnimation={inView}
              />
            </div>

            {/* Image Container */}
            <div className="relative flex-shrink-0 ml-6 sm:ml-8 md:ml-10 lg:ml-12">
              <img
                src="/Whyusimage.png"
                alt="Team collaboration"
                className="w-[240px] h-[380px] sm:w-[280px] sm:h-[450px] md:w-[320px] md:h-[520px] lg:w-[375px] lg:h-[600px] object-cover rounded-2xl transform scale-x-[-1]"
              />

              {/* Decorative Handshake Circle */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-8 md:-left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#1A3970] rounded-full flex items-center justify-center z-20">
                <Handshake className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
