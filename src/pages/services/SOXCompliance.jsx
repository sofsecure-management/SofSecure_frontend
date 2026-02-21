// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const SOXCompliance = () => {
//   return (
//     <ServiceLayout
//       title="SOX Compliance"

//       intro="Our SOX Compliance services help organizations design, implement, and maintain effective internal controls over financial reporting in alignment with the Sarbanes-Oxley Act."

//         image="/services/SOX_Compliance.webp" 

//       why="Sarbanes-Oxley compliance is critical for ensuring accuracy, transparency, and integrity in financial reporting. Inadequate SOX controls can lead to regulatory penalties, audit failures, and loss of investor confidence."

//       approach="We support organizations throughout the SOX lifecycle, including risk assessment, control design, documentation, testing, and remediation. Our approach focuses on efficiency, sustainability, and alignment with business processes while reducing compliance burden."

//       benefits={[
//         "Effective internal controls over financial reporting",
//         "Improved audit readiness and reduced compliance risks",
//         "Clear documentation and control ownership",
//         "Efficient testing and remediation processes",
//         "Increased confidence for management, auditors, and investors",
//       ]}
//     />
//   );
// };

// export default SOXCompliance;


import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const SOXCompliance = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          SOX Compliance Services | Sarbanes-Oxley Consulting – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides SOX Compliance services to help organizations design, implement, and maintain effective internal controls over financial reporting in accordance with the Sarbanes-Oxley Act."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/sox-compliance"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="SOX Compliance Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Expert SOX compliance and Sarbanes-Oxley consulting services to strengthen internal controls, improve audit readiness, and reduce compliance risks."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/sox-compliance"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/SOX_Compliance.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SOX Compliance Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Sarbanes-Oxley compliance services designed to strengthen internal controls and enhance financial reporting integrity."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "SOX Compliance Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "SOX Compliance",
            "url": "https://www.sofsecure.com/services/sox-compliance",
            "description": "SOX compliance services supporting the design, implementation, testing, and maintenance of internal controls over financial reporting in accordance with the Sarbanes-Oxley Act."
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
                "name": "SOX Compliance",
                "item": "https://www.sofsecure.com/services/sox-compliance"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="SOX Compliance Services"
        intro="Our SOX Compliance services help organizations design, implement, and maintain effective internal controls over financial reporting in alignment with the Sarbanes-Oxley Act."
        image="/services/SOX_Compliance.webp"
        why="Compliance with the Sarbanes-Oxley Act is crucial to ensure
          the accuracy, transparency, and integrity of financial reporting.
          Non-compliance with SOX internal controls might impose
          serious regulatory consequences, result in auditing flaws, as
          well as lead to operational upheavals."
        approach="Our services help organizations throughout the entire SOX
            process life cycle, from risk assessment to documentation and
            testing. We do this with an emphasis on efficiency,
            sustainability, and consistency with key business processes,
            thus reducing the overall cost of compliance."
        benefits={[
          "Effective internal controls over financial reporting (ICFR)",
          "Improved audit readiness and reduced SOX compliance risks",
          "Clear documentation, ownership, and accountability of controls",
          "Efficient control testing and remediation processes",
          "Increased confidence for management, auditors, and investors",
        ]}
      />
    </>
  );
};

export default SOXCompliance;

