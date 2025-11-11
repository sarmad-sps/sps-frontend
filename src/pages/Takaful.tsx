import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Navbar from "../components/common/Navbar";

import InsuranceCard from "../components/Takaful/InsuranceCard";
const Takaful = () => {
  return (
    <>
      <Navbar />
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
    

      <InsuranceCard/>
      <InsuranceDetailsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Takaful;
