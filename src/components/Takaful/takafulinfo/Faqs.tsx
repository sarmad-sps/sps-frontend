import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

type FAQProps = {
  variant: "car" | "bike" | "health" | "travel" | "fire";
  title: string;
  subtitle?: string;
  faqs?: FAQ[];
  // Optional override for media (image/video)
  media?: string;
};

const defaultFaqs: Record<FAQProps["variant"], FAQ[]> = {
  car: [
    { question: "What types of incidents are covered under Car Takaful?", answer: "Our Car Takaful provides complete protection against accidents, theft, fire, and natural events, ensuring peace of mind for every journey." },
    { question: "Are Car Takaful plans compliant with Shariah principles?", answer: "Each plan is carefully structured to comply with Shariah principles, allowing you to drive securely and ethically." },
    { question: "Is roadside assistance included with Car Takaful?", answer: "Selected plans come with 24/7 roadside support, helping you handle unexpected situations and get back on the road swiftly." },
    { question: "Does Car Takaful cover medical expenses for injuries?", answer: "Coverage includes medical support for both the driver and passengers, providing safety and reassurance in case of accidents." },
  ],
  bike: [
    { question: "What protection does Bike Takaful offer?", answer: "This plan safeguards your bike against accidents, theft, and third-party liabilities, ensuring your ride is fully protected." },
    { question: "How simple is the Bike Takaful claim process?", answer: "Our claims process is designed to be quick and efficient, typically completed within 24–48 hours to minimize disruption to your ride." },
    { question: "Can Bike Takaful cover my bike accessories?", answer: "You can extend your plan to include accessories and approved modifications, keeping your entire bike investment protected." },
    { question: "Are rider injuries covered under Bike Takaful?", answer: "The plan safeguards riders against injuries sustained during accidents, giving you confidence on every journey." },
  ],
  health: [
    { question: "What medical services are included in Health Takaful?", answer: "It offers comprehensive care, including hospitalization, surgeries, emergencies, and essential treatments, ensuring protection for you and your loved ones." },
    { question: "Can I add my family to a Health Takaful plan?", answer: "Family members can be included under one plan, allowing you to provide health protection for everyone in your household." },
    { question: "Are pre-existing health conditions covered?", answer: "Certain pre-existing conditions can be included after a waiting period, offering reassurance for ongoing health concerns." },
    { question: "Does Health Takaful cover outpatient treatment?", answer: "Some plans cover outpatient consultations, tests, and minor procedures, ensuring you have access to care beyond hospitalization." },
  ],
  travel: [
    { question: "Does Travel Takaful cover medical emergencies abroad?", answer: "The plan ensures medical emergencies overseas are covered, providing timely assistance wherever your travels take you." },
    { question: "Is loss or delay of baggage covered?", answer: "Protection extends to loss, theft, or delays of your baggage, safeguarding your belongings throughout your journey." },
    { question: "Are trip cancellations included in Travel Takaful?", answer: "Unforeseen emergencies leading to trip cancellations are covered, helping you avoid unnecessary financial loss." },
    { question: "Does Travel Takaful cover travel delays?", answer: "Coverage includes travel delays and missed connections, keeping you protected even when travel plans are disrupted." },
  ],
  fire: [
    { question: "What risks are covered under Fire Takaful?", answer: "This plan protects your property against fire, explosions, short-circuits, and natural disasters, offering security for your home and belongings." },
    { question: "How quickly are Fire Takaful claims processed?", answer: "Claims are handled efficiently, generally within 48–72 hours, ensuring prompt support when you need it most." },
    { question: "Is accidental water damage included in Fire Takaful?", answer: "Selected plans also cover accidental water damage, helping safeguard your property against unexpected incidents." },
    { question: "Are natural disasters like floods and earthquakes covered?", answer: "Coverage extends to floods, storms, earthquakes, and other natural calamities, providing comprehensive protection for your property." },
  ],
};

const defaultMedia: Record<FAQProps["variant"], string> = {
  car: "/Car Insurance.mp4",
  bike: "/bike123.webp",
  health: "/Health Insurance.mp4",
  travel: "/travelanimation.mp4",  // ye video chalegi
  fire: "/fire.png",
};

const Faq: React.FC<FAQProps> = ({ variant, title, subtitle, faqs, media }) => {
  const data = faqs || defaultFaqs[variant];
  const mediaSrc = media || defaultMedia[variant];

  // Check if it's a video
  const isVideo = /\.(mp4|webm|ogg)$/i.test(mediaSrc);

  return (
    <section
      id={`${variant}-faq`}
      className="w-full bg-[#e8f1ff] px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 mt-12"
    >
      <div className="max-w-9xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - FAQs */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>

            {subtitle && (
              <p className="mt-2 text-gray-700 text-lg">{subtitle}</p>
            )}

            <div className="mt-6 space-y-4">
              {data.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <summary className="flex justify-between items-center text-lg font-medium text-gray-800">
                    {item.question}
                    <span className="transition-transform duration-300 group-open:rotate-180 text-gray-500">
                      ⌄
                    </span>
                  </summary>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE – IMAGE or VIDEO */}
          <div className="flex justify-center">
            {isVideo ? (
              <video
                src={mediaSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-sm rounded-2xl shadow-xl object-contain"
              />
            ) : (
              <img
                src={mediaSrc}
                alt={`${variant} illustration`}
                className="w-full max-w-sm rounded-2xl shadow-xl"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;