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

  const [formErrors, setFormErrors] = useState({
    yourAge: "",
    spouseAge: "",
    treatmentLimit: "",
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

    // Prevent non-numeric input for age fields
    if ((name === "yourAge" || name === "spouseAge") && value !== "") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors: any = {};

    if (!formData.yourAge) {
      errors.yourAge = "Your age is required.";
    } else if (Number(formData.yourAge) < 18 || Number(formData.yourAge) > 100) {
      errors.yourAge = "Please enter a valid age (18–100).";
    }

    if (formData.spouseAge && (Number(formData.spouseAge) < 18 || Number(formData.spouseAge) > 100)) {
      errors.spouseAge = "Please enter a valid spouse age (18–100).";
    }

    if (!selectedTreatmentLimit) {
      errors.treatmentLimit = "Please select a treatment limit.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    console.log({
      personType: selectedPersonType,
      treatmentLimit: selectedTreatmentLimit,
      ...formData,
    });

    alert("Form submitted successfully!");
  };

  const getIconSize = (id: string) => {
    switch (id) {
      case "staff":
      case "parents":
        return "w-10 h-10";
      default:
        return "w-8 h-8";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      {/* Person Type Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {personTypes.map((type) => (
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
        ))}
      </div>

      {/* Age Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <input
            type="text"
            name="yourAge"
            value={formData.yourAge}
            onChange={handleInputChange}
            placeholder="Your age?"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
              formErrors.yourAge
                ? "border-red-500"
                : "border-gray-300 focus:border-[#1894a4]"
            }`}
          />
          {formErrors.yourAge && (
            <p className="text-red-500 text-sm mt-1">{formErrors.yourAge}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="spouseAge"
            value={formData.spouseAge}
            onChange={handleInputChange}
            placeholder="Your spouse age?"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
              formErrors.spouseAge
                ? "border-red-500"
                : "border-gray-300 focus:border-[#1894a4]"
            }`}
          />
          {formErrors.spouseAge && (
            <p className="text-red-500 text-sm mt-1">{formErrors.spouseAge}</p>
          )}
        </div>
      </div>

      {/* Children Field */}
      <div className="mb-6">
        <input
          type="text"
          name="children"
          value={formData.children}
          onChange={handleInputChange}
          placeholder="Add children and ages (if any)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4]"
        />
      </div>

      {/* Treatment Limit */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-700 mb-3">
          Select Treatment Limit (PKR)
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {treatmentLimits.map((limit) => (
            <button
              key={limit.value}
              onClick={() => {
                setSelectedTreatmentLimit(limit.value);
                setFormErrors((prev) => ({ ...prev, treatmentLimit: "" }));
              }}
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
        {formErrors.treatmentLimit && (
          <p className="text-red-500 text-sm mt-2">
            {formErrors.treatmentLimit}
          </p>
        )}
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
