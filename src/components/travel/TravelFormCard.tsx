import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { submitTravelForm } from "../../apis/travelApi";
import toast from "react-hot-toast";

const TravelFormCard = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    travelType: "Single Trip",
    countryToTravel: "",
    destination: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const travelTypes = ["Single Trip", "Family Trip", "Student Plan"];
  const countries = ["Pakistan", "USA", "UK", "UAE"];
  const destinations = ["Schengen Countries", "World Wide", "Rest of the World"];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Enter name";
    else if (formData.name.length < 3 || formData.name.length > 30)
      newErrors.name = "Name must be 3-30 characters";

    if (!formData.phone) newErrors.phone = "Enter phone number";
    else if (!/^\d+$/.test(formData.phone)) newErrors.phone = "Phone must contain only digits";
    else if (formData.phone.length < 11 || formData.phone.length > 15)
      newErrors.phone = "Phone number must be between 11 and 15 digits";

    if (!formData.travelType) newErrors.travelType = "Select travel type";
    if (!formData.countryToTravel) newErrors.countryToTravel = "Select country";
    if (!formData.destination) newErrors.destination = "Select destination";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    toast.loading("Submitting...");

    try {
      const response = await submitTravelForm(formData);

      toast.dismiss();
      toast.success("Form submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        travelType: "Single Trip",
        countryToTravel: "",
        destination: "",
      });

      setErrors({});
    } catch (err: any) {
      toast.dismiss();
      toast.error(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">

        {/* Name */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            minLength={3}
            maxLength={30}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              const regex = /^[0-9]*$/;
              if (regex.test(e.target.value)) handleInputChange(e);
            }}
            maxLength={15}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
              errors.phone ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Travel Type */}
        <div className="relative">
          <label className="block text-sm font-bold text-gray-700 mb-2">Travel Type</label>
          <select
            name="travelType"
            value={formData.travelType}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg appearance-none pr-10 focus:outline-none ${
              errors.travelType ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
            }`}
          >
            <option value="">Select Travel Type</option>
            {travelTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400 mt-6" />
          </div>

          {errors.travelType && <p className="text-red-500 text-sm mt-1">{errors.travelType}</p>}
        </div>

        {/* Country */}
        <div className="relative">
          <label className="block text-sm font-bold text-gray-700 mb-2">Country to Travel</label>
          <select
            name="countryToTravel"
            value={formData.countryToTravel}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg appearance-none pr-10 focus:outline-none ${
              errors.countryToTravel ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
            }`}
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400 mt-6" />
          </div>

          {errors.countryToTravel && (
            <p className="text-red-500 text-sm mt-1">{errors.countryToTravel}</p>
          )}
        </div>

        {/* Destination */}
        <div className="relative">
          <label className="block text-sm font-bold text-gray-700 mb-2">Destination</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg appearance-none pr-10 focus:outline-none ${
              errors.destination ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
            }`}
          >
            <option value="">Select Destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400 mt-6" />
          </div>

          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full bg-[#1A3970] text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 
          ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#2A4D8F]"}`}
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent w-5 h-5 rounded-full"></span>
          ) : (
            <>
              See Plan
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TravelFormCard;
