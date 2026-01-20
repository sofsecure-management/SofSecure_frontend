

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};


export default function AboutInsightsSection() {
  const services = [
  "IT Audit Services",
  "SOC Reports",
  "Cybersecurity Assessment",
  "IT Governance & Compliance",
  "Agile Internal Audit",
  "Board & Audit Committee Governance",
  "Enterprise Risk Management",
  "ESG & Sustainability",
  "Privacy",
  "Regulatory Compliance",
  "SOX Compliance",
];


  return (
    <section className="relative bg-[#1f252d] text-white py-28 ">
      <div className="mx-auto max-w-7xl  px-6">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT – PREMIUM GRADIENT CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
  order-2 lg:order-2
  relative
  -mt-55
  z-50
  max-w-2xl
  rounded-2xl
  p-12
  shadow-2xl
  overflow-hidden
  bg-gradient-to-br
  from-[#232a33]
  via-[#1f2f36]
  to-[#0f1720]
  border border-white/10
"
          >
            {/* Glow Effect */}
            <div className="absolute -top-32 -right-32 w-72 h-72 bg-teal-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              {/* ABOUT */}
              <h2 className="text-3xl font-semibold mb-6 ">
                About Us
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                At SofSecure, we specialize in providing comprehensive IT Audit
                services tailored to your organization's needs. With deep domain
                expertise, we ensure your IT systems remain secure, compliant,
                and optimized for long-term performance.
              </p>

              {/* VALUES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-12">
                {[
                  "Being Respectful",
                  "Being Responsive",
                  "Always Communicating",
                  "Demonstrating Stewardship",
                  "Building Trust",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-l-2 border-teal-400/60 pl-4 text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* SPIRIT */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">
                  SPIRIT OF SofSecure
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  These values are our foundation. They shape who we are and how
                  we work. We are driven by integrity, accountability, and an
                  unwavering commitment to our clients’ success.
                </p>
              </div>

              {/* CTA */}
              <button className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-10 py-4 text-black font-medium hover:bg-teal-600 transition">
                Contact Us →
              </button>
            </div>
          </motion.div>

          {/* RIGHT – IMAGE */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600267185393-e158a98703de"
              alt="IT Audit & Cyber Security"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

