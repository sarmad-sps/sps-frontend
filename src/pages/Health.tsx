import FadeUp from "../components/common/FadeUp";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HealthInfoSection from "../components/health/Healthinfosection";
// import HeroSection from "../components/common/Hero";
// import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Navbar from "../components/common/Navbar";
import TestimonialsSection from "../components/common/Testinomialsection";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";
import Carinfo from "../components/car/Carinfo";
import Claimprocess from "../components/car/Claimprocess";
import CoverageHighlights from "../components/car/Coveragehighlight";
import Partner from "../components/car/Partner"

const Health = () => {
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


  const healthInsuranceInfo = {
  title: "What is Health Insurance?",
  description:
    "Health insurance is a type of coverage that helps you pay for medical expenses, doctor visits, hospital stays, and treatments. It protects you from high healthcare costs and ensures access to quality care when needed.",
  benefits: [
    "Covers hospitalization and surgery costs",
    "Covers doctor visits and medical tests",
    "Provides financial protection during emergencies",
    "Access to a network of healthcare providers",
    "Preventive care and wellness support",
    "Customizable plans to suit your health needs",
  ],
  image: "/healthinsurance.png", // replace with your actual image path
};

  return (
    <>
      <Navbar />
      {/* <FadeUp>
      <HeroSection
        backgroundImage="/Healthinsuarnceimage.jpg"
        title={
          <>
            Health Insurance
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
        vehicleType="health"
        title={
          <>
            Up to 50% Off* on
            <br />
            Health Insurance
          </>
        }
        subtitle="Compare top health insurance plans and get trusted coverage for you and your family."
        vehicleImage="/Healthicon.png"
      />
      </FadeUp>
      <FadeUp>
      <HealthInfoSection />
      </FadeUp>
      {/* <FadeUp>
      <InsuranceDetailsSection />
      </FadeUp> */}
      <FadeUp>
         <Carinfo {...healthInsuranceInfo}/>
      </FadeUp>
      <FadeUp>
           <Claimprocess
        title="Risk Covered"
        plans={healthClaimPlans}
       />
      </FadeUp>
      {/* <FadeUp>
          <CoverageHighlights/>
      </FadeUp> */}
       <FadeUp>
          <Partner/>
       </FadeUp>
       
      <FadeUp>
      <FAQSection />
      </FadeUp>
      <FadeUp>
      <TestimonialsSection />
      </FadeUp>
      <Footer />
    </>
  );
};

export default Health;
