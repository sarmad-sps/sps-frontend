import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TrackingSection = () => {
  const packages = [
    {
      id: 1,
      title: "Track Me",
      status: "Available",
      progress: 30,
      info: "Basic Security",
      isCenter: false,
      theme: "cyan",
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
      progress: 75,
      info: "Advanced Solutions",
      isCenter: true,
      theme: "cyan", // Changed to cyan
      features: [
        "Nationwide GSM coverage",
        "Round the clock tracking",
        "Jammer detection device",
        "Location on call",
        "Call on geo fence",
        "Live web access",
        "Sms on alerts",
        "Battery tampering",
        "Remote immobilization",
      ],
    },
    {
      id: 3,
      title: "Secure On",
      status: "Premium",
      progress: 10,
      info: "Premium Protection",
      isCenter: false,
      theme: "cyan",
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
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "tracker-form";
      }
    } else {
      navigate("/tracker#tracker-form");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      {/* Main Header */}
      <div className="text-center mb-12 relative">
        <h1 className="text-cyan-400 text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Tracker <span className="text-white">Packages</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-3 shadow-[0_0_15px_#22d3ee]"></div>
      </div>

      <style>{`
        .card-container { perspective: 1500px; }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-style: preserve-3d;
        }
        .card-container:hover .card-inner { transform: rotateY(180deg); }
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 1.5rem;
        }
        .card-back { 
          transform: rotateY(180deg); 
          background: #0f172a;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
      `}</style>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`card-container w-full md:w-[320px] h-[480px] transition-all duration-500 ${
              pkg.isCenter ? "scale-105 z-20" : "scale-95 opacity-90"
            }`}
          >
            <div className="card-inner shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* --- FRONT SIDE --- */}
              <div className="card-front bg-slate-900 flex flex-col items-center justify-center p-6 border border-white/10">
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, #22d3ee 0%, transparent 70%)",
                  }}
                ></div>

                <div className="relative z-10 text-center flex flex-col items-center w-full">
                  <div className="mb-3 px-3 py-1 border rounded-full text-[9px] font-black uppercase tracking-[2px] bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
                    {pkg.status}
                  </div>
                  <h2 className="text-white text-3xl font-black italic tracking-tighter uppercase leading-none mb-3">
                    {pkg.title}
                  </h2>
                  <div className="w-12 h-1 rounded-full mb-6 bg-cyan-500 shadow-[0_0_8px_#22d3ee]"></div>

                  <div className="space-y-3 w-full px-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      <span>Sync</span>
                      <span className="text-cyan-400">
                        {pkg.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full">
                      <div
                        className="h-full rounded-full transition-all duration-1000 bg-cyan-400"
                        style={{ width: `${pkg.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="mt-6 text-slate-500 text-[10px] font-medium italic tracking-wide">
                    {pkg.info}
                  </p>
                </div>
              </div>

              {/* --- BACK SIDE --- */}
              <div className="card-back border-2 border-white/5 flex flex-col overflow-hidden shadow-2xl">
                <div className="relative p-5 border-b border-white/10 bg-slate-950">
                  {/* Decorative Scan Line */}
                  <div className="absolute top-0 left-0 w-1 h-full opacity-50 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></div>

                  <div className="relative z-10 pl-2">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-1 opacity-30">
                        <div className="w-4 h-1 bg-white"></div>
                        <div className="w-1 h-1 bg-white"></div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-[1000] uppercase italic tracking-tighter text-white leading-none">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-[9px] font-black tracking-[2px] uppercase text-cyan-400">
                        System Specifications
                      </p>
                      <div className="flex-1 h-[1px] bg-white/10"></div>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="flex-1 px-6 py-4 overflow-y-auto custom-scrollbar bg-slate-900/50">
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-[10px] text-slate-300 font-black uppercase italic tracking-tight group"
                      >
                        <div className="relative mr-3 mt-0.5">
                          <div className="w-1.5 h-3 transform skew-x-[-20deg] bg-cyan-500 shadow-[0_0_5px_#22d3ee]"></div>
                        </div>
                        <span className="group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Section */}
                <div className="p-5 bg-slate-950 border-t border-white/10">
                  <button
                    type="button"
                    onClick={goToForm}
                    className="
                    w-full py-4 rounded-none flex items-center justify-center gap-3 
                    text-white font-[1000] uppercase italic tracking-[3px] text-[10px] 
                    transition-all duration-300 transform active:scale-[0.98] 
                    group/btn relative overflow-hidden
                    bg-cyan-600 hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                  "
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative z-10">Order Plan</span>
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
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