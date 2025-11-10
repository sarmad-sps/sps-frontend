import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Navbar from "../components/common/Navbar";
import VehicleInsuranceForm from "../components/common/VehicleInsuranceForm";
import { carFormFields } from "../config/formFields";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
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
         <VehicleInfoHeader
        vehicleType="car"
        title={
          <>
            Motor Takaful  from Pakistan's
            <br />
            Top Takaful Providers
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
    </>
  );
};

export default Takaful;
