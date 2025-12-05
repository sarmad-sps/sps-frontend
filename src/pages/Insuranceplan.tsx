import { useLocation } from 'react-router-dom';
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
// import HeroSection from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import TestimonialsSection from "../components/common/Testinomialsection";
import InsurancePlanDetails from "../components/Insuranceplandetails";
import FadeUp from '../components/common/FadeUp';

const Insuranceplan = () => {
  
    const location = useLocation();
    const selectedQuote = location.state?.quote;

   
   

    return (
        <div>
            <Navbar />
            {/* <FadeUp>
            <HeroSection
                backgroundImage="/Kafalaheroimage.png"
                title={
                    <>
                        Plans
                    </>
                }
                isKafalaPage={true}
                height="h-[400px] md:h-[450px] lg:h-[500px]"
                titleSize="text-4xl md:text-5xl"
            />
            </FadeUp> */}
            <FadeUp>
            <InsurancePlanDetails quote={selectedQuote}/>
            </FadeUp>
            <FadeUp>
            <TestimonialsSection />
            </FadeUp>
            <FadeUp>
            <FAQSection />
            </FadeUp>
            <Footer />
        </div>
    );
}

export default Insuranceplan;