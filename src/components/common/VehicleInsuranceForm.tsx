import { useState } from "react";
import Freeqouteinsurance from "./Freeqouteinsurance";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  insurancePlan: string;
  installmentAmount: string;
  total: string;
}

interface FormFieldConfig {
  name: string;
  label: string;
  type: "select" | "input" | "date";
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
}

interface VehicleInsuranceFormProps {
  vehicleType: "car" | "bike";
  formFields: FormFieldConfig[];
  apiEndpoint: string;
}

const VehicleInsuranceForm = ({
  vehicleType,
  formFields,
  apiEndpoint,
}: VehicleInsuranceFormProps) => {
  const [showInsuranceCards, setShowInsuranceCards] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initialData: Record<string, string> = {};
    formFields.forEach((field) => {
      initialData[field.name] = "";
    });
    return initialData;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [insuranceQuotes, setInsuranceQuotes] = useState<InsuranceQuote[]>([]);
  const [showFreeQuote, setShowFreeQuote] = useState(false);
  const [showCalendar, setShowCalendar] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateSelect = (date: Date, fieldName: string) => {
    const formattedDate = date.toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, [fieldName]: formattedDate }));
    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    setShowCalendar(null);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + i);
      days.push(currentDay);
    }
    return days;
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    formFields.forEach((field) => {
      if (field.required && !formData[field.name].trim()) {
        newErrors[field.name] = `${field.label} is required`;
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

    // Dummy quotes
    const dummyQuotes = [
      {
        id: 1,
        company: "Jubilee Insurance",
        logo: "/Jubileeinsurance.png",
        rate: "1.25%",
        insurancePlan: "Installment Plan",
        installmentAmount: "Rs 938 / month",
        total: "RS 5,625",
      },
      {
        id: 2,
        company: "Jubilee Insurance",
        logo: "/Jubileeinsurance.png",
        rate: "1.25%",
        insurancePlan: "Installment Plan",
        installmentAmount: "Rs 938 / month",
        total: "RS 5,625",
      },
      {
        id: 3,
        company: "Jubilee Insurance",
        logo: "/Jubileeinsurance.png",
        rate: "1.25%",
        insurancePlan: "Installment Plan",
        installmentAmount: "Rs 938 / month",
        total: "RS 5,625",
      },
      {
        id: 4,
        company: "Jubilee Insurance",
        logo: "/Jubileeinsurance.png",
        rate: "1.25%",
        insurancePlan: "Installment Plan",
        installmentAmount: "Rs 938 / month",
        total: "RS 5,625",
      },
    ];

    setInsuranceQuotes(dummyQuotes);
    setShowInsuranceCards(true);
  };

  
  const renderLabel = (field: FormFieldConfig) => (
    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
      {field.required && <span className="text-red-500 text-lg leading-none">∗</span>}
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
                value={formData[field.name]}
                onChange={handleInputChange}
                className={`w-full px-8 py-3 border rounded bg-white focus:outline-none appearance-none ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#1894a4]"
                }`}
              >
                <option value="">{field.placeholder || "--- Select ---"}</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
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
                placeholder={field.placeholder || "DD/MM/YYYY"}
                className={`w-full px-8 py-3 border rounded-lg bg-white focus:outline-none cursor-pointer ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#1894a4]"
                }`}
              />
              <Calendar
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                onClick={() => setShowCalendar(field.name)}
              />

              {/* Calendar Popup */}
              {showCalendar === field.name && (
                <>
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 w-80">
                    {/* Calendar code remains same */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentMonth(
                            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
                          )
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="text-lg font-semibold">
                        {currentMonth.toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentMonth(
                            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
                          )
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {getDaysInMonth(currentMonth).map((date, index) => {
                        const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                        const isToday = date.toDateString() === new Date().toDateString();
                        const isSelected = formData[field.name] === date.toISOString().split("T")[0];

                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleDateSelect(date, field.name)}
                            className={`h-10 w-10 text-sm rounded-lg transition-colors flex items-center justify-center
                              ${!isCurrentMonth ? "text-gray-300" : "text-gray-700"}
                              ${isToday ? "bg-blue-100 text-blue-600 font-bold" : ""}
                              ${isSelected ? "bg-[#1894a4] text-white" : ""}
                              ${isCurrentMonth && !isSelected && !isToday ? "hover:bg-[#1894a4] hover:text-white" : ""}
                            `}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        onClick={() => setShowCalendar(null)}
                        className="text-[#1894a4] text-sm hover:underline"
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDateSelect(new Date(), field.name)}
                        className="text-[#1894a4] text-sm hover:underline"
                      >
                        Today
                      </button>
                    </div>
                  </div>

                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40 bg-black/5"
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

      case "input":
      default:
        return (
          <div key={field.name}>
            {renderLabel(field)}
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              placeholder={field.placeholder || "Enter Value"}
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

  return (
    <section className="w-full bg-white pt-2 md:pt-4 pb-8 md:pb-12">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                !showFreeQuote ? "bg-[#1A3970] text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              1
            </div>
            <div className={`w-16 h-1 ${showFreeQuote ? "bg-[#1A3970]" : "bg-gray-300"}`}></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                showFreeQuote ? "bg-[#1A3970] text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              2
            </div>
          </div>
        </div>

        {/* Form */}
        {!showFreeQuote && (
          <div className="bg-[#F4F9FE] rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-[#1A3970] mb-6">Vehicle Info</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map(renderFormField)}
            </div>

            {!showInsuranceCards && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleCheckInfo}
                  className="bg-[#1A3970] text-white px-8 py-3 rounded font-semibold hover:bg-[#2A4D8F] transition-colors"
                >
                  Check Info
                </button>
              </div>
            )}

            {showInsuranceCards && insuranceQuotes.length > 0 && !showFreeQuote && (
              <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {insuranceQuotes.map((quote) => (
                    <div key={quote.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="bg-white p-4 flex items-center justify-center border-b">
                        <img src={quote.logo} alt={quote.company} className="h-12 object-contain" />
                      </div>
                      <div className="bg-[#1894a4] text-white p-4">
                        <div className="mb-4">
                          <p className="text-sm mb-1">
                            3T-Old {vehicleType === "car" ? "Car" : "Bike"} Insurance Rate
                          </p>
                          <p className="text-3xl font-bold">{quote.rate}</p>
                        </div>
                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span>{quote.insurancePlan}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            <span>{quote.installmentAmount}</span>
                          </div>
                        </div>
                        <div className="border-t border-white/30 pt-3 mb-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Total:</span>
                            <span className="text-xl font-bold">{quote.total}</span>
                          </div>
                        </div>
                        <button className="w-full bg-[#1A3970] text-white py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors mb-2">
                          INQUIRE NOW
                        </button>
                        <button className="w-full bg-gray-600 text-white py-2 rounded font-semibold hover:bg-gray-700 transition-colors">
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => setShowFreeQuote(true)}
                    className="bg-[#1A3970] text-white px-8 py-3 rounded font-semibold hover:bg-[#2A4D8F] transition-colors"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {showFreeQuote && (
          <div className="bg-[#F4F9FE] rounded-lg p-6 md:p-8">
            <Freeqouteinsurance
              initialVehicleInfo={{
                brand: formData.brand || "",
                fuelType: formData.fuelType || "",
                city: formData.city || "",
                purchaseDate: formData.purchaseDate || "",
                model: formData.model || "",
                currentValue: formData.currentValue || "",
              }}
              onBack={() => setShowFreeQuote(false)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleInsuranceForm;