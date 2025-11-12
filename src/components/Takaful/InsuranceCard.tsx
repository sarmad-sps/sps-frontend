import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/card4.png";
import card5 from "../../../public/card5.png";
import Takaful from "../../../public/takaful.png";
import { healthTakafulFormFields } from "../../config/formFields";
import { fireTakafulFormFields } from "../../config/formFields";

interface InsuranceCardProps {
  showForm?: boolean;
}

type FormType = "none" | "health" | "fire";

const InsuranceCard = ({ showForm = false }: InsuranceCardProps) => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState<FormType>("none");
  const [healthFormData, setHealthFormData] = useState<Record<string, string>>({});
  const [fireFormData, setFireFormData] = useState<Record<string, string>>({});

  // Navigation Handlers
  const handleTravelTakafulClick = () => navigate("/travel-takaful");
  const handleGroupHealthClick = () => setActiveForm("health");
  const handleCarTakafulClick = () => navigate("/car-takaful");
  const handleBikeTakafulClick = () => navigate("/bike-takaful");
  const handleFireTClick = () => setActiveForm("fire");

  // Input Change Handlers
  const handleHealthInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHealthFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFireInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFireFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handlers
  const handleHealthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Health Takaful Form Data:", healthFormData);
    alert("Health Takaful form submitted successfully!");
    setActiveForm("none");
  };

  const handleFireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Fire Takaful Form Data:", fireFormData);
    alert("Fire Takaful form submitted successfully!");
    setActiveForm("none");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between bg-[aliceblue] shadow-md rounded-lg p-4 sm:p-6 md:p-8 gap-4 md:gap-8 border border-gray-100 my-8 overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-700">
            <div className="min-w-0 flex-shrink">
              <p className="truncate">
                <span className="font-semibold">Name:</span> Osama Bin Jahangir
              </p>
              <p className="truncate">
                <span className="font-semibold">Email:</span> osamajahangir786@gmail.com
              </p>
            </div>
            <div className="mt-2 sm:mt-0 flex-shrink-0">
              <p>
                <span className="font-semibold">Gender:</span> Male
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +923314272709
              </p>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Middle Illustration */}
          <div className="flex justify-center w-full">
            <div className="max-w-full">
              <img
                src={Takaful}
                alt="Accident Insurance"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain max-w-full mx-auto"
              />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center space-y-1">
            <h2 className="text-lg font-semibold text-blue-700">
              Buy Personal Accident Insurance Plan
            </h2>
            <p className="text-blue-600 text-sm font-medium">
              for as low as Rs. 190/year
            </p>
            <p className="text-gray-600 text-xs">
              Accidental Death Coverage up to Rs. 15 Lakh. Buy online in 10 minutes
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-0 bg-gray-50 rounded-lg shadow-lg p-3 sm:p-4 border border-gray-200">
          {activeForm === "none" && !showForm ? (
            <>
              <h3 className="text-center font-semibold text-gray-700 mb-3 sm:mb-4">
                Takaful
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {/* Travel */}
                <div
                  onClick={handleTravelTakafulClick}
                  className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition"
                >
                  <img src={card1} alt="Travel Takaful" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                  <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                    Travel Takaful
                  </p>
                </div>

                {/* Group Health */}
                <div
                  onClick={handleGroupHealthClick}
                  className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition"
                >
                  <img src={card2} alt="Group Health" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                  <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                    Group Health Takaful
                  </p>
                </div>

                {/* Car */}
                <div
                  onClick={handleCarTakafulClick}
                  className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition"
                >
                  <img src={card3} alt="Car Takaful" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                  <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                    Motor Car Takaful
                  </p>
                </div>

                {/* Bike */}
                <div
                  onClick={handleBikeTakafulClick}
                  className="flex flex-col items-center justify-center bg-purple-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition"
                >
                  <img src={card4} alt="Bike Takaful" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                  <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                    Bike Takaful
                  </p>
                </div>

                {/* Fire Takaful - Full Width */}
                <div
                  onClick={handleFireTClick}
                  className="col-span-2 flex items-center justify-center bg-[#FFCDCE] rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition gap-2 sm:gap-3"
                >
                  <img src={card5} alt="Fire Takaful" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                  <p className="text-gray-700 text-sm sm:text-base font-semibold">
                    Fire Takaful
                  </p>
                </div>
              </div>
            </>
          ) : activeForm === "health" ? (
            /* Health Takaful Form */
            <div className="bg-white rounded-lg p-3">
              <h3 className="text-center font-semibold text-gray-700 mb-3 text-sm">
                Get customized quote for your organization
              </h3>

              <form onSubmit={handleHealthSubmit} className="space-y-2">
                {healthTakafulFormFields.map((field) => {
                  if (field.name === "employeeCount") return null;

                  return (
                    <div key={field.name}>
                      {field.name === "city" ? (
                        <div className="grid grid-cols-2 gap-2">
                          <select
                            name="city"
                            value={healthFormData.city || ""}
                            onChange={handleHealthInputChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                            required
                          >
                            <option value="">City</option>
                            {field.options?.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>

                          <select
                            name="employeeCount"
                            value={healthFormData.employeeCount || ""}
                            onChange={handleHealthInputChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                            required
                          >
                            <option value="">Number of employees</option>
                            {healthTakafulFormFields
                              .find((f) => f.name === "employeeCount")
                              ?.options?.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                  {opt.label}
                                </option>
                              ))}
                          </select>
                        </div>
                      ) : field.type === "select" ? (
                        <select
                          name={field.name}
                          value={healthFormData[field.name] || ""}
                          onChange={handleHealthInputChange}
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                          required={field.required}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.name === "workEmail" ? "email" : "text"}
                          name={field.name}
                          value={healthFormData[field.name] || ""}
                          onChange={handleHealthInputChange}
                          placeholder={field.placeholder}
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                          required={field.required}
                        />
                      )}
                    </div>
                  );
                })}

                <div className="grid grid-cols-2 gap-2">
                  <select className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm">
                    <option value="+92">+92</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={healthFormData.phoneNumber || ""}
                    onChange={handleHealthInputChange}
                    placeholder="3014257533256"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF8C00] hover:bg-[#FF7700] text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm mt-3"
                >
                  Submit <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : activeForm === "fire" ? (
            /* Fire Takaful Form */
            <div className="bg-white rounded-lg p-3">
              <h3 className="text-center font-semibold text-gray-700 mb-3 text-sm">
                Get Fire Takaful Quote
              </h3>

              <form onSubmit={handleFireSubmit} className="space-y-2">
                {fireTakafulFormFields.map((field) => (
                  <div key={field.name}>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={fireFormData[field.name] || ""}
                        onChange={handleFireInputChange}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                        required={field.required}
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.name.includes("email") ? "email" : field.name.includes("phone") ? "tel" : "text"}
                        name={field.name}
                        value={fireFormData[field.name] || ""}
                        onChange={handleFireInputChange}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm mt-3"
                >
                  Get Quote <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;