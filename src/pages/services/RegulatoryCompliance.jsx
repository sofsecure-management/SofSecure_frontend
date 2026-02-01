// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const RegulatoryCompliance = () => {
//   return (
//     <ServiceLayout
//       title="Regulatory Compliance"
//       intro="Our Regulatory Compliance services help organizations meet regulatory requirements efficiently while reducing compliance risks."
//       image="/services/Regulatory_Compliance.webp" 
//       why="Failure to comply with regulations can lead to penalties, reputational damage, and operational disruption."
//       approach="We evaluate regulatory requirements, assess current compliance status, and implement structured compliance programs."
//       benefits={[
//         "Reduced regulatory and compliance risks",
//         "Improved readiness for audits and inspections",
//         "Clear compliance frameworks and processes",
//         "Ongoing regulatory monitoring support",
//         "Greater confidence with regulators",
//       ]}
//     />
//   );
// };

// export default RegulatoryCompliance;

import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const RegulatoryCompliance = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          Regulatory Compliance Services | Compliance Advisory & Risk Management – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides Regulatory Compliance services to help organizations meet regulatory requirements, reduce compliance risks, and strengthen governance across industries."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/regulatory-compliance"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Regulatory Compliance Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Expert regulatory compliance services helping organizations manage compliance risks, prepare for audits, and maintain regulatory confidence."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/regulatory-compliance"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/Regulatory_Compliance.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Regulatory Compliance Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Comprehensive regulatory compliance services designed to reduce risk and ensure ongoing compliance."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Regulatory Compliance Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Regulatory Compliance",
            "url": "https://www.sofsecure.com/services/regulatory-compliance",
            "description": "Regulatory compliance services helping organizations meet regulatory requirements, reduce compliance risks, and strengthen governance frameworks."
          }
        `}
        </script>

        {/* BREADCRUMB SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sofsecure.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.sofsecure.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Regulatory Compliance",
                "item": "https://www.sofsecure.com/services/regulatory-compliance"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="Regulatory Compliance Services"
        intro="Our Regulatory Compliance services help organizations meet regulatory requirements efficiently while reducing compliance risks and supporting sustainable operations."
        image="/services/Regulatory_Compliance.webp"
        why="Failure to comply with regulatory requirements can result in penalties, reputational damage, operational disruption, and loss of stakeholder confidence. A structured compliance approach is essential for long-term resilience."
        approach="We evaluate applicable regulatory requirements, assess your current compliance posture, and design structured compliance programs. Our approach includes gap assessments, policy development, controls implementation, and ongoing compliance monitoring."
        benefits={[
          "Reduced regulatory and compliance-related risks",
          "Improved readiness for audits, inspections, and regulatory reviews",
          "Clear and structured compliance frameworks and processes",
          "Ongoing support for regulatory monitoring and updates",
          "Greater confidence with regulators, management, and stakeholders",
        ]}
      />
    </>
  );
};

export default RegulatoryCompliance;

