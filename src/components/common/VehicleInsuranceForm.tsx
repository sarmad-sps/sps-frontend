// src/components/VehicleInsuranceForm.tsx
import { useState, useEffect } from "react";
import Freeqouteinsurance from "./Freeqouteinsurance";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { calculateInsurance } from "../../apis/insuranceApi";
import toast, { Toaster } from "react-hot-toast";

interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  insurancePlan: string;
  installmentAmount: string;
  total: string;
  trackerIncluded?: boolean;
}

interface FormFieldConfig {
  name: string;
  label: string;
  type: "select" | "input" | "date";
  inputType?: "text" | "number";
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
}

interface VehicleInsuranceFormProps {
  vehicleType: "car" | "bike";
  formFields: FormFieldConfig[];
}

const VehicleInsuranceForm = ({
  vehicleType,
  formFields,
}: VehicleInsuranceFormProps) => {
  const location = useLocation();
  const [showInsuranceCards, setShowInsuranceCards] = useState(false);
  const [loading, setLoading] = useState(false);
  const [proceedLoading, setProceedLoading] = useState<number | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    formFields.forEach((field) => {
      initial[field.name] = "";
    });
    return initial;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [insuranceQuotes, setInsuranceQuotes] = useState<InsuranceQuote[]>([]);
  const [showFreeQuote, setShowFreeQuote] = useState(false);
  const [showCalendar, setShowCalendar] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedQuote, setSelectedQuote] = useState<InsuranceQuote | null>(
    null
  );
  
  // NEW: Carousel state with sliding animation
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateSelect = (date: Date, fieldName: string) => {
    const formatted = date.toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, [fieldName]: formatted }));
    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    setShowCalendar(null);
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB");
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const start = new Date(firstDay);
    start.setDate(start.getDate() - firstDay.getDay());
    const days: Date[] = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    formFields.forEach((field) => {
      const value = formData[field.name]?.trim();

      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
        return;
      }

      if (field.name === "name" && value) {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(value)) {
          newErrors[field.name] = "Name can only contain letters and spaces";
        } else if (value.length < 2) {
          newErrors[field.name] = "Name must be at least 2 characters";
        } else if (value.length > 30) {
          newErrors[field.name] = "Name cannot exceed 30 characters";
        }
      }

      if (field.name === "phoneNumber" && value) {
        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(value)) {
          newErrors[field.name] = "Phone number can only contain digits";
        } else if (value.length < 10 || value.length > 15) {
          newErrors[field.name] =
            "Phone number must be between 10 and 15 digits";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckInfo = async () => {
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly");
      window.scrollTo({ top: 200, behavior: "smooth" });
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Calculating your quotes...");

    setApiError(null);
    setShowInsuranceCards(false);

    try {
      const payload = {
        value: Number(formData.currentValue),
        tracker: formData.trackerAvailable === "yes",
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        brand: formData.brand,
      };

      const result = await calculateInsurance(payload);

      if (!result.success || !Array.isArray(result.results)) {
        throw new Error("No quotes received from server");
      }

      const quotes: InsuranceQuote[] = result.results.map(
        (
          item: {
            companyName: string;
            companyLogo?: string;
            total?: number;
            trackerAmount?: number;
          },
          i: number
        ) => ({
          id: i + 1,
          company: item.companyName,
          logo: item.companyLogo
            ? `http://localhost:5000${item.companyLogo}`
            : "/Jubileeinsurance.png",
          rate: "1.5%",
          insurancePlan: "Workshop",
          installmentAmount: "",
          total: `Rs ${item.total?.toLocaleString() || "0"}`,
          trackerIncluded: (item.trackerAmount || 0) > 0,
        })
      );

      setInsuranceQuotes(quotes);
      setShowInsuranceCards(true);
      toast.success("Quotes loaded successfully!", { id: toastId });
    } catch (err: unknown) {
      setApiError("Failed to fetch quotes. Please try again.");
      toast.error((err as Error)?.message || "Something went wrong", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleProceed = (quoteId: number) => {
    if (!selectedQuote) {
      toast.error("Please select an insurance plan first");
      return;
    }

    setProceedLoading(quoteId);
    toast.loading("Preparing your final quote...");

    setTimeout(() => {
      toast.dismiss();
      toast.success("Proceeding to next step...");
      setShowFreeQuote(true);
      // Save current state in history before going to step 2
      window.history.replaceState(
        {
          step: 1,
          quotes: insuranceQuotes,
          formData: formData,
          showQuotes: true,
        },
        "",
        window.location.pathname
      );
      // Add history entry for step 2
      window.history.pushState({ step: 2 }, "", window.location.pathname);
      // ensure the free-quote view is visible from the top of the page
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        /* ignore in non-browser environments */
      }
      setProceedLoading(null);
    }, 1000);
  };

  // Scroll to top when free quote view opens (covers other opening flows)
  useEffect(() => {
    if (showFreeQuote) {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        /* ignore */
      }
    }
  }, [showFreeQuote]);

  // Restore state when returning from insuranceplan page
  useEffect(() => {
    const state = location.state as {
      returnFromDetails?: boolean;
      allQuotes?: InsuranceQuote[];
      formData?: Record<string, string>;
    } | null;

    if (state?.returnFromDetails && state?.allQuotes && state?.formData) {
      setFormData(state.formData);
      setInsuranceQuotes(state.allQuotes);
      setShowInsuranceCards(true);
      // Clear the state to prevent re-triggering
      window.history.replaceState({}, document.title);
      // Scroll to quotes section
      setTimeout(() => {
        window.scrollTo({ top: 400, behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  // Handle browser back button - go back to quotes (Step 1) with saved data
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (showFreeQuote) {
        setShowFreeQuote(false);
        // Restore state if available
        if (
          event.state?.step === 1 &&
          event.state?.quotes &&
          event.state?.formData
        ) {
          setInsuranceQuotes(event.state.quotes);
          setFormData(event.state.formData);
          setShowInsuranceCards(true);
        }
        setTimeout(() => {
          window.scrollTo({ top: 400, behavior: "smooth" });
        }, 100);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showFreeQuote]);

  // NEW: Responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // Tablet: 2 cards
      } else {
        setCardsPerSlide(4); // Desktop: 4 cards
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // NEW: Carousel navigation functions with smooth sliding
  const totalSlides = Math.ceil(insuranceQuotes.length / cardsPerSlide);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Reset to first slide when cards per slide changes (responsive)
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerSlide]);

  const renderLabel = (field: FormFieldConfig) => (
    <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
      {field.required && <span className="text-red-500">*</span>}
      <span>{field.label}</span>
    </label>
  );

  const renderFormField = (field: FormFieldConfig) => {
    switch (field.type) {
      case "select":
        return (
          <div key={field.name}>
            {renderLabel(field)}
            <div className="relative">
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
                className={`w-full px-8 py-3 border rounded bg-white focus:outline-none appearance-none ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#1894a4]"
                }`}
              >
                <option value="">
                  {field.placeholder || "--- Select ---"}
                </option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        );

      case "date":
        return (
          <div key={field.name}>
            {renderLabel(field)}
            <div className="relative">
              <input
                type="text"
                value={formatDisplayDate(formData[field.name])}
                onClick={() => setShowCalendar(field.name)}
                readOnly
                placeholder="DD/MM/YYYY"
                className={`w-full px-8 py-3 border rounded-lg bg-white cursor-pointer focus:outline-none ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#1894a4]"
                }`}
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              {showCalendar === field.name && (
                <>
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 w-80">
                    <div className="flex justify-between items-center mb-4">
                      <button
                        onClick={() =>
                          setCurrentMonth(
                            new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth() - 1
                            )
                          )
                        }
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="font-semibold">
                        {currentMonth.toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </h3>
                      <button
                        onClick={() =>
                          setCurrentMonth(
                            new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth() + 1
                            )
                          )
                        }
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                        <div
                          key={d}
                          className="text-center text-xs font-medium text-gray-500"
                        >
                          {d}
                        </div>
                      ))}
                      {getDaysInMonth(currentMonth).map((date, i) => {
                        const isCurrent =
                          date.getMonth() === currentMonth.getMonth();
                        const isSelected =
                          formData[field.name] ===
                          date.toISOString().split("T")[0];
                        return (
                          <button
                            key={i}
                            onClick={() => handleDateSelect(date, field.name)}
                            className={`h-10 w-10 text-sm rounded-lg ${
                              !isCurrent
                                ? "text-gray-300"
                                : isSelected
                                ? "bg-[#1894a4] text-white"
                                : "hover:bg-[#1894a4] hover:text-white"
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowCalendar(null)}
                  />
                </>
              )}
            </div>
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        );

      default:
        return (
          <div key={field.name}>
            {renderLabel(field)}
            <input
              type="text"
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              placeholder={field.placeholder || `Enter ${field.label}`}
              inputMode={field.inputType === "number" ? "numeric" : "text"}
              className={`w-full px-8 py-3 border rounded bg-white focus:outline-none ${
                errors[field.name]
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#1894a4]"
              }`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        );
    }
  };

  // Insurance Card Component
  const InsuranceCard = ({ quote }: { quote: InsuranceQuote }) => {
    const isSelected = selectedQuote?.id === quote.id;

    return (
      <div
        onClick={() => setSelectedQuote(quote)}
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer h-full ${
          isSelected
            ? "ring-4 ring-[#1894a4] ring-offset-4 shadow-2xl scale-105"
            : "hover:shadow-xl border border-transparent"
        }`}
      >
        <div className="bg-white p-4 flex items-center justify-center border-b">
          <img
            src={quote.logo}
            alt={quote.company}
            className="h-12 object-contain"
            onError={(e) => (e.currentTarget.src = "/Jubileeinsurance.png")}
          />
        </div>

        <div className="bg-[#1894a4] text-white p-5">
          <div className="mb-4">
            <p className="text-sm mb-1">
              3rd Party {vehicleType === "car" ? "Car" : "Bike"} Rate
            </p>
            <p className="text-3xl font-bold">{quote.rate}</p>
          </div>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>{quote.insurancePlan}</span>
            </div>
            {quote.trackerIncluded && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>Tracker Included</span>
              </div>
            )}
          </div>

          <div className="border-t border-white/30 pt-3 mb-5">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold">{quote.total}</span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedQuote(quote);
              handleProceed(quote.id);
            }}
            disabled={proceedLoading === quote.id}
            className="w-full bg-[#1A3970] text-white py-3 rounded font-bold hover:bg-[#2A4D8F] transition-all flex items-center justify-center gap-2"
          >
            {proceedLoading === quote.id ? (
              <span className="animate-spin border-2 border-white border-t-transparent w-5 h-5 rounded-full"></span>
            ) : (
              "INQUIRE NOW"
            )}
          </button>

          <Link
            to="/insuranceplan"
            state={{ quote, vehicleType, allQuotes: insuranceQuotes, formData }}
          >
            <button className="w-full mt-2 bg-gray-700 text-white py-2 rounded text-sm font-medium hover:bg-gray-800 transition">
              More Details
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: { background: "#363636", color: "#fff" },
        }}
      />

      <section className="w-full bg-[#F4F9FE] pt-2 md:pt-4 pb-8 md:pb-12">
        <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 xl:max-w-8xl 2xl: max-w-9xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  showFreeQuote
                    ? "bg-[#1A3970] text-white"
                    : "bg-[#1A3970] text-white"
                }`}
              >
                1
              </div>
              <div
                className={`w-16 h-1 ${
                  showFreeQuote ? "bg-[#1A3970]" : "bg-gray-300"
                }`}
              />
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  showFreeQuote
                    ? "bg-[#1A3970] text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                2
              </div>
            </div>
          </div>

          {/* Step 1 */}
          {!showFreeQuote ? (
            <div className="bg-white rounded-lg p-6 md:p-8 ">
              <h3 className="text-xl font-bold text-[#1A3970] mb-6">
                Vehicle Info
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map(renderFormField)}
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={handleCheckInfo}
                  disabled={loading}
                  className="relative bg-[#1A3970] text-white px-12 py-4 rounded font-semibold hover:bg-[#2A4D8F] transition-all flex items-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin border-2 border-white border-t-transparent w-5 h-5 rounded-full"></span>
                      Calculating Quotes...
                    </>
                  ) : (
                    "Check Info"
                  )}
                </button>
              </div>

              {apiError && (
                <p className="text-red-500 text-center mt-4 font-medium">
                  {apiError}
                </p>
              )}

              {/* Insurance Cards - NEW: Sliding Carousel */}
              {showInsuranceCards && insuranceQuotes.length > 0 && (
                <div className="mt-10">
                  <p className="text-center text-gray-600 mb-6 text-lg font-medium">
                    {selectedQuote
                      ? `Selected: ${selectedQuote.company}`
                      : "Please select a plan to continue"}
                  </p>

                  {/* Carousel Container with Overflow Hidden */}
                  <div className="relative ">
                    {/* Left Arrow */}
                    <button
                      onClick={handlePrevSlide}
                      className="hidden md:flex mr-6 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-[#1A3970] hover:bg-[#16325c] rounded-full p-3 shadow-lg transition-all"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-3 h-3 text-white" />
                    </button>

                    {/* Sliding Container */}
                    <div className="overflow-hidden px-2 pt-6">
                      <div
                        className="flex transition-transform  duration-500 ease-in-out h-[450px]"                        style={{
                          transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                      >
                        {/* Create slides by grouping cards */}
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                          const startIdx = slideIndex * cardsPerSlide;
                          const slideQuotes = insuranceQuotes.slice(
                            startIdx,
                            startIdx + cardsPerSlide
                          );

                          return (
                            <div
                              key={slideIndex}
                              className="flex-shrink-0 w-full"
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2">
                                {slideQuotes.map((quote) => (
                                  <InsuranceCard key={quote.id} quote={quote} />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                      onClick={handleNextSlide}
                      className="hidden md:flex ml-4 absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-[#1A3970] hover:bg-[#16325c] rounded-full p-3 shadow-lg transition-all"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-3 h-3 md: text-white" />
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index ? "bg-[#1894a4] w-10" : "bg-gray-300 w-2"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Final Proceed Button */}
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={() =>
                        selectedQuote && handleProceed(selectedQuote.id)
                      }
                      disabled={!selectedQuote || proceedLoading !== null}
                      className={`px-16 py-5 rounded-lg font-bold text-lg transition-all flex items-center gap-3 ${
                        selectedQuote && proceedLoading === null
                          ? "bg-[#1A3970] text-white hover:bg-[#2A4D8F] shadow-xl"
                          : "bg-gray-400 text-gray-200 cursor-not-allowed"
                      }`}
                    >
                      {proceedLoading !== null ? (
                        <>
                          <span className="animate-spin border-2 border-white border-t-transparent w-6 h-6 rounded-full"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          Confirm & Proceed
                          <ChevronRightIcon className="w-6 h-6" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-6 md:p-8">
              <Freeqouteinsurance
                initialVehicleInfo={{
                  brand: formData.brand || "",
                  model: formData.model || "",
                  currentValue: formData.currentValue || "",
                  trackerRequired: formData.trackerAvailable === "yes",
                }}
                userInfo={{
                  name: formData.name || "",
                  phoneNumber: formData.phoneNumber || "",
                }}
                selectedQuote={selectedQuote}
                onBack={() => setShowFreeQuote(false)}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VehicleInsuranceForm;