import Navbar from "../components/common/Navbar";
// import TravelForm from "../components/common/TravelForm";
import Footer from "../components/common/Footer";
import TravelInfoSection from "../components/travel/TravelInfoSection";
import Faq from "../components/takafulinfo/Faqs";
import ClaimProcess from "../components/car/Claimprocess";
function TravelTakaful() {
  const travelClaimPlans = [
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

//import Guidelines from "../components/takafulinfo/Guidelins"
function TravelTakaful() {


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

      <TravelInfoSection/>
       <ClaimProcess
        title="Risk Covered"
        plans={travelClaimPlans}
      />
    
      {/* <InsuranceDetailsSection /> */}
      <TravelInfoSection />
      <Faq
        variant="travel"
        title="Travel Takaful"
        subtitle="Travel Takaful is a Shariah-compliant, mutual protection plan that covers financial losses from unexpected travel issues, like medical emergencies, lost luggage, or trip cancellations, by pooling contributions (donations) from participants for collective assistance, operating on Islamic principles of mutual help rather than conventional insurance's commercial model."
      />
      {/* <Guidelines/> */}
      {/* <InsuranceDetailsSection /> */}
      <Footer />
    </div>
  );
}
}
export default TravelTakaful;
