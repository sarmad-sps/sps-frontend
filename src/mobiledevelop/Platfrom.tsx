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

const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({ title, features }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <div className={`p-3 rounded-xl ${f.color} flex items-center justify-center`}>
                {React.cloneElement(f.icon, { className: "w-6 h-6" })}
              </div>
              <span className="text-gray-700 font-semibold">{f.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
