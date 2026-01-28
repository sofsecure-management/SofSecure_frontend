import React from "react";
import ServiceLayout from "./ServiceLayout";




const ITAuditServices = () => {
  
  return (
    <ServiceLayout
      title="IT Audit Services"
      intro="Our IT Audit Services provide a comprehensive assessment of your IT infrastructure, systems, and controls to ensure security, reliability, and compliance."
      image="/services/IT_Audit_Services.webp" 
      why="Technology plays a critical role in business operations, and weak IT controls can lead to significant risks including data breaches and compliance failures."
      approach="We evaluate IT infrastructure, applications, access controls, and governance processes using industry standards to identify gaps and improvement opportunities."
      benefits={[
        "Identification of IT risks and control gaps",
        "Improved compliance and governance",
        "Enhanced system security and reliability",
        "Actionable audit recommendations",
        "Increased confidence for stakeholders",
      ]}
    />
  );
};

export default ITAuditServices;
