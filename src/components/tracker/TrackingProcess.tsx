// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const TrackingSection = () => {
//   const packages = [
//     {
//       id: 1,
//       title: "Track Me",
//       status: "Available",
//       progress: 75,
//       info: "Basic Security",
//       isCenter: false,
//       features: [
//         "Nationwide GSM coverage",
//         "Real time tracking",
//         "24/7 customer care",
//         "Battery tampering",
//         "Theft recovery assistance",
//       ],
//     },
//     {
//       id: 2,
//       title: "Fleet Minder",
//       status: "In Transit",
//       progress: 95,
//       info: "Advanced Solutions",
//       isCenter: true,
//       features: [
//         "Nationwide GSM coverage",
//         "Round the clock tracking",
//         "Jammer detection device",
//         "Location on call",
//         "Call on geo fence",
//         "Live web access",
//         "Sms on alerts",
//         "Remote immobilization",
//       ],
//     },
//     {
//       id: 3,
//       title: "Secure On",
//       status: "Premium",
//       progress: 60,
//       info: "Premium Protection",
//       isCenter: false,
//       features: [
//         "Everything in Fleet Minder",
//         "Fuel Monitoring System",
//         "Temperature Sensor",
//         "Driver Identification",
//         "Door Open/Close Alert",
//       ],
//     },
//   ];

//   const navigate = useNavigate();
//   const location = useLocation();

//   const goToForm = () => {
//     if (location.pathname === "/tracker") {
//       const el = document.getElementById("tracker-form");
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//       else window.location.hash = "tracker-form";
//     } else {
//       navigate("/tracker#tracker-form");
//     }
//   };

//   return (
//     /* --- NEW BACKGROUND COLOR & STYLE --- */
//     <div className="min-h-screen bg-[#1C4D8D] relative flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      
//       {/* Decorative Background Elements (Optional for "Tech" look) */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none" 
//            style={{ backgroundImage: `radial-gradient(#22d3ee 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
//       </div>

//       {/* Main Header */}
//       <div className="text-center mb-16 relative z-10">
//         <h1 className="text-cyan-400 text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
//           Tracker <span className="text-white">Packages</span>
//         </h1>
//         <div className="h-1.5 w-48 bg-cyan-500 mx-auto mt-4 shadow-[0_0_25px_#22d3ee] rounded-full"></div>
//       </div>

//       <style>{`
//         .card-container { perspective: 2000px; }
//         .card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//           transform-style: preserve-3d;
//         }
//         .card-container:hover .card-inner { transform: rotateY(180deg); }
//         .card-front, .card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden;
//           border-radius: 2rem;
//           border: 1px solid rgba(255,255,255,0.1);
//         }
//         /* Glassmorphism Front */
//         .card-front {
//           background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%);
//           backdrop-filter: blur(12px);
//         }
//         .card-back { 
//           transform: rotateY(180deg); 
//           background: #0f172a;
//         }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: #f97316; border-radius: 10px; }
//       `}</style>

//       <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl relative z-10">
//         {packages.map((pkg) => (
//           <div
//             key={pkg.id}
//             className={`card-container w-full md:w-[340px] h-[520px] group transition-all duration-500 ${
//               pkg.isCenter ? "scale-105 z-20" : "scale-95 opacity-80 hover:opacity-100"
//             }`}
//           >
//             <div className="card-inner shadow-[0_20px_60px_rgba(0,0,0,0.6)] group-hover:shadow-cyan-500/10">
              
//               {/* --- FRONT SIDE --- */}
//               <div className="card-front flex flex-col items-center justify-center p-8 overflow-hidden">
//                 <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px]"></div>
                
//                 <div className="relative z-10 text-center flex flex-col items-center w-full">
//                   <div className="mb-4 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
//                     {pkg.status}
//                   </div>
                  
//                   <h2 className="text-white text-4xl font-black italic tracking-tighter uppercase leading-none mb-4">
//                     {pkg.title}
//                   </h2>
                  
//                   <div className="w-16 h-1.5 rounded-full mb-8 bg-cyan-500 shadow-[0_0_15px_#22d3ee]"></div>

//                   {/* Progress Section */}
//                   <div className="w-full bg-black/40 p-4 rounded-2xl border border-white/5 mb-6">
//                     <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter text-slate-400 mb-2">
//                       <span>Network Sync</span>
//                       <span className="text-cyan-400">{pkg.progress}%</span>
//                     </div>
//                     <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-cyan-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_#22d3ee]"
//                         style={{ width: `${pkg.progress}%` }}
//                       ></div>
//                     </div>
//                   </div>

//                   <p className="text-slate-400 text-xs font-medium uppercase tracking-[3px] italic">
//                     {pkg.info}
//                   </p>
//                 </div>
//               </div>

//               {/* --- BACK SIDE --- */}
//               <div className="card-back border-2 border-orange-500/20 flex flex-col overflow-hidden">
//                 <div className="relative p-6 border-b border-white/10 bg-slate-950">
//                   <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 shadow-[0_0_20px_#f97316]"></div>
                  
//                   <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">
//                     {pkg.title}
//                   </h3>
//                   <p className="text-[10px] font-bold tracking-[3px] uppercase text-orange-500 mt-1">
//                     Specifications
//                   </p>
//                 </div>

