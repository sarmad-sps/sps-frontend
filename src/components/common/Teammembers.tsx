import { useState, useEffect } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Mark D. Brock", position: "CEO & Founder", image: "/Member1.jpg" },
  { id: 2, name: "Sarah Johnson", position: "Chief Operating Officer", image: "/Member2.jpg" },
  { id: 3, name: "David Lee", position: "Lead Developer", image: "/Member2.jpg" },
  { id: 4, name: "Emma Wilson", position: "Head of Marketing", image: "/Member2.jpg" },
];

export default function TeamSection() {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [slides, setSlides] = useState<TeamMember[][]>([]);

  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) {
      setCardsPerPage(1);      // < 640px → 1 card (real mobile)
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(2);      // 640px – 1023px → 2 cards (sm, md, tablets)
    } else {
      setCardsPerPage(4);      // ≥ 1024px → all 4 cards
    }
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    let newSlides: TeamMember[][] = [];

    if (cardsPerPage === 4) {
      newSlides = [teamMembers];
    } else if (cardsPerPage === 2) {
      newSlides = [
        [teamMembers[0], teamMembers[1]],
        [teamMembers[2], teamMembers[3]],
      ];
    } else {
      newSlides = teamMembers.map((m) => [m]);
    }

    setSlides(newSlides);
    setPage(0);
  }, [cardsPerPage]);

  const totalPages = slides.length;

  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gray-100"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gray-700 text-sm md:text-base font-semibold mb-2">Team Member</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
            We have More Than 55+ Years Of Experience
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1894a4]">
            Dedicated Team Member
          </h2>
        </div>

        {/* Desktop */}
        {cardsPerPage === 4 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <>
            <div className="overflow-hidden w-full pb-8">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="w-full flex-shrink-0 flex">
                    {slide.map((member) => (
                      <div
                        key={member.id}
                        className={`flex-shrink-0 ${
                          cardsPerPage === 1 ? "w-full px-4" : "w-1/2 px-4"
                        }`}
                      >
                        <TeamCard member={member} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-10">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`transition-all duration-300 rounded-full ${
                      page === i ? "bg-[#1894a4] w-8 h-2" : "bg-gray-300 w-2 h-2 hover:bg-gray-500"
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
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
      <div className="relative h-72 overflow-hidden bg-gray-200">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[#1894a4] mb-1">{member.name}</h3>
        <p className="text-gray-600 text-sm md:text-base">{member.position}</p>
      </div>
    </div>
  );
}