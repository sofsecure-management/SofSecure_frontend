import React from "react";
import ServiceLayout from "./ServiceLayout";


const AgileInternalAudit = () => {
  return (
    <ServiceLayout
      title="Agile Internal Audit"
      intro="Our Agile Internal Audit approach delivers faster, more flexible, and risk-focused audit engagements that align with rapidly changing business environments."

      image="/services/Agile_Internal_Audit.webp" 
      

      why="Traditional audit models often fail to keep pace with modern, fast-moving organizations. Agile Internal Audit enables continuous risk assessment, quicker insights, and better alignment with business priorities."

      approach="We apply agile principles such as iterative planning, continuous stakeholder collaboration, and adaptive risk assessment. Our audit cycles are shorter, more focused, and designed to deliver insights early and often."

      benefits={[
        "Faster audit cycles with real-time insights",
        "Improved alignment with business objectives",
        "Enhanced risk visibility in dynamic environments",
        "Greater collaboration with management teams",
        "More actionable and timely audit outcomes",
      ]}
    />
  );
};

export default AgileInternalAudit;
