import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrackingProcess() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const stepCards = [
    { title: "Enter Tracking Details", icon: "/card1.svg", image: "/carhover.jpg", text: "Add shipment, vehicle, or policy information." },
    { title: "System Verification", icon: "/card2.svg", image: "/carhover.jpg", text: "We verify your details instantly." },
    { title: "Connect Providers", icon: "/card3.svg", image: "/carhover.jpg", text: "We link your request with trusted tracking partners." },
    { title: "Live Status Updates", icon: "/card4.svg", image: "/carhover.jpg", text: "Track real-time location and progress." },
    { title: "Smart Alerts", icon: "/card4.svg", image: "/carhover.jpg", text: "Get instant notifications on status changes." },
    { title: "Secure Tracking", icon: "/card4.svg", image: "/carhover.jpg", text: "Your data remains safe and private." },
  ];

  const updateLayout = () => {
    if (window.innerWidth < 640) setCardsPerPage(1);
    else if (window.innerWidth < 1024) setCardsPerPage(2);
    else setCardsPerPage(3);

    setCurrentSlide(0);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalSlides = Math.ceil(stepCards.length / cardsPerPage);
  const slideWidth = 100 / totalSlides;

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Manual arrows
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  // ============================
  // ✅ TOUCH & DRAG HANDLERS
  // ============================

  const handleTouchStart = (e: React.TouchEvent) => setStartX(e.touches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX === null) return;
    const diff = startX - e.touches[0].clientX;

    if (diff > 50) {
      nextSlide();
      setStartX(null);
    } else if (diff < -50) {
      prevSlide();
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
      nextSlide();
      setIsDragging(false);
      setStartX(null);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
      setStartX(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartX(null);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 w-full relative">
      <div className="w-full px-4 md:px-10 lg:px-32 mx-auto max-w-8xl">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" alt="Logo" />
            <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">Steps</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">TRACKING PROCESS</h2>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-[#1894A4] hover:text-white transition ml-12 mt-12"
        >
          <ChevronLeft size={28} />
        </button>

        {/* SLIDER */}
        <div
          className="overflow-hidden "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className=" flex transition-transform duration-500 ease-in-out pb-4 "
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${currentSlide * slideWidth}%)`,
            }}
          >
            {stepCards.map((card, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{ width: `${100 / (cardsPerPage * totalSlides)}%` }}
              >
                <div className="px-3 sm:px-4 md:px-6">
                  <div
                    className="relative w-full h-[260px] sm:h-[280px] md:h-[300px] rounded-3xl overflow-hidden shadow-2xl"
                    style={{ backgroundColor: "#1A3970" }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "scaleX(-1)",
                      }}
                    />

                    <div className="absolute inset-0 bg-[#1A3970]/90" />

                    <div className="absolute top-5 left-5 z-20">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm ring-4 ring-white/20 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#1894A4] flex items-center justify-center shadow-lg">
                          <img src={card.icon} alt={card.title} className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 h-[120px]">
                      <h3 className="text-xl md:text-2xl font-extrabold text-white">{card.title}</h3>
                      <p className="text-sm md:text-base text-white/80 leading-snug">{card.text}</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-[#1894A4] hover:text-white transition mr-12 mt-12"
        >
          <ChevronRight size={28} />
        </button>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all ${
                currentSlide === i
                  ? "bg-[#1894A4] w-10 h-2 rounded-full"
                  : "bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
