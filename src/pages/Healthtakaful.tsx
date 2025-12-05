import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import InsuranceCard from "../components/Takaful/InsuranceCard";
// import HeroSection from "../components/common/Hero";
import FAQSection from "../components/common/FAQsection";
import FadeUp from "../components/common/FadeUp";
import HealthTakaful from "../components/Takaful/HealthTakaful/Healthtakaful";
import Claimprocess from "../components/car/Claimprocess";
const Healthtakaful = () => {
  const healthClaimPlans = [
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* <FadeUp>
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
      </FadeUp> */}
      {/* <FadeUp>
        <InsuranceCard showForm={true} />
      </FadeUp> */}
      <HealthTakaful 
      
      />
      <FadeUp>
           <Claimprocess
        title="Risk Covered"
        plans={healthClaimPlans}
       />
      </FadeUp>
      <FadeUp>
        <FAQSection />
      </FadeUp>
      <Footer />
    </div>
  );
};

export default Healthtakaful;
