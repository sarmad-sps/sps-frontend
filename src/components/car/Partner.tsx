import React from "react";

const BrandCarousel: React.FC = () => {
  const brands = [
    { id: 1, name: "Brand 1", logo: "/logo1.png" },
    { id: 2, name: "Brand 2", logo: "/logo2.png" },
    { id: 3, name: "Brand 3", logo: "/eastlogo.png" },
    { id: 4, name: "Brand 4", logo: "/sgi.png" },
    { id: 5, name: "Brand 5", logo: "/logo5.png" },
    { id: 6, name: "Brand 6", logo: "/logo6.png" },
    { id: 7, name: "Brand 7", logo: "/logo7.png" },
    { id: 8, name: "Brand 8", logo: "/logo8.png" },
  ];

  return (
    <section className="w-full py-16 bg-[#F8FBFF]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] mb-4">
          Our Partners
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-10">
  Partnering with leading and trusted brands to bring you the best insurance solutions.
</p>


        {/* Brand logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center bg-white/5 p-4 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 sm:h-16 md:h-20 object-contain"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
