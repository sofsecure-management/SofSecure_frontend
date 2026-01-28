import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function ContactFormHome_page() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  later same backend API yahin connect karna
    console.log("Homepage contact form submitted");
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0b0f14] via-[#0e131a] to-black text-white py-28 overflow-hidden">
      
      {/* AMBIENT GLOW */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#30C4C1]/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s <span className="text-[#30C4C1]">Connect</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl">
            Ready to strengthen your IT governance, cybersecurity posture,
            and compliance framework? Connect with SofSecure. and speak
            directly with our audit and risk advisory experts.
          </p>

          <ul className="space-y-4 text-sm text-gray-300">
            <li>✔ Enterprise IT Audit & Risk Advisory</li>
            <li>✔ SOC, SOX & Regulatory Compliance</li>
            <li>✔ Cybersecurity & Privacy Assessments</li>
            <li>✔ Global delivery across India, UK & USA</li>
          </ul>

          {/* QUICK CONTACT */}
          <div className="space-y-3 text-sm text-gray-300 pt-4">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#30C4C1]" />
              +91-8527611337
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#30C4C1]" />
              info@sofsecure.com
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl"
        >
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              "Title",
              "Company Name",
              "First Name",
              "Last Name",
              "Your Email",
              "Business Phone",
            ].map((ph, i) => (
              <input
                key={i}
                type={ph === "Your Email" ? "email" : "text"}
                placeholder={ph}
                required
                className="w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/50"
              />
            ))}

            <input
              placeholder="Country"
              required
              className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/50"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your requirement"
              required
              className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/50 resize-none"
            />

            <div className="sm:col-span-2 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-[#30C4C1] text-black py-5 rounded-full text-lg font-semibold flex items-center justify-center gap-3"
              >
                Submit Enquiry
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
