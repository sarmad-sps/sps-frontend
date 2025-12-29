import InsuranceSection from "../common/InsuranceSection";
import TravelFormCard from "./TravelFormCard";

const TravelInfoSection = () => {
  return (
    <InsuranceSection
      FormCard={<TravelFormCard />}
      image="/travelinsurance.mp4"
      imageAlt="Travel Insurance"
      tagText="FREE QUOTE"
      title="Find Best Travel Insurance in Pakistan"
      description="Compare & find coverage for your travel from top insurance providers in Pakistan."
    />
  );

};

export default TravelInfoSection;
