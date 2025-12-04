import FadeUp from "../components/common/FadeUp";
import Navbar from "../components/common/Navbar";
// import HeroSection from "../components/common/Hero";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import TravelInfoSection from "../components/travel/TravelInfoSection";
// import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import ClaimProcess from "../components/car/Claimprocess";
import Carinfo from "../components/car/Carinfo";
import CoverageHighlights from "../components/car/Coveragehighlight";
import Partner from "../components/car/Partner"
const Travel = () => {
 const travelClaimPlans = [
  {
    title: "Basic",
    features: [
      "Coverage for trip cancellations or interruptions",
      "Emergency medical expenses abroad",
      "Loss or delay of baggage",
      "Travel assistance services",
    ],
  },
  {
    title: "Standard",
    features: [
      "Comprehensive medical coverage while traveling",
      "Trip cancellation and interruption protection",
      "Baggage loss, delay, and theft coverage",
      "Emergency evacuation and repatriation",
     
    ],
  },
  {
    title: "Premium",
    features: [
      "Full medical and hospitalization coverage worldwide",
      "Trip cancellation, interruption, and delay coverage",
      "Baggage loss, theft, and damage protection",
      "Emergency evacuation, repatriation & travel support",
    ],
  },
];
const travelInsuranceInfo = {
  title: "What is Travel Insurance?",
  description:
    "Travel insurance is a type of coverage that protects you financially and provides assistance while traveling. It helps cover medical emergencies, trip cancellations, lost baggage, and other unexpected travel-related issues.",
  benefits: [
    "Coverage for medical emergencies abroad",
    "Protection against trip cancellations or interruptions",
    "Baggage loss, delay, or theft coverage",
    "Emergency evacuation and repatriation",
    "24/7 travel assistance services",
    "Customizable plans to suit your travel needs",
  ],
  image: "/travelinsurance.webp", // replace with your actual image path
};

  return (
    <>
      <Navbar />
      {/* <FadeUp>
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
      </FadeUp> */}
      <FadeUp>
        <VehicleInfoHeader
          vehicleType="travel"
          title={
            <>
              Up to 50% Off* on
              <br />
              Travel Insurance
            </>
          }
          subtitle="Compare top travel insurance plans and get trusted coverage for all your adventures, anywhere in the world."
          vehicleImage="/Travelicon.png"
        />
      </FadeUp>
      <FadeUp>
        <TravelInfoSection />
      </FadeUp>
      {/* <FadeUp>
        <InsuranceDetailsSection />
      </FadeUp>  */}
      <Carinfo {...travelInsuranceInfo}/>
      <ClaimProcess
        title="Bike Insurance Claim Process"
        plans={travelClaimPlans}
      />
      <CoverageHighlights/>
      <Partner/>
      <FadeUp>
        <FAQSection />
      </FadeUp>
      <Footer />
    </>
  );
};

export default Travel;
