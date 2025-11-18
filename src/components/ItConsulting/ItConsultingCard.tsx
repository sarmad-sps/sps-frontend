import React from "react";

interface Service {
  title: string;
  desc: string;
  img: string;
  plans: string[];
}

const services: Service[] = [
  {
    title: "Mobile App Development",
    desc: "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    img: "./public/it-consulting.png",
    plans: ["International Plans", "Domestic Plans", "Student Study Plans"],
  },
  {
    title: "Website Development",
    desc: "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    img: "./public/it-consulting.png",
    plans: ["International Plans", "Domestic Plans", "Student Study Plans"],
  },
  {
    title: "Devops Services",
    desc: "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    img: "./public/it-consulting.png",
    plans: ["International Plans", "Domestic Plans", "Student Study Plans"],
  },
];

const ITConsultingCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f8fc] py-10 px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 sm:px-8">
      <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array(2)
          .fill(0)
          .flatMap(() => services)
          .map((service: Service, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>

                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />

                <ul className="text-sm space-y-1 mb-5">
                  {service.plans.map((plan: string, i: number) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full mr-2"></span>
                      {plan}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-[#0a2a57] text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-[#0c3563] transition">
                Read more
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ITConsultingCard;
