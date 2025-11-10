import Navbar from "../components/common/Navbar";
import HeroSection from "../components/common/Hero";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import TravelInfoSection from "../components/travel/TravelInfoSection";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";

const Travel = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/Heroimage2.png"
        title={
          <>
            Travel Insurance
            <br />
            Policy
          </>
        }
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />

      <VehicleInfoHeader
        vehicleType="travel"
        title={
          <>
            Up to 50% Off* on
            <br />
            Travel Insurance
          </>
        }
        subtitle="We are a professional and creative company and we offer you a trusty insurance on
        your travel adventures."
        vehicleImage="/Travelicon.png"
      />
      <TravelInfoSection />
      <InsuranceDetailsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Travel;
