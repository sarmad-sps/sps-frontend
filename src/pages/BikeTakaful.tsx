import Navbar from "../components/common/Navbar";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HeroSection from "../components/common/Hero";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import FadeUp from "../components/common/FadeUp";
import VehicleInsuranceForm from "../components/common/VehicleInsuranceForm";
import { bikeFormFields } from "../config/formFields";
import ClaimProcess from "../components/car/Claimprocess";
// import BikeTakafulForm from "../components/Takaful/BikeTakaful/BikeTakafulForm";

const BikeTakaful = () => {
  const bikeClaimPlans = [
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
      </FadeUp> */}
      <FadeUp>
      <VehicleInfoHeader
        vehicleType="bike"
        title={
          <>
            Find Best Bike
            <br />
            Insurance in Pakistan
          </>
        }
        subtitle="Compare top Takaful providers and find trusted coverage for your bike with ease."
        vehicleImage="/Bikeimage.png"
      />
      </FadeUp>
     
     {/* <BikeTakafulForm /> */}
      
       <FadeUp>
      <VehicleInsuranceForm
        vehicleType="bike"
        formFields={bikeFormFields}
        // apiEndpoint="/api/bike-insurance-quotes"
      />
      </FadeUp>
        <FadeUp>
           <ClaimProcess
        title="Risk Covered"
        plans={bikeClaimPlans}
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

export default BikeTakaful;
