import InsuranceSection from "../common/InsuranceSection";
import HealthFormCard from "./HealthFormCard";

const HealthInfoSection = () => {
  return (
    <InsuranceSection
      FormCard={<HealthFormCard />}
      image="/Healthsectionimage1.png"
      imageAlt="Health Insurance"
      tagText="≫≫ FREE QUOTE ≪≪"
      title="Find Best Health Insurance in Pakistan"
      description="Compare & find coverage for your car from top insurance providers in Pakistan."
    />
  );
};

export default HealthInfoSection;
