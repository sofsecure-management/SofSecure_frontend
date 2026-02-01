// import { ShieldCheck, HeartHandshake, MessageCircle, Leaf, Lock } from "lucide-react";

// export default function AboutSofSecure() {
//   return (
//     <section className="bg-[#0b0f14] text-white py-28 px-6">
//       <div className="max-w-7xl mx-auto space-y-24">

//         {/* ================= HEADER ================= */}
//         <div className="text-center max-w-4xl mx-auto">
//           <p className="text-cyan-400 font-semibold tracking-wide mb-3">
//             About SofSecure.
//           </p>
//           <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//             Security, Trust & Technology — Built for the Future
//           </h1>
//           <p className="text-gray-400 text-lg leading-relaxed">
//             At SofSecure, we believe cybersecurity and digital trust are not just
//             technical requirements — they are the foundation of modern business
//             success. Our mission is to protect, strengthen, and future-proof
//             organizations through intelligent security solutions and ethical
//             digital practices.
//           </p>
//         </div>

//         {/* ================= ABOUT TEXT ================= */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center ">
//           <div className="space-y-6 text-gray-300 leading-relaxed text-lg ">
//             <p>
//               SofSecure is a forward-thinking technology and security-driven
//               organization committed to helping businesses operate safely in an
//               increasingly digital world. From safeguarding sensitive data to
//               strengthening digital infrastructures, we focus on building
//               long-term protection rather than short-term fixes.
//             </p>

//             <p>
//               We understand that today’s digital threats are constantly evolving.
//               That is why our approach combines advanced technology, proactive
//               monitoring, and strategic thinking. We do not believe in one-size-
//               fits-all solutions — every organization deserves a security
//               framework designed specifically for its goals, scale, and risks.
//             </p>

//             <p>
//               Beyond technology, SofSecure stands for integrity, transparency,
//               and accountability. We work closely with our clients as trusted
//               partners, ensuring clarity in communication, responsibility in
//               execution, and confidence in outcomes.
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl p-10 border border-white/10">
//             <h3 className="text-2xl font-semibold mb-4">
//               Our Purpose
//             </h3>
//             <p className="text-gray-300 leading-relaxed">
//               Our purpose is simple yet powerful — to create a secure digital
//               ecosystem where businesses can grow without fear. We aim to reduce
//               risks, protect reputations, and enable innovation by making
//               security a strength rather than a limitation.
//             </p>
//           </div>
//         </div>

//         {/* ================= FIVE HABITS ================= */}
//         <div className="space-y-12">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Our Five Core Habits
//             </h2>
//             <p className="text-gray-400 text-lg">
//               When our behaviors and ways of working consistently reflect our
//               values, excellence becomes a habit. These five habits guide every
//               decision we make at SofSecure.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
//             {/* Habit 1 */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
//               <HeartHandshake className="text-cyan-400 mb-4" size={36} />
//               <h3 className="text-xl font-semibold mb-3">
//                 Being Respectful
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 We respect people, ideas, data, and time. Every interaction —
//                 with clients, partners, or teammates — is guided by empathy,
//                 professionalism, and fairness.
//               </p>
//             </div>

//             {/* Habit 2 */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
//               <MessageCircle className="text-cyan-400 mb-4" size={36} />
//               <h3 className="text-xl font-semibold mb-3">
//                 Being Responsive
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Security demands speed and clarity. We respond proactively,
//                 address concerns promptly, and ensure our clients never feel
//                 uncertain or unheard.
//               </p>
//             </div>

//             {/* Habit 3 */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
//               <ShieldCheck className="text-cyan-400 mb-4" size={36} />
//               <h3 className="text-xl font-semibold mb-3">
//                 Always Communicating
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Transparent communication builds confidence. We believe in
//                 keeping stakeholders informed, explaining risks clearly, and
//                 sharing progress without ambiguity.
//               </p>
//             </div>

//             {/* Habit 4 */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
//               <Leaf className="text-cyan-400 mb-4" size={36} />
//               <h3 className="text-xl font-semibold mb-3">
//                 Demonstrating Stewardship
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 We treat data, systems, and resources with responsibility and
//                 care. Stewardship means thinking long-term and protecting what
//                 matters most.
//               </p>
//             </div>

