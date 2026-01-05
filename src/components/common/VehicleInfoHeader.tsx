// import { type ReactNode } from "react";
// import { motion } from "framer-motion";

// interface VehicleInfoProps {
//   vehicleType: "car" | "bike" | "health" | "travel";
//   title: ReactNode;
//   subtitle: string;
//   vehicleImage: string;  // image ya video path (extension se detect karega)
// }

// const VehicleInfoSection1 = ({
//   vehicleType,
//   title,
//   subtitle,
//   vehicleImage,
// }: VehicleInfoProps) => {
//   // Extension check kar ke decide karega video hai ya image
//   const isVideo = /\.(mp4|webm|ogg)$/i.test(vehicleImage);

//   return (
//     <section id="vehicle-info-header" className="w-full bg-white py-8 md:py-12 pb-2 md:pb-4">
//       <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
//         <div className="flex flex-col items-center lg:flex-row md:items-start justify-between mb-4 gap-8">
          
//           {/* Left Side - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="flex-1"
//           >
//             <p className="text-gray-600 text-sm mb-2">FREE QUOTE</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#1A3970] mb-2 leading-tight">
//               {title}
//             </h2>
//             <p className="text-gray-600">{subtitle}</p>
//           </motion.div>

//           {/* Right Side - Image/Video */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//             className="lg:flex-shrink-0"
//           >
//             <div className="flex flex-col items-center justify-center gap-4">
//               <div className="flex justify-center w-full">
//                 {isVideo ? (
//                   // Video for any type if .mp4 etc.
//                   <video
//                     src={vehicleImage}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="h-auto w-40 md:w-48 lg:w-60 object-contain rounded-lg"
//                   />
//                 ) : (
//                   // Static image fallback
//                   <img
//                     src={vehicleImage}
//                     alt={
//                       vehicleType === "health"
//                         ? "Health Insurance"
//                         : vehicleType === "travel"
//                         ? "Travel Insurance"
//                         : vehicleType === "bike"
//                         ? "Bike"
//                         : "Car"
//                     }
//                     className={`h-auto transition-all duration-300 ${
//                       vehicleType === "health"
//                         ? "w-20 filter brightness-0"
//                         : vehicleType === "travel"
//                         ? "w-32"
//                         : "w-40 md:w-48 lg:w-60"  // car/bike ke liye same size
//                     }`}
//                   />
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VehicleInfoSection1;
import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface VehicleInfoProps {
  vehicleType: "car" | "bike" | "health" | "travel";
  title: ReactNode;
  subtitle: string;
  vehicleImage: string; // image ya video path
}

const VehicleInfoSection1 = ({
  vehicleType,
  title,
  subtitle,
  vehicleImage,
}: VehicleInfoProps) => {
  // Video sirf tab allow ho jab health na ho
  const isVideo =
    vehicleType !== "health" &&
    /\.(mp4|webm|ogg)$/i.test(vehicleImage);

  return (
    <section className="w-full bg-white py-8 md:py-12 pb-2 md:pb-4">
      <div className="w-full px-4 md:px-10 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <p className="text-gray-600 text-sm mb-2">FREE QUOTE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3970] mb-2">
              {title}
            </h2>
            <p className="text-gray-600">{subtitle}</p>
          </motion.div>

          {/* Right Image / Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isVideo ? (
              <video
                src={vehicleImage}
                autoPlay
                loop
                muted
                playsInline
                className="w-40 md:w-48 lg:w-60 object-contain rounded-lg"
              />
            ) : (
             <img
  src={vehicleImage}
  alt="Insurance"
  className={`h-auto ${
    vehicleType === "health"
      ? "w-32 md:w-36 lg:w-40"   // ✅ size increase
      : vehicleType === "travel"
      ? "w-32"
      : "w-40 md:w-48 lg:w-60"
  }`}
 />

            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VehicleInfoSection1;
