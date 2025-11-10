import { type ReactNode } from "react";

interface VehicleInfoProps {
  vehicleType: "car" | "bike" | "health" | "travel";
  title: ReactNode;
  subtitle: string;
  vehicleImage: string;
}

const VehicleInfoSection1 = ({
  vehicleType,
  title,
  subtitle,
  vehicleImage,
}: VehicleInfoProps) => {
  return (
    <section className="w-full bg-white py-8 md:py-12 pb-2 md:pb-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-4 gap-8">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <p className="text-gray-600 text-sm mb-2">≫≫ FREE QUOTE ≪≪</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3970] mb-2 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 ">{subtitle}</p>
          </div>

          {/* Right Side - Image and Buttons */}
          <div className="lg:flex-shrink-0">
            {vehicleType === "car" ||
            vehicleType === "health" ||
            vehicleType === "travel" ? (
              /* Car/Health/Travel Layout - Image above buttons (vertical) */
              <div className="flex flex-col items-center gap-4">
                {/* Vehicle Image */}
                <div className="flex justify-center w-full">
                  <img
                    src={vehicleImage}
                    alt={
                      vehicleType === "health"
                        ? "Health Insurance"
                        : vehicleType === "travel"
                        ? "Travel Insurance"
                        : "Car"
                    }
                    className={`h-auto ${
                      vehicleType === "health"
                        ? "w-20 filter brightness-0" // Much smaller and black & white for health
                        : vehicleType === "travel"
                        ? "w-32" // Medium size for travel
                        : "w-40" // Normal size for car
                    }`}
                  />
                </div>

                {/* Category Buttons - centered under the image */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <button className="bg-[#1A3970] text-white px-6 py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                    RENT
                  </button>
                  <button className="bg-[#1A3970] text-white px-6 py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                    VEHICLES
                  </button>
                  <button className="bg-[#1A3970] text-white px-6 py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                    HEALTH
                  </button>
                  <button className="bg-[#1A3970] text-white px-6 py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                    TRAVEL
                  </button>
                </div>
              </div>
            ) : (
              /* Bike Layout - Image and buttons in same row (horizontal) */
              <div className="flex items-center gap-6">
                {/* Vehicle Image */}
                <div className="flex justify-center">
                  <img src={vehicleImage} alt="Bike" className="w-40 h-auto" />
                </div>

                {/* Category Buttons - next to the image in one line */}
                <div className="flex gap-3">
                  <button className="bg-[#1A3970] text-white px-6 py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                    RENT
                  </button>
                  <button className="bg-[#1A3970] text-white px-6 py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                    VEHICLES
                  </button>
                  <button className="bg-[#1A3970] text-white px-6 py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                    HEALTH
                  </button>
                  <button className="bg-[#1A3970] text-white px-6 py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors">
                    TRAVEL
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleInfoSection1;
