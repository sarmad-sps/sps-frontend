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
  initialVehicleInfo,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePreviousStep = () => {
    if (onBack) onBack();
  };

  const handleConfirm = () => {
    console.log("Form Data:", formData);
    console.log("Vehicle Info:", initialVehicleInfo);
    alert("Quote request submitted successfully!");
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side - Get Free Quotes Form */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Get Free Quotes
          </h3>

          <div className="space-y-4">
            {/* Your Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  className="w-full px-8 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#1894a4] pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your Phone Number*
              </label>
              <div className="relative">
                <select
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-8 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#1894a4] appearance-none pr-10"
                >
                  <option value="">Your Phone Number</option>
                  <option value="+92">+92 (Pakistan)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your email?*
              </label>
              <div className="relative">
                <select
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-8 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#1894a4] appearance-none pr-10"
                >
                  <option value="">Your Email</option>
                  <option value="gmail">Gmail</option>
                  <option value="yahoo">Yahoo</option>
                  <option value="hotmail">Hotmail</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={handlePreviousStep}
                className="flex items-center gap-2 px-8 py-3 border border-gray-300 rounded font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous Step
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="px-8 py-3 bg-[#1A3970] text-white rounded font-medium hover:bg-[#2A4D8F] transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Pick some offers */}
        <div>
          <div className="text-right mb-4">
            <p className="text-lg font-medium text-gray-700">
              Pick some offers :
            </p>
          </div>

          {/* Jubilee Insurance Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#1894a4]">
            {/* Company Logo */}
            <div className="bg-white p-2 flex items-center justify-center">
              <img
                src="/Jubileeinsurance.png"
                alt="Jubilee Insurance"
                className="h-10"
              />
            </div>

            {/* Card Content */}
            <div className="bg-[#1894a4] text-white p-2.5">
              <div className="mb-1.5">
                <p className="text-sm mb-0.5 opacity-90">3T-Old Car Insurance</p>
                <p className="text-sm mb-0.5 opacity-90">Rate</p>
                <p className="text-3xl font-bold">1.25%</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Installment Plan</span>
                  <span className="ml-auto bg-white/20 rounded-full p-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-xl font-bold mt-0.5">RS. 938 / month</p>
              </div>

              <div className="border-t border-white/30 pt-1.5 mb-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold">RS 5,625</span>
                </div>
              </div>

              <div className="space-y-1">
                <button className="w-full bg-blue-600 text-white py-1.5 rounded font-medium hover:bg-blue-700 transition-colors">
                  INQUIRE NOW
                </button>
                <button className="w-full bg-gray-600 text-white py-1.5 rounded font-medium hover:bg-gray-700 transition-colors">
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
