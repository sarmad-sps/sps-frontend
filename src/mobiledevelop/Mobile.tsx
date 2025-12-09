// // MobileAppDevelopment.tsx
// import React from "react";
// const reasons = [
//   "5+ years of mobile app experience",
//   "50+ successful apps launched",
//   "100% client satisfaction rate",
//   "Clean UI/UX with modern design",
//   "Push notifications, offline mode, payment gateways",
//   "App Store & Play Store deployment included",
// ];


// const MobileAppDevelopment: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">


//       {/* Why Choose Us */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 md:px-16">
//           <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
//             Why Choose Us?
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {reasons.map((reason, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-700 text-lg font-medium"
//               >
//                 • {reason}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
     
//     </div>
//   );
// };

// export default MobileAppDevelopment;

// ReasonGridSection.tsx
import React from "react";

interface ReasonGridSectionProps {
  title: string;
  reasons: string[];
  background?: string;
  columns?: string;
}

const ReasonGridSection: React.FC<ReasonGridSectionProps> = ({
  title,
  reasons,
  background = "bg-gray-50",
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}) => {
  return (
    <section className={`py-16 ${background}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          {title}
        </h2>

        <div className={`grid ${columns} gap-8`}>
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-700 text-lg font-medium"
            >
              • {reason}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReasonGridSection;
