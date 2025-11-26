// import React from "react";
// import benefitImg from "/benefit.png";

// const VehicleTrackingHero: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
//       {/* Custom Container with Proper Padding */}
//       <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
//         <div className="max-w-screen-2xl mx-auto"> {/* Optional: limit max width */}
//           <div className="py-12 lg:py-20">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

//               {/* Left Side - Text & Certifications */}
//               <div className="space-y-8">
//                 <div className="space-y-4">
//                   <p className="text-[#1894A4] font-semibold text-sm uppercase tracking-wider">
//                     Why Choose Us?
//                   </p>
//                   <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                     Key Features & <span className="text-[#1894A4]">Benefits</span>
//                   </h1>
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     Experience unmatched convenience and security with our advanced vehicle tracking solutions.
//                   </p>
//                 </div>

//                 <button className="bg-[#1A3970] hover:bg-[#142b55] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Learn More
//                 </button>

//                 {/* Certifications */}
//                 <div className="flex flex-wrap gap-8 pt-8 justify-center lg:justify-start">
//                   <div className="flex flex-col items-center text-center">
//                     <img src="/pta.png" alt="PTA Approved" className="w-16 h-16 mb-3" />
//                     <p className="text-xs font-medium text-gray-600">PTA Approved</p>
//                     <p className="text-xs text-gray-500">Devices</p>
//                   </div>
//                   <div className="flex flex-col items-center text-center">
//                     <img src="/iso.png" alt="ISO Certified" className="w-16 h-16 mb-3" />
//                     <p className="text-xs font-medium text-gray-600">ISO Certified</p>
//                     <p className="text-xs text-gray-500">Devices</p>
//                   </div>
//                   <div className="flex flex-col items-center text-center max-w-[160px]">
//                     <img src="/pcs.png" alt="PCSIR" className="w-16 h-16 mb-3" />
//                     <p className="text-xs font-medium text-gray-600 leading-tight">
//                       Certified from Pakistan<br/>
//                        Council of Scientific
//                         & Industrial Research
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side - Features + Image */}
//               <div className="space-y-10">
//                 {/* 3 Feature Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//                   <div className="text-center">
//                     <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
//                       <img src="/realtime.svg" alt="Real-Time" className="w-10 h-10" />
//                     </div>
//                     <h3 className="font-bold text-blue-900 text-lg mb-2">Real-Time Tracking</h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Get live updates on vehicle locations with precision to ensure operations and peace of mind.
//                     </p>
//                   </div>

//                   <div className="text-center">
//                     <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
//                       <img src="/geo.svg" alt="Geo-Fencing" className="w-10 h-10" />
//                     </div>
//                     <h3 className="font-bold text-blue-900 text-lg mb-2">Geo-Fencing Alerts</h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Set custom boundaries and receive instant alerts for unauthorized movements.
//                     </p>
//                   </div>

//                   <div className="text-center">
//                     <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
//                       <img src="/driving.svg" alt="Driver Monitoring" className="w-10 h-10" />
//                     </div>
//                     <h3 className="font-bold text-blue-900 text-lg mb-2">Driver Monitoring</h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Track speed, braking, and idling patterns to improve safety and reduce costs.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Main Illustration */}
//                 <div className="mt-12">
//                   <img
//                     src={benefitImg}
//                     alt="Vehicle Tracking Illustration"
//                     className="w-full h-auto rounded-3xl shadow-2xl object-cover border-8 border-white"
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VehicleTrackingHero;

import React from "react";
import benefitImg from "/benefit.png";

const VehicleTrackingHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">

              {/* Left Side - Text & CTA */}
              <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
                <div className="space-y-5">
                  <p className="text-[#1894A4] font-bold text-sm uppercase tracking-wider">
                    Why Choose Us?
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    Key Features &{" "}
                    <span className="text-[#1894A4]">Benefits</span>
                  </h1>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Experience unmatched convenience and security with our advanced vehicle tracking solutions.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button className="bg-[#1A3970] hover:bg-[#142b55] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                    Learn More
                  </button>
                </div>

                {/* Certifications - Responsive Flex */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-10 pt-8">
                  <div className="flex flex-col items-center space-y-2">
                    <img src="/pta.png" alt="PTA" className="w-14 h-14 sm:w-16 sm:h-16" />
                    <p className="text-xs sm:text-sm font-semibold text-gray-500">PTA Approved<br/> Devices</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img src="/iso.png" alt="ISO" className="w-14 h-14 sm:w-16 sm:h-16" />
                    <p className="text-xs sm:text-sm font-semibold text-gray-500">ISO Certified <br/> Devices</p>
                   
                  </div>
                  <div className="flex flex-col items-center space-y-2 max-w-[160px]">
                    <img src="/pcs.png" alt="PCSIR" className="w-14 h-14 sm:w-16 sm:h-16" />
                    <p className="text-xs sm:text-sm font-medium text-gray-500 text-center leading-tight">
                      Certified from Pakistan<br/>
                       Council of Scientific 
                       & Industrial Research
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Features + Image */}
              <div className="space-y-12 lg:space-y-16">
                {/* 3 Feature Cards - Fully Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
                  {[
                    {
                      icon: "/realtime.svg",
                      title: "Real-Time Tracking",
                      desc: "Live vehicle location updates with precision"
                    },
                    {
                      icon: "/geo.svg",
                      title: "Geo-Fencing Alerts",
                      desc: "Instant alerts for route deviations"
                    },
                    {
                      icon: "/driving.svg",
                      title: "Driver Monitoring",
                      desc: "Track speed, braking & fuel efficiency"
                    }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="text-center group transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-2xl transition-shadow">
                        <img src={feature.icon} alt={feature.title} className="w-9 h-9" />
                      </div>
                      <h3 className="font-bold text-blue-900 text-lg mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed px-2">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Main Image - Perfectly Responsive */}
                <div className="relative -mx-4 sm:mx-0 mt-10 lg:mt-16">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-8 sm:border-[12px] border-white">
                    <img
                      src={benefitImg}
                      alt="Vehicle Tracking System"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* Optional subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTrackingHero;