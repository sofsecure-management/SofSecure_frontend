import React from "react";
import ServiceLayout from "./ServiceLayout";


const SOXCompliance = () => {
  return (
    <ServiceLayout
      title="SOX Compliance"

      intro="Our SOX Compliance services help organizations design, implement, and maintain effective internal controls over financial reporting in alignment with the Sarbanes-Oxley Act."

        image="/services/SOX_Compliance.webp" 

      why="Sarbanes-Oxley compliance is critical for ensuring accuracy, transparency, and integrity in financial reporting. Inadequate SOX controls can lead to regulatory penalties, audit failures, and loss of investor confidence."

      approach="We support organizations throughout the SOX lifecycle, including risk assessment, control design, documentation, testing, and remediation. Our approach focuses on efficiency, sustainability, and alignment with business processes while reducing compliance burden."

      benefits={[
        "Effective internal controls over financial reporting",
        "Improved audit readiness and reduced compliance risks",
        "Clear documentation and control ownership",
        "Efficient testing and remediation processes",
        "Increased confidence for management, auditors, and investors",
      ]}
    />
  );
};

export default SOXCompliance;
