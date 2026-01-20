import React from "react";
import ServiceLayout from "./ServiceLayout";


const Privacy = () => {
  return (
    <ServiceLayout
      title="Privacy & Data Protection"
      intro="Our Privacy services help organizations establish strong data protection practices and comply with evolving privacy regulations."
      image="/services/Privacy_&_Data_Protection.webp" 
      why="With growing data privacy regulations and increased data usage, organizations must protect personal information and maintain compliance."
      approach="We assess privacy controls, data handling practices, and compliance with applicable regulations to strengthen privacy governance."
      benefits={[
        "Improved data privacy and protection",
        "Compliance with privacy regulations",
        "Reduced risk of data breaches",
        "Enhanced customer and stakeholder trust",
        "Stronger privacy governance framework",
      ]}
    />
  );
};

export default Privacy;
