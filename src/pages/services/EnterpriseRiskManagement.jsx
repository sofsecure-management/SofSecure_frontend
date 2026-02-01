// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const EnterpriseRiskManagement = () => {
//   return (
//     <ServiceLayout
//       title="Enterprise Risk Management"
//       intro="Our Enterprise Risk Management (ERM) services help organizations identify, assess, and manage risks that could impact strategic objectives and long-term performance."
//       image="/services/Enterprise_Risk_Management.webp" 
//       why="Organizations today face complex strategic, operational, financial, and regulatory risks. Without a structured ERM framework, these risks can go unmanaged and negatively impact growth and resilience."
//       approach="We design and implement ERM frameworks aligned with your business strategy. Our approach integrates risk identification, assessment, monitoring, and reporting to support informed decision-making."
//       benefits={[
//         "Improved visibility into enterprise-wide risks",
//         "Better alignment of risk management with strategy",
//         "Enhanced decision-making and resilience",
//         "Proactive risk identification and mitigation",
//         "Stronger governance and risk culture",
//       ]}
//     />
//   );
// };

// export default EnterpriseRiskManagement;

import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const EnterpriseRiskManagement = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          Enterprise Risk Management Services | ERM Consulting – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides Enterprise Risk Management (ERM) consulting services to help organizations identify, assess, and manage strategic, operational, financial, and regulatory risks."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/enterprise-risk-management"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Enterprise Risk Management Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Enterprise Risk Management services designed to strengthen resilience, improve decision-making, and align risk management with business strategy."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/enterprise-risk-management"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/Enterprise_Risk_Management.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Enterprise Risk Management Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Strategic ERM consulting services helping organizations proactively manage risks and enhance resilience."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Enterprise Risk Management Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Enterprise Risk Management",
            "url": "https://www.sofsecure.com/services/enterprise-risk-management",
            "description": "Enterprise Risk Management consulting services helping organizations identify, assess, and manage strategic, operational, financial, and regulatory risks."
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
                "name": "Enterprise Risk Management",
                "item": "https://www.sofsecure.com/services/enterprise-risk-management"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="Enterprise Risk Management Services"
        intro="Our Enterprise Risk Management (ERM) services help organizations identify, assess, and manage risks that could impact strategic objectives, operational performance, and long-term value."
        image="/services/Enterprise_Risk_Management.webp"
        why="Organizations face increasingly complex strategic, operational, financial, and regulatory risks. Without a structured ERM framework, these risks may go unmanaged, undermining growth, resilience, and stakeholder confidence."
        approach="We design and implement ERM frameworks aligned with your business strategy. Our approach integrates enterprise-wide risk identification, assessment, monitoring, and reporting to support informed decision-making and proactive risk management."
        benefits={[
          "Improved visibility into enterprise-wide strategic and operational risks",
          "Stronger alignment between risk management and business strategy",
          "Enhanced decision-making and organizational resilience",
          "Proactive identification and mitigation of emerging risks",
          "A stronger governance structure and risk-aware culture",
        ]}
      />
    </>
  );
};

export default EnterpriseRiskManagement;

