import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const faqs = [
    {
      question: "How to Getting Started your Business",
      answer:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat qua voluptas nulla pariatur sint in culpa.",
    },
    {
      question: "What is Business & Financial Relationship ?",
      answer:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat qua voluptas nulla pariatur sint in culpa.",
    },
    {
      question: "What is Importance of Co-working ?",
      answer:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat qua voluptas nulla pariatur sint in culpa.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="w-full bg-[#0f1729] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div>
            {/* Section Tag */}
            <p className="text-[#1894a4] text-sm md:text-base font-semibold mb-2">
              ≫ Faqs
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Have Any Questions ?
              <br />
              Question & Answer
            </h2>

            {/* Description with teal line */}
            <div className="relative mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1894a4] rounded-full"></div>
              <p className="text-gray-400 leading-relaxed pl-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam aperiam.
              </p>
            </div>

            {/* Checkmark List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#1894a4] flex-shrink-0" />
                <span className="text-white">
                  Subscription 2022 Desktop Wallpapers Edition
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#1894a4] flex-shrink-0" />
                <span className="text-white">
                  Designing A Better Infinite Scroll
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-[#0f1729] px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors">
              Explore More Us ≫
            </button>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4 lg:pt-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#1894a4] font-bold">≫</span>
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  {openIndexes.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>

                {/* Answer Content */}
                {openIndexes.includes(index) && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="pl-8">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
