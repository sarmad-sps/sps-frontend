// import React from "react";

// interface IntroProps {
//   title: string;
//   subtitle: string;
//   backgroundImage: string;
// }

// const MobileAppIntro: React.FC<IntroProps> = ({ title, subtitle, backgroundImage }) => {
//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `
//           linear-gradient(rgba(0, 0, 50, 0.75), rgba(90, 20, 120, 0.65)),
//           url('${backgroundImage}')
//         `,
//       }}
//     >
//       {/* Optional overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black opacity-20"></div>

//       <div className="relative z-10 flex flex-col justify-center items-center w-full text-center">
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
//           {title}
//         </h1>
//         <p className="text-lg md:text-2xl lg:text-3xl text-gray-100 max-w-4xl leading-relaxed font-light drop-shadow-lg">
//           {subtitle}
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

const Mobilehero: React.FC<IntroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative w-full min-h-screen flex items-start md:items-center px-4 py-20 md:py-32 lg:py-40 xl:py-48 2xl:py-56 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 50, 0.75), rgba(90, 20, 120, 0.65)),
          url('${backgroundImage}')
        `,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start md:justify-center items-center w-full text-center px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold mb-6 text-white drop-shadow-2xl leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-100 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl leading-relaxed font-light drop-shadow-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Mobilehero;
