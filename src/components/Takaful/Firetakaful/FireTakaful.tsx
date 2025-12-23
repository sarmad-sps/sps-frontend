// import { useState } from "react";
// import { ArrowRight, AlertCircle } from "lucide-react";
// import toast from "react-hot-toast"; // ✅ Toaster added

// import { fireTakafulFormFields } from "../../../config/formFields";
// import { submitFireTakafulForm } from "../../../apis/fireTakafulApi";

// const validateEmail = (email: string): boolean => {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// };

// const getFieldLabel = (name: string): string => {
//   const labels: Record<string, string> = {
//     yourName: "Your Name",
//     companyName: "Company Name",
//     workEmail: "Work Email",
//     city: "City",
//     employeeCount: "Number of Employees",
//     insured: "Insurance Status",
//   };
//   return labels[name] || name;
// };

// const FireTakafulSection = () => {
//   const [formData, setFormData] = useState<Record<string, string>>({});
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Record<string, string> = {};
//     fireTakafulFormFields.forEach((field) => {
//       const value = formData[field.name] || "";
//       if (field.required && !value.trim()) {
//         newErrors[field.name] = `Enter a valid ${getFieldLabel(
//           field.name
//         ).toLowerCase()}`;
//       }
//       if (field.name === "workEmail") {
//         if (!value.trim() || !validateEmail(value)) {
//           newErrors[field.name] = "Enter a valid email";
//         }
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       setLoading(true);
//       toast.loading("Submitting..."); // ✅ toaster loading

//       const payload = {
//         name: formData.yourName || "",
//         companyname: formData.companyName || "",
//         workmail: formData.workEmail || "",
//         city: formData.city || "",
//         noofemployees: formData.employeeCount || "",
//         surety: formData.insured || "",
//       };

//       await submitFireTakafulForm(payload);

//       toast.dismiss();
//       toast.success("Fire Takaful form submitted successfully!"); // ✅ success toaster

