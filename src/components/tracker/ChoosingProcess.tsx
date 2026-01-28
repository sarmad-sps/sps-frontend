import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Users, Truck, Activity, Radio } from "lucide-react";
import map from "../../assets/map5.png"
/* ---------------- Types ---------------- */
interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- Stat Card ---------------- */
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.45 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl 
               bg-[#0f3a7a]/80 border border-cyan-400/40
               shadow-[0_0_20px_rgba(34,211,238,0.12)]
               hover:scale-105 transition-transform duration-300"
  >
    <div className="p-2 sm:p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex-shrink-0">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 animate-pulse" />
    </div>
    <div>
      <p className="text-lg sm:text-xl font-bold text-white">{value}</p>
      <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wide">
        {label}
      </p>
    </div>
  </motion.div>
);

/* ---------------- Main Section ---------------- */
const CoverageSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full flex flex-col items-center p-4 sm:p-8 md:p-10 bg-[#1C4D8D]">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-center text-[#ffff] mb-10">
        Our Nationwide Tracking Services
      </h1>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl 2xl:max-w-[2200px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[520px]">
        {/* LEFT — MAP */}
        {/* LEFT — MAP */}
        <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm sm:max-w-md
               rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <img
              src={map}
              alt="Pakistan Map"
              className="
        w-full object-contain 
        rounded-3xl
      "
            />
          </motion.div>
        </div>

        {/* RIGHT — CONTENT */}
        <div
          className="lg:w-1/2 bg-gradient-to-br from-[#0b2c63] via-[#0a2a5a] to-[#081f45]
                     p-6 sm:p-10 md:p-16 2xl:p-20 flex flex-col justify-center items-center text-center"
          style={{
            clipPath: isDesktop ? "ellipse(100% 100% at 100% 50%)" : "none",
          }}
        >
          <div className="space-y-5 mb-10">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-cyan-300 font-semibold">
              Statistics & Coverage Area
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Providing services all <br />
              <span className="text-cyan-400">over Pakistan</span>
            </h2>

            <p className="text-white/70 text-sm max-w-md leading-relaxed">
              Our tracking services are nationwide, ensuring seamless coverage
              and secure real-time monitoring across Pakistan.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg">
            <StatCard icon={Radio} value="80K+" label="Trackers Installed" />
            <StatCard icon={Users} value="20K+" label="Active Clients" />
            <StatCard icon={Truck} value="3k+" label="Vehicles Recovered" />
            <StatCard
              icon={Shield}
              value="1 Million+"
              label="Alarms Attended"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
