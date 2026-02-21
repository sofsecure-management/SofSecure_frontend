// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const SOCReports = () => {
//   return (
//     <ServiceLayout
//       title="SOC Reports"
//       intro="Our SOC Reporting services support organizations in achieving SOC 1, SOC 2, and SOC 3 compliance and assurance."
//       image="/services/SOC_report.webp" 
//       why="SOC reports are critical for demonstrating trust, security, and control effectiveness to customers and stakeholders."
//       approach="We guide organizations through SOC readiness, gap assessments, remediation, and reporting in line with industry standards."
//       benefits={[
//         "Improved trust with clients and partners",
//         "SOC 1, SOC 2, and SOC 3 readiness support",
//         "Clear understanding of control effectiveness",
//         "Reduced audit and compliance risks",
//         "Enhanced transparency and assurance",
//       ]}
//     />
//   );
// };

// export default SOCReports;

import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const SOCReports = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          SOC Reports Services | SOC 1, SOC 2 & SOC 3 Compliance – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides SOC Reports services including SOC 1, SOC 2, and SOC 3 readiness, gap assessments, remediation, and reporting to demonstrate trust and control effectiveness."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/soc-reports"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="SOC Reports Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Expert SOC 1, SOC 2, and SOC 3 reporting services to strengthen trust, security, and assurance for customers and stakeholders."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/soc-reports"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/SOC_report.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SOC Reports Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="SOC 1, SOC 2, and SOC 3 compliance and assurance services designed to enhance trust and transparency."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "SOC Reports Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "SOC Reports",
            "url": "https://www.sofsecure.com/services/soc-reports",
            "description": "SOC reporting services supporting SOC 1, SOC 2, and SOC 3 readiness, gap assessments, remediation, and independent assurance."
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
                "name": "SOC Reports",
                "item": "https://www.sofsecure.com/services/soc-reports"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="SOC Reports Services"
        intro="Our SOC Reports services support organizations in achieving SOC 1, SOC 2, and SOC 3 compliance and assurance to demonstrate trust, security, and control effectiveness."
        image="/services/SOC_report.webp"
        why="SOC reports hold an important place in showing trust, security standards, and
        the effectiveness of internal controls. Without SOC reports or SOC assurance, an
        organization would face more scrutiny, business loss, and compliance risks.
        "
        approach="We assist organizations with SOC readiness assessments, comprehensive gap
        analysis, remediation planning, and reporting that meets AICPA standards. Our
        process helps create clarity and efficiency in a complete SOC experience."
        benefits={[
          "Improved trust and confidence with clients and business partners",
          "Comprehensive support for SOC 1, SOC 2, and SOC 3 readiness",
          "Clear visibility into control design and operating effectiveness",
          "Reduced audit, compliance, and assurance-related risks",
          "Enhanced transparency and independent assurance",
        ]}
      />
    </>
  );
};

export default SOCReports;
