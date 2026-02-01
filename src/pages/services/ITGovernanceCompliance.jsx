// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const ITGovernanceCompliance = () => {
//   return (
//     <ServiceLayout
//       title="IT Governance & Compliance"
//       intro="Our IT Governance & Compliance services help organizations align IT strategy with business goals while meeting regulatory and industry requirements."
//       image="/services/IT_Governance_&_Compliance.webp" 
//       why="Strong IT governance ensures that technology investments deliver value while managing risks and meeting compliance obligations."
//       approach="We assess governance frameworks, policies, roles, and controls to strengthen accountability, compliance, and performance."
//       benefits={[
//         "Improved alignment of IT and business strategy",
//         "Enhanced regulatory and standards compliance",
//         "Stronger governance and accountability",
//         "Reduced IT-related risks",
//         "Better technology decision-making",
//       ]}
//     />
//   );
// };

// export default ITGovernanceCompliance;


import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const ITGovernanceCompliance = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          IT Governance & Compliance Services | IT GRC Consulting – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure delivers IT Governance & Compliance (IT GRC) services to align IT strategy with business goals, strengthen controls, manage risks, and meet regulatory and industry standards."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/it-governance-compliance"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="IT Governance & Compliance Services | SofSecure"
        />
        <meta
          property="og:description"
          content="IT governance and compliance consulting services helping organizations manage IT risks, improve accountability, and meet regulatory requirements."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/it-governance-compliance"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/IT_Governance_&_Compliance.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IT Governance & Compliance Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Expert IT governance and compliance services to strengthen controls, reduce IT risks, and align technology with business strategy."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "IT Governance & Compliance Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "IT Governance & Compliance",
            "url": "https://www.sofsecure.com/services/it-governance-compliance",
            "description": "IT Governance & Compliance services focused on aligning IT strategy with business objectives, strengthening governance frameworks, and ensuring regulatory and industry compliance."
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
                "name": "IT Governance & Compliance",
                "item": "https://www.sofsecure.com/services/it-governance-compliance"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="IT Governance & Compliance Services"
        intro="Our IT Governance & Compliance services help organizations align IT strategy with business goals while meeting regulatory and industry requirements through strong governance frameworks and effective controls."
        image="/services/IT_Governance_&_Compliance.webp"
        why="Strong IT governance ensures that technology investments deliver value while managing risks and meeting compliance obligations. Weak governance can lead to inefficiencies, control failures, and regulatory exposure."
        approach="We assess IT governance frameworks, policies, organizational roles, and control environments to strengthen accountability, improve compliance, and enhance IT performance in line with business strategy."
        benefits={[
          "Improved alignment between IT initiatives and business strategy",
          "Enhanced compliance with regulatory and industry standards",
          "Stronger governance structures and accountability",
          "Reduced IT-related and compliance risks",
          "More informed and effective technology decision-making",
        ]}
      />
    </>
  );
};

export default ITGovernanceCompliance;
