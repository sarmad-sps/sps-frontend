const BrandsSection = () => {
  const brands = [
    { id: 1, name: "Brand 1", logo: "/Brand1.png" },
    { id: 2, name: "Brand 2", logo: "/Brand2.png" },
    { id: 3, name: "Brand 3", logo: "/Brand3.png" },
    { id: 4, name: "Brand 4", logo: "/Brand4.png" },
    { id: 5, name: "Brand 5", logo: "/Brand5.png" },
    { id: 6, name: "Brand 6", logo: "/Brand6.png" },
  ];

  return (
    <section className="w-full bg-[#1a1a2e] py-12 md:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18"> 
        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 lg:gap-12 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
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

export default BrandsSection;
