import FadeUp from "../components/common/FadeUp";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import HealthInfoSection from "../components/health/Healthinfosection";
// import HeroSection from "../components/common/Hero";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Navbar from "../components/common/Navbar";
import TestimonialsSection from "../components/common/Testinomialsection";
import VehicleInfoHeader from "../components/common/VehicleInfoHeader";


const Health = () => {
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
        subtitle="We are a professional and creative company and we offer you a trusty insurance on
        your vehicle."
        vehicleImage="/Healthicon.png"
      />
      </FadeUp>
      <FadeUp>
      <HealthInfoSection />
      </FadeUp>
      <FadeUp>
      <InsuranceDetailsSection />
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