//                 <div className="flex-1 px-8 py-6 overflow-y-auto custom-scrollbar bg-slate-900/40">
//                   <ul className="space-y-4">
//                     {pkg.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start text-[11px] text-slate-200 font-bold uppercase italic tracking-tight group/item">
//                         <div className="mr-3 mt-1 w-2 h-4 transform skew-x-[-20deg] bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
//                         <span className="group-hover/item:text-orange-400 transition-colors">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="p-6 bg-slate-950">
//                   <button
//                     onClick={goToForm}
//                     className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic tracking-[4px] text-xs transition-all shadow-[0_10px_20px_rgba(249,115,22,0.2)]"
//                   >
//                     Activate Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrackingSection;
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TrackingSection = () => {
  const packages = [
    {
      id: 1,
      title: "Track Me",
      status: "Available",
      progress: 75,
      info: "Basic Security",
      isCenter: false,
      features: [
        "Nationwide GSM coverage",
        "Real time tracking",
        "24/7 customer care",
        "Battery tampering",
        "Theft recovery assistance",
      ],
    },
    {
      id: 2,
      title: "Fleet Minder",
      status: "In Transit",
      progress: 95,
      info: "Advanced Solutions",
      isCenter: true,
      features: [
        "Nationwide GSM coverage",
        "Round the clock tracking",
        "Jammer detection device",
        "Location on call",
        "Call on geo fence",
        "Live web access",
        "Sms on alerts",
        "Remote immobilization",
      ],
    },
    {
      id: 3,
      title: "Secure On",
      status: "Premium",
      progress: 60,
      info: "Premium Protection",
      isCenter: false,
      features: [
        "Everything in Fleet Minder",
        "Fuel Monitoring System",
        "Temperature Sensor",
        "Driver Identification",
        "Door Open/Close Alert",
      ],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const goToForm = () => {
    if (location.pathname === "/tracker") {
      const el = document.getElementById("tracker-form");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.hash = "tracker-form";
    } else {
      navigate("/tracker#tracker-form");
    }
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      
      {/* Optional subtle pattern on parent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#1C4D8D 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-[#1C4D8D] text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
          Tracker <span className="text-cyan-400">Packages</span>
        </h1>
        <div className="h-1.5 w-48 bg-cyan-400 mx-auto mt-4 shadow-[0_0_20px_rgba(34,211,238,0.6)] rounded-full"></div>
      </div>

      <style>{`
        .card-container { perspective: 2000px; }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .card-container:hover .card-inner { transform: rotateY(180deg); }
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 2rem;
        }
        .card-front {
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .card-back {
          transform: rotateY(180deg);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #f97316; border-radius: 10px; }
      `}</style>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl relative z-10 ">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.id}
            className={`card-container w-full md:w-[340px] h-[520px]  group transition-all duration-500 ${pkg.isCenter ? "scale-105 z-20" : "scale-95 opacity-90 hover:opacity-100"}`}
          >
            <div className="card-inner shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-full group-hover:shadow-cyan-400/20">

              {/* FRONT SIDE */}
              <div
                className="card-front flex flex-col items-center justify-center p-8 overflow-hidden"
                style={{
                  background: idx === 0
                    ? "linear-gradient(135deg, #1C4D8D, #0f2e54)"
                    : idx === 1
                    ? "linear-gradient(135deg, #0f2e54, #1C4D8D)"
                    : "linear-gradient(135deg, #143d71, #0f2e54)",
                }}
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-[50px]"></div>
                <div className="relative z-10 text-center flex flex-col items-center w-full">
                  <div className="mb-4 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white border border-white/30">
                    {pkg.status}
                  </div>
                  <h2 className="text-white text-4xl font-black italic tracking-tighter uppercase leading-none mb-4">
                    {pkg.title}
                  </h2>
                  <div className="w-16 h-1.5 rounded-full mb-8 bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
                  <div className="w-full bg-black/20 p-4 rounded-2xl border border-white/10 mb-6">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-tighter text-blue-100 mb-2">
                      <span>System Ready</span>
                      <span className="text-cyan-300">{pkg.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_#22d3ee]"
                        style={{ width: `${pkg.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-blue-100/70 text-xs font-medium uppercase tracking-[3px] italic">
                    {pkg.info}
                  </p>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                className="card-back flex flex-col overflow-hidden"
                style={{
                  background: idx === 0
                    ? "#0f2e54"
                    : idx === 1
                    ? "#163a69"
                    : "#0a1f3a",
                }}
              >
                <div className="relative p-6 border-b border-white/10">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 shadow-[0_0_20px_#f97316]"></div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-[10px] font-bold tracking-[3px] uppercase text-orange-400 mt-1">
                    Features List
                  </p>
                </div>

                <div className="flex-1 px-8 py-6 overflow-y-auto custom-scrollbar">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[11px] text-white font-bold uppercase italic tracking-tight group/item">
                        <div className="mr-3 mt-1 w-2 h-4 transform skew-x-[-20deg] bg-orange-500"></div>
                        <span className="group-hover/item:text-orange-400 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6">
                  <button
                    onClick={goToForm}
                    className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic tracking-[4px] text-xs transition-all shadow-lg active:scale-95"
                  >
                    Select Plan
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingSection;
