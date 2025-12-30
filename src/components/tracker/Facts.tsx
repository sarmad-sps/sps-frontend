import React from "react";
import { Car, Gauge, Tag, MapPin } from "lucide-react";

const TrackingServiceSection: React.FC = () => {
  return (
    <section className="w-full bg-[#1C4D8D] py-16 px-4 md:px-10 lg:px-14  2xl:px-18 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN — TEXT + STATS */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-left gap-3 mb-4">
                <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" />
                <p className="text-[#ffff] font-bold text-xs sm:text-sm tracking-widest uppercase">
                  Essentials Facts
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                TRACK YOUR VEHICLES WITH EASE AND CONFIDENCE
              </h2>

              <p className="text-xs md:text-sm max-w-md text-white leading-relaxed">
                Our Tracking Platform gives you complete control and visibility
                over your fleet. Monitor vehicles in real-time, optimize routes,
                and improve efficiency—all from a simple, intuitive dashboard.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <StatCard
                icon={<Car className="w-8 h-8 text-white" />}
                value="1,200+"
                label="Vehicles Monitored"
                color="teal"
              />

              <StatCard
                icon={<Gauge className="w-8 h-8 text-white" />}
                value="12M+"
                label="Miles Tracked"
                color="blue"
              />

              <StatCard
                icon={<Tag className="w-8 h-8 text-white" />}
                value="18K+"
                label="Trips Completed"
                color="blue"
              />

              <StatCard
                icon={<MapPin className="w-8 h-8 text-white" />}
                value="50+"
                label="Cities Covered"
                color="teal"
              />
            </div>
          </div>

          {/* RIGHT COLUMN — FIXED IMAGE SECTION */}
          <div className="relative mt-36 lg:mt-28 h-[520px] w-full flex items-end justify-center lg:justify-end 2xl:w-[750px]">
            {/* Dots Top Right */}
            <div className="absolute top-24 lg:top-16 right-8 z-0 hidden lg:block">
              <DotPattern />
            </div>

            {/* BACK IMAGE — Car on Road */}
            <div
              className="absolute left-0 lg:left-8 top-20 z-10 
    w-[75%] max-w-[380px] lg:w-[380px]
    rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/carroad.jpg"
                alt="Car exterior"
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>

            {/* FRONT IMAGE — Driver */}
            <div
              className="absolute bottom-[-100px] right-0 z-20 
    w-[80%] max-w-[420px] lg:w-[420px]
    rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/driver.jpg"
                alt="Driver inside car"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>

            {/* Dots Bottom Left */}
            <div className="absolute bottom-[-30px] left-6 z-0 hidden lg:block">
              <DotPattern />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ======================================================
// STAT CARD COMPONENT
// ======================================================
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: "teal" | "blue";
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color }) => {
  const bgColor = color === "teal" ? "bg-[#169eb7]" : "bg-[#21366e]";

  return (
    <div
      className={`${bgColor} p-3 rounded-2xl shadow-lg aspect-square 
      flex flex-col items-center justify-center text-center text-white 
      group transition-transform hover:scale-105`}
    >
      <div className="w-full h-full border border-white/20 rounded-xl flex flex-col items-center justify-center p-2 space-y-2">
        <div className="mb-1 opacity-90">{icon}</div>
        <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
          {value}
        </h3>
        <p className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">
          {label}
        </p>
      </div>
    </div>
  );
};

// ======================================================
// DECORATIVE DOT PATTERN COMPONENT
// ======================================================
const DotPattern = () => (
  <div className="grid grid-cols-6 gap-2 opacity-40">
    {[...Array(36)].map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
    ))}
  </div>
);

export default TrackingServiceSection;