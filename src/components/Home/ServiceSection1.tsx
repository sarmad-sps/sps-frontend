import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Lucide icons

// Service type
interface Service {
  id: string;
  iconSrc: string;
  title: string;
  features: string[];
  route: string;
}

const services: Service[] = [
  {
    id: "01",
    iconSrc: "/carinsurance.png",
    title: "Car Insurance",
    features: [
      "Full Safety For Your Cars",
      "Fast Claim Assistance",
      "24/7 Roadside Support",
    ],
    route: "/car",
  },
  {
    id: "02",
    iconSrc: "/health-screening.png",
    title: "Health Insurance",
    features: [
      "Covers Hospital Expense",
      "Protects Your Family Health",
      "Easy Cashless Treatment",
    ],
    route: "/health",
  },
  {
    id: "03",
    iconSrc: "/bikeinsurance.png",
    title: "Bike Insurance",
    features: [
      "Easy And Low Cost Plans",
      "Theft Protection",
      "Affordable Premium Plans",
    ],
    route: "/bike",
  },
  {
    id: "04",
    iconSrc: "/travelinsurance.png",
    title: "Travel Insurance",
    features: [
      "Medical Emergency Coverage",
      "Cover Trip Delay",
      "Worldwide Assistance",
    ],
    route: "/travel",
  },
   {
    id: "05",
    iconSrc: "/takaful.png",
    title: "Takaful",
    features: [
      "Shariah-Compliant Coverage",
      "Health Protection Plans",
      "transparent & Ethical Policies",
    ],
    route: "/takaful",
  },
  {
    id: "06",
    iconSrc: "/itservices.png",
    title: "IT Services",
    features: [
      "Network Security Solutions",
      "Data Backup & Recovery",
      "24/7 Techinal Support",
    ],
    route: "/it-consulting",
  },
];

const ServicesSection: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [cardsPerPage, setCardsPerPage] = useState<number>(4);
  const [slides, setSlides] = useState<Service[][]>([]);

  // Drag / Swipe states
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) setCardsPerPage(1);
    else if (window.innerWidth < 1024) setCardsPerPage(2);
    else setCardsPerPage(4);
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    let newSlides: Service[][] = [];

    if (cardsPerPage === 4) {
      newSlides = [
        [services[0], services[1], services[2], services[3]],
        [services[4], services[5], services[0], services[1]],
        [services[2], services[3], services[4], services[5]],
      ];
    } else if (cardsPerPage === 2) {
      for (let i = 0; i < services.length; i += 2) {
        newSlides.push(services.slice(i, i + 2));
      }
    } else {
      newSlides = services.map((s) => [s]);
    }

    setSlides(newSlides);
    setPage(0);
  }, [cardsPerPage]);

  const totalPages = slides.length;

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Touch / Mouse Handlers
  const handleTouchStart = (e: React.TouchEvent) =>
    setStartX(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX === null) return;
    const diff = startX - e.touches[0].clientX;
    if (diff > 50) {
      setPage((prev) => (prev + 1) % totalPages);
      setStartX(null);
    } else if (diff < -50) {
      setPage((prev) => (prev - 1 + totalPages) % totalPages);
      setStartX(null);
    }
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || startX === null) return;
    const diff = startX - e.clientX;
    if (diff > 50) {
      setPage((prev) => (prev + 1) % totalPages);
      setIsDragging(false);
      setStartX(null);
    } else if (diff < -50) {
      setPage((prev) => (prev - 1 + totalPages) % totalPages);
      setIsDragging(false);
      setStartX(null);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    setStartX(null);
  };

  // Arrow navigation
  const prevSlide = () =>
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  const nextSlide = () => setPage((prev) => (prev + 1) % totalPages);
  useEffect(() => {
    // Wait a short time to make sure ServiceSection1 is rendered
    setTimeout(() => {
      const hash = window.location.hash; // e.g., #service-section-1
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100); // 100ms delay
  }, []);
  return (
    <section className="w-full bg-[#F5F8Fc] py-16 md:py-20 relative  " id="service-section-1">
      <div className="w-full px-4 md:px-10 lg:px-14 xl:px-16 2xl:px-18 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#1A3970] text-sm md:text-base font-semibold mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Services We Offered
          </h2>
        </div>
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-[#1894A4] hover:text-white transition sm:ml-1 lg:ml-4 mt-10"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="relative">
          {/* Slider Wrapper */}
          <div
            className="overflow-hidden w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
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
                      <Link to={service.route} className="block h-full">
                        <div className="group bg-white hover:bg-gradient-to-r hover:from-[#4a7ba7] hover:to-[#5cb8c5] rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-500 hover:text-white h-full cursor-pointer">
                          <img
                            src={service.iconSrc}
                            alt={service.title}
                            className={`${
                              service.id === "01" ||
                              service.id === "03" ||
                              service.id === "04"
                                ? "w-18 h-16"
                                : "w-16 h-16"
                            } mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-500`}
                          />
                          <h3 className="text-xl font-bold mb-1 transition-colors duration-500 group-hover:text-white">
                            {service.title}
                          </h3>
                          <ul className="text-gray-600 mb-4 text-sm space-y-1 transition-colors duration-500 group-hover:text-white flex-grow">
                            {service.features.map((f: string, i: number) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="text-[#1894A4] transition-colors duration-500 group-hover:text-white">
                                  ✔
                                </span>
                                {f}
                              </li>
                            ))}
                          </ul>
                          <div className="border border-[#1894A4] text-[#1894A4] px-4 py-2 rounded transition-colors duration-500 group-hover:bg-white group-hover:text-[#1894A4] mt-auto">
                            Read more
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-[#1894A4] hover:text-white transition sm:mr-1 lg:mr-4 mt-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i)}
              className={`cursor-pointer transition-all duration-300 ${
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
