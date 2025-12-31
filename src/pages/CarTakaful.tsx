import FadeUp from "../components/common/FadeUp";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
// import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import HeroSection from "../components/common/Hero";
import VehicleInsuranceForm from "../components/common/VehicleInsuranceForm";
import ClaimProcess from "../components/car/Claimprocess";
import Faq from "../components/Takaful/takafulinfo/Faqs";
import { carFormFields } from "../config/formFields";
// import CarTakafulForm from "../components/Takaful/CarTakaful/CarTakafulForm";

const CarTakaful = () => {
   const carClaimPlans = [
  {
    title: "Third Party",
    features: [
      "Property Damage Liability",
      "Bodily Injury Liability",
      "Accidental Death",
      "Third-Party Property Repair",
    ],
  },
  {
    title: "Total Loss",
    features: [
      "Actual Cash Value (ACV)",
      "Parts Replacement Cost",
      "Comprehensive Coverage",
      "Deductibles",
    ],
  },
  {
    title: "Own Damage",
    features: [
      "Comprehensive Coverage",
      "Theft & Total Loss",
      "Third Party Liability",
      "Personal Accident Coverage",
    ],
  },
];
  return (
    <div>
      {/* Navbar remains full width */}
      <Navbar />
      {/* <FadeUp>
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
      </FadeUp> */}
        <HeroSection isCarPage={true} />
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
          vehicleImage="/Car Smoke.mp4"
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
      <Faq
        variant="car"
        title="Car Takaful"
        subtitle="Car Takaful is a type of Islamic insurance that provides a Shariah-compliant alternative to conventional motor insurance. It operates on the principles of mutual cooperation, shared responsibility, and risk-sharing among participants."
      />
      <FadeUp>
        <ClaimProcess
        title="Risk Covered"
        plans={carClaimPlans}
         />
      </FadeUp>
      {/* <FadeUp>
        <InsuranceDetailsSection />
      </FadeUp> */}
      <FadeUp>
        <FAQSection />
      </FadeUp>

      <Footer />
    </div>
  );
};

export default CarTakaful;
