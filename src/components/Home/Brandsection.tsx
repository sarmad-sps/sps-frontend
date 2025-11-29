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


const BrandsSection = () => {
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
    <section className="w-full bg-[#1a1a2e] py-12 md:py-16 overflow-hidden">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
        {/* Single Row - Flex instead of Grid */}
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap md:flex-nowrap">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
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


