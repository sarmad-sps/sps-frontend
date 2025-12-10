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

// const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({
//   title,
//   features,
// }) => {
//   return (
//     <section className="w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto w-full">
//         <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
//           {title}
//         </h2>

//         {/* Responsive Grid */}
//         <div
//           className="grid gap-8 justify-center"
//           style={{
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           }}
//         >
//           {features.map((f, idx) => (
//             <div
//               key={idx}
//               className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg w-full"
//             >
//               <div
//                 className={`p-3 rounded-xl ${f.color} flex items-center justify-center`}
//               >
//                 {React.isValidElement(f.icon) && React.cloneElement(f.icon, {})}
//               </div>

//               <span className="text-gray-700 font-semibold">{f.title}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureGridSection;

import React from "react";

interface FeatureItem {
  icon: React.ReactElement;
  title: string;
  color: string;
}

interface FeatureGridSectionProps {
  title: string;
  features: FeatureItem[];
  
}

const Platform: React.FC<FeatureGridSectionProps> = ({
  title,
  features,
}) => {
  return (
    <section className="w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full">
        {/* Responsive Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 leading-snug">
          {title}
        </h2>

        {/* Responsive Grid with 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white rounded-2xl shadow-lg w-full"
            >
              <div
                className={`p-3 rounded-xl ${f.color} flex items-center justify-center flex-shrink-0`}
              >
                {React.isValidElement(f.icon) &&
                  React.cloneElement(f.icon as React.ReactElement<any>, {
                    className: "w-6 h-6 sm:w-7 md:w-8",
                  })}
              </div>

              <span className="text-gray-700 font-semibold text-center sm:text-left text-base sm:text-lg md:text-xl break-words">
                {f.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
