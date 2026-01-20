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

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceLayout({
  title,
  intro,
  image,
  why,
  approach,
  benefits,
}) {
  return (
    <section className="relative bg-[#0b0f14] text-white px-6 py-32 overflow-hidden">

      {/* AMBIENT GLOW */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#30C4C1]/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HERO ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* TITLE */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              {title}
            </motion.h1>

            {/* INTRO */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              {intro}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="mt-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#30C4C1] text-black font-semibold hover:scale-105 transition"
              >
                Talk to Our Experts
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <img
              src={image}
              alt={title}
              className="rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            />

            {/* IMAGE GLOW */}
            <div className="absolute inset-0 rounded-3xl bg-[#30C4C1]/10 blur-2xl -z-10" />
          </motion.div>

        </div>

        {/* ================= REST CONTENT (unchanged) ================= */}
        {/* WHY, APPROACH, BENEFITS etc */}
      </div>
    </section>
  );
}
