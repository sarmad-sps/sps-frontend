import { useState, type ChangeEvent } from "react";
import { ArrowRight } from "lucide-react";
import { submitHealthForm } from "../../apis/healthApi";
//import toast from "react-hot-toast";
import toast, { Toaster } from "react-hot-toast";
interface FormDataType {
  name: string;
  phone: string;
  yourAge: string;
  spouseAge: string;
  children: string;
  parentsAgeRange: string;
  companyName: string;
  numberOfPersons: string;
}

interface FormErrorsType {
  [key: string]: string;
}

const HealthFormCard = () => {
  const [selectedPersonType, setSelectedPersonType] = useState<
    "myself" | "staff" | "family" | "parents"
  >("myself");

  const [selectedTreatmentLimit, setSelectedTreatmentLimit] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phone: "",
    yourAge: "",
    spouseAge: "",
    children: "",
    parentsAgeRange: "",
    companyName: "",
    numberOfPersons: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrorsType>({});

  const personTypes = [
    { id: "myself", label: "Myself", icon: "/Personicon.png" },
    { id: "family", label: "Family", icon: "/Familyiconimage.jpg" },
    { id: "parents", label: "Parents", icon: "/Coupleiconimage.png" },
     { id: "staff", label: "Staff", icon: "/Stafficonimage.png" },
  ] as const;

  const treatmentLimits = [
    { value: "1k-80k", label: "1k - 80k" },
    { value: "80k-1Lac", label: "80k - 1Lac" },
    { value: "2Lac-4Lac", label: "2Lac - 4Lac" },
    { value: "5Lac-above", label: "5Lac & Above" },
  ];

  const parentsAgeOptions = [
    { value: "upto60", label: "Up to 60" },
    { value: "60-70", label: "60 - 70" },
    { value: "70-above", label: "70 & Above" },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 11)) return;
    if (
      (name === "yourAge" || name === "spouseAge" || name === "numberOfPersons") &&
      !/^\d*$/.test(value)
    )
      return;

    if (name === "children" && !/^[\d,\s]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors: FormErrorsType = {};

    if (!formData.name.trim()) errors.name = "Name is required.";

    if (!formData.phone.trim()) errors.phone = "Phone is required.";
    else if (!/^03\d{9}$/.test(formData.phone))
      errors.phone = "Enter valid phone (03123456789).";

    if (!selectedTreatmentLimit)
      errors.treatmentLimit = "Please select a treatment limit.";

    if (selectedPersonType === "myself") {
      if (!formData.yourAge.trim()) errors.yourAge = "Your age is required.";
      else {
        const age = Number(formData.yourAge);
        if (age < 18 || age > 100) errors.yourAge = "Age must be 18–100.";
      }
    } else if (selectedPersonType === "family") {
      if (!formData.spouseAge.trim() && !formData.children.trim()) {
        errors.family = "Please provide spouse age or children ages.";
      }

      if (formData.spouseAge.trim()) {
        const age = Number(formData.spouseAge);
        if (age < 18 || age > 100)
          errors.spouseAge = "Spouse age must be 18–100.";
      }

      if (formData.children.trim()) {
        const ages = formData.children
          .split(",")
          .map((a) => a.trim())
          .filter((a) => a !== "");

        if (ages.some((a) => Number(a) > 18 || Number(a) < 0))
          errors.children = "Children ages must be 0–18.";
      }
    } else if (selectedPersonType === "parents") {
      if (!formData.parentsAgeRange)
        errors.parentsAgeRange = "Please select parents' age range.";
    } else if (selectedPersonType === "staff") {
      if (!formData.companyName.trim())
        errors.companyName = "Company name is required for staff.";
      if (!formData.numberOfPersons.trim())
        errors.numberOfPersons = "Number of persons is required.";
      else if (Number(formData.numberOfPersons) <= 0)
        errors.numberOfPersons = "Enter a valid number of persons.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setSelectedPersonType("myself");
    setSelectedTreatmentLimit("");
    setFormData({
      name: "",
      phone: "",
      yourAge: "",
      spouseAge: "",
      children: "",
      parentsAgeRange: "",
      companyName: "",
      numberOfPersons: "",
    });
    setFormErrors({});
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const payload: any = {
      name: formData.name,
      phone: formData.phone,
      personType: selectedPersonType,
      treatmentLimit: selectedTreatmentLimit,
    };

    if (selectedPersonType === "myself") {
      payload.yourAge = formData.yourAge;
    } else if (selectedPersonType === "family") {
      if (formData.spouseAge) payload.spouseAge = formData.spouseAge;
      if (formData.children) payload.children = formData.children;
    } else if (selectedPersonType === "parents") {
      payload.parentsAgeRange = formData.parentsAgeRange;
    } else if (selectedPersonType === "staff") {
      payload.companyName = formData.companyName;
      payload.numberOfPersons = formData.numberOfPersons;
    }

    try {
      setLoading(true);
      toast.loading("Submitting...");

      await submitHealthForm(payload);

      toast.dismiss();
      toast.success("Form submitted successfully!");

      resetForm();
    } catch (error: any) {
      toast.dismiss();
      const msg =
        error?.response?.data?.message ||
        error.message ||
        "Failed to submit health form";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const getIconSize = (id: string) =>
    id === "staff" || id === "parents" ? "w-10 h-10" : "w-8 h-8";

  return (
 <div className="relative">
      {/* Toaster Component */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: { background: "#363636", color: "#fff" },
        }}
      />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>

      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        {/* Person Type Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {personTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setSelectedPersonType(type.id)}
              className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 
                ${selectedPersonType === type.id ? "border-[#1A3970] shadow-md" : "border-gray-300"}`}
            >
              <img src={type.icon} alt={type.label} className={`${getIconSize(type.id)}`} />
              <span className="font-medium">{type.label}</span>
            </button>
          ))}
        </div>

        {/* Form Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full border p-3 rounded-lg mb-2"
        />
        {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full border p-3 rounded-lg mb-2"
        />
        {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}

        {/* Treatment Limit */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
          {treatmentLimits.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setSelectedTreatmentLimit(t.value)}
              className={`p-3 border rounded-xl 
                ${selectedTreatmentLimit === t.value ? "border-green-600 shadow" : "border-gray-300"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {formErrors.treatmentLimit && (
          <p className="text-red-500 text-sm">{formErrors.treatmentLimit}</p>
        )}

        {/* Dynamic Inputs */}
        {selectedPersonType === "myself" && (
          <div className="animate-fadeIn">
            <input
              type="text"
              name="yourAge"
              placeholder="Your Age"
              value={formData.yourAge}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg mb-2"
            />
            {formErrors.yourAge && <p className="text-red-500 text-sm">{formErrors.yourAge}</p>}
          </div>
        )}

        {selectedPersonType === "family" && (
          <div className="animate-fadeIn">
            <input
              type="text"
              name="spouseAge"
              placeholder="Spouse Age"
              value={formData.spouseAge}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg mb-2"
            />
            <input
              type="text"
              name="children"
              placeholder="Children Ages (e.g., 5, 8, 12)"
              value={formData.children}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg mb-2"
            />
            {formErrors.family && <p className="text-red-500 text-sm">{formErrors.family}</p>}
            {formErrors.spouseAge && <p className="text-red-500 text-sm">{formErrors.spouseAge}</p>}
            {formErrors.children && <p className="text-red-500 text-sm">{formErrors.children}</p>}
          </div>
        )}

        {selectedPersonType === "parents" && (
          <div className="animate-fadeIn">
            <select
              name="parentsAgeRange"
              value={formData.parentsAgeRange}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, parentsAgeRange: e.target.value }))
              }
              className="w-full border p-3 rounded-lg mb-2"
            >
              <option value="">Select Parents Age Range</option>
              {parentsAgeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {formErrors.parentsAgeRange && (
              <p className="text-red-500 text-sm">{formErrors.parentsAgeRange}</p>
            )}
          </div>
        )}

        {selectedPersonType === "staff" && (
          <div className="animate-fadeIn">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg mb-2"
            />
            <input
              type="text"
              name="numberOfPersons"
              placeholder="Number of Persons"
              value={formData.numberOfPersons}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg mb-2"
            />
            {formErrors.companyName && <p className="text-red-500 text-sm">{formErrors.companyName}</p>}
            {formErrors.numberOfPersons && <p className="text-red-500 text-sm">{formErrors.numberOfPersons}</p>}
          </div>
        )}

        {/* Submit Button */}
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full bg-[#1A3970] text-white py-3 rounded-lg flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="animate-spin border-2 border-white border-t-transparent w-5 h-5 rounded-full"></span>
              Submitting...
            </>
          ) : (
            <>
              Submit
              <ArrowRight />
            </>
          )}
        </button>
      </div>
    </div>

  );
};

export default HealthFormCard;
