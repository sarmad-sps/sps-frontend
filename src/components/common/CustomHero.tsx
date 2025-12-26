interface HeroSectionProps {
  backgroundImage: string;
  title: React.ReactNode;
  height?: string;
}

const CustomHero = ({
  backgroundImage,
  title,
  height = "h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px]",
}: HeroSectionProps) => {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="
          absolute inset-0 w-full h-full
           sm:object-cover
          object-center sm:object-top
        "
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0A2A66]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CustomHero;
