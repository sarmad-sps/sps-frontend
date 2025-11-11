import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/common/Hero";
import TravelForm from "../components/common/TravelForm";
import InsuranceDetailsSection from "../components/common/Insurancedetailssection";
import Footer from "../components/common/Footer";

function TravelTakaful() {
  return (
    <div>
      <Navbar />
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
      <TravelForm/>
      <InsuranceDetailsSection/>
      <Footer/>

      
    </div>
  );
}

export default TravelTakaful;
