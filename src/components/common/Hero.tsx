
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroProps {
  isCarPage?: boolean;
  isBikePage?: boolean;
  isTakafulPage?: boolean;
  isTrackerPage?: boolean;
  isHealthPage?: boolean;
  isTravelPage?: boolean;
  isFirePage?: boolean;
  isConsultingPage?: boolean;
  height?: string;
  titleSize?: string;
}
const handleScrollToForm = () => {
  const el = document.getElementById("quote-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};


const HeroSection = ({
  isCarPage = false,
  isBikePage = false,
  isTakafulPage = false,
  isTrackerPage = false,
  isHealthPage = false,
  isTravelPage = false,
  isFirePage = false,
  isConsultingPage = false,
  height = "md:h-screen h-[60vh]",
  titleSize = "text-3xl md:text-4xl",
}: HeroProps) => {
  const allSlides = [
    { image: "/Hero.jpg", mobileImage: "/Hero-mobile.jpg", title: "Secure Today, Smile Tomorrow", heading: "Trusted insurance solutions for a secure and worry-free future." },
    { image: "/car insurance.png", mobileImage: "/car-insurance-mobile.png", title: "Complete Car Insurance", heading: "Reliable coverage that keeps you and your car protected." },
    { image: "/Health Desktop.png", mobileImage: "/Health mobile.png", title: "Health Insurance That Cares", heading: "Quality healthcare coverage for you and your family." },
    { image: "/Travel Insurance.png", mobileImage: "/TravelMobile.png", title: "Travel Without Worries", heading: "International travel insurance for stress-free journeys." },
    { image: "/Tracking desktop.png", mobileImage: "/Tracking mobile.png", title: "Smart Vehicle Tracking", heading: "Real-time tracking, alerts and complete vehicle control." },
    { image: "/Fire Desktop.png", mobileImage: "/Fire Mobile.png", title: "Fire Insurance Protection", heading: "Protect your property from unexpected fire risks." },
    // Bike Insurance Slide
{
  image: "/bike desktop.png",          // Desktop version image
  mobileImage: "/bike mobile.png",     // Mobile version image
  title: "Complete Bike Insurance",    // Hero title
  heading: "Protect your bike with reliable insurance plans.", // Hero subtitle
},

// Takaful Insurance Slide
{
  image: "/Takaful desktop.png",       // Desktop version image
  mobileImage: "/Takaful Mobile.png",  // Mobile version image
  title: "Takaful Insurance",          // Hero title
  heading: "Islamic insurance solutions tailored to your needs.", // Hero subtitle
},
{
  image: "/it-consulting5.png",       // Desktop version image
  mobileImage: "/it-consulting5.png",  // Mobile version image
  title: "IT Consulting",          // Hero title
  heading: "Comprehensive protection for your employees and domestic workers", // Hero subtitle
},

  ];

  let slidesToShow = allSlides;
  if (isCarPage) slidesToShow = allSlides.filter(slide => slide.image.includes("car insurance"));
 else if (isBikePage) slidesToShow = allSlides.filter(slide => slide.image.toLowerCase().includes("bike"));
  else if (isTakafulPage) slidesToShow = allSlides.filter(slide => slide.image.includes("Takaful"));
  else if (isTrackerPage) slidesToShow = allSlides.filter(slide => slide.image.includes("Tracking"));
  else if (isHealthPage) slidesToShow = allSlides.filter(slide => slide.image.includes("Health"));
  else if (isTravelPage) slidesToShow = allSlides.filter(slide => slide.image.includes("Travel"));
  else if (isFirePage) slidesToShow = allSlides.filter(slide => slide.image.includes("Fire"));
  else if (isConsultingPage) slidesToShow = allSlides.filter(slide => slide.image.includes("it-consulting5"));
 
  const [autoSpeed, setAutoSpeed] = useState(1200);
  const sliderSettings = {
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: autoSpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    dotsClass: "slick-dots custom-line-dots",
    arrows: false,
    customPaging: () => <div className="custom-line-dot" />,
    beforeChange: (current: number) => {
      if (current === 0) setAutoSpeed(4000);
    },
  };
const isServicePage =
  isCarPage ||
  isBikePage ||
  isTakafulPage ||
  isHealthPage ||
  isTravelPage ||
  isFirePage;

const buttonText = isServicePage ? "Get Quote" : "Free Consulting";

  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      <Slider {...sliderSettings}>
        {slidesToShow.map((slide, index) => (
          <div key={index} className={`relative ${height}`}>
            {/* Desktop Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="hidden md:block w-full h-full object-cover"
            />
            {/* Mobile Image */}
            <img
              src={slide.mobileImage}
              alt={slide.title}
              className="block md:hidden w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 xl:px-20 h-full">
              <h1 className={`text-white text-xl md:${titleSize} font-bold mb-2 md:mb-4`}>
                {slide.title}
              </h1>
              <p className="text-white text-xs md:text-lg mb-2 md:mb-6">{slide.heading}</p>
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
                <div className="w-1 h-6 md:h-8 bg-white"></div>
                <p className="text-white text-xs md:text-lg">25+ Years Of Experience In Consulting Services</p>
              </div>
             
     {isServicePage ? (
  <button
    onClick={handleScrollToForm}
    className="neon-btn inline-flex w-fit text-xs md:text-base px-3 md:px-10 py-2 md:py-4"
  >
    Get Quote
    <span></span><span></span><span></span><span></span>
  </button>
) : (
  <Link to="/contactus">
    <button className="neon-btn inline-flex w-fit text-xs md:text-base px-3 md:px-10 py-2 md:py-4">
      Free Consulting
      <span></span><span></span><span></span><span></span>
    </button>
  </Link>
)}



              
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .custom-line-dots { bottom: 40px !important; }
        .custom-line-dots li { margin: 0 14px !important; width: 16px !important; height: 1.5px !important; }
        .custom-line-dots li button { display: none !important; }
        .custom-line-dot { width: 100%; height: 100%; background: rgba(255,255,255,0.4); border-radius: 2px; transition: all 0.4s ease; }
        .custom-line-dots li.slick-active .custom-line-dot { background: white; transform: scaleX(2); }
      `}</style>
    </section>
  );
};

export default HeroSection;
