// import React from "react";
// import { CheckCircle } from "lucide-react";

// interface ReasonGridSectionProps {
//   title: string;
//   reasons: string[];
//   background?: string;
//   columns?: string;
// }

// const ReasonGridSection: React.FC<ReasonGridSectionProps> = ({
//   title,
//   reasons,
//   background = "bg-gray-50",
//   columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
// }) => {
//   return (
//     <section className={`w-full min-h-screen flex items-center justify-center px-4 py-16 ${background}`}>
//   <div className="w-full max-w-7xl mx-auto">
//     <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-gray-800">
//       {title}
//     </h2>

//     <div className={`grid ${columns} gap-8`}>
//       {reasons.map((reason, idx) => (
//         <div
//           key={idx}
//           className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg text-gray-700 text-lg font-medium"
//         >
//           <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
//           <span>{reason}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//   );
// };

// export default ReasonGridSection;
import React from "react";
import { CheckCircle } from "lucide-react";

interface ReasonGridSectionProps {
  title: string;
  reasons: string[];
  background?: string;
  columns?: string;
}

const Choosingus: React.FC<ReasonGridSectionProps> = ({
  title,
  reasons,
  background = "bg-gray-50",
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}) => {
  return (
    <section
      className={`w-full  flex items-center justify-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 ${background}`}
    >
      <div className="w-full max-w-8xl mx-auto">
        {/* Responsive Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 leading-snug">
          {title}
        </h2>

        <div className={`grid ${columns} gap-8`}>
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-6 rounded-2xl shadow-lg text-gray-700 font-medium"
            >
              <CheckCircle className="w-6 h-6 sm:w-7 md:w-8 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-center sm:text-left text-base sm:text-lg md:text-xl break-words">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choosingus;
