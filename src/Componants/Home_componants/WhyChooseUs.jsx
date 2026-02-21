


import { motion } from "framer-motion";
import {
  ShieldCheck,
  Settings,
  Award,
  Users,
} from "lucide-react";

const features = [
  {
    id: "01",
    title: "Expertise",
    description:`Our team consists of experienced professionals who
have in-depth experience in the field of IT auditing.
`,
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Customized Solutions",
    description:`We create tailored strategies that complement your
organizational goals, technological foundation, and
compliance requirements.`,
    icon: Settings,
  },
  {
    id: "03",
    title: "Commitment to Quality",
    description:`Each engagement is conducted with an unwavering
focus on quality, precision, and reliability along with
superior security.`,
    icon: Award,
  },
  {
    id: "04",
    title: "Client-Centric Approach",
    description:
      `We believe in building long-term
relationships, not transacting business on
a one-off basis. We measure our work in
terms of results, not words.`,
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#0b0f14] text-white py-32 overflow-hidden">

      {/* AMBIENT BACKGROUND */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl  px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why <span className="text-[#30C4C1]">Choose Us</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            For over <strong>10+ years</strong>, organizations across industries
            have trusted SofSecure for precision-driven IT audit, risk, and
            cybersecurity solutions—delivered with integrity and impact.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group
                  relative
                  rounded-3xl
                  p-10
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#121a22]
                  via-[#0f1f26]
                  to-[#0b0f14]
                  border
                  border-white/10
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                  transition-all
                "
              >
                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#30C4C1]/20 rounded-full blur-[120px]" />
                </div>

                {/* NUMBER */}
                <span className="absolute top-8 right-8 text-6xl font-bold text-white/5">
                  {item.id}
                </span>

                <div className="relative z-10">
                  {/* ICON */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mb-8">
                    <Icon className="w-8 h-8 text-[#30C4C1]" />
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-2xl font-semibold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
