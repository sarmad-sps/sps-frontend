import FadeUp from "../components/common/FadeUp";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import InsuranceCard from "../components/Takaful/InsuranceCard";
// import HeroSection from "../components/common/Hero";
import FAQSection from "../components/common/FAQsection";
import ClaimProcess from "../components/car/Claimprocess";
import Faq from "../components/Takaful/takafulinfo/Faqs";

import FireTakafulSection from "../components/Takaful/Firetakaful/FireTakaful";
import HeroSection from "../components/common/Hero";

const FireTakaful = () => {
 const fireClaimPlans = [
  {
    title: "Basic Health Protection",
    features: [
      "Outpatient Consultation Coverage",
      "Prescription Medicines",
      "Annual Health Checkup",
      "24/7 Telemedicine Support",
    ],
  },
  {
    title: "Comprehensive Health Protection",
    features: [
      "Hospitalization & Surgery Coverage",
      "Specialist Consultation Coverage",
      "Emergency Medical Services",
      "Diagnostic Tests & Lab Work",
    ],
  },
  {
    title: "Premium Wellness Protection",
    features: [
      "Preventive Care & Vaccinations",
      "Mental Health & Counseling Support",
      "Chronic Disease Management",
      "Dental & Vision Coverage",
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
       <HeroSection isFirePage={true} />
      <FadeUp>
      <FireTakafulSection />
      </FadeUp>
      <FadeUp>
      <Faq
        variant="fire"
        title="Fire Takaful"
        subtitle="Fire Takaful is a type of Islamic property protection plan that provides financial security against losses or damages to a person's assets caused by fire and related perils, operating in a manner consistent with Shariah (Islamic law)."
      />
      </FadeUp>
       <FadeUp>
       <ClaimProcess
        title="Risk Covered"
        plans={fireClaimPlans}
      />
      </FadeUp>
      <FadeUp>
      <FAQSection />
      </FadeUp>
      <Footer />
    </div>
  );
};

export default FireTakaful;
