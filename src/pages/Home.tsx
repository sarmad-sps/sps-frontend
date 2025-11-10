import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import ServicesSection1 from "../components/Home/ServiceSection1";
import AboutUsSection1 from "../components/common/Aboutussection1";
import ServicesSection2 from "../components/Home/ServiceSection2";
import WhyUsSection from "../components/common/Whyussection";
import Bestplan from "../components/common/Bestplan";
import TeamSection from "../components/common/Teammembers";
import WhyUsSection2 from "../components/Home/Whyussection2";
import BrandsSection from "../components/Home/Brandsection";
import TestimonialsSection from "../components/common/Testinomialsection";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection1 />
      <AboutUsSection1 />
      <ServicesSection2 />
      <WhyUsSection />
      <Bestplan />
      <TeamSection />
      <WhyUsSection2 />
      <BrandsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
export default Home;
