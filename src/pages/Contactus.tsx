import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactUsSection from "../components/Contactussection";
import WhyUsSection from "../components/Whyussection";
import TeamSection from "../components/Teammembers";
import FAQSection from "../components/FAQsection";
import Footer from "../components/Footer";


const Contactus = () => {
  return (
    <> 
     <Navbar />
     <HeroSection 
     backgroundImage="/Heroimage2.png"
        title={
          <>
            Contact Us
          </>
        }
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