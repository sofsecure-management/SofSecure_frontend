

import { motion } from "framer-motion";
import { ShieldCheck, Layers, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const ProgressBar = ({ label, value }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm text-gray-300">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-[#30C4C1] rounded-full"
      />
    </div>
  </div>
);

export default function AuditInsights() {
  return (
    <section className="relative bg-gradient-to-br from-[#0b0f14] via-[#0e131a] to-black text-white py-32 overflow-hidden">

      {/* GLOBAL AMBIENT GLOW */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#30C4C1]/15 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-10"
        >
          {/* subtle glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#30C4C1]/10 rounded-full blur-[120px]" />

          <h2 className="relative z-10 text-4xl md:text-5xl font-bold leading-tight">
            Sustainable Business Futures <br />
            <span className="text-[#30C4C1]">with SofSecure.</span>
          </h2>

          <p className="relative z-10 text-gray-400 text-lg max-w-xl">
            Our IT audit and cybersecurity expertise goes beyond compliance.
            We help organizations build resilient, scalable, and secure
            digital ecosystems with confidence.
          </p>

          {/* Progress */}
          <div className="relative z-10 space-y-7 pt-4 max-w-xl">
            <ProgressBar label="Specialized IT Audit Expertise" value={100} />
            <ProgressBar label="Flexibility & Scalability" value={90} />
            <ProgressBar label="Continuous Compliance & Learning" value={75} />
          </div>
        </motion.div>

        {/* RIGHT PREMIUM GLASS CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="
            group
            relative
            rounded-3xl
            p-12
            overflow-hidden
            bg-gradient-to-br
            from-[#121a22]
            via-[#0f1f26]
            to-[#0b0f14]
            border
            border-white/10
            shadow-[0_25px_80px_rgba(0,0,0,0.6)]
          "
        >
          {/* card glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#30C4C1]/25 rounded-full blur-[140px]" />
          </div>

          <div className="relative z-10 grid gap-10">

            <div className="flex items-start gap-5">
              <ShieldCheck className="w-11 h-11 text-[#30C4C1]" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Risk-Driven Audits
                </h3>
                <p className="text-gray-400 text-sm">
                  Proactive identification of security gaps aligned with
                  regulatory standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Layers className="w-11 h-11 text-[#30C4C1]" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Scalable Frameworks
                </h3>
                <p className="text-gray-400 text-sm">
                  Audit models designed to grow with your enterprise
                  infrastructure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <TrendingUp className="w-11 h-11 text-[#30C4C1]" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Continuous Improvement
                </h3>
                <p className="text-gray-400 text-sm">
                  Ongoing assessments to adapt with evolving threats and
                  compliance needs.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

