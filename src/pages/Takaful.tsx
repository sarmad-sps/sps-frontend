import FadeUp from "../components/common/FadeUp";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
// import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";

import InsuranceCard from "../components/Takaful/InsuranceCard";
const Takaful = () => {
  return (
    <>
      <Navbar />
      {/* <FadeUp>
        <HeroSection
          backgroundImage="/Kafalaheroimage.png"
          title={
            <>
              Takaful Insurance
              <br />
              Form
            </>
          }
          isKafalaPage={true}
          height="h-[400px] md:h-[450px] lg:h-[500px]"
          titleSize="text-4xl md:text-5xl"
        />
      </FadeUp> */}
      <FadeUp>
        <InsuranceCard />
      </FadeUp>
      <FadeUp>
        <FAQSection />
      </FadeUp>
      <Footer />
    </>
  );
};

export default Takaful;
