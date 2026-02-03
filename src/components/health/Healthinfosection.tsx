import InsuranceSection from "../common/InsuranceSection";
import HealthFormCard from "./HealthFormCard";
import health from "../../assets/Health Insurance.mp4"
const HealthInfoSection = () => {
  return (
    <InsuranceSection
      FormCard={<HealthFormCard />}
      image={health}
      imageAlt="Health Insurance"
      tagText="≫≫ FREE QUOTE ≪≪"
      title="Find Best Health Insurance in Pakistan"
      description="Compare & find coverage for your car from top insurance providers in Pakistan."
    />
  );
};

export default HealthInfoSection;
