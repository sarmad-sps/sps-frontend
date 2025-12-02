
import FadeUp from "../components/common/FadeUp";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Navbar from "../components/common/Navbar";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import VehicleInsuranceForm from "../components/common/VehicleInsuranceForm";
import { carFormFields } from "../config/formFields";
// import CarTakafulForm from "../components/Takaful/CarTakaful/CarTakafulForm";

const CarTakaful = () => {
  return (
    <div>
      {/* Navbar remains full width */}
      <Navbar />
      <FadeUp>
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
        </FadeUp>
        <FadeUp>
        <VehicleInfoHeader
          vehicleType="car"
          title={
            <>
              Find Best Car
              <br />
              Insurance in Pakistan
            </>
          }
          subtitle="Compare top Takaful providers and find trusted coverage for your car with ease."
          vehicleImage="/Vehicleinfosection1image1.png"
        />
        </FadeUp>

        {/* <CarTakafulForm /> */}

        <FadeUp>
        <VehicleInsuranceForm
        vehicleType="car"
        formFields={carFormFields}
        // apiEndpoint="/api/car-insurance-quotes"
      />
      </FadeUp>
      <FadeUp>
        <InsuranceDetailsSection />
        </FadeUp>
        <FadeUp>
        <FAQSection />
        </FadeUp>

        <Footer />

    </div>
  );
};

export default CarTakaful;