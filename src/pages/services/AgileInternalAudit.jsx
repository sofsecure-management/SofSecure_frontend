// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const AgileInternalAudit = () => {
//   return (
//     <ServiceLayout
//       title="Agile Internal Audit"
//       intro="Our Agile Internal Audit approach delivers faster, more flexible, and risk-focused audit engagements that align with rapidly changing business environments."

//       image="/services/Agile_Internal_Audit.webp" 
      

//       why="Traditional audit models often fail to keep pace with modern, fast-moving organizations. Agile Internal Audit enables continuous risk assessment, quicker insights, and better alignment with business priorities."

//       approach="We apply agile principles such as iterative planning, continuous stakeholder collaboration, and adaptive risk assessment. Our audit cycles are shorter, more focused, and designed to deliver insights early and often."

//       benefits={[
//         "Faster audit cycles with real-time insights",
//         "Improved alignment with business objectives",
//         "Enhanced risk visibility in dynamic environments",
//         "Greater collaboration with management teams",
//         "More actionable and timely audit outcomes",
//       ]}
//     />
//   );
// };

// export default AgileInternalAudit;

import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const AgileInternalAudit = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          Agile Internal Audit Services | Risk-Focused Audit Consulting – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides Agile Internal Audit services delivering faster, risk-focused and adaptive audit engagements aligned with dynamic business environments and regulatory needs."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/agile-internal-audit"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Agile Internal Audit Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Risk-driven Agile Internal Audit services enabling continuous assurance, faster insights, and better alignment with business priorities."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/agile-internal-audit"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/Agile_Internal_Audit.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Agile Internal Audit Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Flexible and risk-focused Agile Internal Audit services designed for modern enterprises."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Agile Internal Audit Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Agile Internal Audit",
            "url": "https://www.sofsecure.com/services/agile-internal-audit",
            "description": "Agile Internal Audit services delivering faster audit cycles, continuous risk assessment, and actionable insights aligned with evolving business environments."
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
                "name": "Agile Internal Audit",
                "item": "https://www.sofsecure.com/services/agile-internal-audit"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="Agile Internal Audit Services"
        intro="Our Agile Internal Audit services deliver faster, flexible, and risk-focused audit engagements aligned with rapidly changing business and regulatory environments."
        image="/services/Agile_Internal_Audit.webp"
        why="Traditional audit models struggle to keep pace with modern organizations. Agile Internal Audit enables continuous risk assessment, quicker insights, and stronger alignment with evolving business priorities."
        approach="We apply agile principles such as iterative planning, continuous stakeholder collaboration, and adaptive risk assessment. Our audit cycles are shorter, focused, and designed to deliver early and actionable insights."
        benefits={[
          "Faster audit cycles with real-time risk insights",
          "Improved alignment with strategic business objectives",
          "Enhanced visibility into emerging and evolving risks",
          "Stronger collaboration with management teams",
          "More actionable, timely, and value-driven audit outcomes",
        ]}
      />
    </>
  );
};

export default AgileInternalAudit;
