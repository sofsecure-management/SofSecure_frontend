import React from "react";
import ServiceLayout from "./ServiceLayout";


const CybersecurityAssessment = () => {
  return (
    <ServiceLayout
      title="Cybersecurity Assessment"
      intro="Our Cybersecurity Assessment services help organizations identify security gaps, vulnerabilities, and threats across their IT environment to strengthen their overall security posture."
      image="/services/Cybersecurity_Assessment.webp" 
      why="With increasing cyber threats and regulatory scrutiny, organizations face significant risks from data breaches, ransomware, and system compromises. A proactive cybersecurity assessment helps reduce exposure and protect critical assets."
      approach="We conduct in-depth assessments of networks, systems, applications, access controls, and security policies using industry best practices. Our focus is on identifying real-world risks and delivering actionable remediation strategies."
      benefits={[
        "Identification of security vulnerabilities and threats",
        "Improved protection of sensitive data and systems",
        "Reduced risk of cyber incidents and breaches",
        "Alignment with cybersecurity standards and regulations",
        "Stronger overall security posture",
      ]}
    />
  );
};

export default CybersecurityAssessment;
