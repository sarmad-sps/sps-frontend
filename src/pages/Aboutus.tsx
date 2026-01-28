import FadeUp from "../components/common/FadeUp";
import AboutUsSection1 from "../components/common/Aboutussection1";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import TeamSection from "../components/common/Teammembers";
import WhyUsSection from "../components/common/Whyussection";
import CustomHero from "../components/common/CustomHero";
import about from "../assets/aboutus.jpeg"

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <FadeUp>
      {/* <HeroSection
        backgroundImage="/Heroimage2.png"
        title={<>About Us</>}
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      /> */}
      <CustomHero
       backgroundImage={about}
  title=""
      />
      </FadeUp>
      
      <FadeUp>
      <WhyUsSection />
      </FadeUp>
      <FadeUp>
      <AboutUsSection1 />
      </FadeUp>
      <FadeUp>
      <TeamSection />
      </FadeUp>
      <FadeUp>
      <FAQSection />
      </FadeUp>
      <Footer />
    </>
  );
};

export default Aboutus;
