import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import InsuranceCard from "../components/Takaful/InsuranceCard";
import HeroSection from "../components/common/Hero";
import FAQSection from "../components/common/FAQsection";
import FadeUp from "../components/common/FadeUp";
import HealthTakaful from "../components/Takaful/HealthTakaful/Healthtakaful";
import Claimprocess from "../components/car/Claimprocess";
import Faq from "../components/Takaful/takafulinfo/Faqs";
const Healthtakaful = () => {

  const healthClaimPlans = [
  {
    title: "Basic Care",
    features: [
      "Outpatient Consultation Coverage",
      "Prescription Drugs Coverage",
      "Annual Health Checkup",
      "Telemedicine Support",
    ],
  },
  {
    title: "Comprehensive Care",
    features: [
      "Hospitalization & Surgery Coverage",
      "Specialist Consultation Coverage",
      "Diagnostic Tests Coverage",
      "Emergency Room Services",
    ],
  },
  {
    title: "Premium Wellness",
    features: [
      "Preventive Care & Vaccinations",
      "Chronic Disease Management",
      "Mental Health & Counseling",
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
       <HeroSection isHealthPage={true} />
      <FadeUp>
      <HealthTakaful 
      />
      </FadeUp>
      <FadeUp>
      <Faq
        variant="health"
        title="Health Takaful"
        subtitle="Health Takaful is an Islamic alternative to regular health insurance. It is based on helping each other, sharing responsibility, and making donations (Tabarru'). Everyone contributes to a common fund, which is used to support any member who needs medical help."
      />
      </FadeUp>
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
