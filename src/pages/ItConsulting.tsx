import Navbar from "../components/common/Navbar";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import ITConsultingCard from "../components/ItConsulting/ItConsultingCard";
import FadeUp from "../components/common/FadeUp";

const ItConsulting = () => {
  return (
    <div>
      <Navbar />
      <FadeUp>
       <HeroSection isConsultingPage={true} />
      </FadeUp>
      <FadeUp>
        <ITConsultingCard />
      </FadeUp>
      <FadeUp>
        <FAQSection />
      </FadeUp>
      <Footer />
    </div>
  );
};

export default ItConsulting;
