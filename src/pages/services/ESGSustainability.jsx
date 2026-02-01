// import React from "react";
// import ServiceLayout from "./ServiceLayout";


// const ESGSustainability = () => {
//   return (
//     <ServiceLayout
//       title="ESG & Sustainability"
//       intro="Our ESG & Sustainability services support organizations in developing, implementing, and reporting on environmental, social, and governance initiatives."
//       image="/services/ESG_&_Sustainability.webp" 
//       why="Investors, regulators, and stakeholders increasingly expect transparency and accountability around ESG practices. Strong ESG programs enhance reputation, compliance, and long-term value creation."
//       approach="We assist organizations with ESG strategy development, data collection, reporting frameworks, and assurance. Our approach aligns ESG initiatives with business objectives and regulatory expectations."
//       benefits={[
//         "Improved ESG transparency and reporting",
//         "Enhanced stakeholder trust and credibility",
//         "Alignment with global ESG standards",
//         "Support for sustainable growth initiatives",
//         "Reduced regulatory and reputational risks",
//       ]}
//     />
//   );
// };

// export default ESGSustainability;

import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceLayout from "./ServiceLayout";

const ESGSustainability = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          ESG & Sustainability Consulting Services | ESG Advisory – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure provides ESG & Sustainability consulting services to help organizations design ESG strategies, improve reporting, meet regulatory expectations, and drive long-term value creation."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/services/esg-sustainability"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="ESG & Sustainability Consulting Services | SofSecure"
        />
        <meta
          property="og:description"
          content="ESG and sustainability advisory services supporting transparent reporting, regulatory compliance, and sustainable business growth."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/services/esg-sustainability"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/services/ESG_&_Sustainability.webp"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ESG & Sustainability Consulting Services | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Expert ESG and sustainability consulting services helping organizations meet stakeholder and regulatory expectations."
        />

        {/* ================= SCHEMA ================= */}

        {/* SERVICE SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "ESG & Sustainability Consulting Services",
            "provider": {
              "@type": "Organization",
              "name": "SofSecure",
              "url": "https://www.sofsecure.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "ESG & Sustainability",
            "url": "https://www.sofsecure.com/services/esg-sustainability",
            "description": "ESG and sustainability consulting services supporting strategy development, reporting, assurance, and alignment with global ESG standards."
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
                "name": "ESG & Sustainability",
                "item": "https://www.sofsecure.com/services/esg-sustainability"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <ServiceLayout
        title="ESG & Sustainability Consulting Services"
        intro="Our ESG & Sustainability consulting services support organizations in developing, implementing, and reporting on environmental, social, and governance initiatives aligned with business strategy and regulatory expectations."
        image="/services/ESG_&_Sustainability.webp"
        why="Investors, regulators, and stakeholders increasingly demand transparency and accountability around ESG practices. Strong ESG programs enhance trust, regulatory compliance, resilience, and long-term value creation."
        approach="We help organizations design ESG strategies, implement data governance and reporting frameworks, and provide assurance aligned with global ESG standards. Our approach integrates sustainability initiatives with core business objectives."
        benefits={[
          "Improved ESG transparency, reporting quality, and disclosures",
          "Enhanced stakeholder trust, credibility, and investor confidence",
          "Alignment with global ESG frameworks and regulatory requirements",
          "Support for sustainable growth and long-term value creation",
          "Reduced regulatory, reputational, and sustainability-related risks",
        ]}
      />
    </>
  );
};

export default ESGSustainability;
