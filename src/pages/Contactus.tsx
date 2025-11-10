import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import ContactUsSection from "../components/contact/Contactussection";
import WhyUsSection from "../components/common/Whyussection";
import TeamSection from "../components/common/Teammembers";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/Heroimage2.png"
        title={<>Contact Us</>}
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />
      <ContactUsSection />
      <WhyUsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Contactus;
