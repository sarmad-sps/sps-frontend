export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Mark D.Brock',
      position: 'CEO & Founder',
      image: '/Member1.jpg',
    },
    {
      id: 2,
      name: 'Mark D.Brock',
      position: 'CEO & Founder',
      image: '/Member2.jpg',
    },
    {
      id: 3,
      name: 'Mark D.Brock',
      position: 'CEO & Founder',
      image: '/Member2.jpg',
    },
    {
      id: 4,
      name: 'Mark D.Brock',
      position: 'CEO & Founder',
      image: '/Member2.jpg',
    },
  ];

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-12"> 
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-700 text-sm md:text-base font-semibold mb-2">
            Team Member
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
            We have More Than 55+ Years Of Experience
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1894a4]">
            Dedicated Team Member
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#1894a4] mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}