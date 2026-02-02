import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../../assets/Hero.jpg"
import car from "../../assets/car123.png"
import health from "../../assets/Health Desktop.png"
import travel from "../../assets/Travel Insurance.png"
import tracker from "../../assets/Tracking desktop.png"
import fire from "../../assets/Fire Desktop.png"
import bike from "../../assets/bike desktop.png"
import it from "../../assets/it.png"
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
  const navigate = useNavigate();
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSpeed, setAutoSpeed] = useState(1200);

  const handleScrollToServices = () => {
    const element = document.getElementById("service-section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleScrollToForm = () => {
  const el = document.getElementById("quote-form");
  
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  const allSlides = [
    {
      image: hero,
      mobileImage: "/Hero-mobile.jpg",
      title: "Secure Today, Smile Tomorrow",
      heading: "Trusted insurance solutions for a secure and worry-free future.",
      link: "/",
    },
    {
      image: car,
      mobileImage: "/car-insurance-mobile.png",
      title: "Complete Car Insurance",
      heading: "Reliable coverage that keeps you and your car protected.",
      link: "/car",
    },
    {
      image: health,
      mobileImage: "/Health mobile.png",
      title: "Health Insurance That Cares",
      heading: "Quality healthcare coverage for you and your family.",
      link: "/health",
    },
    {
      image: travel,
      mobileImage: "/TravelMobile.png",
      title: "Travel Without Worries",
      heading: "International travel insurance for stress-free journeys.",
      link: "/travel",
    },
    {
      image: tracker,
      mobileImage: "/Tracking mobile.png",
      title: "Smart Vehicle Tracking",
      heading: "Real-time tracking, alerts and complete vehicle control.",
      link: "/tracker",
    },
    {
      image: fire,
      mobileImage: "/Fire Mobile.png",
      title: "Fire Insurance Protection",
      heading: "Protect your property from unexpected fire risks.",
      link: "/fire-takaful",
    },
    {
      image: bike,
      mobileImage: "/bike mobile.png",
      title: "Complete Bike Insurance",
      heading: "Protect your bike with reliable insurance plans.",
      link: "/bike",
    },
    {
      image: it,
      mobileImage: "/it-consulting5.png",
      title: "IT Consulting",
      heading: "Comprehensive protection for your employees and domestic workers",
      link: "/it-consulting",
    },
  ];

  let slidesToShow = allSlides;

  if (isCarPage) {
    slidesToShow = allSlides.filter((slide) => slide.image.includes("car123"));
  } else if (isBikePage) {
    slidesToShow = allSlides.filter((slide) => slide.image.toLowerCase().includes("bike"));
  } else if (isTakafulPage) {
    slidesToShow = allSlides.filter((slide) => slide.image.includes("takafu12"));
  } else if (isTrackerPage) {
    slidesToShow = allSlides.filter((slide) => slide.image.includes("Tracking"));
  } else if (isHealthPage) {
    slidesToShow = allSlides.filter((slide) => slide.image.includes("Health"));
  } else if (isTravelPage) {
    slidesToShow = allSlides.filter((slide) => slide.image.includes("Travel"));
  } else if (isFirePage) {
    slidesToShow = allSlides.filter((slide) => slide.image.includes("Fire"));
  } else if (isConsultingPage) {
    slidesToShow = allSlides.filter((slide) => slide.image.includes("it"));
  } else {
    slidesToShow = allSlides.filter((slide) => !slide.image.toLowerCase().includes("bike"));
  }

  const sliderSettings = {
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: autoSpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
      if (current === 0) setAutoSpeed(4000);
    },
  };

  const isServicePage =
    isCarPage ||
    isBikePage ||
    isTakafulPage ||
    isHealthPage ||
    isTravelPage ||
    isFirePage ||
    isTrackerPage ||
    isConsultingPage;

  const isHomePage = !isServicePage && slidesToShow.length > 1;

  const handleGetQuoteClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth return to top
  };

  const totalSlides = slidesToShow.length;
  const currentSlideData = slidesToShow[currentSlide];
  const isCurrentSlideCar = currentSlideData?.image.includes("car123.png");

  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {slidesToShow.map((slide, index) => (
          <div key={index} className={`relative ${height}`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="hidden md:block w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />
            <img
              src={slide.mobileImage}
              alt={slide.title}
              className="block md:hidden w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />

            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 xl:px-20 h-full pointer-events-none">
              <h1 className={`text-white text-xl md:${titleSize} font-bold mb-2 md:mb-4 pointer-events-auto`}>
                {slide.image.includes("car123.png") && slidesToShow.length > 1
                  ? "Complete Vehicle Insurance"
                  : slide.title}
              </h1>
              <p className="text-white text-xs md:text-lg mb-2 md:mb-6 pointer-events-auto">
                {slide.heading}
              </p>
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8 pointer-events-auto">
                <div className="w-1 h-6 md:h-8 bg-white"></div>
                <p className="text-white text-xs md:text-lg">
                  25+ Years Of Experience In Consulting Services
                </p>
              </div>

              {isServicePage ? (
                <button
                  onClick={handleScrollToForm}
                  className="neon-btn inline-flex w-fit text-xs md:text-base px-3 md:px-10 py-2 md:py-4 pointer-events-auto"
                >
                  Get Quote
                  <span></span><span></span><span></span><span></span>
                </button>
              ) : (
                <>
                  {isCurrentSlideCar ? (
                    <button
                      onClick={handleScrollToServices}
                      className="neon-btn inline-flex w-fit text-xs md:text-base px-3 md:px-10 py-2 md:py-4 pointer-events-auto"
                    >
                      Free Consulting
                      <span></span><span></span><span></span><span></span>
                    </button>
                  ) : (
                    <Link to={slide.link || "/"}>
                      <button className="neon-btn inline-flex w-fit text-xs md:text-base px-3 md:px-10 py-2 md:py-4 pointer-events-auto">
                        Free Consulting
                        <span></span><span></span><span></span><span></span>
                      </button>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>

      {isHomePage && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
          <div className={`rounded-full transition-all duration-500 ${currentSlide === 0 ? "w-3 h-3 bg-white shadow-lg shadow-white/50" : "w-2 h-2 bg-white/40"}`} />
          <div className={`rounded-full transition-all duration-500 ${currentSlide > 0 && currentSlide < totalSlides - 1 ? "w-3 h-3 bg-white shadow-lg shadow-white/50" : "w-2 h-2 bg-white/40"}`} />
          <div className={`rounded-full transition-all duration-500 ${currentSlide === totalSlides - 1 ? "w-3 h-3 bg-white shadow-lg shadow-white/50" : "w-2 h-2 bg-white/40"}`} />
        </div>
      )}

      <style>{`
        .slick-dots {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;