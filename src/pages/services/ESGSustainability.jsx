import React from "react";
import ServiceLayout from "./ServiceLayout";


const ESGSustainability = () => {
  return (
    <ServiceLayout
      title="ESG & Sustainability"
      intro="Our ESG & Sustainability services support organizations in developing, implementing, and reporting on environmental, social, and governance initiatives."
      image="/services/ESG_&_Sustainability.webp" 
      why="Investors, regulators, and stakeholders increasingly expect transparency and accountability around ESG practices. Strong ESG programs enhance reputation, compliance, and long-term value creation."
      approach="We assist organizations with ESG strategy development, data collection, reporting frameworks, and assurance. Our approach aligns ESG initiatives with business objectives and regulatory expectations."
      benefits={[
        "Improved ESG transparency and reporting",
        "Enhanced stakeholder trust and credibility",
        "Alignment with global ESG standards",
        "Support for sustainable growth initiatives",
        "Reduced regulatory and reputational risks",
      ]}
    />
  );
};

export default ESGSustainability;
