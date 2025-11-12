import Navbar from "../components/common/Navbar";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import BikeTakafulForm from "../components/Takaful/BikeTakaful/BikeTakafulForm";

const BikeTakaful = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        backgroundImage="/Bikeinsurancepolicyimage.jpg"
        title={
          <>
            Bike Takaful Insurance
            <br />
            Policy
          </>
        }
        isBikePage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />
      <VehicleInfoHeader
        vehicleType="bike"
        title={
          <>
            Find Best Bike
            <br />
            Insurance in Pakistan
          </>
        }
        subtitle="Compare & find coverage for your bike from top insurance providers in Pakistan."
        vehicleImage="/Bikeimage.png"
      />
     <BikeTakafulForm />
      <InsuranceDetailsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default BikeTakaful;
