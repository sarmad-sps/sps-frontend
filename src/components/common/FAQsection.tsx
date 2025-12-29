import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const faqs = [
    {
      question: "How do I compare insurance plans on your platform?",
      answer:
        " You can easily compare multiple insurance plans by entering basic details. Our platform instantly shows you the best options from trusted insurance providers.",
    },
    {
      question: "Do I buy insurance directly from your website?",
      answer:
        " We are an insurance aggregator, which means we help you compare and choose the best policy. You can then securely proceed with the selected provider.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes, your data is fully protected with industry-standard security measures. We value your privacy and ensure complete confidentiality of your information.",
    },
    {
      question: "Do you charge any extra fees?",
      answer:
        " No, our comparison service is completely free. You only pay the insurance provider for the policy you choose.",
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
      <div className="px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div>
            <p className="text-[#1894a4] text-sm md:text-base font-semibold mb-2">
              ≫ Faqs
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Have Any Questions ?
              <br />
              Question & Answer
            </h2>

            <div className="relative mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1894a4] rounded-full"></div>
              <p className="text-gray-400 leading-relaxed pl-6">
                We make insurance simple, transparent, and easy to understand.
                Below are some common questions to help you get started with
                comparing and choosing the right insurance plans.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#1894a4] flex-shrink-0" />
                <span className="text-white">Easy online comparison</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#1894a4] flex-shrink-0" />
                <span className="text-white">Trusted insurance partners</span>
              </div>
            </div>
            <Link to="/contactus">
              <button className=" neon-btn px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-4 ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Explore More Us ≫
              </button>
            </Link>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4 lg:pt-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
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

                {/* Answer */}
                {openIndexes.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed ml-[1.5rem]">
                      {" "}
                      {/* match gap of "≫" */}
                      {faq.answer}
                    </p>
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
