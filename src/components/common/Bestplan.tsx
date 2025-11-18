import { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  icon: string;
  price: number;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Business plan",
    icon: "/Bestplanicon1.png",
    price: 25,
    features: ["Invoices/Estimates", "Online Payments", "Projects and Time Sheet", "Recurring Transitions", "Client Portal"],
  },
  {
    name: "Vehicle plan",
    icon: "/Bestplanicon2.png",
    price: 45,
    features: ["Invoices/Estimates", "Online Payments", "Projects and Time Sheet", "Recurring Transitions", "Client Portal"],
  },
  {
    name: "Rental plan",
    icon: "/Bestplanicon3.png",
    price: 65,
    features: ["Invoices/Estimates", "Online Payments", "Projects and Time Sheet", "Recurring Transitions", "Client Portal"],
  },
];

export default function PricingPlans() {
  const [planType, setPlanType] = useState("monthly");
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [slides, setSlides] = useState<Plan[][]>([]);

  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) setCardsPerPage(1);        // Mobile
    else if (window.innerWidth < 1024) setCardsPerPage(2);  // Tablet
    else setCardsPerPage(3);                                // Desktop
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    let newSlides: Plan[][] = [];

    if (cardsPerPage === 3) {
      newSlides = [plans];
    } else if (cardsPerPage === 2) {
      newSlides = [[plans[0], plans[1]], [plans[1], plans[2]]];
    } else {
      newSlides = plans.map((p) => [p]);
    }

    setSlides(newSlides);
    setPage(0);
  }, [cardsPerPage]);

  const totalPages = slides.length;

  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3500);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#1894a4] font-bold text-sm">»»</span>
            <p className="text-gray-700 text-sm md:text-base font-semibold uppercase tracking-wider">
              Pricing Plans
            </p>
            <span className="text-[#1894a4] font-bold text-sm">««</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            <span className="text-[#1894a4]">Choose the best plans</span>
            <br /> for yourself
          </h2>

          <div className="inline-flex bg-white rounded-lg shadow-lg p-1 mt-8">
            <button
              onClick={() => setPlanType("monthly")}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                planType === "monthly" ? "bg-[#1894a4] text-white shadow-lg" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => setPlanType("yearly")}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                planType === "yearly" ? "bg-[#1894a4] text-white shadow-lg" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Yearly Plan
            </button>
          </div>
        </div>

        {/* Desktop: Static Grid */}
        {cardsPerPage === 3 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <PricingCard key={i} plan={plan} planType={planType} size="large" />
            ))}
          </div>
        ) : (
          <>
            {/* Mobile & Tablet: Slider with extra bottom padding */}
            <div className="overflow-hidden w-full pb-8 md:pb-12"> {/* ← THIS GIVES BIG BOTTOM SPACE */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {slides.map((slide, slideIdx) => (
                  <div key={slideIdx} className="w-full flex-shrink-0 flex">
                    {slide.map((plan, idx) => (
                      <div
                        key={idx}
                        className={`flex-shrink-0 ${cardsPerPage === 1 ? "w-full px-4" : "w-1/2 px-6"}`}
                      >
                        <PricingCard
                          plan={plan}
                          planType={planType}
                          size={cardsPerPage === 1 ? "small" : "medium"}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Dots - Perfectly spaced below cards */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-8">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`transition-all duration-300 rounded-full ${
                      page === i ? "bg-[#1894a4] w-8 h-2" : "bg-gray-300 w-2 h-2 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

// Responsive Pricing Card
function PricingCard({
  plan,
  planType,
  size = "large",
}: {
  plan: Plan;
  planType: string;
  size?: "small" | "medium" | "large";
}) {
  const sizes = {
    small: { padding: "p-5", icon: "w-20 h-20", price: "text-4xl", title: "text-lg", feature: "text-xs", button: "py-3 text-sm" },
    medium: { padding: "p-7", icon: "w-24 h-24", price: "text-5xl", title: "text-xl", feature: "text-sm", button: "py-4" },
    large: { padding: "p-8", icon: "w-28 h-28", price: "text-6xl", title: "text-2xl", feature: "text-base", button: "py-4 text-base" },
  };

  const s = sizes[size];

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col ${s.padding}`}>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className={`${s.icon} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <img src={plan.icon} alt={plan.name} className="w-full h-full object-contain" />
        </div>

        <div className="text-right">
          <div className="flex items-start justify-end gap-1">
            <span className={`${s.price} font-bold text-[#1A3970]`}>{plan.price}</span>
            <span className="text-3xl font-bold text-[#1A3970]">$</span>
          </div>
          <p className="text-[#1894a4] font-semibold text-sm mt-1">
            Per {planType === "monthly" ? "month" : "year"}
          </p>
        </div>
      </div>

      <h3 className={`${s.title} font-bold text-[#1A3970] mb-4`}>{plan.name}</h3>
      <div className="w-full h-px bg-gray-200 mb-6"></div>

      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1894a4] bg-opacity-10 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-[#1894a4]" />
            </div>
            <span className={`text-gray-600 leading-tight ${s.feature}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full bg-[#1A3970] hover:bg-[#2A4D8F] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-auto ${s.button}`}>
        Select Policy
      </button>
    </div>
  );
}