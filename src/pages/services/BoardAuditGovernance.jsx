// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const BoardAuditGovernance = () => {
//   return (
//     <ServiceLayout
//       title="Board & Audit Committee Governance"

//       intro="Our Board & Audit Committee Governance services help organizations strengthen oversight, enhance decision-making, and align governance practices with strategic objectives. We support boards and audit committees in fulfilling their fiduciary responsibilities with confidence and clarity."

//         image="/services/Board_& Audit_Committee_Governance.webp" 
//       why="Effective board and audit committee governance is critical for maintaining transparency, accountability, and stakeholder trust. Weak governance structures can result in poor oversight, unmanaged risks, regulatory scrutiny, and reputational damage. Strong governance ensures that risks are identified early, controls are effective, and strategic decisions are well-informed."

//       approach="We work closely with boards, audit committees, and senior management to evaluate governance frameworks, committee structures, charters, reporting mechanisms, and risk oversight practices. Our approach focuses on aligning governance processes with regulatory expectations and organizational strategy, while providing practical recommendations that enhance effectiveness, independence, and oversight capabilities."

//       benefits={[
//         "Improved board and audit committee effectiveness",
//         "Enhanced oversight of risk management and internal controls",
//         "Stronger alignment between governance and business strategy",
//         "Greater transparency and accountability for stakeholders",
//         "Increased confidence with regulators, investors, and leadership",
//       ]}
//     />
//   );
// };

// export default BoardAuditGovernance;

import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const BoardAuditGovernance = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          Board & Audit Committee Governance Services | Corporate Governance Advisory – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides Board & Audit Committee Governance services to strengthen oversight, enhance risk management, improve transparency, and align governance practices with regulatory and strategic objectives."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/board-audit-governance"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Board & Audit Committee Governance Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Corporate governance advisory services supporting boards and audit committees in strengthening oversight, accountability, and strategic decision-making."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/board-audit-governance"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/Board_&_Audit_Committee_Governance.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Board & Audit Committee Governance Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Expert board and audit committee governance advisory services for stronger oversight and regulatory confidence."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Board & Audit Committee Governance Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Board & Audit Committee Governance",
            "url": "https://www.sofsecure.com/services/board-audit-governance",
            "description": "Board and audit committee governance services designed to enhance oversight, strengthen risk management, and align governance practices with regulatory and strategic expectations."
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
                "name": "Board & Audit Committee Governance",
                "item": "https://www.sofsecure.com/services/board-audit-governance"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="Board & Audit Committee Governance Services"
        intro="Our Board & Audit Committee Governance services help organizations strengthen oversight, enhance decision-making, and align governance practices with strategic and regulatory objectives. We support boards and audit committees in fulfilling their fiduciary responsibilities with confidence and clarity."
        image="/services/Board_&_Audit_Committee_Governance.webp"
        why="Effective board and audit committee governance is critical for maintaining transparency, accountability, and stakeholder trust. Weak governance structures can lead to unmanaged risks, regulatory scrutiny, and reputational damage. Strong governance enables informed decision-making, early risk identification, and effective oversight."
        approach="We work closely with boards, audit committees, and senior leadership to assess governance frameworks, committee structures, charters, reporting mechanisms, and risk oversight practices. Our approach aligns governance processes with regulatory expectations and organizational strategy while delivering practical, value-driven recommendations."
        benefits={[
          "Improved effectiveness of boards and audit committees",
          "Enhanced oversight of enterprise risk management and internal controls",
          "Stronger alignment between governance practices and business strategy",
          "Greater transparency and accountability for stakeholders",
          "Increased confidence among regulators, investors, and executive leadership",
        ]}
      />
    </>
  );
};

export default BoardAuditGovernance;
