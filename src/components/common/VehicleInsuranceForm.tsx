// src/components/VehicleInsuranceForm.tsx
import { useState } from "react";
import Freeqouteinsurance from "./Freeqouteinsurance";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { calculateInsurance } from "../../apis/insuranceApi";

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

const VehicleInsuranceForm = ({ vehicleType, formFields }: VehicleInsuranceFormProps) => {
  const [showInsuranceCards, setShowInsuranceCards] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const [selectedQuote, setSelectedQuote] = useState<InsuranceQuote | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  // Custom validation for name
if (field.name === "name" && value) {
  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(value)) {
    newErrors[field.name] = "Name can only contain letters and spaces";
  } 
  else if (value.length < 2) {
    newErrors[field.name] = "Name must be at least 2 characters";
  } 
  else if (value.length > 30) {
    newErrors[field.name] = "Name cannot exceed 30 characters";
  }
}


    // Custom validation for phoneNumber
    if (field.name === "phoneNumber" && value) {
      const phoneRegex = /^[0-9]+$/;
      if (!phoneRegex.test(value)) {
        newErrors[field.name] = "Phone number can only contain digits";
      } else if (value.length < 10 || value.length > 15) {
        newErrors[field.name] = "Phone number must be between 10 and 15 digits";
      }
    }
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


const handleCheckInfo = async () => {
  if (!validateForm()) {
    window.scrollTo({ top: 200, behavior: "smooth" });
    return;
  }

  setLoading(true);
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
      throw new Error("No quotes received");
    }

    // 🔥 No calculation in frontend — BASE RATE FIXED = 1.5%
    const quotes: InsuranceQuote[] = result.results.map((item: any, i: number) => {
      return {
        id: i + 1,
        company: item.companyName,
        logo: item.logo || "/Jubileeinsurance.png",

        // 🔥 Base rate fixed
        rate: "1.5%",

        insurancePlan: "Workshop",

        // 🔥 monthly installment removed
        installmentAmount: "",

        // Total from backend
        total: `Rs ${item.total?.toLocaleString() || "0"}`,

        trackerIncluded: item.trackerAmount > 0,
      };
    });

    setInsuranceQuotes(quotes);
    setShowInsuranceCards(true);
  } catch (err) {
    setApiError("Failed to fetch quotes. Please try again.");
  } finally {
    setLoading(false);
  }
};


  const renderLabel = (field: FormFieldConfig) => (
    <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
      {field.required && <span className="text-red-500">*</span>}
      <span>{field.label}</span>
    </label>
  );

  const renderFormField = (field: FormFieldConfig) => {
    // (Same as before - no change needed here)
    // Select, Date, Input fields - sab same rahega
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
                  errors[field.name] ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
                }`}
              >
                <option value="">{field.placeholder || "--- Select ---"}</option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
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
                  errors[field.name] ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
                }`}
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              {showCalendar === field.name && (
                <>
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 w-80">
                    <div className="flex justify-between items-center mb-4">
                      <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="font-semibold">
                        {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                      </h3>
                      <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                        <div key={d} className="text-center text-xs font-medium text-gray-500">{d}</div>
                      ))}
                      {getDaysInMonth(currentMonth).map((date, i) => {
                        const isCurrent = date.getMonth() === currentMonth.getMonth();
                        const isSelected = formData[field.name] === date.toISOString().split("T")[0];
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
                  <div className="fixed inset-0 z-40" onClick={() => setShowCalendar(null)} />
                </>
              )}
            </div>
            {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
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
                errors[field.name] ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
              }`}
            />
            {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
          </div>
        );
    }
  };

  return (
    <section className="w-full bg-[#F4F9FE] pt-2 md:pt-4 pb-8 md:pb-12">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 max-w-7xl mx-auto">

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${!showFreeQuote ? "bg-[#1A3970] text-white" : "bg-gray-300 text-gray-600"}`}>
              1
            </div>
            <div className={`w-16 h-1 ${showFreeQuote ? "bg-[#1A3970]" : "bg-gray-300"}`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${showFreeQuote ? "bg-[#1A3970] text-white" : "bg-gray-300 text-gray-600"}`}>
              2
            </div>
          </div>
        </div>

        {/* Step 1 */}
        {!showFreeQuote ? (
          <div className="bg-white rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-[#1A3970] mb-6">Vehicle Info</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map(renderFormField)}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handleCheckInfo}
                disabled={loading}
                className="bg-[#1A3970] text-white px-8 py-3 rounded font-semibold hover:bg-[#2A4D8F] transition-colors disabled:opacity-70"
              >
                {loading ? "Calculating..." : "Check Info"}
              </button>
            </div>

            {apiError && <p className="text-red-500 text-center mt-4">{apiError}</p>}

            {/* Cards Section */}
            {showInsuranceCards && insuranceQuotes.length > 0 && (
              <div className="mt-8">
                <p className="text-center text-gray-600 mb-6 text-lg font-medium">
                  {selectedQuote ? `Selected: ${selectedQuote.company}` : "Please select a plan to continue"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {insuranceQuotes.map((quote) => {
                    const isSelected = selectedQuote?.id === quote.id;

                    return (
                      <div
                        key={quote.id}
                        onClick={() => setSelectedQuote(quote)}
                        className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "ring-4 ring-[#1894a4] ring-offset-4 shadow-2xl"
                            : "hover:shadow-xl border border-transparent"
                        }`}
                      >
                        {/* Logo */}
                        <div className="bg-white p-4 flex items-center justify-center border-b">
                          <img
                            src={quote.logo}
                            alt={quote.company}
                            className="h-12 object-contain"
                            onError={(e) => (e.currentTarget.src = "/Jubileeinsurance.png")}
                          />
                        </div>

                        {/* Card Body */}
                        <div className="bg-[#1894a4] text-white p-4">
                          <div className="mb-4">
                            <p className="text-sm mb-1">3T-Old {vehicleType === "car" ? "Car" : "Bike"} Insurance Rate</p>
                            <p className="text-3xl font-bold">{quote.rate}</p>
                          </div>

                          {/* Features List */}
                          <div className="space-y-2 text-sm mb-4">
                            <div className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                              <span>{quote.insurancePlan}</span>
                            </div>
                            {/* <div className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                              <span>{quote.installmentAmount}</span>
                            </div> */}

                            {/* Tracker Included - Clean Tick Style */}
                            {quote.trackerIncluded && (
                              <div className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <span>Tracker Included</span>
                              </div>
                            )}
                          </div>

                          {/* Total */}
                          <div className="border-t border-white/30 pt-3 mb-4">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold">Total:</span>
                              <span className="text-xl font-bold">{quote.total}</span>
                            </div>
                          </div>

                          {/* Buttons */}
                          <button className="w-full bg-[#1A3970] text-white py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors mb-2">
                            INQUIRE NOW
                          </button>

                          <Link to="/insuranceplan" state={{ quote }}>
                            <button className="w-full bg-gray-600 text-white py-2 rounded font-semibold hover:bg-gray-700 transition-colors">
                              More Details {">"}
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Proceed Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowFreeQuote(true)}
                    disabled={!selectedQuote}
                    className={`px-12 py-4 rounded font-bold text-lg transition-all duration-200 ${
                      selectedQuote
                        ? "bg-[#1A3970] text-white hover:bg-[#2A4D8F] shadow-lg cursor-pointer"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                  >
                    {selectedQuote ? "Confirm & Proceed" : "Please Select a Plan"}
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
  );
};

export default VehicleInsuranceForm;