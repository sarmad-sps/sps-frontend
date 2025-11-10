import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import Bestplan from "../components/common/Bestplan";
import AboutUsSection1 from "../components/common/Aboutussection1";
import WhyUsSection from "../components/common/Whyussection";

import TeamSection from "../components/common/Teammembers";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";

const Pricingplan = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/Heroimage2.png"
        title={<>Pricing Plan</>}
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />
      <Bestplan />
      <AboutUsSection1 />
      <WhyUsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Pricingplan;
