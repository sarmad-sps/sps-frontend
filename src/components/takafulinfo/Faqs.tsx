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
};

const defaultFaqs: Record<FAQProps["variant"], FAQ[]> = {
  car: [
    { question: "What does Car Takaful cover?", answer: "Accidents, theft, fire, and natural disasters." },
    { question: "Is it Shariah-compliant?", answer: "Yes, 100% Shariah-compliant products." },
    { question: "Can I get roadside assistance?", answer: "Yes, roadside assistance is available with certain plans." },
    { question: "Are personal injuries covered?", answer: "Yes, injuries to the driver and passengers are included." },
  ],
  bike: [
    { question: "What does Bike Takaful include?", answer: "Accidental damage, theft, and third-party liability." },
    { question: "Is claim process easy?", answer: "Yes, claims are processed within 24–48 hours." },
    { question: "Can I add accessories coverage?", answer: "Yes, accessories and modifications can be covered." },
    { question: "Is personal injury covered?", answer: "Yes, rider injuries are included under the plan." },
  ],
  health: [
    { question: "What is covered in Health Takaful?", answer: "Hospitalization, emergencies, surgeries, and more." },
    { question: "Can I add family?", answer: "Yes, family add-ons are available." },
    { question: "Are pre-existing conditions covered?", answer: "Certain pre-existing conditions may be covered after a waiting period." },
    { question: "Does it include outpatient treatment?", answer: "Yes, outpatient consultations and tests are included in some plans." },
  ],
  travel: [
    { question: "Does Travel Takaful cover medical?", answer: "Yes, overseas medical emergencies are covered." },
    { question: "Is lost baggage covered?", answer: "Yes, baggage loss or delay is included." },
    { question: "Are trip cancellations covered?", answer: "Yes, trip cancellations due to emergencies are included." },
    { question: "Does it cover travel delays?", answer: "Yes, travel delays and missed connections are covered." },
  ],
  fire: [
    { question: "What does Fire Takaful protect?", answer: "Fire, explosion, short-circuit & natural disasters." },
    { question: "How fast is claim?", answer: "Claims usually process in 48–72 hours." },
    { question: "Does it cover water damage?", answer: "Yes, accidental water damage is included in some plans." },
    { question: "Are natural disasters covered?", answer: "Yes, coverage includes floods, storms, and earthquakes." },
  ],
};


const images: Record<FAQProps["variant"], string> = {
  car: "/motor.png",
  bike: "/bike123.webp",
  health: "/health12.png",
  travel: "/travel-takaful.png",
  fire: "/fire.png",
};

const Faq: React.FC<FAQProps> = ({ variant, title, subtitle, faqs }) => {
  const data = faqs || defaultFaqs[variant];

  return (
<section
  id={`${variant}-faq`}
  className="w-full bg-[#e8f1ff] px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 mt-12"
>
  <div className="max-w-7xl mx-auto p-10 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>

        {subtitle && (
          <p className="mt-2 text-gray-700 text-lg">{subtitle}</p>
        )}

        <div className="mt-6 space-y-4">
          {data.map((item, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl p-5 border border-gray-200 
                         hover:shadow-md transition-all duration-300 cursor-pointer"
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

      {/* RIGHT SIDE – IMAGE */}
      <div className="flex justify-center">
        <img
          src={images[variant]}
          alt={`${variant} faq`}
          className="w-full max-w-sm"
        />
      </div>

    </div>
  </div>
</section>

  );
};

export default Faq;
