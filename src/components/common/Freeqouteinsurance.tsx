// Freeqouteinsurance.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  insurancePlan: string;
  installmentAmount: string;
  total: string;
}

interface VehicleInfo {
  brand: string;
  model: string;
  currentValue: string;
  trackerRequired: boolean;
}

interface FreeQuoteProps {
  initialVehicleInfo?: VehicleInfo;
  selectedQuote?: InsuranceQuote | null;
  userInfo?: { name: string; phoneNumber: string };   // 👈 ADDED
  onBack?: () => void;
}

const Freeqouteinsurance: React.FC<FreeQuoteProps> = ({
  initialVehicleInfo,
  selectedQuote,
  userInfo, // 👈 ADDED
  onBack,
}) => {

  // ----------------------------------
  // PREFILL NAME & PHONE FROM PROPS
  // ----------------------------------
  const [formData, setFormData] = useState({
    fullName: userInfo?.name || "",  // 👈 PREFILLED
    phoneCode: "+92",
    phoneNumber: userInfo?.phoneNumber?.replace("+92", "") || "", // 👈 PREFILLED
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  // Validation Functions
  const validateFullName = (value: string) => {
    if (!value.trim()) return "Full name is required";
    if (!/^[A-Za-z\s]+$/.test(value)) return "Only alphabets and spaces allowed";
    if (value.trim().length < 3) return "Minimum 3 characters required";
    if (value.trim().length > 30) return "Maximum 30 characters allowed";
    return "";
  };

  const validatePhoneNumber = (value: string) => {
    if (value && !/^[0-9]+$/.test(value)) return "Only digits allowed";
    if (value.length > 0 && value.length !== 10) return "Must be exactly 10 digits";
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "phoneNumber" && value && !/^[0-9]{0,10}$/.test(value)) return;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "fullName") setErrors(prev => ({ ...prev, fullName: validateFullName(value) }));
    if (name === "phoneNumber") setErrors(prev => ({ ...prev, phoneNumber: validatePhoneNumber(value) }));
    if (name === "email") setErrors(prev => ({ ...prev, email: validateEmail(value) }));
  };

  const handleConfirm = () => {
    const fullNameError = validateFullName(formData.fullName);
    const phoneError = validatePhoneNumber(formData.phoneNumber);
    const emailError = validateEmail(formData.email);

    setErrors({
      fullName: fullNameError,
      phoneNumber: phoneError || (formData.phoneNumber ? "" : "Phone number is required"),
      email: emailError,
    });

    if (fullNameError || phoneError || emailError || !formData.phoneNumber) {
      alert("Please fix the errors in the form!");
      return;
    }

    const submissionData = {
      ...formData,
      fullPhoneNumber: `+92${formData.phoneNumber}`,
      vehicleInfo: initialVehicleInfo,
      selectedQuote,
    };

    console.log("Quote Request Submitted:", submissionData);
    alert("Thank you! Your insurance quote request has been submitted successfully!");

    setFormData({ fullName: "", phoneCode: "+92", phoneNumber: "", email: "" });
    setErrors({ fullName: "", phoneNumber: "", email: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Mobile / Tablet / Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A3970] text-center lg:text-left">
              Complete Your Request
            </h2>

            {/* Vehicle Summary */}
            {initialVehicleInfo && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-[#1894a4]/20 rounded-2xl p-5 sm:p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Your Vehicle</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-600">Brand:</span>
                    <p className="font-semibold">{initialVehicleInfo.brand}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Model:</span>
                    <p className="font-semibold">{initialVehicleInfo.model}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Value:</span>
                    <p className="font-semibold text-green-600">RS {initialVehicleInfo.currentValue}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Tracker:</span>
                    <p className={`font-bold ${initialVehicleInfo.trackerRequired ? "text-green-600" : "text-gray-500"}`}>
                      {initialVehicleInfo.trackerRequired ? "Required (+RS 15,000)" : "Not Required"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border">
              <div className="space-y-5">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Ahmad Khan"
                    className="w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border border-gray-300 focus:border-[#1894a4] focus:ring-4 focus:ring-[#1894a4]/20 transition text-base"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1.5">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <div className="flex flex-nowrap gap-2 sm:gap-3">
                    <div className="relative flex-shrink-0">
                      <select className="px-3 py-3.5 rounded-xl border border-gray-300 bg-gray-50 text-sm sm:text-base appearance-none">
                        <option>+92</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="300 1234567"
                      className="flex-1 min-w-0 px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#1894a4] focus:ring-4 focus:ring-[#1894a4]/20 transition text-base"
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-red-500 text-xs sm:text-sm mt-1.5">{errors.phoneNumber}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ahmad@example.com"
                    className="w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border border-gray-300 focus:border-[#1894a4] focus:ring-4 focus:ring-[#1894a4]/20 transition text-base"
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1.5">{errors.email}</p>}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={onBack}
                    className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition text-sm sm:text-base"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 bg-[#1A3970] text-white rounded-xl font-bold hover:bg-[#2A4D8F] shadow-lg transform hover:scale-105 transition text-sm sm:text-base"
                  >
                    Submit Request
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDE: Selected Quote (Top on Mobile) ===== */}
<div className="order-1 lg:order-2">
  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
    Your Selected Plan
  </h3>

  {selectedQuote ? (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="text-center">
        <img
          src={selectedQuote.logo}
          alt={selectedQuote.company}
          className="h-14 mx-auto mb-3"
        />
        <h2 className="text-xl font-bold text-gray-800">{selectedQuote.company}</h2>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Insurance Rate</span>
          <span className="font-semibold text-gray-800">{selectedQuote.rate}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Plan</span>
          <span className="font-semibold text-gray-800">{selectedQuote.insurancePlan}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Total Premium</span>
          <span className="font-bold text-[#1A3970] text-lg">{selectedQuote.total}</span>
        </div>

        {initialVehicleInfo?.trackerRequired && (
          <div className="text-green-600 font-semibold text-center mt-2">
            Tracker Included (+Rs 15,000)
          </div>
        )}
      </div>

      <button className="w-full mt-6 py-3 rounded-lg bg-[#1A3970] text-white font-semibold text-lg">
        Selected
      </button>
    </div>
  ) : (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-10 sm:p-16 text-center">
      <p className="text-lg sm:text-xl text-gray-500">No plan selected yet</p>
      <p className="text-sm text-gray-400 mt-2">Please go back and choose an insurance plan</p>
    </div>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default Freeqouteinsurance;
