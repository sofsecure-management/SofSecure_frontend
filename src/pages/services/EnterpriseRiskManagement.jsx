import React from "react";
import ServiceLayout from "./ServiceLayout";


const EnterpriseRiskManagement = () => {
  return (
    <ServiceLayout
      title="Enterprise Risk Management"
      intro="Our Enterprise Risk Management (ERM) services help organizations identify, assess, and manage risks that could impact strategic objectives and long-term performance."
      image="/services/Enterprise_Risk_Management.webp" 
      why="Organizations today face complex strategic, operational, financial, and regulatory risks. Without a structured ERM framework, these risks can go unmanaged and negatively impact growth and resilience."
      approach="We design and implement ERM frameworks aligned with your business strategy. Our approach integrates risk identification, assessment, monitoring, and reporting to support informed decision-making."
      benefits={[
        "Improved visibility into enterprise-wide risks",
        "Better alignment of risk management with strategy",
        "Enhanced decision-making and resilience",
        "Proactive risk identification and mitigation",
        "Stronger governance and risk culture",
      ]}
    />
  );
};

export default EnterpriseRiskManagement;
