import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { submitHealthForm } from "../../apis/healthApi";
import toast from "react-hot-toast";

const HealthFormCard = () => {
  const [selectedPersonType, setSelectedPersonType] = useState("myself");
  const [selectedTreatmentLimit, setSelectedTreatmentLimit] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    yourAge: "",
    spouseAge: "",
    children: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
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

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 11)) return;
    if ((name === "yourAge" || name === "spouseAge") && !/^\d*$/.test(value)) return;
    if (name === "children" && !/^[\d,\s]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors: any = {};

    if (!formData.name.trim()) errors.name = "Name is required.";

    if (!formData.phone.trim()) errors.phone = "Phone is required.";
    else if (!/^03\d{9}$/.test(formData.phone))
      errors.phone = "Enter valid phone (03123456789).";

    if (!formData.yourAge.trim()) errors.yourAge = "Your age is required.";
    else {
      const age = Number(formData.yourAge);
      if (age < 18 || age > 100) errors.yourAge = "Age must be 18–100.";
    }

    if (formData.spouseAge.trim()) {
      const age = Number(formData.spouseAge);
      if (age < 18 || age > 100) errors.spouseAge = "Spouse age must be 18–100.";
    }

    if (formData.children.trim()) {
      const ages = formData.children
        .split(",")
        .map((a) => a.trim())
        .filter((a) => a !== "");

      if (ages.some((age) => Number(age) > 18))
        errors.children = "Children ages must be 0–18.";
    }

    if (!selectedTreatmentLimit)
      errors.treatmentLimit = "Please select a treatment limit.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const payload = {
      name: formData.name,
      phone: formData.phone,
      personType: selectedPersonType,
      yourAge: formData.yourAge,
      spouseAge: formData.spouseAge,
      children: formData.children,
      treatmentLimit: selectedTreatmentLimit,
    };

    try {
      setLoading(true);

      toast.loading("Submitting...");

      await submitHealthForm(payload);

      toast.dismiss();
      toast.success("Form submitted successfully!");

      setSelectedPersonType("myself");
      setSelectedTreatmentLimit("");
      setFormData({
        name: "",
        phone: "",
        yourAge: "",
        spouseAge: "",
        children: "",
      });
      setFormErrors({
        name: "",
        phone: "",
        yourAge: "",
        spouseAge: "",
        children: "",
        treatmentLimit: "",
      });
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message || "Failed to submit health form");
    } finally {
      setLoading(false);
    }
  };



  const getIconSize = (id: string) =>
    id === "staff" || id === "parents" ? "w-10 h-10" : "w-8 h-8";

  return (
    <div className="relative">

 
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}
      </style>

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className={`w-full px-4 py-3 border rounded-lg ${
                formErrors.name ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
              }`}
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your phone number"
              className={`w-full px-4 py-3 border rounded-lg ${
                formErrors.phone ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
              }`}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm">{formErrors.phone}</p>
            )}
          </div>
        </div>

        {/* Person Type */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {personTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedPersonType(type.id)}
              className={`p-4 rounded-lg border-2 flex flex-col items-center ${
                selectedPersonType === type.id
                  ? "border-[#1A3970] bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <img
                src={type.icon}
                className={`${getIconSize(type.id)} mb-2`}
                alt={type.label}
              />
              <span className="font-semibold text-sm">{type.label}</span>
            </button>
          ))}
        </div>

        {/* Ages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <input
              type="text"
              name="yourAge"
              value={formData.yourAge}
              onChange={handleInputChange}
              placeholder="Your age?"
              className={`w-full px-4 py-3 border rounded-lg ${
                formErrors.yourAge ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
              }`}
            />
            {formErrors.yourAge && (
              <p className="text-red-500 text-sm">{formErrors.yourAge}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="spouseAge"
              value={formData.spouseAge}
              onChange={handleInputChange}
              placeholder="Your spouse age?"
              className={`w-full px-4 py-3 border rounded-lg ${
                formErrors.spouseAge ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
              }`}
            />
            {formErrors.spouseAge && (
              <p className="text-red-500 text-sm">{formErrors.spouseAge}</p>
            )}
          </div>
        </div>

        {/* Children */}
        <div className="mb-6">
          <input
            type="text"
            name="children"
            value={formData.children}
            onChange={handleInputChange}
            placeholder="Add children ages (optional)"
            className={`w-full px-4 py-3 border rounded-lg ${
              formErrors.children ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
            }`}
          />
          {formErrors.children && (
            <p className="text-red-500 text-sm">{formErrors.children}</p>
          )}
        </div>

        {/* Treatment Limit */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-700 mb-2">
            Select Treatment Limit
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {treatmentLimits.map((limit) => (
              <button
                key={limit.value}
                onClick={() => {
                  setSelectedTreatmentLimit(limit.value);
                  setFormErrors((prev) => ({ ...prev, treatmentLimit: "" }));
                }}
                className={`px-4 py-3 border-2 rounded-lg ${
                  selectedTreatmentLimit === limit.value
                    ? "bg-[#1A3970] text-white border-[#1A3970]"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {limit.label}
              </button>
            ))}
          </div>
          {formErrors.treatmentLimit && (
            <p className="text-red-500 text-sm mt-2">{formErrors.treatmentLimit}</p>
          )}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#1A3970] text-white py-4 rounded-lg flex justify-center items-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              See Plan <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default HealthFormCard;
