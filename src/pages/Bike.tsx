import FadeUp from "../components/common/FadeUp";
import Navbar from "../components/common/Navbar";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
// import HeroSection from "../components/common/Hero";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import VehicleInsuranceForm from "../components/common/VehicleInsuranceForm";
// import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import { bikeFormFields } from "../config/formFields";
import ClaimProcess from "../components/car/Claimprocess";
import Partner from "../components/car/Partner"
import Carinfo from "../components/car/Carinfo";
import BrandsSection from "../components/Home/Brandsection";


const Bike = () => {
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

const bikeInsuranceInfo = {
    title: "What is Bike Insurance?",
    description:
      "Bike insurance is a type of coverage that protects your bike and finances in case of accidents, theft, or damage. It covers repairs, medical expenses, and third-party liability.",
    benefits: [
      "Accidental damage coverage",
      "Theft protection",
      "Third-party liability",
      "Peace of mind while riding",
      "24/7 Roadside assistance",
      "Customizable insurance plans",
    ],
    image: "/bikeinsurance.jpg",
  };

  return (
    <div>
      <Navbar />
      {/* <FadeUp>
      <HeroSection
        backgroundImage="/Bikeinsurancepolicyimage.jpg"
        title={
          <>
            Bike Insurance
            <br />
            Policy
          </>
        }
        isBikePage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />
      </FadeUp> */}
      <FadeUp>=
      <VehicleInfoHeader
        vehicleType="bike"
        title={
          <>
            Find Best Bike
            <br />
            Insurance in Pakistan
          </>
        }
        subtitle="Easily compare top insurance providers and find the perfect coverage for your bike, all in one place."
        vehicleImage="/Bikeimage.png"
      />
      </FadeUp>
      <FadeUp>
      <VehicleInsuranceForm
        vehicleType="bike"
        formFields={bikeFormFields}
        // apiEndpoint="/api/bike-insurance-quotes"
      />
      </FadeUp>
      {/* <FadeUp>
      <InsuranceDetailsSection />
      </FadeUp>  */}
      <FadeUp>
             <Carinfo {...bikeInsuranceInfo}/>
      </FadeUp>

     <FadeUp>
           <ClaimProcess
        title="Risk Covered"
        plans={bikeClaimPlans}
      />
     </FadeUp>
      {/* <FadeUp>
            <CoverageHighlights/>
      </FadeUp> */}
      <FadeUp>
          {/* <Partner/> */}
            <BrandsSection/>
      </FadeUp>
      
      <FadeUp>
      <FAQSection />
      </FadeUp>
      <Footer />
    </div>
  );
};

export default Bike;