//             {/* Habit 5 */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
//               <Lock className="text-cyan-400 mb-4" size={36} />
//               <h3 className="text-xl font-semibold mb-3">
//                 Building Trust
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Trust is earned through consistency and results. We build trust
//                 by delivering secure solutions, honoring commitments, and
//                 standing accountable for our work.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, HeartHandshake, MessageCircle, Leaf, Lock } from "lucide-react";

export default function AboutSofSecure() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          About SofSecure | Trusted Cybersecurity, IT Audit & Compliance Experts
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="Learn about SofSecure — a trusted cybersecurity, IT audit, risk, and compliance consulting firm dedicated to building secure, transparent, and future-ready digital organizations."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.sofsecure.com/about"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="About SofSecure | Security, Trust & Technology"
        />
        <meta
          property="og:description"
          content="Discover SofSecure’s mission, values, and approach to cybersecurity, IT audit, governance, and digital trust."
        />
        <meta
          property="og:url"
          content="https://www.sofsecure.com/about"
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
          content="About SofSecure | Cybersecurity & Compliance Experts"
        />
        <meta
          name="twitter:description"
          content="SofSecure helps organizations build secure, compliant, and trusted digital environments through expert cybersecurity and governance services."
        />

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
            "description": "SofSecure is a cybersecurity, IT audit, risk, and compliance consulting firm helping organizations build secure and trusted digital environments.",
            "sameAs": [
              "https://www.linkedin.com/company/sofsecure"
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
                "name": "About",
                "item": "https://www.sofsecure.com/about"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <section className="bg-[#0b0f14] text-white py-28 px-6">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* ================= HEADER ================= */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-400 font-semibold tracking-wide mb-3">
              About SofSecure.
            </p>
            {/* SINGLE H1 (SEO CRITICAL) */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Security, Trust & Technology — Built for the Future
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              At SofSecure, we believe cybersecurity and digital trust are not just
              technical requirements — they are the foundation of modern business
              success. Our mission is to protect, strengthen, and future-proof
              organizations through intelligent security solutions and ethical
              digital practices.
            </p>
          </div>

          {/* ================= ABOUT TEXT ================= */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                SofSecure is a forward-thinking cybersecurity, IT audit, and
                compliance consulting firm committed to helping businesses operate
                safely in an increasingly digital world. From safeguarding sensitive
                data to strengthening digital infrastructures, we focus on building
                long-term protection rather than short-term fixes.
              </p>

              <p>
                Today’s digital threats evolve rapidly. Our approach combines
                advanced technology, proactive monitoring, and strategic thinking.
                We design customized security and governance frameworks aligned
                with each organization’s scale, goals, and risk profile.
              </p>

              <p>
                Beyond technology, SofSecure stands for integrity, transparency,
                and accountability. We partner closely with our clients, ensuring
                clarity in communication, responsibility in execution, and
                confidence in outcomes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl p-10 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">
                Our Purpose
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our purpose is to create a secure digital ecosystem where
                organizations can grow with confidence. We reduce risk, protect
                reputations, and enable innovation by making security a strategic
                advantage rather than a limitation.
              </p>
            </div>
          </div>

          {/* ================= CORE HABITS ================= */}
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Five Core Habits
              </h2>
              <p className="text-gray-400 text-lg">
                These five habits guide every decision we make and define how we
                deliver excellence, trust, and security for our clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              <Habit
                icon={<HeartHandshake className="text-cyan-400 mb-4" size={36} />}
                title="Being Respectful"
                text="We respect people, ideas, data, and time. Every interaction is guided by professionalism, empathy, and fairness."
              />

              <Habit
                icon={<MessageCircle className="text-cyan-400 mb-4" size={36} />}
                title="Being Responsive"
                text="We respond proactively, address concerns promptly, and ensure clarity in every engagement."
              />

              <Habit
                icon={<ShieldCheck className="text-cyan-400 mb-4" size={36} />}
                title="Always Communicating"
                text="Transparent communication builds confidence. We explain risks clearly and share progress openly."
              />

              <Habit
                icon={<Leaf className="text-cyan-400 mb-4" size={36} />}
                title="Demonstrating Stewardship"
                text="We treat data, systems, and resources with responsibility and long-term care."
              />

              <Habit
                icon={<Lock className="text-cyan-400 mb-4" size={36} />}
                title="Building Trust"
                text="Trust is earned through consistency, accountability, and results."
              />

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

/* ================= REUSABLE HABIT CARD ================= */
function Habit({ icon, title, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
      {icon}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}
