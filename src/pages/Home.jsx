

// import React from "react";
// import { Helmet } from "react-helmet-async";

// import HeroSection from "../Componants/Home_componants/HeroSection";
// import ServicesMarquee from "../Componants/Home_componants/ServicesMarquee";
// import AboutInsightsSection from "../Componants/Home_componants/AboutInsightsSection";
// import WhyChooseUs from "../Componants/Home_componants/WhyChooseUs";
// import AuditInsights from "../Componants/Home_componants/AuditInsights";
// import EnterpriseServices from "../Componants/Home_componants/Services";
// import HomeFAQs from "../Faqs/FAQs";

// const Home = () => {
//   return (
//     <>
//       {/* ================= SEO ================= */}
//       <Helmet>
//         {/* TITLE */}
//         <title>
//           SofSecure | IT Audit, Cybersecurity & Compliance Consulting Firm
//         </title>

//         {/* META DESCRIPTION */}
//         <meta
//           name="description"
//           content="SofSecure is a global IT audit and cybersecurity consulting firm delivering SOC reports, SOX compliance, enterprise risk management, privacy and regulatory compliance services."
//         />

//         {/* CANONICAL */}
//         <link rel="canonical" href="https://www.sofsecure.com/" />

//         {/* KEYWORDS (optional but fine) */}
//         <meta
//           name="keywords"
//           content="IT audit services, cybersecurity assessment, SOC reports, SOX compliance, enterprise risk management, ESG sustainability, regulatory compliance"
//         />

//         {/* OPEN GRAPH */}
//         <meta property="og:title" content="SofSecure | IT Audit & Cybersecurity Experts" />
//         <meta
//           property="og:description"
//           content="Trusted IT audit, cybersecurity, SOC reporting and compliance advisory services for enterprises worldwide."
//         />
//         <meta property="og:url" content="https://www.sofsecure.com/" />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="https://www.sofsecure.com/og-image.jpg" />

//         {/* TWITTER */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="SofSecure | IT Audit & Cybersecurity" />
//         <meta
//           name="twitter:description"
//           content="Enterprise-grade IT audit, cybersecurity and compliance consulting services."
//         />

//         {/* SCHEMA (ORGANIZATION) */}
//         <script type="application/ld+json">
//           {`
//           {
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             "name": "SofSecure",
//             "url": "https://www.sofsecure.com",
//             "logo": "https://www.sofsecure.com/logo.png",
//             "sameAs": [
//               "https://www.linkedin.com/company/sofsecure"
//             ]
//           }
//         `}
//         </script>
//       </Helmet>

//       {/* ================= CONTENT ================= */}
//       <HeroSection />
//       <ServicesMarquee />
//       <AboutInsightsSection />
//       <WhyChooseUs />
//       <AuditInsights />
//       <EnterpriseServices />
//       <HomeFAQs />
//     </>
//   );
// };

// export default Home;
import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "../Componants/Home_componants/HeroSection";
import ServicesMarquee from "../Componants/Home_componants/ServicesMarquee";
import AboutInsightsSection from "../Componants/Home_componants/AboutInsightsSection";
import WhyChooseUs from "../Componants/Home_componants/WhyChooseUs";
import AuditInsights from "../Componants/Home_componants/AuditInsights";
import EnterpriseServices from "../Componants/Home_componants/Services";
import HomeFAQs from "../Faqs/FAQs";

const Home = () => {
  return (
    <>
      {/* ================= SEO / META ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          SofSecure | IT Audit, Cybersecurity & Compliance Consulting Firm
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure is a global IT audit, cybersecurity, SOC reporting, SOX compliance and enterprise risk management consulting firm helping organizations stay secure, compliant and resilient."
        />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.sofsecure.com/" />

        {/* KEYWORDS (secondary) */}
        <meta
          name="keywords"
          content="IT audit services, cybersecurity consulting, SOC reports, SOX compliance, enterprise risk management, regulatory compliance, ESG advisory"
        />

        {/* VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="SofSecure | IT Audit & Cybersecurity Experts" />
        <meta
          property="og:description"
          content="Enterprise-grade IT audit, cybersecurity, SOC reporting and compliance advisory services trusted by organizations worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sofsecure.com/" />
        <meta property="og:image" content="https://www.sofsecure.com/og-image.jpg" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SofSecure | IT Audit & Cybersecurity" />
        <meta
          name="twitter:description"
          content="Trusted IT audit, cybersecurity and compliance consulting services for enterprises."
        />
        <meta name="twitter:image" content="https://www.sofsecure.com/og-image.jpg" />

        {/* ================= SCHEMA ================= */}

        {/* ORGANIZATION SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SofSecure",
            "url": "https://www.sofsecure.com",
            "logo": "https://www.sofsecure.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/sofsecure"
            ]
          }
        `}
        </script>

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "SofSecure",
            "url": "https://www.sofsecure.com",
            "serviceType": [
              "IT Audit Services",
              "Cybersecurity Assessment",
              "SOC Reports",
              "SOX Compliance",
              "Enterprise Risk Management",
              "Regulatory Compliance"
            ],
            "areaServed": "Worldwide",
            "brand": {
              "@type": "Brand",
              "name": "SofSecure"
            }
          }
        `}
        </script>

        {/* FAQ SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does SofSecure provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SofSecure provides IT audit services, SOC reports, SOX compliance, cybersecurity assessment, privacy and data protection, regulatory compliance, enterprise risk management, board governance, and ESG advisory services."
                }
              },
              {
                "@type": "Question",
                "name": "Why are IT audit and cybersecurity services important?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IT audit and cybersecurity services help organizations identify risks, strengthen internal controls, ensure regulatory compliance, and protect critical data and systems from evolving threats."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with enterprises and startups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SofSecure works with startups, mid-sized companies, and large enterprises. Our services are scalable and customized to each organization’s size, industry, and regulatory environment."
                }
              },
              {
                "@type": "Question",
                "name": "How can we get started with SofSecure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can get started by contacting us through our website. Our team will schedule an initial consultation to understand your requirements and recommend suitable services."
                }
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <HeroSection />
      <ServicesMarquee />
      <AboutInsightsSection />
      <WhyChooseUs />
      <AuditInsights />
      <EnterpriseServices />
      <HomeFAQs />
    </>
  );
};

export default Home;
