import FadeUp from "../components/common/FadeUp";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import InsuranceCard from "../components/Takaful/InsuranceCard";
// import HeroSection from "../components/common/Hero";
import FAQSection from "../components/common/FAQsection";
import ClaimProcess from "../components/car/Claimprocess";

import FireTakafulSection from "../components/Takaful/Firetakaful/FireTakaful";

const FireTakaful = () => {
  const fireClaimPlans = [
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
      <FadeUp>
      <FireTakafulSection />
      </FadeUp>
       <ClaimProcess
        title="Risk Covered"
        plans={fireClaimPlans}
      />
      <FadeUp>
      <FAQSection />
      </FadeUp>
      <Footer />
    </div>
  );
};

export default FireTakaful;
