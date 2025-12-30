import Navbar from "../components/common/Navbar";
import FadeUp from "../components/common/FadeUp";
import Hero from "../components/common/Hero";
import TrackingProcess from "../components/tracker/TrackingProcess";
import ChoosingProcess from "../components/tracker/ChoosingProcess";
import WelcomeCompany from "../components/tracker/WelcomeCompany";
// import Plans from "../components/tracker/Plans";
import TrackerForm from "../components/tracker/TrackerForm";
import Facts from "../components/tracker/Facts";
import Testimonial from "../components/tracker/Testimonial";
import FAQSection from "../components/common/FAQsection";
import Footer from "../components/common/Footer";
import Benefits from "../components/tracker/Benefits";
import Services from "../components/tracker/Services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Tracker = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div>
      <Navbar />
      <FadeUp>
        <Hero
          backgroundImages={["/Tracking desktop.png"]}
          title={<>Find What Are You Looking For</>}
          isTrackerPage={true}
          height="h-[400px] md:h-[450px] lg:h-[500px]"
          titleSize="text-4xl md:text-5xl"
        />
      </FadeUp>
      <FadeUp>
        <TrackingProcess />
      </FadeUp>
      {/* <FadeUp>
        <ChoosingProcess />
      </FadeUp> */}
      <FadeUp>
        <Benefits />
      </FadeUp>
      <FadeUp>
        <Services />
      </FadeUp>
      <FadeUp>
        <WelcomeCompany />
      </FadeUp>
      {/* <FadeUp>
        <Plans />
      </FadeUp> */}
      <FadeUp>
        <TrackerForm />
      </FadeUp>
      <FadeUp>
        <Facts />
      </FadeUp>
      <FadeUp>
      <Testimonial />
      </FadeUp>
      <FadeUp>
      <FAQSection />
      </FadeUp>
      <Footer />
    </div>
  );
};

export default Tracker;
