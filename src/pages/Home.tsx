import FadeUp from "../components/common/FadeUp";
import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import ServicesSection1 from "../components/Home/ServiceSection1";
import AboutUsSection1 from "../components/common/Aboutussection1";

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

      <FadeUp>
        <HeroSection />
      </FadeUp>

      <FadeUp>
        <div id="services">
          <ServicesSection1 />
        </div>
      </FadeUp>

      <FadeUp>
        <AboutUsSection1 />
      </FadeUp>

      {/* <FadeUp >
        <ServicesSection2 />
      </FadeUp> */}

      <FadeUp>
        <WhyUsSection />
      </FadeUp>

      <FadeUp>
        <Bestplan />
      </FadeUp>

      <FadeUp>
        <div id="team">
          <TeamSection />
        </div>
      </FadeUp>

      <FadeUp>
        <WhyUsSection2 />
      </FadeUp>

      <FadeUp>
        <BrandsSection />
      </FadeUp>

      <FadeUp>
        <TestimonialsSection />
      </FadeUp>

      <FadeUp>
        <FAQSection />
      </FadeUp>

      <Footer />
    </div>
  );
};

export default Home;
