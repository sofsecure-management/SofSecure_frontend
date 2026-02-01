// import React from "react";
// import ServiceLayout from "./ServiceLayout";




// const ITAuditServices = () => {
  
//   return (
//     <ServiceLayout
//       title="IT Audit Services"
//       intro="Our IT Audit Services provide a comprehensive assessment of your IT infrastructure, systems, and controls to ensure security, reliability, and compliance."
//       image="/services/IT_Audit_Services.webp" 
//       why="Technology plays a critical role in business operations, and weak IT controls can lead to significant risks including data breaches and compliance failures."
//       approach="We evaluate IT infrastructure, applications, access controls, and governance processes using industry standards to identify gaps and improvement opportunities."
//       benefits={[
//         "Identification of IT risks and control gaps",
//         "Improved compliance and governance",
//         "Enhanced system security and reliability",
//         "Actionable audit recommendations",
//         "Increased confidence for stakeholders",
//       ]}
//     />
//   );
// };

// export default ITAuditServices;

import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const ITAuditServices = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          IT Audit Services | IT Controls, Risk & Compliance Audits – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides comprehensive IT Audit Services to evaluate IT controls, identify risks, ensure regulatory compliance, and strengthen system security and reliability."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/it-audit-services"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="IT Audit Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Independent IT audit services helping organizations assess IT controls, manage risks, and improve governance and compliance."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/it-audit-services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/IT_Audit_Services.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IT Audit Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Enterprise-grade IT audit services to identify risks, improve compliance, and strengthen IT governance."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "IT Audit Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "IT Audit Services",
            "url": "https://www.sofsecure.com/services/it-audit-services",
            "description": "IT audit services evaluating IT infrastructure, applications, access controls, and governance processes to identify risks and ensure compliance."
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
                "name": "IT Audit Services",
                "item": "https://www.sofsecure.com/services/it-audit-services"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="IT Audit Services"
        intro="Our IT Audit Services provide a comprehensive assessment of IT infrastructure, systems, and controls to ensure security, reliability, and regulatory compliance."
        image="/services/IT_Audit_Services.webp"
        why="Technology plays a critical role in business operations, and weak IT controls can expose organizations to data breaches, operational failures, and compliance risks. Independent IT audits help identify and address these risks proactively."
        approach="We evaluate IT infrastructure, applications, access controls, change management, and governance processes using industry standards and best practices to identify gaps and improvement opportunities."
        benefits={[
          "Clear identification of IT risks and control gaps",
          "Improved regulatory compliance and IT governance",
          "Enhanced system security, availability, and reliability",
          "Practical and actionable audit recommendations",
          "Greater confidence for management, regulators, and stakeholders",
        ]}
      />
    </>
  );
};

export default ITAuditServices;

