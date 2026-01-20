import React from "react";
import ServiceLayout from "./ServiceLayout";


const ITGovernanceCompliance = () => {
  return (
    <ServiceLayout
      title="IT Governance & Compliance"
      intro="Our IT Governance & Compliance services help organizations align IT strategy with business goals while meeting regulatory and industry requirements."
      image="/services/IT_Governance_&_Compliance.webp" 
      why="Strong IT governance ensures that technology investments deliver value while managing risks and meeting compliance obligations."
      approach="We assess governance frameworks, policies, roles, and controls to strengthen accountability, compliance, and performance."
      benefits={[
        "Improved alignment of IT and business strategy",
        "Enhanced regulatory and standards compliance",
        "Stronger governance and accountability",
        "Reduced IT-related risks",
        "Better technology decision-making",
      ]}
    />
  );
};

export default ITGovernanceCompliance;
