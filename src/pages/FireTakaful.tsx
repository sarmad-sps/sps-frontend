import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import InsuranceCard from "../components/Takaful/InsuranceCard";
import HeroSection from "../components/common/Hero";
import FAQSection from "../components/common/FAQsection";

const FireTakaful = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
      <InsuranceCard showForm={true} />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default FireTakaful;
