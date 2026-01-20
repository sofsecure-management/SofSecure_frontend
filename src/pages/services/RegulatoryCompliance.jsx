import React from "react";
import ServiceLayout from "./ServiceLayout";


const RegulatoryCompliance = () => {
  return (
    <ServiceLayout
      title="Regulatory Compliance"
      intro="Our Regulatory Compliance services help organizations meet regulatory requirements efficiently while reducing compliance risks."
      image="/services/Regulatory_Compliance.webp" 
      why="Failure to comply with regulations can lead to penalties, reputational damage, and operational disruption."
      approach="We evaluate regulatory requirements, assess current compliance status, and implement structured compliance programs."
      benefits={[
        "Reduced regulatory and compliance risks",
        "Improved readiness for audits and inspections",
        "Clear compliance frameworks and processes",
        "Ongoing regulatory monitoring support",
        "Greater confidence with regulators",
      ]}
    />
  );
};

export default RegulatoryCompliance;
