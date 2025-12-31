import Navbar from "../components/common/Navbar";
// import TravelForm from "../components/common/TravelForm";
import Footer from "../components/common/Footer";
import TravelInfoSection from "../components/travel/TravelInfoSection";
import Faq from "../components/Takaful/takafulinfo/Faqs";
import ClaimProcess from "../components/car/Claimprocess";
import FadeUp from "../components/common/FadeUp";
import HeroSection from "../components/common/Hero";
function TravelTakaful() {
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

  return (
    <div>
      <Navbar />
      {/* <HeroSection
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
      /> */}
      {/* <TravelForm /> */}
       <HeroSection isTravelPage={true} />
      <FadeUp>
      <TravelInfoSection/>
      </FadeUp>
      <FadeUp>
       <ClaimProcess
        title="Risk Covered"
        plans={travelClaimPlans}
      />
     </FadeUp>
      {/* <InsuranceDetailsSection /> */}
      
      <FadeUp>
      <Faq
        variant="travel"
        title="Travel Takaful"
        subtitle="Travel Takaful is a Shariah-compliant, mutual protection plan that covers financial losses from unexpected travel issues, like medical emergencies, lost luggage, or trip cancellations, by pooling contributions (donations) from participants for collective assistance, operating on Islamic principles of mutual help rather than conventional insurance's commercial model."
      />
      </FadeUp>
      {/* <Guidelines/> */}
      {/* <InsuranceDetailsSection /> */}
      <Footer />
    </div>
  );
}

export default TravelTakaful;
