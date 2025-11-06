import AboutUsSection1 from "../components/Aboutussection1";
import FAQSection from "../components/FAQsection";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import TeamSection from "../components/Teammembers";
import WhyUsSection from "../components/Whyussection";


const Aboutus = () => {
    return (
        <>
        <Navbar />
        <HeroSection 
        backgroundImage="/Heroimage2.png"
        title={
          <>
            About Us
          </>
        }
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
    )
    
;    
}

export default Aboutus;