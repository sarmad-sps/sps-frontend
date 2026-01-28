import FadeUp from "../components/common/FadeUp";
import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import ContactUsSection from "../components/contact/Contactussection";
import WhyUsSection from "../components/common/Whyussection";
import TeamSection from "../components/common/Teammembers";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import CustomHero from "../components/common/CustomHero";
import contact from "../assets/contact2.jpeg"
const Contactus = () => {
  return (
    <>
      <Navbar />
      <FadeUp>
      {/* <HeroSection
        backgroundImage="/contact.jpeg"
        title={<>Contact Us</>}
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      /> */}
      <CustomHero
      backgroundImage={contact}
  title=""
      />
      </FadeUp>
      <FadeUp>
      <ContactUsSection />
      </FadeUp>
      <FadeUp>
      <WhyUsSection />
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

export default Contactus;
