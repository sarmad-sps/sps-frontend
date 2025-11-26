import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createQuoteRequest } from "../../apis/quoteRequestApi";
import toast from "react-hot-toast";

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
  userInfo?: { name: string; phoneNumber: string };
  onBack?: () => void;
}

const Freeqouteinsurance: React.FC<FreeQuoteProps> = ({
  initialVehicleInfo,
  selectedQuote,
  userInfo,
  onBack,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: userInfo?.name || "",
    phoneNumber: userInfo?.phoneNumber || "",
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
    if (!/^[A-Za-z\s]+$/.test(value)) return "Only alphabets allowed";
    if (value.trim().length < 3) return "Must be at least 3 characters";
    if (value.trim().length > 30) return "Max 30 characters allowed";
    return "";
  };

  const validatePhoneNumber = (value: string) => {
    if (!value.trim()) return "Phone number is required";
    if (!/^[0-9]+$/.test(value)) return "Only digits allowed";
    if (value.length !== 11) return "Must be exactly 11 digits";
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phoneNumber" && value && !/^[0-9]{0,11}$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "fullName") setErrors((prev) => ({ ...prev, fullName: validateFullName(value) }));
    if (name === "phoneNumber") setErrors((prev) => ({ ...prev, phoneNumber: validatePhoneNumber(value) }));
    if (name === "email") setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handleConfirm = async () => {
    const fullNameError = validateFullName(formData.fullName);
    const phoneError = validatePhoneNumber(formData.phoneNumber);
    const emailError = validateEmail(formData.email);

    setErrors({ fullName: fullNameError, phoneNumber: phoneError, email: emailError });

    if (fullNameError || phoneError || emailError) {
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Submitting your insurance request...");

      await createQuoteRequest({
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber,
        email: formData.email.trim(),
        vehicleInfo: initialVehicleInfo,
        selectedQuote,
      });

      toast.dismiss();
      toast.success("Insurance request submitted successfully!");

      setTimeout(() => navigate("/"), 2500);
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reusable Form Component (DRY)
  const QuoteForm = () => (
    <div className="bg-white rounded-2xl shadow-xl p-6 border">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Ahmad Khan"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#1894a4] focus:ring-4 focus:ring-[#1894a4]/20 outline-none transition"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="03001234567"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#1894a4] focus:ring-4 focus:ring-[#1894a4]/20 outline-none transition"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-2">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ahmad@example.com"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#1894a4] focus:ring-4 focus:ring-[#1894a4]/20 outline-none transition"
          />
          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-4 pt-6">
          <button
            onClick={onBack}
            className="w-full px-6 py-3.5 border-2 border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition"
          >
            Back
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            className={`w-full px-8 py-4 bg-[#1A3970] text-white rounded-xl font-bold flex items-center justify-center gap-3 transition ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#2A4D8F]"
            }`}
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent w-6 h-6 rounded-full"></span>
            ) : (
              "Submit Request"
            )}
          </button>
        </div>
      </div>
    </div>
  );

  // Reusable Selected Plan Card
  const SelectedPlanCard = () => (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#1894a4]">
      <div className="bg-gradient-to-r from-[#1894a4] to-[#117a8b] p-6 text-white text-center">
        <img src={selectedQuote!.logo} alt={selectedQuote!.company} className="h-16 mx-auto mb-4 object-contain" />
        <p className="text-5xl font-extrabold">{selectedQuote!.rate}</p>
        <p className="text-lg mt-2 opacity-90">{selectedQuote!.insurancePlan}</p>
      </div>
      <div className="p-6 bg-gray-50 text-center">
        <p className="text-4xl font-bold text-[#1A3970]">{selectedQuote!.total}</p>
        {initialVehicleInfo?.trackerRequired && (
          <div className="mt-5 inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-full">
            Tracker Included (+RS 15,000)
          </div>
        )}
      </div>
      <div className="bg-[#1894a4] text-white p-4 text-center">
        <p className="text-xl font-bold">{selectedQuote!.company}</p>
        <p className="text-xs opacity-90">Best Rate • Instant Coverage</p>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* ==================== MOBILE LAYOUT ==================== */}
        <div className="block lg:hidden space-y-10">

          {/* Selected Plan Card - Mobile Top */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1A3970] mb-6">Your Selected Plan</h3>
            {selectedQuote ? (
              <div className="mx-auto max-w-md">
                <SelectedPlanCard />
              </div>
            ) : (
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
                <p className="text-lg text-gray-500">No plan selected yet</p>
              </div>
            )}
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1A3970] text-center">Complete Your Request</h2>

            {/* Vehicle Info */}
            {initialVehicleInfo && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-[#1894a4]/20 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Your Vehicle</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-gray-600">Brand:</span> <p className="font-semibold">{initialVehicleInfo.brand}</p></div>
                  <div><span className="text-gray-600">Model:</span> <p className="font-semibold">{initialVehicleInfo.model}</p></div>
                  <div><span className="text-gray-600">Value:</span> <p className="font-semibold text-green-600">RS {initialVehicleInfo.currentValue}</p></div>
                  <div>
                    <span className="text-gray-600">Tracker:</span>
                    <p className={`font-bold ${initialVehicleInfo.trackerRequired ? "text-green-600" : "text-gray-500"}`}>
                      {initialVehicleInfo.trackerRequired ? "Required" : "Not Required"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <QuoteForm />
          </div>
        </div>

        {/* ==================== DESKTOP LAYOUT (Original) ==================== */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1A3970]">Complete Your Request</h2>

            {initialVehicleInfo && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-[#1894a4]/20 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Your Vehicle</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-gray-600">Brand:</span> <p className="font-semibold">{initialVehicleInfo.brand}</p></div>
                  <div><span className="text-gray-600">Model:</span> <p className="font-semibold">{initialVehicleInfo.model}</p></div>
                  <div><span className="text-gray-600">Value:</span> <p className="font-semibold text-green-600">RS {initialVehicleInfo.currentValue}</p></div>
                  <div>
                    <span className="text-gray-600">Tracker:</span>
                    <p className={`font-bold ${initialVehicleInfo.trackerRequired ? "text-green-600" : "text-gray-500"}`}>
                      {initialVehicleInfo.trackerRequired ? "Required (+RS 15,000)" : "Not Required"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <QuoteForm />
          </div>

          {/* Right Side - Selected Plan */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Selected Plan</h3>
            {selectedQuote ? (
              <SelectedPlanCard />
            ) : (
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center">
                <p className="text-lg text-gray-500">No plan selected yet</p>
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