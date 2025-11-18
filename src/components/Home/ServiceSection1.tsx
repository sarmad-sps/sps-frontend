import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Service type
interface Service {
  id: string;
  iconSrc: string;
  title: string;
  features: string[];
  route: string;
}

const services: Service[] = [
  { id: "01", iconSrc: "/caricon.png", title: "Car Insurance", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/car" },
  { id: "02", iconSrc: "/Healthicon.png", title: "Health Insurance", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/health" },
  { id: "03", iconSrc: "/motorcycleicon.png", title: "Bike Insurance", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/bike" },
  { id: "04", iconSrc: "/Travelicon.png", title: "Travel Insurance", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/travel" },
  { id: "05", iconSrc: "/travel-icon.png", title: "IT Services", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/it-consulting" },
  { id: "06", iconSrc: "/takaful-icon.png", title: "Takaful", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/takaful" },
];

const ServicesSection: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [cardsPerPage, setCardsPerPage] = useState<number>(4);
  const [slides, setSlides] = useState<Service[][]>([]);

  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) setCardsPerPage(1); // Mobile
    else if (window.innerWidth < 1024) setCardsPerPage(2); // Tablet
    else setCardsPerPage(4); // Laptop/Desktop
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
  let newSlides: Service[][] = [];

  if (cardsPerPage === 4) {
    // Laptop: Custom 3 slides with overlapping cards
    newSlides = [
      [services[0], services[1], services[2], services[3]],
      [services[4], services[5], services[0], services[1]],
      [services[2], services[3], services[4], services[5]],
    ];
  } else if (cardsPerPage === 2) {
    // Tablet: consecutive pairs, non-overlapping
    for (let i = 0; i < services.length; i += 2) {
      newSlides.push(services.slice(i, i + 2));
    }
  } else {
    // Mobile: 1 card per slide
    newSlides = services.map((s) => [s]);
  }

  setSlides(newSlides);
  setPage(0); // reset page when cardsPerPage changes
}, [cardsPerPage]);

  const totalPages = slides.length;

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="w-full bg-[#F5F8Fc] py-16 md:py-20">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#1A3970] text-sm md:text-base font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Services We Offered</h2>
        </div>

        {/* Slider Wrapper */}
        <div className="overflow-hidden w-full mb-6">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {slides.map((slideServices, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 flex">
                {slideServices.map((service: Service) => (
                  <div
                    key={service.id}
                    className={`flex-shrink-0 p-3 ${
                      cardsPerPage === 1
                        ? "w-full"
                        : cardsPerPage === 2
                        ? "w-1/2"
                        : "w-1/4"
                    }`}
                  >
                    <div
                      className="group bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center
                        transition-all duration-500 hover:bg-[#1894A4] hover:text-white h-full"
                    >
                     <img
  src={service.iconSrc}
  alt={service.title}
  className={`${
    service.id === "01" || service.id === "03" || service.id === "04" ? "w-18 h-16" : "w-16 h-16"
  } mb-4 transition-all duration-500
  ${service.id === "02" ? "filter brightness-0" : ""} 
  group-hover:filter group-hover:brightness-0 group-hover:invert`}
/>


                      <h3 className="text-xl font-bold mb-1 transition-colors duration-500 group-hover:text-white">
                        {service.title}
                      </h3>
                      <ul className="text-gray-600 mb-4 text-sm space-y-1 transition-colors duration-500 group-hover:text-white flex-grow">
                        {service.features.map((f: string, i: number) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-[#1894A4] transition-colors duration-500 group-hover:text-white">✔</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.route}
                        className="border border-[#1894A4] text-[#1894A4] px-4 py-2 rounded
                          transition-colors duration-500 group-hover:bg-white group-hover:text-[#1894A4] mt-auto"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i)}
              className={` cursor-pointer transition-all duration-300 ${
                page === i
                  ? "bg-[#1894A4] w-5 h-2 rounded-full lg:w-10 lg:h-3"
                  : "bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400 lg:w-3 lg:h-3"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
