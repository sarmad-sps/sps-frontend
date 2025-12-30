// import React from "react";
// import { Link } from "react-router-dom";

// interface HeroProps {
//   backgroundImage?: string;
//   title?: React.ReactNode;
//   isCarPage?: boolean;
//   isBikePage?: boolean;
//   isKafalaPage?: boolean;
//   isTrackerPage?: boolean;
//   height?: string;
//   titleSize?: string;
//   heading?: string;
// }

// const HeroSection = ({
//   backgroundImage = "/Hero.jpg",
//   title = "Secure Today, Smile Tomorrow",
//   heading = "Trusted insurance solutions for a secure and worry-free future.",
//   isCarPage = false,
//   isBikePage = false,
//   isKafalaPage = false,
//   isTrackerPage = false,
//   height = "h-screen",
//   titleSize = "text-5xl md:text-6xl",
// }: HeroProps) => {
//   return (
//     <section
//       className={`relative w-full ${
//         isTrackerPage ? "min-h-screen" : height
//       } overflow-hidden mt-0 pt-0`}
//     >
//       {isTrackerPage ? (
//         // Tracker Page Layout
//         <div className="relative w-full min-h-screen">
//           <div className="absolute inset-0">
//             <img
//               src={backgroundImage}
//               alt="Vehicle Tracking"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/60"></div>
//           </div>

//           <div className="relative z-10 w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
//             <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start md:items-center justify-between">
//               {/* Left Content */}
//               <div className="w-full md:w-1/2 lg:w-[100%] mb-10">
//                 <p className="text-cyan-400 text-sm md:text-base font-medium mb-4">
//                   Reliable Vehicle Tracking Solutions
//                 </p>

//                 <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//                   TRACK YOUR VEHICLE{" "}
//                   <span className="text-cyan-400">ANYTIME</span> &{" "}
//                   <span className="text-cyan-400">ANYWHERE</span>
//                 </h1>

//                 <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-[550px]">
//                   Stay connected with real-time GPS tracking, instant alerts,
//                   trip history, and complete vehicle monitoring. Our smart
//                   tracking system keeps your car secure 24/7 — giving you full
//                   control and peace of mind.
//                 </p>
//                 <Link to="/contactus">
//                 <button className="bg-[#1A3970] text-white px-8 md:px-12 py-3 md:py-4 rounded font-semibold hover:bg-[#132B55] transition-colors text-base md:text-lg">
//                   Free Consultation
//                 </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : isKafalaPage ? (
//         // Kafala Insurance Layout
//         <div className="relative w-full h-full">
//           <div className="absolute inset-0 top-0">
//             <img
//               src={backgroundImage}
//               alt="Kafala Insurance Business Meeting"
//               className="w-full h-full object-cover"
//               style={{ objectPosition: "right center" }}
//             />
//           </div>

//           <div className="absolute inset-0 top-0 bg-gradient-to-r from-[#1A3970] via-[#1A3970]/95 to-transparent w-3/5 xl:w-1/2"></div>

//           <div className="relative z-10 h-full flex flex-col justify-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
//             <h1 className={`text-white ${titleSize} font-bold leading-tight`}>
//               {title}
//             </h1>
//             <p className="text-white/90 text-lg md:text-xl mt-4 leading-relaxed text-left">
//               Comprehensive protection for your employees and domestic workers
//             </p>
//           </div>
//         </div>
//       ) : isCarPage ? (
//         // Car Insurance Split Layout
//         <div className="relative w-full h-full">
//           <div className="absolute inset-0 top-0">
//             <img
//               src={backgroundImage}
//               alt="Car insurance family"
//               className="w-full h-full object-cover"
//               style={{ objectPosition: "8% center" }}
//             />
//           </div>

//           <div className="absolute inset-0 top-0 bg-gradient-to-r from-white via-white/90 to-transparent w-2/5 xl:w-1/2.5"></div>

//           <div className="relative z-10 h-full flex items-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
//             <h1
//               className={`text-[#002244] ${titleSize} md:leading-tight font-bold`}
//             >
//               {title}
//             </h1>
//           </div>
//         </div>
//       ) : isBikePage ? (
//         // Bike Insurance Split Layout
//         <div className="relative w-full h-full">
//           <div className="absolute inset-0 top-0">
//             <img
//               src={backgroundImage}
//               alt="Bike insurance"
//               className="w-full h-full object-cover"
//               style={{ objectPosition: "30% center" }}
//             />
//           </div>