//       setFormData({});
//       setErrors({});
//     } catch (err: any) {
//       toast.dismiss();
//       toast.error(err.message || "Something went wrong! Please try again."); // ✅ error toaster
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full bg-[#F4F9FE] min-h-screen flex items-center justify-center pb-24 ">
//       <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8">
//         <div className="flex flex-col md:flex-row justify-between bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 gap-4 md:gap-8 border border-gray-100 overflow-hidden">
//           {/* Left Section */}
//           <div className="flex-1 min-w-0 space-y-4">
//             <div className="flex justify-center w-full">
//               <img
//                 src="/firetakaful.png"
//                 alt="Accident Insurance"
//                 className="w-36 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 object-contain"
//               />
//             </div>

//             <div className="text-center space-y-1">
//               <h2 className="text-lg font-semibold text-blue-700">
//                 Secure Your Assets with Fire Takaful
//               </h2>
//               <p className="text-blue-600 text-sm font-medium">
//                 Comprehensive coverage starting from just Rs. 250/year
//               </p>
//               <p className="text-gray-600 text-xs">
//                 Protect your home, office, or business from fire hazards. Quick
//                 online purchase in minutes.
//               </p>
//             </div>
//           </div>

//           {/* Right Section - Fire Form */}
//           <div className="flex-1 min-w-0 bg-gray-50 rounded-lg shadow-lg p-3 sm:p-4 border border-gray-200">
//             <div className="bg-white rounded-lg p-3">
//               <h3 className="text-center font-semibold text-gray-700 mb-3 text-sm">
//                 Get Fire Takaful Quote
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 {fireTakafulFormFields.map((field) => (
//                   <div key={field.name} className="space-y-1">
//                     {field.type === "select" ? (
//                       <div>
//                         <select
//                           name={field.name}
//                           value={formData[field.name] || ""}
//                           onChange={handleInputChange}
//                           className={`w-full px-8 py-2 border rounded-lg focus:outline-none text-sm ${
//                             errors[field.name]
//                               ? "border-red-500 ring-2 ring-red-200"
//                               : "border-gray-300"
//                           }`}
//                           required={field.required}
//                         >
//                           <option value="">{field.placeholder}</option>
//                           {field.options?.map((opt) => (
//                             <option key={opt.value} value={opt.value}>
//                               {opt.label}
//                             </option>
//                           ))}
//                         </select>
//                         {errors[field.name] && (
//                           <div className="flex items-center gap-1 text-red-600 text-xs">
//                             <AlertCircle className="w-3 h-3" />
//                             <span>{errors[field.name]}</span>
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <div>
//                         <input
//                           type={field.name === "workEmail" ? "email" : "text"}
//                           name={field.name}
//                           value={formData[field.name] || ""}
//                           onChange={handleInputChange}
//                           placeholder={field.placeholder}
//                           className={`w-full px-8 py-2 border rounded-lg focus:outline-none text-sm ${
//                             errors[field.name]
//                               ? "border-red-500 ring-2 ring-red-200"
//                               : "border-gray-300"
//                           }`}
//                           required={field.required}
//                         />
//                         {errors[field.name] && (
//                           <div className="flex items-center gap-1 text-red-600 text-xs">
//                             <AlertCircle className="w-3 h-3" />
//                             <span>{errors[field.name]}</span>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full py-2.5 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md text-sm flex justify-center gap-2"
//                 >
//                   {loading ? (
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   ) : (
//                     <>
//                       Get Quote <ArrowRight className="w-4 h-4" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FireTakafulSection;
import { useState } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

import { fireTakafulFormFields } from "../../../config/formFields";
import { submitFireTakafulForm } from "../../../apis/fireTakafulApi";

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const getFieldLabel = (name: string): string => {
  const labels: Record<string, string> = {
    yourName: "Your Name",
    companyName: "Company Name",
    workEmail: "Work Email",
    city: "City",
    employeeCount: "Number of Employees",
    insured: "Insurance Status",
  };
  return labels[name] || name;
};

const FireTakafulSection = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    fireTakafulFormFields.forEach((field) => {
      const value = formData[field.name] || "";
      if (field.required && !value.trim()) {
        newErrors[field.name] = `Enter a valid ${getFieldLabel(
          field.name
        ).toLowerCase()}`;
      }
      if (field.name === "workEmail") {
        if (!value.trim() || !validateEmail(value)) {
          newErrors[field.name] = "Enter a valid email";
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const toastId = toast.loading("Submitting..."); // ✅ loading toast

      const payload = {
        name: formData.yourName || "",
        companyname: formData.companyName || "",
        workmail: formData.workEmail || "",
        city: formData.city || "",
        noofemployees: formData.employeeCount || "",
        surety: formData.insured || "",
      };

      await submitFireTakafulForm(payload);

      toast.dismiss(toastId);
      toast.success("Fire Takaful form submitted successfully!"); // ✅ success toast

      setFormData({});
      setErrors({});
    } catch (err: any) {
      toast.dismiss();
      toast.error(err.message || "Something went wrong! Please try again."); // ✅ error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#F4F9FE] min-h-screen flex items-center justify-center pb-24 ">


      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8">
       
        <div className="flex flex-col md:flex-row justify-between bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 gap-4 md:gap-8 border border-gray-100 overflow-hidden">
          {/* Left Section */}
          <div className="flex-1 min-w-0 space-y-4">
            <div className="flex justify-center w-full">
              <img
                src="/firetakaful.png"
                alt="Accident Insurance"
                className="w-36 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 object-contain"
              />
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-lg font-semibold text-blue-700">
                Secure Your Assets with Fire Takaful
              </h2>
              <p className="text-blue-600 text-sm font-medium">
                Comprehensive coverage starting from just Rs. 250/year
              </p>
              <p className="text-gray-600 text-xs">
                Protect your home, office, or business from fire hazards. Quick
                online purchase in minutes.
              </p>
            </div>
          </div>

          {/* Right Section - Fire Form */}
          <div className="flex-1 min-w-0 bg-gray-50 rounded-lg shadow-lg p-3 sm:p-4 border border-gray-200">
            <div className="bg-white rounded-lg p-3">
              <h3 className="text-center font-semibold text-gray-700 mb-3 text-sm">
                Get Fire Takaful Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                {fireTakafulFormFields.map((field) => (
                  <div key={field.name} className="space-y-1">
                    {field.type === "select" ? (
                      <div>
                        <select
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          className={`w-full px-8 py-2 border rounded-lg focus:outline-none text-sm ${
                            errors[field.name]
                              ? "border-red-500 ring-2 ring-red-200"
                              : "border-gray-300"
                          }`}
                          required={field.required}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {errors[field.name] && (
                          <div className="flex items-center gap-1 text-red-600 text-xs">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors[field.name]}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <input
                          type={field.name === "workEmail" ? "email" : "text"}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className={`w-full px-8 py-2 border rounded-lg focus:outline-none text-sm ${
                            errors[field.name]
                              ? "border-red-500 ring-2 ring-red-200"
                              : "border-gray-300"
                          }`}
                          required={field.required}
                        />
                        {errors[field.name] && (
                          <div className="flex items-center gap-1 text-red-600 text-xs">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors[field.name]}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md text-sm flex justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Get Quote <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireTakafulSection;
