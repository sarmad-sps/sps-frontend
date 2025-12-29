import type { ReactNode } from "react";

interface InsuranceSectionProps {
  FormCard: ReactNode;
  image: string;  // image ya video path (extension se detect karega)
  imageAlt: string;
  tagText: string;
  title: string;
  description: string;
  backgroundColor?: string;
}

const InsuranceSection = ({
  FormCard,
  image,
  imageAlt,
  tagText,
  title,
  description,
  backgroundColor = "bg-gradient-to-b from-blue-50 to-white",
}: InsuranceSectionProps) => {
  // Check if it's a video file
  const isVideo = /\.(mp4|webm|ogg)$/i.test(image);

  return (
    <section className={`w-full ${backgroundColor} py-16 md:py-20`}>
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form Card */}
          {FormCard}

          {/* Right Side - Content */}
          <div>
            {/* Illustration (Image or Video) */}
            <div className="mb-8">
              {isVideo ? (
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-md mx-auto rounded-lg object-contain"
                />
              ) : (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              )}
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-sm mb-2">{tagText}</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3970] mb-4 leading-tight">
                {title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;