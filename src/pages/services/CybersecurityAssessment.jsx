// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const CybersecurityAssessment = () => {
//   return (
//     <ServiceLayout
//       title="Cybersecurity Assessment"
//       intro="Our Cybersecurity Assessment services help organizations identify security gaps, vulnerabilities, and threats across their IT environment to strengthen their overall security posture."
//       image="/services/Cybersecurity_Assessment.webp" 
//       why="With increasing cyber threats and regulatory scrutiny, organizations face significant risks from data breaches, ransomware, and system compromises. A proactive cybersecurity assessment helps reduce exposure and protect critical assets."
//       approach="We conduct in-depth assessments of networks, systems, applications, access controls, and security policies using industry best practices. Our focus is on identifying real-world risks and delivering actionable remediation strategies."
//       benefits={[
//         "Identification of security vulnerabilities and threats",
//         "Improved protection of sensitive data and systems",
//         "Reduced risk of cyber incidents and breaches",
//         "Alignment with cybersecurity standards and regulations",
//         "Stronger overall security posture",
//       ]}
//     />
//   );
// };

// export default CybersecurityAssessment;


import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const CybersecurityAssessment = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          Cybersecurity Assessment Services | Risk & Vulnerability Assessment – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides comprehensive Cybersecurity Assessment services to identify vulnerabilities, evaluate security controls, and strengthen protection against evolving cyber threats."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/cybersecurity-assessment"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Cybersecurity Assessment Services | SofSecure"
        />
        <meta
          property="og:description"
          content="Proactive cybersecurity assessment services to identify risks, close security gaps, and enhance enterprise cyber resilience."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/cybersecurity-assessment"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/Cybersecurity_Assessment.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cybersecurity Assessment Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Identify cybersecurity vulnerabilities and strengthen defenses with SofSecure’s expert assessment services."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Cybersecurity Assessment Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Cybersecurity Assessment",
            "url": "https://www.sofsecure.com/services/cybersecurity-assessment",
            "description": "Cybersecurity assessment services focused on identifying vulnerabilities, evaluating security controls, and strengthening protection against cyber threats."
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
                "name": "Cybersecurity Assessment",
                "item": "https://www.sofsecure.com/services/cybersecurity-assessment"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="Cybersecurity Assessment Services"
        intro="Our Cybersecurity Assessment services help organizations identify security gaps, vulnerabilities, and threats across their IT environment to strengthen their overall security posture."
        image="/services/Cybersecurity_Assessment.webp"
        why="With increasing cyber threats and regulatory scrutiny, organizations face significant risks from data breaches, ransomware, and system compromises. A proactive cybersecurity assessment reduces exposure and safeguards critical business assets."
        approach="We conduct comprehensive assessments of networks, systems, applications, access controls, and security policies using industry-recognized frameworks and best practices. Our focus is on identifying real-world risks and delivering actionable remediation strategies."
        benefits={[
          "Clear identification of cybersecurity vulnerabilities and threat exposures",
          "Improved protection of sensitive data and critical systems",
          "Reduced likelihood and impact of cyber incidents and breaches",
          "Alignment with leading cybersecurity standards and regulatory requirements",
          "A stronger, more resilient enterprise security posture",
        ]}
      />
    </>
  );
};

export default CybersecurityAssessment;
