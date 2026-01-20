import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServiceLayout({
  title,
  intro,
  image,
  why,
  approach,
  benefits,
}) {
  /* ================= TYPING LOGIC (SMOOTH) ================= */
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  useEffect(() => {
    const max = title.length;
    const min = Math.max(3, Math.floor(max * 0.65));

    let timeout;

    if (direction === "forward" && index < max) {
      timeout = setTimeout(() => {
        setDisplayText(title.slice(0, index + 1));
        setIndex(index + 1);
      }, 90); // typing speed
    }

    if (direction === "forward" && index === max) {
      timeout = setTimeout(() => {
        setDirection("backward");
      }, 900); // pause at full text
    }

    if (direction === "backward" && index > min) {
      timeout = setTimeout(() => {
        setDisplayText(title.slice(0, index - 1));
        setIndex(index - 1);
      }, 70); // delete speed
    }

    if (direction === "backward" && index === min) {
      timeout = setTimeout(() => {
        setDirection("forward");
      }, 600); // pause before typing again
    }

    return () => clearTimeout(timeout);
  }, [index, direction, title]);

  return (
    <section className="relative bg-[#0b0f14] text-white px-6 py-32 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ================= HERO WITH BACKGROUND IMAGE ================= */}
        <div className="relative w-screen left-1/2 -translate-x-1/2">
          <div
            className="relative h-[400px] flex items-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-6">

              {/* ===== HERO TITLE (ONLY THIS IS ANIMATED) ===== */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="
                  text-4xl lg:text-5xl font-bold leading-tight mb-6
                  min-h-[64px] lg:min-h-[72px]
                  bg-gradient-to-r from-white via-[#30C4C1] to-white
                  bg-[length:200%_200%]
                  bg-clip-text text-transparent
                "
              >
                {displayText}
                <motion.span
                  className="inline-block text-[#30C4C1] ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  |
                </motion.span>
              </motion.h1>

              {/* INTRO */}
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

        {/* ================= NICHE KA CONTENT (UNCHANGED) ================= */}

        {/* WHY THIS MATTERS */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
            <p className="text-gray-300 leading-relaxed">{why}</p>
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
          <h2 className="text-2xl font-semibold mb-6">Our Proven Approach</h2>
          <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10">
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              {approach}
            </p>
          </div>
        </div>

        {/* BENEFITS */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">What You Gain</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300"
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
            Speak with Our Experts →
          </Link>
        </div>

      </div>
    </section>
  );
}
