// // MobileAppIntro.tsx
// import React from "react";

// const MobileAppIntro: React.FC = () => {
//   return (
//     <section
//       className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.75), rgba(90, 20, 120, 0.65)), 
//                          url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&q=85&w=2070')`,
//       }}
//     >
//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black opacity-30"></div>

//       <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-16 text-center">
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
//           Mobile App Development Services
//         </h1>
//         <p className="text-lg md:text-2xl lg:text-3xl text-gray-100 max-w-4xl leading-relaxed font-light drop-shadow-lg">
//           We craft fast, beautiful, and highly engaging apps for iOS & Android that your customers will love and use daily.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default MobileAppIntro;
import React from "react";

interface IntroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const MobileAppIntro: React.FC<IntroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 50, 0.75), rgba(90, 20, 120, 0.65)),
          url('${backgroundImage}')
        `,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-16 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
          {title}
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-100 max-w-4xl leading-relaxed font-light drop-shadow-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default MobileAppIntro;
