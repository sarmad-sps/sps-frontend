import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface VehicleInfo {
  brand: string;
  fuelType: string;
  city: string;
  purchaseDate: string;
  model: string;
  currentValue: string;
}

interface FreeQuoteProps {
  initialVehicleInfo?: VehicleInfo;
  onBack?: () => void;
}

const Freeqouteinsurance: React.FC<FreeQuoteProps> = ({
  // initialVehicleInfo,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneCode: "+92", 
    phoneNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  // ---------------- VALIDATIONS ----------------

  const validateFullName = (value: string) => {
    if (!value.trim()) return "Full name is required";
    if (!/^[A-Za-z\s]+$/.test(value)) return "Only alphabets allowed";
    if (value.length < 3) return "Minimum 3 characters required";
    if (value.length > 30) return "Maximum 30 characters allowed";
    return "";
  };

  const validatePhoneNumber = (value: string) => {
    if (!/^[0-9]+$/.test(value)) return "Only digits allowed";
    if (value.length !== 10) return "Phone number must be exactly 10 digits";
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Enter a valid email address";
    return "";
  };

  // ---------------- INPUT HANDLER ----------------

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Restrict phone to 10 digits
    if (name === "phoneNumber") {
      if (!/^[0-9]{0,10}$/.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "fullName")
      setErrors((prev) => ({ ...prev, fullName: validateFullName(value) }));

    if (name === "phoneNumber")
      setErrors((prev) => ({ ...prev, phoneNumber: validatePhoneNumber(value) }));

    if (name === "email")
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  // ---------------- SUBMIT ----------------

  const handleConfirm = () => {
    const fullNameError = validateFullName(formData.fullName);
    const phoneError = validatePhoneNumber(formData.phoneNumber);
    const emailError = validateEmail(formData.email);

    setErrors({
      fullName: fullNameError,
      phoneNumber: phoneError,
      email: emailError,
    });

    if (fullNameError || phoneError || emailError) {
      alert("Please correct the errors!");
      return;
    }

    const finalPhone = `+92${formData.phoneNumber}`;

    console.log("Final Submitted Data:", {
      ...formData,
      fullPhoneNumber: finalPhone,
    });

    alert("Quote request submitted successfully!");

    // RESET FORM
    setFormData({
      fullName: "",
      phoneCode: "+92",
      phoneNumber: "",
      email: "",
    });

    setErrors({
      fullName: "",
      phoneNumber: "",
      email: "",
    });
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* ---------------- LEFT SIDE ---------------- */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get Free Quotes</h3>

          <div className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                className="w-full px-8 py-3 border border-gray-300 rounded bg-white focus:border-[#1894a4]"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your Phone Number*
              </label>

              <div className="flex gap-2">

                {/* Fixed +92 */}
                <div className="relative w-32">
                  <select
                    name="phoneCode"
                    value={formData.phoneCode}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 appearance-none"
                  >
                    <option value="+92">+92</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="10 digit number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#1894a4]"
                />
              </div>

              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your email?*
              </label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-8 py-3 border border-gray-300 rounded focus:border-[#1894a4]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={onBack}
                className="px-8 py-3 border border-gray-300 rounded"
              >
                ← Previous Step
              </button>

              <button
                type="button"
                onClick={handleConfirm}
                className="px-8 py-3 bg-[#1A3970] text-white rounded hover:bg-[#2A4D8F]"
              >
                Confirm
              </button>
            </div>

          </div>
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div>
          <div className="text-right mb-4">
            <p className="text-lg font-medium text-gray-700">Pick some offers :</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#1894a4]">
            <div className="bg-white p-2 flex items-center justify-center">
              <img src="/Jubileeinsurance.png" alt="Jubilee Insurance" className="h-10" />
            </div>

            <div className="bg-[#1894a4] text-white p-2.5">
              <p className="text-sm opacity-90">3T-Old Car Insurance</p>
              <p className="text-sm opacity-90">Rate</p>
              <p className="text-3xl font-bold">1.25%</p>

              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Installment Plan</span>
              </div>

              <p className="text-xl font-bold mt-1">RS. 938 / month</p>

              <div className="border-t border-white/30 pt-2 my-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold">RS 5,625</span>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full bg-blue-600 py-1.5 rounded hover:bg-blue-700">
                  INQUIRE NOW
                </button>
                <button className="w-full bg-gray-600 py-1.5 rounded hover:bg-gray-700">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Freeqouteinsurance;
