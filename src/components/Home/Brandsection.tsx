import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Logo1 from "../../assets/logo1.webp"
import Logo2 from "../../assets/logo2.webp"
import Logo3 from "../../assets/eastlogo.webp"
import Logo4 from "../../assets/sgi.webp"
import Logo5 from "../../assets/logo5.webp"
import Logo6 from "../../assets/logo6.webp"
import Logo7 from "../../assets/logo7.webp"
import Logo8 from "../../assets/logo8.webp"
interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, name: "Brand 1", logo: Logo1 },
  { id: 2, name: "Brand 2", logo: Logo2 },
  { id: 3, name: "Brand 3", logo: Logo3 },
  { id: 4, name: "Brand 4", logo: Logo4},
  { id: 5, name: "Brand 5", logo: Logo5 },
  { id: 6, name: "Brand 6", logo: Logo6 },
  { id: 7, name: "Brand 7", logo: Logo7 },
  { id: 8, name: "Brand 8", logo: Logo8},
];

const BrandsSection = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    window.innerWidth < 768 ? 2 : 4
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleResize = () => {
    setItemsPerPage(window.innerWidth < 768 ? 2 : 4);
    setCurrentPage(0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(brands.length / itemsPerPage);

  // Auto slide (pause on hover or touch)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages, isHovered]);

  const getSlideBrands = (pageIndex: number) =>
    brands.slice(
      pageIndex * itemsPerPage,
      pageIndex * itemsPerPage + itemsPerPage
    );

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // minimum distance for swipe

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left → next slide
        nextSlide();
      } else {
        // Swipe right → previous slide
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="w-full bg-white py-8 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Arrows: Hidden on mobile, visible on larger screens */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-1 sm:left-2 md:left-6 lg:left-20 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 transition  items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-1 sm:right-2 md:right-6 lg:right-20 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 transition  items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slider Container with touch events on mobile */}
        <div
          className="overflow-hidden touch-pan-x" // tailwind touch-pan for better feel
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${totalPages * 100}%`,
              transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: `${100 / totalPages}%` }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-3 lg:gap-14 max-w-3xl px-2 w-full">
                  {getSlideBrands(pageIndex).map((brand) => (
                    <div
                      key={brand.id}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;