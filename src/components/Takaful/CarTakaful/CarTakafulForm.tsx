// File: CarTakafulForm.tsx
import React, { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import CarTakafulQuote from "./CarTakafulQuote";

// Types
interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  insurancePlan: string;
  installmentAmount: string;
  total: string;
}

interface FormData {
  brand: string;
  cc: string;
  model: string;
  fuel: string;
  purchaseDate: string;
  currentValue: string;
}

// Reusable Input with Right Icon
const InputWithIcon: React.FC<{
  children: React.ReactNode;
  icon: React.ReactNode;
}> = ({ children, icon }) => (
  <div className="relative">
    {children}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
      {icon}
    </div>
  </div>
);

const CarTakafulForm: React.FC = () => {
  const [showPlans, setShowPlans] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState<FormData>({
    brand: "",
    cc: "",
    model: "",
    fuel: "",
    purchaseDate: "",
    currentValue: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [selectedCard, setSelectedCard] = useState<InsuranceQuote | null>(null);

  // Calendar Logic
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

  const handleDateSelect = (date: Date) => {
    const formatted = date.toISOString().split("T")[0];
    setFormData({ ...formData, purchaseDate: formatted });
    setErrors({ ...errors, purchaseDate: "" });
    setShowCalendar(false);
  };

  // Validation
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.brand.trim()) newErrors.brand = "Vehicle brand is required";
    if (!formData.cc) newErrors.cc = "Please select car CC";
    if (!formData.model) newErrors.model = "Please select car model";
    if (!formData.fuel) newErrors.fuel = "Please select fuel type";
    if (!formData.purchaseDate) newErrors.purchaseDate = "Select purchase date";
    if (!formData.currentValue.trim()) newErrors.currentValue = "Enter current value";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleCheckInfo = () => {
    if (validateForm()) {
      setShowPlans(true);
    }
  };

  const handleConfirm = () => {
    if (selectedCard) {
      setShowQuote(true);
    }
  };

  const handleBack = () => {
    setShowQuote(false);
    setShowPlans(false);
  };

  // Car-specific quotes
  const insuranceQuotes: InsuranceQuote[] = [
    {
      id: 1,
      company: "Jubilee Takaful",
      logo: "/Jubileeinsurance.png",
      rate: "1.25%",
      insurancePlan: "Installment Plan",
      installmentAmount: "Rs 938 / month",
      total: "Rs 5,625",
    },
    {
      id: 2,
      company: "EFU Takaful",
      logo: "/Jubileeinsurance.png",
      rate: "1.30%",
      insurancePlan: "Easy Plan",
      installmentAmount: "Rs 955 / month",
      total: "Rs 5,720",
    },
    {
      id: 3,
      company: "Pak Qatar Takaful",
      logo: "/Jubileeinsurance.png",
      rate: "1.15%",
      insurancePlan: "Smart Plan",
      installmentAmount: "Rs 910 / month",
      total: "Rs 5,460",
    },
    {
      id: 4,
      company: "Takaful Pakistan",
      logo: "/Jubileeinsurance.png",
      rate: "1.20%",
      insurancePlan: "Saver Plan",
      installmentAmount: "Rs 925 / month",
      total: "Rs 5,550",
    },
  ];

  // Show Quote Screen
  if (showQuote && selectedCard) {
    return (
      <CarTakafulQuote
        formData={formData}
        selectedQuote={selectedCard}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="bg-[#F9FBFF] p-10 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* Step Indicator */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A3970] text-white font-semibold">
            1
          </div>
          <div className="w-16 h-[2px] bg-gray-300" />
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 font-semibold">
            2
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-6">Vehicle Info</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Brand *</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Your vehicle brand"
            className={`w-full border ${errors.brand ? "border-red-500" : "border-gray-300"} rounded-md px-4 py-3 focus:ring-2 focus:ring-[#1A3970] outline-none`}
          />
          {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
        </div>

        {/* CC - With Dropdown Icon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Car CC *</label>
          <InputWithIcon icon={<ChevronDown className="w-5 h-5" />}>
            <select
              name="cc"
              value={formData.cc}
              onChange={handleChange}
              className={`w-full border ${errors.cc ? "border-red-500" : "border-gray-300"} rounded-md px-4 py-3 pr-12 appearance-none bg-white focus:ring-2 focus:ring-[#1A3970] outline-none cursor-pointer`}
            >
              <option value="">Select CC</option>
              <option>800</option>
              <option>1000</option>
              <option>1300</option>
            </select>
          </InputWithIcon>
          {errors.cc && <p className="text-red-500 text-sm mt-1">{errors.cc}</p>}
        </div>

        {/* Model - With Dropdown Icon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Car Model *</label>
          <InputWithIcon icon={<ChevronDown className="w-5 h-5" />}>
            <select
              name="model"
              value={formData.model}
              onChange={handleChange}
              className={`w-full border ${errors.model ? "border-red-500" : "border-gray-300"} rounded-md px-4 py-3 pr-12 appearance-none bg-white focus:ring-2 focus:ring-[#1A3970] outline-none cursor-pointer`}
            >
              <option value="">Select Model</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </InputWithIcon>
          {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
        </div>

        {/* Fuel - With Dropdown Icon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type *</label>
          <InputWithIcon icon={<ChevronDown className="w-5 h-5" />}>
            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className={`w-full border ${errors.fuel ? "border-red-500" : "border-gray-300"} rounded-md px-4 py-3 pr-12 appearance-none bg-white focus:ring-2 focus:ring-[#1A3970] outline-none cursor-pointer`}
            >
              <option value="">Select Fuel Type</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Hybrid</option>
            </select>
          </InputWithIcon>
          {errors.fuel && <p className="text-red-500 text-sm mt-1">{errors.fuel}</p>}
        </div>

        {/* Purchase Date - With Calendar Icon */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Date & Year *</label>
          <InputWithIcon icon={<Calendar className="w-5 h-5" />}>
            <input
              type="text"
              readOnly
              onClick={() => setShowCalendar(!showCalendar)}
              value={formatDisplayDate(formData.purchaseDate)}
              placeholder="DD/MM/YYYY"
              className={`w-full border ${
                errors.purchaseDate ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-3 pr-12 cursor-pointer bg-white focus:ring-2 focus:ring-[#1A3970] outline-none`}
            />
          </InputWithIcon>

          {/* Calendar Dropdown */}
          {showCalendar && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 w-80">
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
                  }
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-semibold">
                  {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
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
                  const isSelected = formData.purchaseDate === date.toISOString().split("T")[0];

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleDateSelect(date)}
                      className={`h-8 w-8 text-sm rounded-lg transition-colors ${
                        !isCurrentMonth ? "text-gray-300" : "text-gray-700"
                      } ${isToday ? "bg-blue-100 text-blue-600" : ""} ${
                        isSelected ? "bg-[#1894a4] text-white" : ""
                      } ${
                        isCurrentMonth && !isSelected && !isToday
                          ? "hover:bg-[#1894a4] hover:text-white"
                          : ""
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, purchaseDate: "" });
                    setShowCalendar(false);
                  }}
                  className="text-[#1894a4] text-sm hover:underline"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleDateSelect(new Date());
                    setShowCalendar(false);
                  }}
                  className="text-[#1894a4] text-sm hover:underline"
                >
                  Today
                </button>
              </div>
            </div>
          )}
          {errors.purchaseDate && <p className="text-red-500 text-sm mt-1">{errors.purchaseDate}</p>}
        </div>

        {/* Current Value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Car Current Value *</label>
          <input
            type="text"
            name="currentValue"
            value={formData.currentValue}
            onChange={handleChange}
            placeholder="Enter Current Value"
            className={`w-full border ${errors.currentValue ? "border-red-500" : "border-gray-300"} rounded-md px-4 py-3 focus:ring-2 focus:ring-[#1A3970] outline-none`}
          />
          {errors.currentValue && <p className="text-red-500 text-sm mt-1">{errors.currentValue}</p>}
        </div>
      </div>

      {/* Check Info Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleCheckInfo}
          className="bg-[#1A3970] text-white px-10 py-3 rounded-md hover:bg-[#2A4D8F] transition"
        >
          Check Info
        </button>
      </div>

      {/* Plans Section */}
      {showPlans && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Select Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceQuotes.map((quote) => (
              <div
                key={quote.id}
                onClick={() => setSelectedCard(quote)}
                className={`cursor-pointer bg-white rounded-lg overflow-hidden transition 
    shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]
    ${selectedCard?.id === quote.id ? "ring-2 ring-[#1894a4]" : ""}`}
              >
                <div className="bg-white p-4 flex items-center justify-center border-b">
                  <img src={quote.logo} alt={quote.company} className="h-12 object-contain" />
                </div>
                <div className="bg-[#1894a4] text-white p-4">
                  <div className="mb-4">
                    <p className="text-sm mb-1">3T - Old Car Takaful</p>
                    <p className="text-3xl font-bold">{quote.rate}</p>
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-white rounded-full" />
                      <span>{quote.insurancePlan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-white rounded-full" />
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

          {/* Confirm Button */}
          <div className="mt-6 flex justify-center">
            <button
              disabled={!selectedCard}
              onClick={handleConfirm}
              className={`px-10 py-3 rounded-md font-semibold transition ${
                selectedCard
                  ? "bg-[#1A3970] text-white hover:bg-[#2A4D8F]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarTakafulForm;