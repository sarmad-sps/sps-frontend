// import card1 from "../../../public/card1.png";
// import card2 from "../../../public/card2.png";
// import card3 from "../../../public/card3.png";
// import card4 from "../../../public/card4.png";
// import card5 from "../../../public/card5.png";
// import Takaful from "../../../public/takaful.png";

// const InsuranceCard = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between bg-[aliceblue] shadow-md rounded-lg p-6 md:p-8 gap-8 max-w-5xl mx-auto border border-gray-100 my-8">
//       {/* Left Section */}
//       <div className="flex-1 space-y-4">
//         {/* Header Info */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-700">
//           <div>
//             <p>
//               <span className="font-semibold">Name:</span> Osama Bin Jahangir
//             </p>
//             <p>
//               <span className="font-semibold">Email:</span>{" "}
//               osamajahangir786@gmail.com
//             </p>
//           </div>
//           <div className="mt-2 sm:mt-0">
//             <p>
//               <span className="font-semibold">Gender:</span> Male
//             </p>
//             <p>
//               <span className="font-semibold">Phone:</span> +923314272709
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="border-gray-300" />

//         {/* Middle Illustration */}
//         <div className="flex justify-center">
//           <img
//             src={Takaful}
//             alt="Accident Insurance"
//             className="w-34 h-34 object-contain"
//           />
//         </div>

//         {/* Bottom Text */}
//         <div className="text-center space-y-1">
//           <h2 className="text-lg font-semibold text-blue-700">
//             Buy Personal Accident Insurance Plan
//           </h2>
//           <p className="text-blue-600 text-sm font-medium">
//             for as low as Rs. 190/year
//           </p>
//           <p className="text-gray-600 text-xs">
//             Accidental Death Coverage up to Rs. 15 Lakh. Buy online in 10
//             minutes
//           </p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex-1 bg-gray-50 rounded-lg shadow-lg p-4 border border-gray-200">
//         <h3 className="text-center font-semibold text-gray-700 mb-4">
//           Takaful
//         </h3>

//         <div className="grid grid-cols-2 gap-4">
//           {/* Box 1 */}
//           <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
//             <img src={card1} alt="Travel Takaful" className="w-10 h-10 mb-2" />
//             <p className="text-gray-700 text-sm font-medium">Travel Takaful</p>
//           </div>

//           {/* Box 2 */}
//           <div className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
//             <img
//               src={card2}
//               alt="Group Health Takaful"
//               className="w-10 h-10 mb-2"
//             />
//             <p className="text-gray-700 text-sm font-medium">
//               Group Health Takaful
//             </p>
//           </div>

//           {/* Box 3 */}
//           <div className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
//             <img
//               src={card3}
//               alt="Motor Car Takaful"
//               className="w-10 h-10 mb-2"
//             />
//             <p className="text-gray-700 text-sm font-medium">
//               Motor Car Takaful
//             </p>
//           </div>

//           {/* Box 4 */}
//           <div className="flex flex-col items-center justify-center bg-purple-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
//             <img src={card4} alt="Bike Takaful" className="w-10 h-10 mb-2" />
//             <p className="text-gray-700 text-sm font-medium">Bike Takaful</p>
//           </div>

//           {/* 🔥 New Box 5 - Fire Takaful */}
//        {/* 🔥 New Box 5 - Fire Takaful (image & text side by side) */}
// <div className="col-span-2 flex items-center justify-center bg-[#FFCDCE] rounded-lg p-4 cursor-pointer hover:shadow-md transition gap-3">
//   <img
//     src={card5}
//     alt="Fire Takaful"
//     className="w-12 h-12 object-contain"
//   />
//   <p className="text-gray-700 text-base font-semibold">Fire Takaful</p>
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default InsuranceCard;

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

interface InsuranceCardProps {
  showForm?: boolean;
}

const InsuranceCard = ({ showForm = false }: InsuranceCardProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleGroupHealthClick = () => {
    navigate("/healthtakaful");
  };

  const handleCarTakafulClick = () => {
    navigate("/car-takaful");
  };

  const handleTravelTakafulClick = () => {
    navigate("/travel-takaful");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Health Takaful Form Data:", formData);
    alert("Health Takaful form submitted successfully!");
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
                <span className="font-semibold">Email:</span>{" "}
                osamajahangir786@gmail.com
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

          {/* Divider */}
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
              Accidental Death Coverage up to Rs. 15 Lakh. Buy online in 10
              minutes
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-0 bg-gray-50 rounded-lg shadow-lg p-3 sm:p-4 border border-gray-200">
          {!showForm ? (
            <>
              <h3 className="text-center font-semibold text-gray-700 mb-3 sm:mb-4">
                Takaful
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {/* Box 1 */}
                <div
                  onClick={handleTravelTakafulClick}
                  className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition"
                >
                  <img
                    src={card1}
                    alt="Travel Takaful"
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                    Travel Takaful
                  </p>
                </div>

                {/* Box 2 */}
                <div
                  onClick={handleGroupHealthClick}
                  className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition"
                >
                  <img
                    src={card2}
                    alt="Group Health Takaful"
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                    Group Health Takaful
                  </p>
                </div>

                {/* Box 3 */}
                <div
                  onClick={handleCarTakafulClick}
                  className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition"
                >
                  <img
                    src={card3}
                    alt="Motor Car Takaful"
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                    Motor Car Takaful
                  </p>
                </div>

                {/* Box 4 */}
                <div className="flex flex-col items-center justify-center bg-purple-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition">
                  <img
                    src={card4}
                    alt="Bike Takaful"
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                    Bike Takaful
                  </p>
                </div>

                {/* 🔥 Box 5 - Fire Takaful */}
                <div className="col-span-2 flex items-center justify-center bg-[#FFCDCE] rounded-lg p-4 cursor-pointer hover:shadow-md transition gap-3">
                  <img
                    src={card5}
                    alt="Fire Takaful"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-gray-700 text-base font-semibold">
                    Fire Takaful
                  </p>
                </div>
                {/* 🔥 New Box 5 - Fire Takaful */}
                {/* 🔥 New Box 5 - Fire Takaful (image & text side by side) */}
                <div className="col-span-2 flex items-center justify-center bg-[#FFCDCE] rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition gap-2 sm:gap-3">
                  <img
                    src={card5}
                    alt="Fire Takaful"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <p className="text-gray-700 text-sm sm:text-base font-semibold">
                    Fire Takaful
                  </p>
                </div>
              </div>
            </>
          ) : (
            // Health Takaful Form
            <div className=" bg-white rounded-lg  ">
              <h3 className="text-center font-semibold text-gray-700 mb-3 text-sm">
                Get customized quote for your organization
              </h3>

              <form onSubmit={handleSubmit} className="space-y-2">
                {healthTakafulFormFields.map((field) => {
                  // Skip employeeCount here, we'll handle it with city
                  if (field.name === "employeeCount") return null;

                  return (
                    <div key={field.name}>
                      {field.name === "city" ? (
                        // City and Employee Count in one row
                        <div className="grid grid-cols-2 gap-2">
                          <select
                            name="city"
                            value={formData.city || ""}
                            onChange={handleInputChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                            required
                          >
                            <option value="">City</option>
                            {field.options?.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>

                          <select
                            name="employeeCount"
                            value={formData.employeeCount || ""}
                            onChange={handleInputChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                            required
                          >
                            <option value="">Number of employees</option>
                            {healthTakafulFormFields
                              .find((f) => f.name === "employeeCount")
                              ?.options?.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                          </select>
                        </div>
                      ) : field.type === "select" ? (
                        <select
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1894a4] text-sm"
                          required={field.required}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.name === "workEmail" ? "email" : "text"}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
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
                    value={formData.phoneNumber || ""}
                    onChange={handleInputChange}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
