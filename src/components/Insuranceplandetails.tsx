import { Check, X, Info } from 'lucide-react';
import React, { useState } from 'react';

interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  total: string;           // Yeh WITHOUT tracker wali price hai (e.g. "RS. 7,800")
  trackerAmount?: string;  // e.g. "6,000"
}

const InsurancePlanDetails: React.FC<{ quote: InsuranceQuote }> = ({ quote }) => {
  const basePrice = parseInt(quote.total.replace(/[^0-9]/g, ''), 10) || 0;
  const trackerPrice = parseInt(quote.trackerAmount?.replace(/[^0-9]/g, '') || '6000', 10);

  // Default: Tracker OFF
  const [withTracker, setWithTracker] = useState(false);

  // Jab tracker ON → +6000, OFF → base price
  const finalPrice = withTracker ? basePrice + trackerPrice : basePrice;

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <img src={quote.logo} alt="Jubilee Insurance" className="h-20 mx-auto" />
        </div>

        {/* Main Card - Exactly like your first image */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left - Price */}
            <div className="bg-gray-100 p-8 lg:p-12 text-center lg:text-left">
              <div className="text-6xl font-bold text-[#1A3970] mb-2">
                RS. {finalPrice.toLocaleString()}
              </div>
              <p className="text-gray-600 text-lg mb-6">Total amount</p>

              {/* Tracker Toggle - Default OFF */}
              <div className="flex items-center justify-center lg:justify-start gap-4 bg-gray-200 px-6 py-4 rounded-full max-w-md mx-auto lg:mx-0">
                {withTracker ? (
                  <Check className="w-6 h-6 text-green-600" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
                <span className="font-medium text-gray-700">
                  with Tracker PKR {trackerPrice.toLocaleString()}
                </span>

                {/* Toggle Switch */}
                <button
                  onClick={() => setWithTracker(prev => !prev)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    withTracker ? 'bg-[#1894a4]' : 'bg-gray-400'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
                      withTracker ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Right - Teal Section */}
            <div className="bg-[#1894a4] text-white p-8 lg:p-12">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold">3T-Old Car Insurance</h3>
                <div className="flex items-center gap-3">
                  <span className="text-5xl font-bold">{quote.rate}</span>
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#0066CC] hover:bg-[#0055aa] text-white font-bold py-4 px-12 rounded-full text-lg transition">
                INQUIRE NOW
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-12 rounded-full text-lg transition">
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="mt-12">
          <div className="flex gap-10 border-b-2 border-gray-300 pb-4 mb-8">
            <button className="text-[#1894a4] font-bold text-lg border-b-4 border-[#1894a4] pb-3">
              Depreciation Policy
            </button>
            <button className="text-gray-600 font-medium text-lg pb-3 hover:text-[#1894a4]">
              Claim Policy
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Coverage */}
            <div className="bg-[#E8F4F8] rounded-2xl p-6">
              <h3 className="font-bold text-xl text-[#1A3970] mb-6">Main Coverage</h3>
              {["Accidental damages","Fire","Total Loss","Theft/Snatch","Natural Calamities","Riots & Strike","Terrorism","Deductible","No Claim Discount"].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                  <span className="text-gray-700">{item}</span>
                  <Check className="w-6 h-6 text-[#1894a4]" />
                </div>
              ))}
            </div>

            {/* Third Party */}
            <div className="bg-[#E8F4F8] rounded-2xl p-6">
              <h3 className="font-bold text-xl text-[#1A3970] mb-6">Third Party Coverage</h3>
              {[
                {label: "Death Bodily injury", covered: false},
                {label: "Property Damages", covered: true},
                {label: "Emergency Medical expenses", covered: true}
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                  <span className="text-gray-700">{item.label}</span>
                  {item.covered ? <Check className="w-6 h-6 text-[#1894a4]" /> : <X className="w-6 h-6 text-red-500" />}
                </div>
              ))}
            </div>

            {/* Value Added */}
            <div className="bg-[#E8F4F8] rounded-2xl p-6">
              <h3 className="font-bold text-xl text-[#1A3970] mb-6">Value Added features</h3>
              {[
                {label: "Tracker", covered: withTracker},
                {label: "Call Center support", covered: true},
                {label: "In-house surveyors", covered: true},
                {label: "Replacement at Door Step", covered: false},
                {label: "Mobile App", covered: false},
                {label: "Self-Assessment at approved dealership", covered: true}
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                  <span className="text-gray-700">{item.label}</span>
                  {item.covered ? <Check className="w-6 h-6 text-[#1894a4]" /> : <X className="w-6 h-6 text-red-500" />}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InsurancePlanDetails;