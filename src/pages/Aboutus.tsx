import AboutUsSection1 from "../components/common/Aboutussection1";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import TeamSection from "../components/common/Teammembers";
import WhyUsSection from "../components/common/Whyussection";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/Heroimage2.png"
        title={<>About Us</>}
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />
      <AboutUsSection1 />
      <WhyUsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Aboutus;
