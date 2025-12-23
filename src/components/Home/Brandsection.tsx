// const BrandsSection = () => {
//   const brands = [
//     { id: 1, name: "Brand 1", logo: "/logo1.png" },
//     { id: 2, name: "Brand 2", logo: "/logo2.png" },
//     { id: 3, name: "Brand 3", logo: "/eastlogo.png" },
//     { id: 4, name: "Brand 4", logo: "/sgi.png" },
//     { id: 5, name: "Brand 5", logo: "/logo5.png" },
//     { id: 6, name: "Brand 6", logo: "/logo6.png" },
//     { id: 7, name: "Brand 7", logo: "/logo7.png" },
//     { id: 8, name: "Brand 8", logo: "/logo8.png" },
//   ];

//   return (
//     <section className="w-full bg-[#1a1a2e] py-12 md:py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Single Row - Flex instead of Grid */}
//         <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap md:flex-nowrap">
//           {brands.map((brand) => (
//             <div
//               key={brand.id}
//               className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
//             >
//               <img
//                 src={brand.logo}
//                 alt={brand.name}
//                 className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
//                 style={{
//                   filter:
//                     "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandsSection;


import { useEffect, useState } from "react";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, name: "Brand 1", logo: "/logo1.png" },
  { id: 2, name: "Brand 2", logo: "/logo2.png" },
  { id: 3, name: "Brand 3", logo: "/eastlogo.png" },
  { id: 4, name: "Brand 4", logo: "/sgi.png" },
  { id: 5, name: "Brand 5", logo: "/logo5.png" },
  { id: 6, name: "Brand 6", logo: "/logo6.png" },
  { id: 7, name: "Brand 7", logo: "/logo7.png" },
  { id: 8, name: "Brand 8", logo: "/logo8.png" },
];

const SHIFT_BY = 2;

const BrandsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // responsive items
  const updateItemsPerPage = () => {
    if (window.innerWidth < 640) setItemsPerPage(3);       // Mobile
    else if (window.innerWidth < 1024) setItemsPerPage(4); // Tablet
    else setItemsPerPage(6);                               // Desktop
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + SHIFT_BY) % brands.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // get visible brands circularly
  const visibleBrands = Array.from({ length: itemsPerPage }).map(
    (_, i) => brands[(startIndex + i) % brands.length]
  );

  return (
    <section className="w-full bg-[#1a1a2e] py-14 overflow-hidden">
      <div className="w-full px-4 md:px-10 lg:px-14 xl:px-16">
        <div className="overflow-hidden">
          <div className="flex transition-all duration-700 ease-in-out">
            {visibleBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className={`flex justify-center items-center px-4 ${
                  itemsPerPage === 3
                    ? "w-1/3"
                    : itemsPerPage === 4
                    ? "w-1/4"
                    : "w-1/6"
                }`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 opacity-70 hover:opacity-100 transition"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
