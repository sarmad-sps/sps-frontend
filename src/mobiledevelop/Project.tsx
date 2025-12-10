// import React from "react";

// interface FeatureItem {
//   icon: React.ReactElement;
//   title: string;
//   color: string;
// }

// interface FeatureGridSectionProps {
//   title: string;
//   items: FeatureItem[];
//   background?: string; // optional background color
//   columns?: string; // optional grid columns
// }

// const Project: React.FC<FeatureGridSectionProps> = ({
//   title,
//   items,
//   background = "bg-white",
//   columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
// }) => {
//   return (
//     <section
//       className={`w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 ${background}`}
//     >
//       <div className="max-w-6xl mx-auto w-full">
//         {/* Responsive Title */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 leading-snug">
//           {title}
//         </h2>

//         <div className={`grid ${columns} gap-8`}>
//           {items.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white rounded-2xl shadow-lg"
//             >
//               <div
//                 className={`p-3 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}
//               >
//                 {React.isValidElement(item.icon) &&
//                   React.cloneElement(item.icon as React.ReactElement<any>, {
//                     className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
//                   })}
//               </div>

//               <span className="text-gray-700 font-semibold text-center sm:text-left text-base sm:text-lg md:text-xl break-words">
//                 {item.title}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;

import React from "react";

interface FeatureItem {
  icon: React.ReactElement;
  title: string;
  color: string;
}

interface FeatureGridSectionProps {
  title: string;
  items: FeatureItem[];
  background?: string; // optional background color
  columns?: string; // optional grid columns
}

const Project: React.FC<FeatureGridSectionProps> = ({
  title,
  items,
  background = "bg-white",
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}) => {
  return (
    <section
      className={`w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 ${background}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Responsive Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 leading-snug">
          {title}
        </h2>

        <div className={`grid ${columns} gap-8`}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg"
            >
              <div
                className={`p-3 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}
              >
                {React.isValidElement(item.icon) &&
                  React.cloneElement(item.icon as React.ReactElement<any>, {
                    className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
                  })}
              </div>

              <span className="text-gray-700 font-semibold text-left text-base sm:text-lg md:text-xl break-words">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
