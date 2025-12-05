import { useState } from "react";

interface Item {
  title: string;
  description: string;
}

const carGuideItems: Item[] = [
  {
    title: "How to save on Car Takaful Insurance?",
    description:
      "You can save on Car Takaful by installing a tracker, maintaining a clean driving record, and comparing multiple plans before buying.",
  },
  {
    title: "Car Takaful Claims Process",
    description:
      "To file a claim, report the incident immediately, submit required documents, and follow the surveyor inspection steps.",
  },
  {
    title: "Car Takaful Coverage",
    description:
      "Comprehensive Takaful covers accident damage, third-party liability, theft, natural disasters, and more.",
  },
  {
    title: "Why is a tracker important?",
    description:
      "A tracker helps recover your car in case of theft, reduces your premium, and increases approval chances for claims.",
  },
];

export default function CarTakafulGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center text-[#1B2A6D] mb-10">
        Car Insurance Guide
      </h2>

    <div className="flex flex-wrap gap-6 justify-center">
  {carGuideItems.map((item, index) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={index}
        className={`bg-white shadow-md rounded-xl border border-gray-200 p-6 cursor-pointer transition-all w-full md:w-[48%] self-start`} // <- self-start
        onClick={() => toggleItem(index)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <span className="text-2xl text-gray-700">{isOpen ? "−" : "+"}</span>
        </div>

        {isOpen && (
          <p className="mt-4 text-gray-600 leading-relaxed">{item.description}</p>
        )}
      </div>
    );
  })}
</div>

    </div>
  );
}