//           <div className="absolute inset-0 top-0 bg-gradient-to-r from-white via-white/90 to-transparent w-2/5 xl:w-1/2.5"></div>

//           <div className="relative z-10 h-full flex items-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
//             <h1
//               className={`text-[#002244] ${titleSize} md:leading-tight font-bold`}
//             >
//               {title}
//             </h1>
//           </div>
//         </div>
//       ) : (
//         // Home Page Layout
//         <div className="relative w-full h-full">
//           <div className="absolute inset-0 top-0">
//             <img
//               src={backgroundImage}
//               alt="Business consultation"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 top-0 bg-black/50"></div>
//           </div>

//           <div className="relative z-10 w-full h-full flex items-center px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
//             <div className="w-full">
//               <h1 className="text-white text-4xl  font-bold leading-tight mb-4">
//                 {title}
//               </h1>
//               <p className="text-white text-lg md:text-xl">{heading}</p>

//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-1 h-8 bg-white"></div>
//                 <p className="text-white text-lg md:text-xl font-medium">
//                   25+ Years Of Experience In Consulting Services
//                 </p>
//               </div>
//               <Link to="/contactus">
//               <button className="bg-[#1A3970] text-white px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-20 py-3 rounded font-semibold hover:bg-[#132B55] transition-colors mb-8">
//                 Free Consulting
//               </button>
//               </Link>

//               {/* <div className="flex items-center gap-4">
//                 <div className="flex -space-x-3">
//                   <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white overflow-hidden">
//                     <img
//                       src="/HeroImage1.png"
//                       alt="Client"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="w-12 h-12 rounded-full bg-purple-500 border-2 border-white overflow-hidden">
//                     <img
//                       src="/HeroImage1.png"
//                       alt="Client"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="w-12 h-12 rounded-full bg-pink-500 border-2 border-white overflow-hidden">
//                     <img
//                       src="/HeroImage1.png"
//                       alt="Client"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="w-12 h-12 rounded-full bg-teal-500 border-2 border-white overflow-hidden">
//                     <img
//                       src="/HeroImage1.png"
//                       alt="Client"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 <div className="text-white">
//                   <p className="font-bold text-lg">+12k Testimonials</p>
//                   <p className="text-sm text-gray-300">Client feedback</p>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroProps {
backgroundImages?: string[]; // multiple images for slider
  title?: React.ReactNode;
  isCarPage?: boolean;
  isBikePage?: boolean;
  isKafalaPage?: boolean;
  isTrackerPage?: boolean;
  height?: string;
  titleSize?: string;
  heading?: string;
}

