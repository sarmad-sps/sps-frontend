import React from "react";
import { Check } from "lucide-react";

interface CarInfoProps {
  title?: string;
  description?: string;
  benefits?: string[];
  image?: string;  // image ya video path (extension se detect karega)
}
import carinsurance from "../../assets/Car Insurance.mp4"
const Carinfo: React.FC<CarInfoProps> = ({
  title = "What is Car Insurance?",
  description = "Car insurance is a type of coverage that protects you financially in case of accidents, theft, or other damages to your vehicle. It helps cover repair costs, medical expenses, and liability towards third parties.",
  benefits = [
    "Financial protection in case of accidents or theft",
    "Covers repair and medical costs",
    "Provides liability coverage for third parties",
    "Peace of mind while driving",
    "24/7 Roadside assistance",
    "Customizable insurance plans to fit your needs",
  ],
  image = carinsurance,  // default image, lekin video bhi accept karega
}) => {
  // Extension check: video hai ya image?
  const isVideo = /\.(mp4|webm|ogg)$/i.test(image || "");

  return (
    <section className="py-16 bg-[#F8FBFF]">
      <div className="max-w-8xl mx-auto px-6 md:px-8 xl:px-4 flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:ml-16">
        {/* Left: Question, Answer & Benefits */}
        <div className="xl:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] mb-6">
            {title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {description}
          </p>

          <h3 className="text-2xl font-semibold text-[#071B34] mb-4">
            Key Benefits:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition"
              >
                <Check className="text-[#1894A4] w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image or Video */}
       <div className="xl:w-1/2 flex justify-center items-center">
  {isVideo ? (
    <video
      src={image}
      autoPlay
      loop
      muted
      playsInline
      className="
        w-full 
        max-w-2xl 
        xl:max-w-full 
        h-auto 
        md:h-[500px] 
        rounded-2xl 
        object-contain
      "
    />
  ) : (
    <img
      src={image}
      alt="Car Insurance Illustration"
      className="
        w-full 
        max-w-2xl 
        xl:max-w-full 
        h-auto 
        rounded-2xl 
        shadow-2xl
      "
    />
  )}
</div>

      </div>
    </section>
  );
};

export default Carinfo;