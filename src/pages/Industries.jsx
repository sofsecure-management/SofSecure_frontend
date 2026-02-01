// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const industries = [
//   {
//     title: "Construction",
//     desc: "Experienced construction advisors helping owners and executives grow through tax, audit, and tailored advisory services.",
//     // image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
//   },
//   {
//     title: "Dealerships",
//     desc: "Industry-specialized solutions to drive operational efficiency and sustainable dealership growth.",
//     // image: "https://images.unsplash.com/photo-1542362567-b07e54358753",
//   },
//   {
//     title: "Energy",
//     desc: "Expertise across oil & gas, utilities, and renewable energy with measurable, data-driven outcomes.",
//     // image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
//   },
//   {
//     title: "Family Business",
//     desc: "Innovative services that support families through generational transitions and business evolution.",
//     // image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
//   },
//   {
//     title: "Financial Services",
//     desc: "Helping financial institutions navigate competition, regulation, and complex vendor ecosystems.",
//     // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//   },
//   {
//     title: "Government Contractors",
//     desc: "Supporting contractors nationwide with compliance, audits, and regulatory oversight.",
//     // image: "https://images.unsplash.com/photo-1581093588401-22f636c7b0d4",
//   },
//   {
//     title: "Healthcare & Life Sciences",
//     desc: "An orchestrated approach to healthcare challenges across innovation, compliance, and growth.",
//     // image: "https://images.unsplash.com/photo-1580281658629-74d29b1a0c2c",
//   },
//   {
//     title: "Higher Education",
//     desc: "Aligning limited resources to advance institutional and student success.",
//     // image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
//   },
//   {
//     title: "Law Firm & Professional Services",
//     desc: "Helping firms balance legal excellence with modern business management practices.",
//     // image: "https://images.unsplash.com/photo-1555375771-14b2a63968a9",
//   },
//   {
//     title: "Manufacturing & Distribution",
//     desc: "Reducing risk and improving efficiencies from the shop floor to the top floor.",
//     // image: "https://images.unsplash.com/photo-1581091012184-7b2c1d1d0b94",
//   },
//   {
//     title: "Not-for-Profit",
//     desc: "Deep understanding of non-profit challenges with creativity and humanity at the core.",
//     // image: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
//   },
//   {
//     title: "Private Equity & Portfolio Companies",
//     desc: "Delivering value from fund level through portfolio operations.",
//     // image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
//   },
//   {
//     title: "Real Estate",
//     desc: "Innovative solutions for developers, investors, and property managers.",
//     // image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
//   },
//   {
//     title: "Restaurants & Franchises",
//     desc: "SOC expertise and advisory services across franchise and restaurant ecosystems.",
//     // image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
//   },
// ];

// export default function Industries() {
//   return (
//     <section className="bg-[#0b0f14] text-white py-32 px-6">
//       <div className="max-w-7xl mx-auto space-y-20">

//         {/* HERO */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-4xl"
//         >
//           <p className="text-[#30C4C1] font-semibold tracking-widest uppercase mb-4">
//             Industries
//           </p>
//           <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//             Navigating Challenges, Maximizing Opportunities
//           </h1>
//           <p className="text-gray-400 text-lg leading-relaxed">
//             SofSecure partners with organizations across industries to reduce
//             risk, ensure compliance, and unlock long-term growth.
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: { staggerChildren: 0.08 },
//             },
//           }}
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
//         >
//           {industries.map((item, i) => (
//             <IndustryCard key={i} item={item} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ================= CARD ================= */

// function IndustryCard({ item }) {
//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 30 },
//         show: { opacity: 1, y: 0 },
//       }}
//       whileHover={{ y: -14 }}
//       className="
//         relative group overflow-hidden
//         rounded-3xl
//         border border-white/10
//         bg-[#0b0f14]
//         shadow-[0_25px_70px_rgba(0,0,0,0.7)]
//         transition-all duration-500
//       "
//     >
//       {/* 🔥 HEAVY MULTI-LAYER GRADIENT */}
//       <div
//         className="
//           absolute inset-0
//           opacity-0 group-hover:opacity-100
//           transition duration-700
//           bg-gradient-to-br
//           from-[#30C4C1]/80
//           via-[#2563eb]/70
//           to-[#020617]
//         "
//       />

//       {/* 🔥 SECOND GLOW LAYER (DEPTH) */}
//       <div
//         className="
//           absolute inset-0
//           opacity-0 group-hover:opacity-100
//           transition duration-700
//           bg-[radial-gradient(circle_at_top_left,rgba(48,196,193,0.45),transparent_55%)]
//         "
//       />

//       {/* CONTENT */}
//       <div className="relative p-8 space-y-4">
//         <h3 className="text-xl font-semibold flex items-center justify-between">
//           {item.title}
//           <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition text-white" />
//         </h3>

//         <p className="text-gray-300 group-hover:text-white transition leading-relaxed">
//           {item.desc}
//         </p>
//       </div>

