import React, { useState } from "react";

interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  insurancePlan: string;
  installmentAmount: string;
  total: string;
}

interface TravelFormData {
  country: string;
  tripDate: string;
  passengers: string;
}

interface Props {
  formData: TravelFormData;
  selectedQuote: InsuranceQuote;
  onBack: () => void;
}

const TravelTakafulQuote: React.FC<Props> = ({
  formData,
  selectedQuote,
  onBack,
}) => {
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });

  const validate = () => {
    const err: { name: string; phone: string; email: string } = {
      name: "",
      phone: "",
      email: "",
    };
    if (!contact.name.trim()) err.name = "Full name is required";
    if (!contact.phone.trim()) err.phone = "Phone number is required";
    else if (!/^\d{10,15}$/.test(contact.phone.replace(/\D/g, "")))
      err.phone = "Invalid phone number";
    if (!contact.email.trim()) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(contact.email)) err.email = "Invalid email";

    setErrors(err);
    return !err.name && !err.phone && !err.email;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Travel Takaful Quote Request Sent!");
      console.log("Travel Data:", { formData, selectedQuote, contact });
    }
  };

  return (
    // Sirf background full width aur #F4F9FE – baaki sab original
    <div className="w-full bg-[#F4F9FE] min-h-screen">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-12">
        <div className="min-h-screen bg-[#F4F9FE] flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-md w-full max-w-6xl p-10 flex flex-col md:flex-row gap-10">
            {/* LEFT: Contact Form – bilkul original */}
            <div className="md:w-1/2">
              <div className="flex items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1A3970] text-white font-semibold flex items-center justify-center">
                    1
                  </div>
                  <div className="w-12 border-t-2 border-dotted border-[#1A3970]" />
                  <div className="w-9 h-9 rounded-full bg-[#1A3970] text-white font-semibold flex items-center justify-center">
                    2
                  </div>
                </div>
              </div>

              <h2 className="text-lg font-semibold text-[#1A3970] mb-6">
                Get Free Travel Takaful Quote
              </h2>

              <div className="space-y-5">
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <span className="text-red-600">*</span>  Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={contact.name}
                    onChange={(e) =>
                      setContact({ ...contact, name: e.target.value })
                    }
                    className={`w-full border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md px-12 py-3 focus:ring-2 focus:ring-[#1A3970] outline-none`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <span className="text-red-600">*</span>   Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={contact.phone}
                    onChange={(e) =>
                      setContact({ ...contact, phone: e.target.value })
                    }
                    className={`w-full border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md px-12 py-3 focus:ring-2 focus:ring-[#1A3970] outline-none`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <span className="text-red-600">*</span>   Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                    className={`w-full border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md px-12 py-3 focus:ring-2 focus:ring-[#1A3970] outline-none`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    onClick={onBack}
                    className="border border-gray-300 rounded-md px-12 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Previous Step
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-[#1A3970] text-white rounded-md px-12 py-2 hover:bg-[#2A4D8F]"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Selected Plan – bilkul original */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
                <div className="bg-white p-5 flex items-center justify-center border-b">
                  <img
                    src={selectedQuote.logo}
                    alt={selectedQuote.company}
                    className="h-12 object-contain"
                  />
                </div>
                <div className="bg-[#1894a4] text-white p-5">
                  <p className="text-sm mb-1">Travel Takaful</p>
                  <p className="text-3xl font-bold mb-3">{selectedQuote.rate}</p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-white rounded-full" />
                      <span>{selectedQuote.insurancePlan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-white rounded-full" />
                      <span>{selectedQuote.installmentAmount}</span>
                    </div>
                  </div>
                  <div className="border-t border-white/30 pt-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold">
                        {selectedQuote.total}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-[#1A3970] text-white py-2 rounded font-semibold hover:bg-[#2A4D8F] mb-2">
                    INQUIRE NOW
                  </button>
                  <button className="w-full bg-gray-600 text-white py-2 rounded font-semibold hover:bg-gray-700">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTakafulQuote;
