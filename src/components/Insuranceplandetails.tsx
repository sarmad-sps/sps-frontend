import { Check, X, Info, ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  total: string;
}

type ActiveTab = "coverage" | "depreciation" | "claim";

const InsurancePlanDetails: React.FC<{
  quote: InsuranceQuote;
  vehicleType?: "car" | "bike";
  allQuotes?: InsuranceQuote[];
  formData?: Record<string, string>;
}> = ({ quote, vehicleType = "car", allQuotes = [], formData = {} }) => {
  const basePrice = parseInt(quote.total.replace(/[^0-9]/g, ""), 10) || 0;
  const [activeTab, setActiveTab] = useState<ActiveTab>("coverage");
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate back with state to show quotes
    navigate(`/${vehicleType}`, {
      state: {
        returnFromDetails: true,
        allQuotes,
        formData,
      },
    });
  };

  return (
    <div className="w-full bg-gray-50 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-center mb-10">
          <img
            src={quote.logo}
            alt="Insurance Company"
            className="h-20 mx-auto"
          />
        </div>

        {/* Main Premium Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2">
            {/* Left: Price + Tracker Toggle */}
            <div className="bg-gray-100 p-8 lg:p-12 text-center lg:text-left">
              <div className="text-5xl lg:text-6xl font-extrabold text-[#1A3970] mb-3">
                RS. {basePrice.toLocaleString()}
              </div>
              <p className="text-gray-600 text-lg mb-8">Total amount</p>
            </div>

            {/* Right: Rate & Features */}
            <div className="bg-[#1894a4] text-white p-8 lg:p-12">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-bold">3T-Old Car Insurance</h3>
                <div className="flex items-center gap-3">
                  <span className="text-5xl font-extrabold">{quote.rate}</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Info className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Workshop Available</span>
                  </div>
                  <span className="font-medium">300 workshops</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Manageable details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="p-8 bg-white border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <button
                onClick={handleBackClick}
                className="flex-1 bg-[#0066CC] hover:bg-[#0055aa] text-white font-bold py-4 px-12 rounded-full text-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                BACK
              </button>
              {/* <button className="flex-1 bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-full text-lg transition transform hover:scale-105">
                BUY NOW
              </button> */}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex flex-wrap gap-6 md:gap-10 border-b border-gray-300 pb-4 mb-10">
            {(["coverage", "depreciation", "claim"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-bold text-lg pb-3 border-b-4 transition-all ${
                  activeTab === tab
                    ? "text-[#1894a4] border-[#1894a4]"
                    : "text-gray-600 border-transparent hover:text-[#1894a4]"
                }`}
              >
                {tab === "coverage" && "Coverage"}
                {tab === "depreciation" && "Depreciation policy"}
                {tab === "claim" && "Claim Process"}
              </button>
            ))}
          </div>

          {/* Tab: Coverage */}
          {activeTab === "coverage" && (
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
              {/* Main Coverage */}
              <div className="bg-[#f0fffe] rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-xl text-[#1A3970] mb-6">
                  Main Coverage
                </h3>
                {[
                  "Accidental damages",
                  "Fire",
                  "Total Loss",
                  "Theft/Snatch",
                  "Natural Calamities",
                  "Riots & Strike",
                  "Terrorism",
                  "Deductible",
                  "No Claim Discount",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700">{item}</span>
                    <Check className="w-6 h-6 text-[#1894a4]" />
                  </div>
                ))}
              </div>

              {/* Third Party */}
              <div className="bg-[#f0fffe] rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-xl text-[#1A3970] mb-6">
                  Third Party Coverage
                </h3>
                {[
                  { label: "Death Bodily injury", covered: false },
                  { label: "Property Damages", covered: true },
                  { label: "Emergency Medical expenses", covered: true },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700">{item.label}</span>
                    {item.covered ? (
                      <Check className="w-6 h-6 text-[#1894a4]" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                ))}
              </div>

              {/* Value Added */}
              <div className="bg-[#f0fffe] rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-xl text-[#1A3970] mb-6">
                  Value Added features
                </h3>
                {[
                  { label: "Tracker", covered: true },
                  { label: "Call Center support", covered: true },
                  { label: "In-house surveyors", covered: true },
                  { label: "Replacement at Door Step", covered: false },
                  { label: "Mobile App", covered: false },
                  {
                    label: "Self-Assessment at approved dealership",
                    covered: true,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700">{item.label}</span>
                    {item.covered ? (
                      <Check className="w-6 h-6 text-[#1894a4]" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Depreciation Policy */}
          {activeTab === "depreciation" && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <p className="text-gray-700 text-center mb-8 text-sm md:text-base leading-relaxed">
                  Following rates of depreciation shall be applied in the event
                  of claim on replacement parts including glass and plastic
                  items. Depreciation is from year of manufacture not year of
                  registration.
                </p>

                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-4 text-left text-xs md:text-sm font-bold text-[#1A3970] uppercase tracking-wider">
                            Year / Month
                          </th>
                          <th className="px-4 py-4 text-left text-xs md:text-sm font-bold text-[#1A3970] uppercase tracking-wider">
                            Percentage
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { period: "0 - 6 months", percent: "5%" },
                          { period: "7 - 12 months", percent: "10%" },
                          { period: "13 - 24 months", percent: "20%" },
                          { period: "25 - 36 months", percent: "30%" },
                          { period: "37 - 48 months", percent: "40%" },
                          { period: "49 - 60 months", percent: "50%" },
                          { period: "61 - 72 months or more", percent: "60%" },
                        ].map((row) => (
                          <tr key={row.period} className="hover:bg-gray-50">
                            <td className="px-4 py-4 text-sm md:text-base text-gray-700">
                              {row.period}
                            </td>
                            <td className="px-4 py-4 text-sm md:text-base font-semibold text-gray-800">
                              {row.percent}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Claim Process - FULLY RESPONSIVE & NO OVERFLOW */}
          {activeTab === "claim" && (
            <div className="bg-[#e6f4f8] rounded-2xl p-6 md:p-10 text-center">
              <div className="flex flex-col items-center gap-4 text-[#1A3970]">
                <Info className="w-8 h-8 flex-shrink-0" />
                <p className="text-sm md:text-lg leading-relaxed px-4">
                  Call on the numbers here which is closest to you:{" "}
                  <a
                    href="https://www.pakqatar.com.pk/general/individual-takaful/motor-takaful/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1894a4] underline font-semibold hover:text-[#117a8b] break-all md:break-normal"
                  >
                    https://www.pakqatar.com.pk/general/individual-takaful/motor-takaful/
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsurancePlanDetails;
