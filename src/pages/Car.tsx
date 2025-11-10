import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Navbar from "../components/common/Navbar";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import VehicleInsuranceForm from "../components/common/VehicleInsuranceForm";
import { carFormFields } from "../config/formFields";

const Car = () => {
  return (
    <div>
      <Navbar />
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
      <VehicleInsuranceForm
        vehicleType="car"
        formFields={carFormFields}
        apiEndpoint="/api/car-insurance-quotes"
      />
      <InsuranceDetailsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Car;
