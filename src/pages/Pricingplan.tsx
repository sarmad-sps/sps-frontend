import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import Bestplan from "../components/Bestplan";
import AboutUsSection1 from "../components/Aboutussection1";
import WhyUsSection from "../components/Whyussection";

import TeamSection from "../components/Teammembers";
import FAQSection from "../components/FAQsection";
import Footer from "../components/Footer";

const Pricingplan = () => {
  return (
   <>
   <Navbar/>
   <HeroSection
    backgroundImage="/Heroimage2.png"
        title={
          <>
           Pricing Plan
          </>
        }
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
   />
   <Bestplan/>
   <AboutUsSection1/>
   <WhyUsSection/>
   <TeamSection/>
   <FAQSection/>
   <Footer/>
   </>
  );
};   

export default Pricingplan;