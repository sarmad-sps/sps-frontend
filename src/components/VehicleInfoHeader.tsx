import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

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
  // determine which category button should be active
  const isButtonActive = (button: string) => {
    switch (button) {
      case "VEHICLES":
        return vehicleType === "car" || vehicleType === "bike";
      case "HEALTH":
        return vehicleType === "health";
      case "TRAVEL":
        return vehicleType === "travel";
      case "RENT":
        return (vehicleType as string) === "rent";
      default:
        return false;
    }
  };

  const btnBase =
    "text-white px-6 py-2 rounded font-semibold transition-colors";
  const activeClass = "bg-[#015fc9]";
  const inactiveClass = "bg-[#1A3970] hover:bg-[#2A4D8F]";
  const navigate = useNavigate();
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
            {vehicleType === "car" || vehicleType === "health" ? (
              /* Car Layout - Image above buttons (vertical) */
              <div className="flex flex-col items-center gap-4">
                {/* Vehicle Image */}
                <div className="flex justify-center w-full">
                  <img
                    src={vehicleImage}
                    alt={vehicleType === "health" ? "Health Insurance" : "Car"}
                    className={`h-auto ${
                      vehicleType === "health"
                        ? "w-20 filter brightness-0" // Much smaller and black & white for health
                        : "w-40" // Normal size for car
                    }`}
                  />
                </div>

                {/* Category Buttons - centered under the image */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    className={`${btnBase} ${
                      isButtonActive("RENT") ? activeClass : inactiveClass
                    }`}
                    onClick={() => navigate("/rent")}
                    aria-current={isButtonActive("RENT") ? "page" : undefined}
                  >
                    RENT
                  </button>
                  <button
                    className={`${btnBase} ${
                      isButtonActive("VEHICLES") ? activeClass : inactiveClass
                    }`}
                    onClick={() => navigate("/car")}
                    aria-current={
                      isButtonActive("VEHICLES") ? "page" : undefined
                    }
                  >
                    VEHICLES
                  </button>
                  <button
                    className={`${btnBase} ${
                      isButtonActive("HEALTH") ? activeClass : inactiveClass
                    }`}
                    onClick={() => navigate("/health")}
                    aria-current={isButtonActive("HEALTH") ? "page" : undefined}
                  >
                    HEALTH
                  </button>
                  <button
                    className={`${btnBase} ${
                      isButtonActive("TRAVEL") ? activeClass : inactiveClass
                    }`}
                    onClick={() => navigate("/travel")}
                    aria-current={isButtonActive("TRAVEL") ? "page" : undefined}
                  >
                    TRAVEL
                  </button>
                </div>
              </div>
            ) : (
              /* Bike/Travel Layout - Responsive: Image above buttons on small screens, side by side on larger screens */
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {/* Vehicle Image */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={vehicleImage}
                    alt={vehicleType === "travel" ? "Travel" : "Bike"}
                    className="w-40 h-auto"
                  />
                </div>

                {/* Category Buttons - below image on small screens, next to image on larger screens */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <button
                    className={`${btnBase} ${
                      isButtonActive("RENT") ? activeClass : inactiveClass
                    }`}
                    onClick={() => navigate("/rent")}
                    aria-current={isButtonActive("RENT") ? "page" : undefined}
                  >
                    RENT
                  </button>
                  <button
                    className={`${btnBase} ${
                      isButtonActive("VEHICLES") ? activeClass : inactiveClass
                    }`}
                    onClick={() => navigate("/car")}
                    aria-current={
                      isButtonActive("VEHICLES") ? "page" : undefined
                    }
                  >
                    VEHICLES
                  </button>
                  <button
                    className={`${btnBase} ${
                      isButtonActive("HEALTH") ? activeClass : inactiveClass
                    }`}
                    onClick={() => navigate("/health")}
                    aria-current={isButtonActive("HEALTH") ? "page" : undefined}
                  >
                    HEALTH
                  </button>
                  <button
                    className={`${btnBase} ${
                      isButtonActive("TRAVEL") ? activeClass : inactiveClass
                    }`}
                    onClick={() => navigate("/travel")}
                    aria-current={isButtonActive("TRAVEL") ? "page" : undefined}
                  >
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