const HeroSection = ({
 backgroundImages = [
   "/Hero.jpg",
    "/car insurance.png",
    "/Travel Insurance.png",
    "/Tracking desktop.png",
    "/Health Desktop.png",
    "/Fire Desktop.png",
  ], 
  title = "Secure Today, Smile Tomorrow",
  heading = "Trusted insurance solutions for a secure and worry-free future.",
  isCarPage = false,
  isBikePage = false,
  isKafalaPage = false,
  isTrackerPage = false,
  height = "h-screen",
  titleSize = "text-3xl md:text-4xl",
}: HeroProps) => {
  // Slider settings for Home Page
 const sliderSettings = {
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  dots: true,
  dotsClass: "slick-dots custom-line-dots", // Custom class
  arrows: false,
  // Custom paging to make lines instead of dots
  customPaging: (i: number) => (
    <div className="custom-line-dot" />
  ),
};
  return (
    <section
      className={`relative w-full ${
        isTrackerPage ? "min-h-screen" : height
      } overflow-hidden mt-0 pt-0`}
    >
      {isTrackerPage ? (
        // Tracker Page Layout
        <div className="relative w-full min-h-screen">
          <div className="absolute inset-0">
            <img
              src={backgroundImages[0]}
              alt="Vehicle Tracking"
              className="w-full h-full object-cover"
            />
            <div className="absolute"></div>
          </div>

          <div className="relative z-10 w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start md:items-center justify-between">
              <div className="w-full md:w-1/2 lg:w-[100%] mb-10">
                <p className="text-cyan-400 text-sm md:text-base font-medium mb-4">
                  Reliable Vehicle Tracking Solutions
                </p>

                <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
                  TRACK YOUR VEHICLE{" "}
                  <span className="text-cyan-400">ANYTIME</span> <br></br>
                  &{" "}
                  <span className="text-cyan-400">ANYWHERE</span>
                </h1>

                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-[550px]">
                  Stay connected with real-time GPS tracking, instant alerts,
                  trip history, and complete vehicle monitoring. Our smart
                  tracking system keeps your car secure 24/7 giving you full
                  control and peace of mind.
                </p>
                <Link to="/contactus">
                  <button className="neon-btn px-8 md:px-12 py-3 md:py-4 rounded font-semibold">
                    Free Consultation
                     <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : isKafalaPage ? (
        // Kafala Insurance Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0 top-0">
            <img
              src={backgroundImages[0]}
              alt="Kafala Insurance Business Meeting"
              className="w-full h-full object-cover"
              style={{ objectPosition: "right center" }}
            />
          </div>

          <div className="absolute inset-0 top-0 bg-gradient-to-r from-[#1A3970] via-[#1A3970]/95 to-transparent w-3/5 xl:w-1/2"></div>

          <div className="relative z-10 h-full flex flex-col justify-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <h1 className={`text-white ${titleSize} font-bold leading-tight`}>
              {title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 leading-relaxed text-left">
              Comprehensive protection for your employees and domestic workers
            </p>
          </div>
        </div>
      ) : isCarPage ? (
        // Car Insurance Split Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0 top-0">
            <img
              src={backgroundImages[0]}
              alt="Car insurance family"
              className="w-full h-full object-cover"
              style={{ objectPosition: "8% center" }}
            />
          </div>

          <div className="absolute inset-0 top-0 bg-gradient-to-r from-white via-white/90 to-transparent w-2/5 xl:w-1/2.5"></div>

          <div className="relative z-10 h-full flex items-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <h1
              className={`text-[#002244] ${titleSize} md:leading-tight font-bold`}
            >
              {title}
            </h1>
          </div>
        </div>
      ) : isBikePage ? (
        // Bike Insurance Split Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0 top-0">
            <img
              src={backgroundImages[0]}
              alt="Bike insurance"
              className="w-full h-full object-cover"
              style={{ objectPosition: "30% center" }}
            />
          </div>

          <div className="absolute inset-0 top-0 bg-gradient-to-r from-white via-white/90 to-transparent w-2/5 xl:w-1/2.5"></div>

          <div className="relative z-10 h-full flex items-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <h1
              className={`text-[#002244] ${titleSize} md:leading-tight font-bold`}
            >
              {title}
            </h1>
          </div>
        </div>
      ) : (
        // Home Page Slider
        <div className="relative w-full h-full">
        <Slider {...sliderSettings}>
  {backgroundImages.map((img, index) => (
    <div key={index} className="relative w-full h-screen">
      <img
        src={img}
        alt={`Hero ${index + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 top-0 bg-black/50"></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20 h-full">
        <h1 className={`text-white ${titleSize} font-bold leading-tight mb-4`}>
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          {heading}
        </p>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-white"></div>
          <p className="text-white text-lg md:text-xl font-medium">
            25+ Years Of Experience In Consulting Services
          </p>
        </div>
        <Link to="/contactus" className="mb-8 inline-block">
          <button className="neon-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Free Consulting
          </button>
        </Link>
      </div>
    </div>
  ))}
</Slider>

/* 👇 Updated CSS – dots ki jagah lines */
<style>{`
  .custom-line-dots {
    bottom: 40px !important;
    text-align: center;
  }

  .custom-line-dots li {
    display: inline-block;
    margin: 0 14px !important;    /* lines ke beech zyada space for cleaner look */
    width: 16px !important;      /* line ki length aur chhoti kar di */
    height: 1.5px !important;    /* bahut hi thin */
  }

  .custom-line-dots li button {
    display: none !important;
  }

  .custom-line-dots .custom-line-dot {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);   /* inactive - bahut soft */
    border-radius: 2px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Active line - full white aur thodi lambi for highlight */
  .custom-line-dots li.slick-active .custom-line-dot {
    background: white !important;
    transform: scaleX(2) !important;   /* active ko double lambi karke standout banaya */
  }
`}</style>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
