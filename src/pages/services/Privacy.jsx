// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const Privacy = () => {
//   return (
//     <ServiceLayout
//       title="Privacy & Data Protection"
//       intro="Our Privacy services help organizations establish strong data protection practices and comply with evolving privacy regulations."
//       image="/services/Privacy_&_Data_Protection.webp" 
//       why="With growing data privacy regulations and increased data usage, organizations must protect personal information and maintain compliance."
//       approach="We assess privacy controls, data handling practices, and compliance with applicable regulations to strengthen privacy governance."
//       benefits={[
//         "Improved data privacy and protection",
//         "Compliance with privacy regulations",
//         "Reduced risk of data breaches",
//         "Enhanced customer and stakeholder trust",
//         "Stronger privacy governance framework",
//       ]}
//     />
//   );
// };

// export default Privacy;


import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const Privacy = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          Privacy & Data Protection Services | Data Privacy Compliance – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides Privacy & Data Protection services to help organizations protect personal data, comply with privacy regulations, and strengthen privacy governance frameworks."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/privacy"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Privacy & Data Protection Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Comprehensive privacy and data protection services supporting regulatory compliance, risk reduction, and trusted data handling practices."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/privacy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/Privacy_&_Data_Protection.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy & Data Protection Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Expert privacy and data protection services to help organizations comply with global privacy regulations and protect sensitive information."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Privacy & Data Protection Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Privacy & Data Protection",
            "url": "https://www.sofsecure.com/services/privacy",
            "description": "Privacy and data protection services designed to help organizations comply with privacy regulations, protect personal information, and strengthen privacy governance."
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
                "name": "Privacy & Data Protection",
                "item": "https://www.sofsecure.com/services/privacy"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="Privacy & Data Protection Services"
        intro="Our Privacy & Data Protection services help organizations establish strong data protection practices, safeguard personal information, and comply with evolving global privacy regulations."
        image="/services/Privacy_&_Data_Protection.webp"
        why="With expanding data privacy regulations and increased data usage, organizations must protect personal information and maintain compliance to avoid regulatory penalties, data breaches, and loss of stakeholder trust."
        approach="We assess privacy controls, data handling practices, consent management, and compliance with applicable privacy regulations. Our approach strengthens privacy governance while enabling responsible and compliant use of data."
        benefits={[
          "Improved protection of personal and sensitive data",
          "Compliance with global and regional privacy regulations",
          "Reduced risk of data breaches and privacy incidents",
          "Enhanced customer, partner, and stakeholder trust",
          "A stronger, more sustainable privacy governance framework",
        ]}
      />
    </>
  );
};

export default Privacy;
