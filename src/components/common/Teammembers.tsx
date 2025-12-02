import { useState, useEffect } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Fiaz Anjum", position: "Chief Executive Officer", image: "/CEO.jpg" },
  { id: 2, name: "Muhammad Shoaib", position: "Chief Operating Officer", image: "/COO.jpg" },
  { id: 3, name: "Muhammad Sohaib", position: "Director", image: "/director.jpg" },
];

export default function TeamSection() {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [slides, setSlides] = useState<TeamMember[][]>([]);

  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) {
      setCardsPerPage(1);        // Mobile → 1 card (center mein)
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(2);        // Tablet → 2 cards (dono center mein)
    } else {
      setCardsPerPage(3);        // Desktop → 3 cards side by side
    }
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Slides banate waqt dynamic chunk size use kar rahe hain
  useEffect(() => {
    const chunks: TeamMember[][] = [];
    for (let i = 0; i < teamMembers.length; i += cardsPerPage) {
      chunks.push(teamMembers.slice(i, i + cardsPerPage));
    }
    setSlides(chunks);
    setPage(0);
  }, [cardsPerPage]);

  const totalPages = slides.length;

  // Auto slide (sirf jab 1 ya 2 cards dikhte hain)
  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gray-100"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3">
                    <img
                      src="/splogo.png"
                      className="w-9 h-9 sm:w-11 sm:h-11"
                    />
                    <p className="text-[#1894A4] font-bold text-sm uppercase tracking-wider">
                      TEAM MEMBER's
                    </p>
                  </div>
          {/* <p className="text-gray-700 text-sm md:text-base font-semibold mb-2">Team Member</p> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
            We have More Than 55+ Years Of Experience
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1894a4]">
            Dedicated Team Member
          </h2>
        </div>

        {/* Desktop: 3 cards in a row */}
        {cardsPerPage === 3 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <>
            {/* Mobile & Tablet: Carousel with Perfect Centering */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="flex justify-center px-4 sm:px-8">
                      <div
                        className={`flex gap-6 md:gap-10 justify-center flex-wrap max-w-5xl w-full
                          ${cardsPerPage === 1 ? "max-w-sm" : "max-w-4xl"}`}
                      >
                        {slide.map((member) => (
                          <div
                            key={member.id}
                            className={`flex-shrink-0 ${
                              cardsPerPage === 1
                                ? "w-full max-w-sm"
                                : "w-full sm:w-80 md:w-72"
                            }`}
                          >
                            <TeamCard member={member} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-12">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`transition-all rounded-full ${
                      page === i
                        ? "bg-[#1894a4] w-10 h-2"
                        : "bg-gray-400 w-2 h-2 hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
      <div className="relative h-80 overflow-hidden bg-gray-200">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center flex-1 flex flex-col justify-center bg-white">
        <h3 className="text-2xl font-bold text-[#1894a4] mb-1">{member.name}</h3>
        <p className="text-gray-600 text-base">{member.position}</p>
      </div>
    </div>
  );
}