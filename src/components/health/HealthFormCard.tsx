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
    children: "",
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

    // Only numbers for age fields
    if ((name === "yourAge" || name === "spouseAge") && value !== "") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 3) return;
    }

    // Only numbers, commas, spaces for children
    if (name === "children" && value !== "") {
      if (!/^[\d,\s]*$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors: any = {};

    // Your Age - Required
    if (!formData.yourAge.trim()) {
      errors.yourAge = "Your age is required.";
    } else {
      const age = Number(formData.yourAge);
      if (age < 18 || age > 100) {
        errors.yourAge = "Please enter a valid age (18–100).";
      }
    }

    // Spouse Age - Optional but valid if filled
    if (formData.spouseAge.trim()) {
      const age = Number(formData.spouseAge);
      if (isNaN(age) || age < 18 || age > 100) {
        errors.spouseAge = "Spouse age must be between 18–100.";
      }
    }

    // Children - Optional but valid format
    if (formData.children.trim()) {
      const ages = formData.children
        .split(",")
        .map((a) => a.trim())
        .filter((a) => a !== "");

      if (ages.length === 0 || ages.some((age) => !/^\d+$/.test(age) || Number(age) > 18)) {
        errors.children = "Enter valid ages (0–18), e.g., 5, 8, 12";
      }
    }

    // Treatment Limit - Required
    if (!selectedTreatmentLimit) {
      errors.treatmentLimit = "Please select a treatment limit.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    console.log("Health Form Submitted:", {
      personType: selectedPersonType,
      treatmentLimit: selectedTreatmentLimit,
      yourAge: formData.yourAge,
      spouseAge: formData.spouseAge || "N/A",
      children: formData.children || "None",
    });

    alert("Form submitted successfully!");

    // Reset everything
    setSelectedPersonType("myself");
    setSelectedTreatmentLimit("");
    setFormData({ yourAge: "", spouseAge: "", children: "" });
    setFormErrors({ yourAge: "", spouseAge: "", children: "", treatmentLimit: "" });
  };

  const getIconSize = (id: string) => {
    return id === "staff" || id === "parents" ? "w-10 h-10" : "w-8 h-8";
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
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
            formErrors.children
              ? "border-red-500"
              : "border-gray-300 focus:border-[#1894a4]"
          }`}
        />
        {formErrors.children && (
          <p className="text-red-500 text-sm mt-1">{formErrors.children}</p>
        )}
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