//       {/* 🔥 PREMIUM BORDER + GLOW */}
//       <div
//         className="
//           absolute inset-0 rounded-3xl
//           opacity-0 group-hover:opacity-100
//           ring-2 ring-[#30C4C1]/70
//           shadow-[0_0_60px_rgba(48,196,193,0.45)]
//           transition
//         "
//       />
//     </motion.div>
//   );
// }



import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Construction",
    desc: "Experienced construction advisors helping owners and executives reduce risk, ensure compliance, and drive sustainable growth.",
  },
  {
    title: "Dealerships",
    desc: "Industry-specialized solutions to improve operational efficiency, governance, and long-term dealership performance.",
  },
  {
    title: "Energy",
    desc: "Cybersecurity, audit, and compliance expertise across oil & gas, utilities, and renewable energy sectors.",
  },
  {
    title: "Family Business",
    desc: "Advisory services supporting governance, risk management, and generational business transitions.",
  },
  {
    title: "Financial Services",
    desc: "Helping financial institutions navigate regulation, cybersecurity risk, and complex vendor ecosystems.",
  },
  {
    title: "Government Contractors",
    desc: "Supporting contractors with regulatory compliance, audits, and cybersecurity requirements.",
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Security, compliance, and governance solutions tailored for healthcare and life sciences organizations.",
  },
  {
    title: "Higher Education",
    desc: "Aligning governance, risk, and compliance to support institutional and student success.",
  },
  {
    title: "Law Firm & Professional Services",
    desc: "Advisory services helping firms balance regulatory compliance with modern business operations.",
  },
  {
    title: "Manufacturing & Distribution",
    desc: "Reducing operational and cybersecurity risks from production to enterprise systems.",
  },
  {
    title: "Not-for-Profit",
    desc: "Governance, risk, and compliance solutions designed for mission-driven organizations.",
  },
  {
    title: "Private Equity & Portfolio Companies",
    desc: "Delivering value through risk management, cybersecurity, and operational governance.",
  },
  {
    title: "Real Estate",
    desc: "Innovative audit, risk, and compliance solutions for developers, investors, and property managers.",
  },
  {
    title: "Restaurants & Franchises",
    desc: "SOC reporting, compliance, and advisory services across franchise and restaurant ecosystems.",
  },
];

export default function Industries() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          Industries We Serve | Cybersecurity, IT Audit & Compliance – SofSecure
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="SofSecure serves organizations across industries with cybersecurity, IT audit, risk management, SOC reporting, and regulatory compliance solutions."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/industries"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Industries We Serve | SofSecure"
        />
        <meta
          property="og:description"
          content="Cybersecurity, IT audit, risk, and compliance solutions tailored for diverse industries including finance, healthcare, energy, manufacturing, and more."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/industries"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sofsecure.com/og-image.jpg"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Industries We Serve | SofSecure"
        />
        <meta
          name="twitter:description"
          content="Industry-specific cybersecurity, audit, and compliance expertise from SofSecure."
        />

        {/* ================= SCHEMA ================= */}

        {/* ITEM LIST SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Industries Served by SofSecure",
            "itemListElement": [
              ${industries
                .map(
                  (i, index) => `{
                "@type": "ListItem",
                "position": ${index + 1},
                "name": "${i.title}"
              }`
                )
                .join(",")}
            ]
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
                "name": "Industries",
                "item": "https://www.sofsecure.com/industries"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <section className="bg-[#0b0f14] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p className="text-[#30C4C1] font-semibold tracking-widest uppercase mb-4">
              Industries
            </p>

            {/* SINGLE H1 */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Navigating Challenges, Maximizing Opportunities
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">
              SofSecure partners with organizations across industries to reduce
              risk, ensure compliance, and unlock long-term growth through
              cybersecurity, audit, and governance expertise.
            </p>
          </motion.div>

          {/* GRID */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {industries.map((item, i) => (
              <IndustryCard key={i} item={item} />
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}

/* ================= CARD ================= */

function IndustryCard({ item }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -14 }}
      className="
        relative group overflow-hidden
        rounded-3xl
        border border-white/10
        bg-[#0b0f14]
        shadow-[0_25px_70px_rgba(0,0,0,0.7)]
        transition-all duration-500
      "
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#30C4C1]/80 via-[#2563eb]/70 to-[#020617]" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_left,rgba(48,196,193,0.45),transparent_55%)]" />

      <div className="relative p-8 space-y-4">
        <h3 className="text-xl font-semibold flex items-center justify-between">
          {item.title}
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition text-white" />
        </h3>
        <p className="text-gray-300 group-hover:text-white transition leading-relaxed">
          {item.desc}
        </p>
      </div>

      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 ring-2 ring-[#30C4C1]/70 shadow-[0_0_60px_rgba(48,196,193,0.45)] transition" />
    </motion.div>
  );
}
