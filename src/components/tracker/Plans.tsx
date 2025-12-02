import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PlanCardProps {
  title: string;
  description: string;
  price: number;
  initialCharge: number;
  additionalKilometer: number;
  perMinutesStopped: number;
  waitingCharge: number;
  icon: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  initialCharge,
  additionalKilometer,
  perMinutesStopped,
  waitingCharge,
  icon,
}) => {

  const darkBlueText = 'text-[#1F3A6A]';
  const buttonBg = 'bg-[#1A3970]';

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between max-w-sm h-[480px]">
      <div>
        <h3 className={`text-2xl font-bold ${darkBlueText} mb-2`}>{title}</h3>
        <p className="text-gray-600 text-sm mb-6">{description}</p>

        <div className="flex items-end justify-between mb-6">
          <p className={`${darkBlueText} text-4xl font-extrabold`}>
            ${price}
            <span className="text-base font-medium text-gray-500">/month</span>
          </p>
          <img src={icon} alt="Car Icon" className="w-10 h-10 p-2 rounded-full bg-[#1894A4]" />
        </div>

        <ul className="space-y-3 text-gray-700 mb-8">
          <li className="flex justify-between items-center text-sm">
            <span>Initial charge</span>
            <span className="font-semibold">${initialCharge < 10 ? `0${initialCharge}` : initialCharge}</span>
          </li>
          <li className="flex justify-between items-center text-sm">
            <span>Additional Kilometre</span>
            <span className="font-semibold">${additionalKilometer < 10 ? `0${additionalKilometer}` : additionalKilometer}</span>
          </li>
          <li className="flex justify-between items-center text-sm">
            <span>Per minutes stopped traffic</span>
            <span className="font-semibold">${perMinutesStopped < 10 ? `0${perMinutesStopped}` : perMinutesStopped}</span>
          </li>
          <li className="flex justify-between items-center text-sm">
            <span>Waiting Charge</span>
            <span className="font-semibold">${waitingCharge < 10 ? `0${waitingCharge}` : waitingCharge}</span>
          </li>
        </ul>
      </div>

      <button className={`${buttonBg} hover:bg-[#152e5a] text-white w-[150px] h-[50px] font-bold flex items-center justify-center gap-1 transition-colors duration-300`}>
        Rent Now
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const darkBlueText = 'text-[#1F3A6A]';

  const plans = [
    {
      title: "Business Plan",
      description: "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
      price: 10,
      initialCharge: 6,
      additionalKilometer: 6,
      perMinutesStopped: 6,
      waitingCharge: 6,
      icon: "/carfront.svg",
    },
    {
      title: "Vehicle Plan",
      description: "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
      price: 30,
      initialCharge: 6,
      additionalKilometer: 6,
      perMinutesStopped: 6,
      waitingCharge: 6,
      icon: "/carback.svg",
    },
    {
      title: "Rental Plan",
      description: "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
      price: 50,
      initialCharge: 6,
      additionalKilometer: 6,
      perMinutesStopped: 6,
      waitingCharge: 6,
      icon: "/carfront.svg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center mb-3 space-x-2">
          <img src="/splogo.png" alt="SP Logo" className="h-10 w-auto" />
          <p className="text-[#1894A4] font-semibold text-lg">PRICING & PLANS</p>
        </div>

        <h2 className={`text-4xl md:text-5xl font-extrabold ${darkBlueText} mb-12`}>
          CHOOSE THE BEST PLANS <br /> FOR YOURSELF
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
