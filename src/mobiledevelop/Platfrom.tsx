// // import React from "react";

// // interface FeatureItem {
// //   icon: React.ReactElement;
// //   title: string;
// //   color: string;
// // }

// // interface FeatureGridSectionProps {
// //   title: string;
// //   features: FeatureItem[];
// // }

// // const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({
// //   title,
// //   features,
// // }) => {
// //   return (
// //     <section className="w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 bg-gray-50">
// //       <div className="max-w-6xl mx-auto w-full">
// //         <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
// //           {title}
// //         </h2>

// //         {/* Responsive Grid */}
// //         <div
// //           className="grid gap-8 justify-center"
// //           style={{
// //             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //           }}
// //         >
// //           {features.map((f, idx) => (
// //             <div
// //               key={idx}
// //               className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg w-full"
// //             >
// //               <div
// //                 className={`p-3 rounded-xl ${f.color} flex items-center justify-center`}
// //               >
// //                 {React.isValidElement(f.icon) && React.cloneElement(f.icon, {})}
// //               </div>

// //               <span className="text-gray-700 font-semibold">{f.title}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeatureGridSection;

// import React from "react";

// interface FeatureItem {
//   icon: React.ReactElement;
//   title: string;
//   color: string;
// }

// interface FeatureGridSectionProps {
//   title: string;
//   features: FeatureItem[];
// }

// const Platform: React.FC<FeatureGridSectionProps> = ({ title, features }) => {
//   return (
//     <section className="w-full  flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 bg-gray-50">
//       <div className="max-w-8xl mx-auto w-full">
//         {/* Responsive Title */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 leading-snug">
//           {title}
//         </h2>

//         {/* Responsive Grid with 3 columns on large screens */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((f, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white rounded-2xl shadow-lg w-full"
//             >
//               <div
//                 className={`p-3 rounded-xl ${f.color} flex items-center justify-center flex-shrink-0`}
//               >
//                 {React.isValidElement(f.icon) &&
//                   React.cloneElement(
//                     f.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
//                     {
//                       className: "w-6 h-6 sm:w-7 md:w-8",
//                     }
//                   )}
//               </div>

//               <span className="text-gray-700 font-semibold text-center sm:text-left text-base sm:text-lg md:text-xl break-words">
//                 {f.title}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Platform;

import React from "react";

interface FeatureItem {
  icon: React.ReactElement;
  title: string;
  color?: string;
}

interface FeatureGridSectionProps {
  title: string;
  features: FeatureItem[];
}

const Platform: React.FC<FeatureGridSectionProps> = ({ title, features }) => {
  return (
    <section className="w-full flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 bg-gray-50">
      <div className="max-w-8xl mx-auto w-full">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 leading-snug">
          {title}
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`
                relative flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6
                rounded-2xl overflow-hidden
                bg-gradient-to-r from-[#1A3970] to-[#2ba9b4]
                text-white font-semibold
                shadow-lg
                transition-all duration-500
                hover:scale-105 hover:shadow-[0_0_30px_rgba(43,169,180,0.5)]
                group
              `}
            >
              {/* Icon Box */}
              <div
                className={`
                  relative p-4 rounded-xl flex items-center justify-center flex-shrink-0
                  bg-white/10 backdrop-blur-md
                  shadow-md
                  w-14 h-14 sm:w-16 sm:h-16
                  group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                `}
              >
                {React.isValidElement(f.icon) &&
                  React.cloneElement(
                    f.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
                    { className: "w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-md" }
                  )}

                {/* Icon Shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 transform -skew-x-12 animate-shine pointer-events-none"></span>
              </div>

              {/* Title */}
              <span className="relative z-10 text-center sm:text-left text-base sm:text-lg md:text-xl break-words">
                {f.title}
              </span>

              {/* Card Glow Overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#2ba9b4] to-[#1A3970] opacity-0 transition-opacity duration-500 group-hover:opacity-40 animate-pulse pointer-events-none"></span>

              {/* Card Shine Animation */}
              <style>
                {`
                  @keyframes shine {
                    0% { left: -100%; }
                    20% { left: 100%; }
                    100% { left: 100%; }
                  }
                  .animate-shine {
                    animation: shine 3s infinite ease-in-out;
                  }
                `}
              </style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
