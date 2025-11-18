

// File: TravelFormCard.tsx
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const TravelFormCard = () => {
  const [selectedTravelType, setSelectedTravelType] = useState("Single Trip");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    travelStart: "",
    personalTraining: "",
    travelDates: "",
  });

  const travelTypes = [
    { id: "single", label: "Single Trip" },
    { id: "multi", label: "Multi Trip" },
    { id: "3", label: "Student" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log({
      travelType: selectedTravelType,
      country: selectedCountry,
      ...formData,
    });
  };

  return (
    // UPDATED: px-12 + max-w-7xl mx-auto (Navbar jaisa)
    <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        {/* Travel Type Selection */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {travelTypes.map((type) => {
            return (
              <button
                key={type.id}
                onClick={() => setSelectedTravelType(type.label)}
                className={`p-4 rounded-lg border-2 text-sm font-semibold transition-all ${
                  selectedTravelType === type.label
                    ? "border-[#1A3970] bg-blue-50 text-[#1A3970]"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {type.label}
              </button>
            );
          })}
        </div>

        {/* Countries traveling to */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Countries traveling to
          </label>
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] appearance-none bg-white"
            >
              <option value="">Select Country</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* First Start Date */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            First Start Date
          </label>
          <div className="relative">
            <input
              type="text"
              name="travelStart"
              value={formData.travelStart}
              onChange={handleInputChange}
              placeholder="Select date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4]"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Personal Training */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Personal Training
          </label>
          <div className="relative">
            <input
              type="text"
              name="personalTraining"
              value={formData.personalTraining}
              onChange={handleInputChange}
              placeholder="Select option"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4]"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Travel Dates */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Travel Dates
          </label>
          <div className="relative">
            <input
              type="text"
              name="travelDates"
              value={formData.travelDates}
              onChange={handleInputChange}
              placeholder="Select dates"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4]"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#1A3970] text-white py-4 rounded-lg font-semibold hover:bg-[#2A4D8F] transition-colors flex items-center justify-center gap-2"
        >
          See Plan
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TravelFormCard;