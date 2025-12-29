import React from 'react';

export default function CarAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Car */}
      <img
        src="/car1.png"
        alt="Driving Car"
        className="absolute bottom-20 md:bottom-28 lg:bottom-40 w-40 md:w-56 lg:w-72 animate-drive-once z-10"
      />

      {/* Smoke Trail – car ke bilkul peeche */}
      <div className="absolute bottom-24 md:bottom-32 lg:bottom-44 animate-drive-once">
        <div className="relative h-12 w-48 -ml-32">
          <div className="absolute top-4 left-8 w-5 h-5 bg-gray-500 rounded-full opacity-70 animate-puff" />
          <div className="absolute top-3 left-16 w-7 h-7 bg-gray-400 rounded-full opacity-60 animate-puff delay-200" />
          <div className="absolute top-5 left-24 w-6 h-6 bg-gray-400 rounded-full opacity-50 animate-puff delay-400" />
          <div className="absolute top-2 left-32 w-8 h-8 bg-gray-300 rounded-full opacity-40 animate-puff delay-600" />
          <div className="absolute top-4 left-40 w-6 h-6 bg-gray-300 rounded-full opacity-30 animate-puff delay-800" />
        </div>
      </div>

      <style >{`
        @keyframes drive-once {
          0% {
            transform: translateX(-600px);
          }
          100% {
            transform: translateX(calc(100vw + 600px));
          }
        }

        @keyframes puff {
          0% {
            transform: scale(0.4) translateX(0) translateY(0);
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: scale(1.8) translateX(-30px) translateY(-50px);
            opacity: 0;
          }
        }

        .animate-drive-once {
          animation: drive-once 6s ease-in-out forwards;  /* Tez speed: 6 seconds mein poora cross */
        }

        .animate-puff {
          animation: puff 1.6s ease-out infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
}