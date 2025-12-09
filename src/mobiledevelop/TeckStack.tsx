// // TechStackSection.tsx
// import React from "react";

// const techStack = [
//   "React Native",
//   "Flutter",
//   "Swift",
//   "Kotlin",
//   "Firebase",
//   "Node.js",
//   "AWS",
// ];

// const TechStackSection: React.FC = () => {
//   return (
//     <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
//       <div className="max-w-6xl mx-auto px-6 md:px-16">
//         <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
//           Tech Stack
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
//           {techStack.map((tech, idx) => (
//             <div
//               key={idx}
//               className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl text-center font-medium text-gray-700 hover:-translate-y-1 transform transition-all duration-300"
//             >
//               {tech}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStackSection;
// TechStackGridSection.tsx
import React from "react";

interface TechStackGridSectionProps {
  title: string;
  stack: string[];
  background?: string;
  columns?: string;
}

const TechStackGridSection: React.FC<TechStackGridSectionProps> = ({
  title,
  stack,
  background = "bg-gradient-to-r from-blue-50 to-indigo-50",
  columns = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7",
}) => {
  return (
    <section className={`py-16 ${background}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          {title}
        </h2>

        <div className={`grid ${columns} gap-6`}>
          {stack.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl text-center font-medium text-gray-700 hover:-translate-y-1 transform transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackGridSection;
