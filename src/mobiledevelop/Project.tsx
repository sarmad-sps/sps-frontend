// // AppTypesSection.tsx
// import React from "react";
// import { Globe, ShoppingCart, Heart, CreditCard, BookOpen, Car } from "lucide-react";

// const appTypes = [
//   { icon: <ShoppingCart />, title: "E-commerce & Shopping Apps", color: "bg-orange-100 text-orange-500" },
//   { icon: <Heart />, title: "Social Networking Apps", color: "bg-red-100 text-red-500" },
//   { icon: <Globe />, title: "Food Delivery & Booking Apps", color: "bg-purple-100 text-purple-500" },
//   { icon: <Heart />, title: "Fitness & Health Tracking", color: "bg-pink-100 text-pink-500" },
//   { icon: <CreditCard />, title: "FinTech & Wallet Apps", color: "bg-yellow-100 text-yellow-500" },
//   { icon: <BookOpen />, title: "Education & E-learning", color: "bg-blue-50 text-blue-400" },
//   { icon: <Car />, title: "On-Demand Service Apps", color: "bg-green-50 text-green-400" },
// ];

// const AppTypesSection: React.FC = () => {
//   return (
//     <section className="py-16 bg-[#e8f1ff]">
//       <div className="max-w-6xl mx-auto px-6 md:px-16">
//         <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
//           Types of Apps We Build
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {appTypes.map((app, idx) => (
//             <div
//               key={idx}
//               className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
//             >
//               <div className={`p-3 rounded-xl ${app.color} flex items-center justify-center`}>
//                 {React.cloneElement(app.icon, { className: "w-6 h-6" })}
//               </div>
//               <span className="text-gray-700 font-semibold">{app.title}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppTypesSection;
// FeatureGridSection.tsx
import React from "react";

interface FeatureItem {
  icon: React.ReactElement;
  title: string;
  color: string;
}

interface FeatureGridSectionProps {
  title: string;
  items: FeatureItem[];
  background?: string;     // optional background color
  columns?: string;        // optional grid columns
}

const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({
  title,
  items,
  background = "bg-white",
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}) => {
  return (
    <section className={`py-16 ${background}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          {title}
        </h2>

        <div className={`grid ${columns} gap-8`}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <div className={`p-3 rounded-xl ${item.color} flex items-center justify-center`}>
                {React.cloneElement(item.icon, { className: "w-6 h-6" })}
              </div>
              <span className="text-gray-700 font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
