import React from "react";
import { useNavigate } from "react-router-dom";

import web from "../../assets/it-consulting-web.webp";
import devops from "../../assets/it-consulting-dev.webp";
import mobile from "../../assets/it-consulting.webp";
interface Service {
  title: string;
  desc: string;
  img: string;
  plans: string[];
  route: string;
}

const services: Service[] = [
  {
    title: "Mobile App Development",
    desc: "We create responsive and high-performing mobile applications for Android and iOS, tailored to your business needs.",
    img: mobile,
    plans: ["International Plans", "Domestic Plans", "Student Study Plans"],
    route: "/mobiledevelop",
  },
  {
    title: "Website Development",
    desc: "We design and develop modern websites that are user-friendly, SEO-optimized, and visually appealing for all industries.",
    img: web,
    plans: ["International Plans", "Domestic Plans", "Student Study Plans"],
    route: "/webdevelop",
  },
  {
    title: "DevOps Services",
    desc: "We offer DevOps solutions including CI/CD, cloud deployment, and infrastructure automation to streamline your development process.",
    img: devops,
    plans: ["International Plans", "Domestic Plans", "Student Study Plans"],
    route: "/devops",
  },
];

const ITConsultingCard: React.FC = () => {
  const navigate = useNavigate();

  return (
   <div id="quote-form">
     <div className="min-h-screen bg-[#f4f8fc] py-10 px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 sm:px-8">
      <div className="max-w-8xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {services.map((service: Service, index: number) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {service.desc}
              </p>

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

            {/* <button
              onClick={() => navigate(service.route)}
              className="bg-[#0a2a57] text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-[#0c3563] transition"
            >
              Read more
            </button> */}
            <button
            onClick={() => navigate(service.route)}
  className={`
    relative px-8 py-3 font-black uppercase italic tracking-wider text-sm
    flex items-center justify-center gap-2 text-white overflow-hidden 
    transition-all duration-500 rounded-lg
    bg-gradient-to-r from-[#1A3970] to-[#2ba9b4] 
    hover:shadow-[0_0_30px_rgba(43,169,180,0.5)] 
    hover:scale-105 active:scale-95 transform group
  `}
>
  {/* Button Text + Arrow */}
  <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
    Read More
    <svg 
      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 shadow-sm" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>

  {/* Subtle animated glow overlay (Becomes active on hover) */}
  <span className="absolute inset-0 bg-gradient-to-r from-[#2ba9b4] to-[#1A3970] opacity-0 transition-opacity duration-500 group-hover:opacity-40 animate-pulse pointer-events-none"></span>

  {/* High-speed shine effect */}
  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine pointer-events-none"></span>

  <style>
    {`
      @keyframes shine {
        0% { left: -100%; }
        20% { left: 100%; }
        100% { left: 100%; }
      }
      .animate-shine {
        animation: shine 3s infinite ease-in-out;
      }
    `}
  </style>
</button>
          </div>
        ))}

      </div>
    </div>
   </div>
  );
};

export default ITConsultingCard;
