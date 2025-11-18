import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import globePlane from "../../../public/traveltakaful.png";
import globePlaneIcon from "../../../public/globe-plane.png";
import TravelTakafulQuote from "../TravelTakafulQuote";

interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  insurancePlan: string;
  installmentAmount: string;
  total: string;
}

const countries = [
  { value: "", label: "Countries travelling to" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "USA", label: "USA" },
  { value: "UK", label: "UK" },
];

const passengers = [
  { value: "", label: "Passenger traveling" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

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

const TravelForm: React.FC = () => {
  const [formData, setFormData] = useState({
    country: "",
    tripDate: "",
    passengers: "",
  });

  const [selectedCard, setSelectedCard] = useState<InsuranceQuote | null>(null);
  const [expandedTravelTakaful, setExpandedTravelTakaful] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPlans, setShowPlans] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleBack = () => {
    setShowQuoteForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.country) newErrors.country = "Please select a country.";
    if (!formData.tripDate) newErrors.tripDate = "Please select trip dates.";
    if (!formData.passengers)
      newErrors.passengers = "Please select number of passengers.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: Date[] = [];
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    const endDate = new Date(lastDay);
    endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));

    let current = new Date(startDate);
    while (current <= endDate) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
    setFormData((prev) => ({
      ...prev,
      tripDate: date.toISOString().split("T")[0],
    }));
    setShowCalendar(false);
  };

  const handleViewPlans = () => {
    if (validateForm()) {
      setShowPlans(true);
      setSelectedCard(null);
    }
  };

  const handleConfirm = () => {
    if (!selectedCard) {
      setErrors((prev) => ({ ...prev, plan: "Please select an insurance plan." }));
      return;
    }
    if (validateForm()) {
      setShowQuoteForm(true);
    }
  };

  if (showQuoteForm && selectedCard) {
    return (
      <TravelTakafulQuote
        formData={formData}
        selectedQuote={selectedCard}
        onBack={handleBack}
      />
    );
  }

  return (
    <>
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8">
        <div className="flex flex-col md:flex-row mt-10 mb-10 p-6 md:p-8 gap-6 md:gap-10 rounded-lg bg-[#f0f5fa] shadow-sm">
          {/* Left Section */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="w-full text-xs text-gray-900 font-semibold flex flex-col sm:flex-row justify-between">
              <div className="mb-2 sm:mb-0">
                <p><strong>Name:</strong> Osama Bin Jahangir</p>
                <p><strong>Email:</strong> osamajahangir786@gmail.com</p>
              </div>
              <div>
                <p><strong>Gender:</strong> Male</p>
                <p><strong>Phone:</strong> +923314272709</p>
              </div>
            </div>

            <div className="my-6 md:my-10">
              <img
                src={globePlane}
                alt="Globe and airplane"
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>

            <div className="text-center">
              <h2 className="text-blue-900 font-semibold text-base sm:text-lg leading-snug">
                Buy Personal Accident Insurance Plan <br /> for as low as Rs. 190/year
              </h2>
              <p className="text-gray-800 text-xs sm:text-sm mt-1">
                Accidental Death Coverage up to Rs. 15 Lakh. Buy online in 10 minutes
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-center font-semibold text-gray-900 mb-5 text-sm sm:text-base">
              Travel insurance at best rate
            </h3>

            <div className="space-y-3 mb-5">
              {/* Country */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border py-2 px-3 appearance-none cursor-pointer text-sm ${
                    formData.country === "" ? "text-gray-400" : "text-gray-900"
                  } ${errors.country ? "border-red-500" : "border-gray-300"}`}
                >
                  {countries.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>

              {/* Trip Date */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Trip Date
                </label>
                <input
                  type="text"
                  readOnly
                  value={formData.tripDate}
                  onClick={() => setShowCalendar(!showCalendar)}
                  className={`w-full rounded-md border py-2 px-3 cursor-pointer text-sm ${
                    errors.tripDate ? "border-red-500" : "border-gray-300"
                  } ${formData.tripDate ? "text-gray-900" : "text-gray-400"}`}
                  placeholder="Select trip date"
                />
                {showCalendar && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg z-10 p-4 w-72">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() =>
                          setCurrentMonth(
                            new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth() - 1,
                              1
                            )
                          )
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="font-semibold text-center text-sm">
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
                              currentMonth.getMonth() + 1,
                              1
                            )
                          )
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-medium text-gray-500">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                        <div key={d}>{d}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {getDaysInMonth(currentMonth).map((date) => {
                        const isCurrentMonth =
                          date.getMonth() === currentMonth.getMonth();
                        const isToday =
                          date.toDateString() === new Date().toDateString();
                        const isSelected =
                          formData.tripDate === date.toISOString().split("T")[0];

                        return (
                          <div
                            key={date.toString()}
                            onClick={() => handleDateClick(date)}
                            className={`cursor-pointer p-2 rounded ${
                              !isCurrentMonth ? "text-gray-300" : "text-gray-900"
                            } ${isToday ? "bg-blue-100" : ""} ${
                              isSelected ? "bg-blue-500 text-white" : ""
                            } hover:bg-blue-200`}
                          >
                            {date.getDate()}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {errors.tripDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.tripDate}</p>
                )}
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Passengers
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border py-2 px-3 appearance-none cursor-pointer text-sm ${
                    formData.passengers === "" ? "text-gray-400" : "text-gray-900"
                  } ${errors.passengers ? "border-red-500" : "border-gray-300"}`}
                >
                  {passengers.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.passengers && (
                  <p className="text-red-500 text-xs mt-1">{errors.passengers}</p>
                )}
              </div>
            </div>

            {/* Travel Takaful Toggle */}
            <div
              className="flex items-center justify-between bg-[#C7F1F8] rounded-md py-3 px-8 cursor-pointer mb-4 shadow-sm hover:bg-[#b8ebf3] transition"
              onClick={() => setExpandedTravelTakaful(!expandedTravelTakaful)}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={globePlaneIcon}
                  alt="Travel Takaful Globe"
                  className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                />
                <span className="font-semibold text-gray-900 text-sm sm:text-[14px]">
                  Travel Takaful
                </span>
              </div>
              <span className="text-lg sm:text-[20px] font-bold text-gray-700">
                {expandedTravelTakaful ? "▲" : "▼"}
              </span>
            </div>

            <button
              onClick={handleViewPlans}
              className="bg-[#F59E0B] hover:bg-[#ea9300] text-white font-semibold py-3 rounded-lg shadow text-sm sm:text-[14px] transition"
            >
              View Plans
            </button>
          </div>
        </div>
      </div>

      {/* Insurance Cards Section */}
      {showPlans && (
        <div className="max-w-7xl mx-auto px-12 mt-12 mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Select Plan
          </h2>
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
                  <img
                    src={quote.logo}
                    alt={quote.company}
                    className="h-12 object-contain"
                  />
                </div>
                <div className="bg-[#1894a4] text-white p-4">
                  <div className="mb-4">
                    <p className="text-sm mb-1">{quote.insurancePlan}</p>
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
          <div className="flex justify-center mt-8">
            <button
              disabled={!selectedCard}
              onClick={handleConfirm}
              className={`px-12 py-3 rounded-md font-semibold transition ${
                selectedCard
                  ? "bg-[#1A3970] text-white hover:bg-[#2A4D8F]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirm
            </button>
          </div>

          {errors.plan && (
            <p className="text-red-500 text-xs mt-2 text-center">
              {errors.plan}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default TravelForm;
