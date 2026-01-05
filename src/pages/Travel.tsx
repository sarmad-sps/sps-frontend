import FadeUp from "../components/common/FadeUp";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/common/Hero";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import TravelInfoSection from "../components/travel/TravelInfoSection";
// import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import ClaimProcess from "../components/car/Claimprocess";
import Carinfo from "../components/car/Carinfo";
// import Partner from "../components/car/Partner"
import BrandsSection from "../components/Home/Brandsection";
const Travel = () => {
const travelClaimPlans = [
  {
    title: "Basic Health Cover",
    features: [
      "Emergency Medical Assistance",
      "Telemedicine Consultations",
      "Prescription Reimbursement",
      "24/7 Health Helpline",
    ],
  },
  {
    title: "Comprehensive Health Cover",
    features: [
      "Hospitalization & Surgery Coverage",
      "Pre-existing Condition Support",
      "Medical Evacuation",
      "Travel Health Checkups",
    ],
  },
  {
    title: "Premium Wellness Cover",
    features: [
      "Preventive Care & Vaccinations Abroad",
      "Mental Health & Counseling Services",
      "Chronic Illness Management While Traveling",
      "Dental & Vision Care During Travel",
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
  image: "/travelanimation.mp4", // replace with your actual image path
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
       <HeroSection isTravelPage={true} />
     </FadeUp>

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
          vehicleImage="/Travel.mp4"
        />
      </FadeUp>
      <FadeUp>
        <TravelInfoSection />
      </FadeUp>
      {/* <FadeUp>
        <InsuranceDetailsSection />
      </FadeUp>  */}
      <FadeUp>
      <Carinfo {...travelInsuranceInfo}/>
      </FadeUp>
      <FadeUp>
      <ClaimProcess
        title="Risk Covered"
        plans={travelClaimPlans}
      />
      </FadeUp>
      <FadeUp>
      {/* <Partner/> */}
      <BrandsSection/>
      </FadeUp>
      <FadeUp>
        <FAQSection />
      </FadeUp>
      <Footer />
    </>
  );
};

export default Travel;
