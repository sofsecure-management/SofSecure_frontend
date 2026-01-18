import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServiceLayout({
  title,
  intro,
  image,     
  why,
  approach,
  benefits,
}) {
  return (
    <section className="relative bg-[#0b0f14] text-white px-6 py-32 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* HERO */}
        {/* <div className="max-w-4xl">a
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {intro}
          </motion.p>
        </div> */}


          {/* HERO WITH BACKGROUND IMAGE */}
<div className="relative w-screen left-1/2 -translate-x-1/2">
  <div
    className="relative h-[520px] flex items-center"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r 
                    from-black/80 via-black/60 to-black/30" />

    {/* Content */}
    <div className="relative max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-lg text-gray-300 leading-relaxed max-w-3xl"
      >
        {intro}
      </motion.p>
    </div>
  </div>
</div>

        {/* FULL WIDTH IMAGE (Before Why This Matters) */}
        

        {/* WHY THIS MATTERS */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Why This Matters
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {why}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-4 text-[#30C4C1]">
              Business Impact
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              This service helps organizations proactively identify risks,
              improve governance, and build trust with stakeholders while
              staying compliant with evolving regulatory requirements.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Our Proven Approach
          </h2>

          <div className="bg-gradient-to-br from-white/5 to-white/0 
                          border border-white/10 rounded-2xl p-10">
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              {approach}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Risk-focused assessment",
                "Industry-aligned frameworks",
                "Actionable recommendations",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-black/40 border border-white/10 
                             rounded-xl p-5 text-sm text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">
            What You Gain
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 
                           rounded-xl p-6 text-gray-300"
              >
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 
                       rounded-full bg-[#30C4C1] text-black 
                       font-semibold hover:scale-105 transition"
          >
            Speak with Our Experts
            <span className="text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
