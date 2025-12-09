import FadeUp from "../components/common/FadeUp";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
// import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import Partner from "../components/car/Partner";
import InsuranceCard from "../components/Takaful/InsuranceCard";
import Takafulinfo from "../components/Takaful/takafulinfo/Takaful";
// import Takafulwork from "../components/takafulinfo/Takafulwork"
const Takaful = () => {
  return (
    <>
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
      <FadeUp>
        <InsuranceCard />
      </FadeUp>
      <FadeUp>
       <Partner/>
      </FadeUp>
     <FadeUp>
         <Takafulinfo/>
     </FadeUp>
     
      {/* <Takafulwork/> */}
      <FadeUp>
        <FAQSection />
      </FadeUp>
      <Footer />
    </>
  );
};

export default Takaful;
