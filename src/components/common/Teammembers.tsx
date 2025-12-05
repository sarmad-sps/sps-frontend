import { useState, useEffect } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Fiaz Anjum",
    position: "Chief Executive Officer",
    image: "/CEO.jpg",
  },
  {
    id: 2,
    name: "Muhammad Shoaib",
    position: "Chief Operating Officer",
    image: "/COO.jpg",
  },
  {
    id: 3,
    name: "Muhammad Sohaib",
    position: "Director",
    image: "/director.jpg",
  },
];

export default function TeamSection() {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [slides, setSlides] = useState<TeamMember[][]>([]);

  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) {
      setCardsPerPage(1); // Mobile → 1 card (center mein)
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(2); // Tablet → 2 cards (dono center mein)
    } else {
      setCardsPerPage(3); // Desktop → 3 cards side by side
    }
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Slides logic similar to ServiceSection1
  useEffect(() => {
    let newSlides: TeamMember[][] = [];

    if (cardsPerPage === 3) {
      // Desktop: All 3 cards together
      newSlides = [teamMembers];
    } else if (cardsPerPage === 2) {
      // Tablet: slides [1,2] → [2,3] → [3,1] → back to [1,2]
      newSlides = [
        [teamMembers[0], teamMembers[1]], // [Fiaz, Shoaib]
        [teamMembers[1], teamMembers[2]], // [Shoaib, Sohaib]
        [teamMembers[2], teamMembers[0]], // [Sohaib, Fiaz]
      ];
    } else {
      // Mobile: 1 card per slide
      newSlides = teamMembers.map((member) => [member]);
    }

    setSlides(newSlides);
    setPage(0);
  }, [cardsPerPage]);

  const totalPages = slides.length;

  // Auto Slide like ServiceSection1
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gray-100"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3">
            <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" />
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
            {/* Mobile & Tablet: Carousel like ServiceSection1 */}
            <div className="overflow-hidden w-full mb-6">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {slides.map((slideMembers, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 flex">
                    {slideMembers.map((member: TeamMember) => (
                      <div
                        key={member.id}
                        className={`flex-shrink-0 p-3 ${
                          cardsPerPage === 1
                            ? "w-full"
                            : cardsPerPage === 2
                            ? "w-1/2"
                            : "w-1/3"
                        }`}
                      >
                        <TeamCard member={member} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots like ServiceSection1 */}
            <div className="flex justify-center gap-3">
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
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
            member.name === "Muhammad Sohaib"
              ? "object-top"
              : member.name === "Fiaz Anjum"
              ? "object-center"
              : "object-center"
          }`}
        />
      </div>
      <div className="p-6 text-center flex-1 flex flex-col justify-center bg-white">
        <h3 className="text-2xl font-bold text-[#1894a4] mb-1">
          {member.name}
        </h3>
        <p className="text-gray-600 text-base">{member.position}</p>
      </div>
    </div>
  );
}