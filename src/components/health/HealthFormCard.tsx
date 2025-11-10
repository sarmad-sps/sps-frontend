import { useState } from "react";
import { ArrowRight } from "lucide-react";

const HealthFormCard = () => {
  const [selectedPersonType, setSelectedPersonType] = useState("myself");
  const [selectedTreatmentLimit, setSelectedTreatmentLimit] = useState("");
  const [formData, setFormData] = useState({
    yourAge: "",
    spouseAge: "",
    children: "",
  });

  const personTypes = [
    { id: "myself", label: "Myself", icon: "/Personicon.png" },
    { id: "staff", label: "Staff", icon: "/Stafficonimage.png" },
    { id: "family", label: "Family", icon: "/Familyiconimage.jpg" },
    { id: "parents", label: "Parents", icon: "/Coupleiconimage.png" },
  ];

  const treatmentLimits = [
    { value: "1k-80k", label: "1k - 80k" },
    { value: "80k-1Lac", label: "80k - 1Lac" },
    { value: "2Lac-4Lac", label: "2Lac - 4Lac" },
    { value: "5Lac-above", label: "5Lac & Above" },
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
      personType: selectedPersonType,
      treatmentLimit: selectedTreatmentLimit,
      ...formData,
    });
  };

  // Different sizes for different icons to ensure visual alignment
  const getIconSize = (id: string) => {
    switch (id) {
      case "staff":
        return "w-10 h-10"; // Larger for staff icon
      case "parents":
        return "w-10 h-10"; // Larger for couple/parents icon
      default:
        return "w-8 h-8"; // Default size for myself and family
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      {/* Person Type Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {personTypes.map((type) => {
          return (
            <button
              key={type.id}
              onClick={() => setSelectedPersonType(type.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
                selectedPersonType === type.id
                  ? "border-[#1A3970] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={type.icon}
                alt={type.label}
                className={`${getIconSize(type.id)} mb-2 object-contain`}
              />
              <span className="text-sm font-semibold text-gray-700">
                {type.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Age Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="yourAge"
          value={formData.yourAge}
          onChange={handleInputChange}
          placeholder="Your age?"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4]"
        />
        <input
          type="text"
          name="spouseAge"
          value={formData.spouseAge}
          onChange={handleInputChange}
          placeholder="Your Spouse age?"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4]"
        />
      </div>

      {/* Add Children */}
      <div className="mb-6">
        <input
          type="text"
          name="children"
          value={formData.children}
          onChange={handleInputChange}
          placeholder="Add Children and Ages (if any)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4]"
        />
      </div>

      {/* Treatment Limit Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-700 mb-3">
          Select Treatment Limit (PKR)
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {treatmentLimits.map((limit) => (
            <button
              key={limit.value}
              onClick={() => setSelectedTreatmentLimit(limit.value)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                selectedTreatmentLimit === limit.value
                  ? "border-[#1A3970] bg-[#1A3970] text-white"
                  : "border-gray-300 text-gray-700 hover:border-[#1A3970]"
              }`}
            >
              {limit.label}
            </button>
          ))}
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
  );
};

export default HealthFormCard;
