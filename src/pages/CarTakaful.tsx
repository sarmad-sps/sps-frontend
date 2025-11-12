import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Navbar from "../components/common/Navbar";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import CarTakafulForm from "../components/Takaful/CarTakaful/CarTakafulForm";

const CarTakaful = () => {
  return (
    <div>
      {/* Navbar remains full width */}
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <HeroSection
          backgroundImage="/Heroimage2.png"
          title={
            <>
              Car Insurance
              <br />
              Policy
            </>
          }
          isCarPage={true}
          height="h-[400px] md:h-[450px] lg:h-[500px]"
          titleSize="text-4xl md:text-5xl"
        />
        <VehicleInfoHeader
          vehicleType="car"
          title={
            <>
              Find Best Car
              <br />
              Insurance in Pakistan
            </>
          }
          subtitle="Compare & find coverage for your car from top insurance providers in Pakistan."
          vehicleImage="/Vehicleinfosection1image1.png"
        />
        <CarTakafulForm />
        <InsuranceDetailsSection />
        <FAQSection />
      </main>

      {/* Footer with same increased padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Footer />
      </div>
    </div>
  );
};

export default CarTakaful;