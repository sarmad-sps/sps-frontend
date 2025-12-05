import ClaimProcess from "../components/car/Claimprocess";
import CoverageHighlights from "../components/car/Coveragehighlight";
import FadeUp from "../components/common/FadeUp";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
// import HeroSection from "../components/common/Hero";
// import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Navbar from "../components/common/Navbar";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import VehicleInsuranceForm from "../components/common/VehicleInsuranceForm";
import Carinfo from "../components/car/Carinfo";
import { carFormFields } from "../config/formFields";
import Partner from "../components/car/Partner"

const Car = () => {
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
          subtitle="Easily compare top insurance providers and find the perfect coverage for your car, all in one place."
          vehicleImage="/Vehicleinfosection1image1.png"
        />
      </FadeUp>
      <FadeUp>
        <VehicleInsuranceForm
          vehicleType="car"
          formFields={carFormFields}
          // apiEndpoint="/api/car-insurance-quotes"
        />
      </FadeUp>
      <FadeUp>
        <Carinfo />
      </FadeUp>
      <FadeUp>
        <ClaimProcess
        title="Risk Covered"
        plans={carClaimPlans}
         />
      </FadeUp>
      {/* <FadeUp>
        <CoverageHighlights />
      </FadeUp> */}
        <FadeUp>
          <Partner/>
        </FadeUp>
      <FadeUp>
        <FAQSection />
      </FadeUp>
      <Footer />
    </div>
  );
};

export default Car;
// mnnnn
