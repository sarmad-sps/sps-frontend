import React from "react";

interface TechStackGridSectionProps {
  title: string;
  stack?: string[]; // fallback for string array
  stackWithIcons?: { name: string; icon: React.ReactElement; color?: string }[];
  background?: string;
}

const TechStack: React.FC<TechStackGridSectionProps> = ({
  title,
  stackWithIcons,
  background = "bg-gradient-to-r from-blue-50 to-indigo-50",
}) => {
  return (
    <section className={`w-full px-16 py-16 ${background}`}>
      <div className="max-w-8xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-black leading-snug">
          {title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stackWithIcons?.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg text-center font-medium text-sm sm:text-base md:text-lg lg:text-xl break-words gap-2"
            >
              <div className="text-4xl">
                {React.isValidElement(tech.icon) &&
                  React.cloneElement(
                    tech.icon as React.ReactElement<
                      React.SVGProps<SVGSVGElement>
                    >,
                    {
                      style: { color: tech.color }, // Apply brand color
                    }
                  )}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
