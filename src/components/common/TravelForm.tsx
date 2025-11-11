

import { useState } from "react";
import jubileeLogo from "../../../public/Jubileeinsurance.png";
import globePlane from "../../../public/traveltakaful.png";
import globePlaneIcon from "../../../public/globe-plane.png";

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

const insurancePlans = [
  {
    id: 1,
    company: "Jubilee Insurance",
    logo: jubileeLogo,
    planName: "3T-Old Car Insurance",
    rate: "1.25%",
    installment: "Rs. 938 / month",
    total: "Rs 5,625",
  },
  {
    id: 2,
    company: "Jubilee Insurance",
    logo: jubileeLogo,
    planName: "3T-Old Car Insurance",
    rate: "1.25%",
    installment: "Rs. 938 / month",
    total: "Rs 5,625",
  },
];

const TravelInsuranceComponent = () => {
  const [formData, setFormData] = useState({
    country: "",
    tripDate: "",
    passengers: "",
  });

  const [expandedTravelTakaful, setExpandedTravelTakaful] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 mb-10 p-6 md:p-8 gap-6 md:gap-10 rounded-lg bg-[#f0f5fa] shadow-sm">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        {/* User Info */}
        <div className="w-full text-xs text-gray-900 font-semibold flex flex-col sm:flex-row justify-between px-4">
          <div className="mb-2 sm:mb-0">
            <p>
              <strong>Name:</strong> Osama Bin Jahangir
            </p>
            <p>
              <strong>Email:</strong> osamajahangir786@gmail.com
            </p>
          </div>
          <div>
            <p>
              <strong>Gender:</strong> Male
            </p>
            <p>
              <strong>Phone:</strong> +923314272709
            </p>
          </div>
        </div>

        {/* Globe + Airplane Illustration */}
        <div className="my-6 md:my-10">
          <img
            src={globePlane}
            alt="Globe and airplane"
            className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
          />
        </div>

        {/* Insurance Info */}
        <div className="text-center px-4">
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

        {/* Form */}
        <div className="space-y-3 mb-5">
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-300 py-2 px-3 appearance-none bg-white cursor-pointer text-sm"
          >
            {countries.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>

          <select
            name="tripDate"
            value={formData.tripDate}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-300 py-2 px-3 appearance-none bg-white cursor-pointer text-sm"
          >
            <option value="">Trip start & end date</option>
            <option value="2025-11-01">01/11/2025 - 10/11/2025</option>
            <option value="2025-12-01">01/12/2025 - 10/12/2025</option>
          </select>

          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-300 py-2 px-3 appearance-none bg-white cursor-pointer text-sm"
          >
            {passengers.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Select Plan Title */}
        <p className="text-sm font-semibold text-gray-800 mb-3 cursor-pointer hover:text-[#1894a4] transition">
          Select Plan
        </p>

        {/* Insurance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {insurancePlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-[1.02]"
            >
              {/* Logo Section */}
              <div className="bg-white p-3 flex items-center justify-center border-b">
                <img
                  src={plan.logo}
                  alt={plan.company}
                  className="h-8 object-contain"
                />
              </div>

              {/* Blue Content Section */}
              <div className="bg-[#1894a4] text-white p-3">
                <div className="mb-2">
                  <p className="text-xs mb-1">{plan.planName}</p>
                  <p className="text-lg sm:text-xl font-bold">{plan.rate}</p>
                </div>

                <div className="space-y-1 text-xs mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span>Installment: {plan.installment}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span>Coverage: Rs 15 Lakh</span>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-2 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-xs">Total:</span>
                    <span className="text-base font-bold">{plan.total}</span>
                  </div>
                </div>

                {/* Buttons */}
                <button className="w-full bg-[#1A3970] text-white py-1.5 rounded font-semibold hover:bg-[#2A4D8F] transition-colors mb-1 text-[11px]">
                  INQUIRE NOW
                </button>
                <button className="w-full bg-gray-600 text-white py-1.5 rounded font-semibold hover:bg-gray-700 transition-colors text-[11px]">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Takaful Button */}
        <div
          className="flex items-center justify-between bg-[#C7F1F8] rounded-md py-3 px-4 cursor-pointer mb-4 shadow-sm hover:bg-[#b8ebf3] transition"
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

        {/* View Plans Button */}
        <button className="bg-[#F59E0B] hover:bg-[#ea9300] text-white font-semibold py-3 rounded-lg shadow text-sm sm:text-[14px]">
          View Plans →
        </button>
      </div>
    </div>
  );
};

export default TravelInsuranceComponent;
