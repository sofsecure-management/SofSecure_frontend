// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail } from "lucide-react";
// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     title: "",
//     companyName: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     country: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section className="bg-[#0b0f14] text-white py-32 px-6">
//       <div className="max-w-7xl mx-auto space-y-24">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
//             Contact Us
//           </p>

//           <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//             We’re Here to Help
//           </h1>

//           <p className="text-gray-400 text-lg leading-relaxed">
//             Have a question, need support, or want to discuss a secure solution
//             for your business? Leave us a message and our team will get back to
//             you shortly.
//           </p>
//         </motion.div>

//         {/* ================= CONTENT ================= */}
//         <div className="grid lg:grid-cols-2 gap-16 items-start">

//           {/* ================= CONTACT INFO ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-10"
//           >
//             <h2 className="text-3xl font-bold">
//               Our Global Offices
//             </h2>

//             {/* India */}
//             <ContactCard
//               title="India"
//               address="Unit no.201-202, 2nd Floor, Tower A, Paras Twin Tower, Sector-54, Gurgaon, Haryana 122011"
//             />

//             {/* UK */}
//             <ContactCard
//               title="United Kingdom"
//               address="15 Great Queen St, London WC2B 5TD"
//             />

//             {/* USA */}
//             <ContactCard
//               title="United States of America"
//               address="770 Pasquinelli Drive, Suite 424, Westmont, IL 60559"
//             />

//             {/* Phone & Email */}
//             <div className="space-y-4 pt-6 border-t border-white/10">
//               <div className="flex items-center gap-4 text-gray-300">
//                 <Phone className="text-cyan-400" />
//                 <span>+91-8527611337</span>
//               </div>

//               <div className="flex items-center gap-4 text-gray-300">
//                 <Mail className="text-cyan-400" />
//                 <span>info@sofsecure.com</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* ================= FORM ================= */}
//           <motion.form
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-6"
//           >
//             <h3 className="text-2xl font-semibold mb-2">
//               Leave a Message
//             </h3>

//             <div className="grid sm:grid-cols-2 gap-5">
//               <Input label="Title" name="title" onChange={handleChange} />
//               <Input label="Company Name" name="companyName" onChange={handleChange} />
//               <Input label="First Name" name="firstName" onChange={handleChange} />
//               <Input label="Last Name" name="lastName" onChange={handleChange} />
//               <Input label="Your Email" name="email" type="email" onChange={handleChange} />
//               <Input label="Business Phone" name="phone" onChange={handleChange} />
//               <Input label="Country" name="country" onChange={handleChange} />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-400 mb-2">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 onChange={handleChange}
//                 className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/60"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl transition"
//             >
//               Send Message
//             </button>
//           </motion.form>

//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= REUSABLE COMPONENTS ================= */

// function ContactCard({ title, address }) {
//   return (
//     <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition">
//       <div className="flex items-start gap-4">
//         <MapPin className="text-cyan-400 mt-1" />
//         <div>
//           <h4 className="font-semibold text-lg mb-1">
//             {title}
//           </h4>
//           <p className="text-gray-400 leading-relaxed">
//             {address}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Input({ label, name, type = "text", onChange }) {
//   return (
//     <div>
//       <label className="block text-sm text-gray-400 mb-2">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         onChange={onChange}
//         className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/60"
//       />
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= SUBMIT (SAME AS CONTACT MODAL) ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
     await axios.post(
  "/.netlify/functions/enquiry",
  formData,
  { headers: { "Content-Type": "application/json" } }
);

      alert("Message sent successfully ✅");

      setFormData({
        title: "",
        companyName: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0b0f14] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Contact Us
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            We’re Here to Help
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Have a question, need support, or want to discuss a secure solution
            for your business? Leave us a message and our team will get back to
            you shortly.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-bold">Our Global Offices</h2>

            <ContactCard
              title="India"
              address="Unit no.201-202, 2nd Floor, Tower A, Paras Twin Tower, Sector-54, Gurgaon, Haryana 122011"
            />

            <ContactCard
              title="United Kingdom"
              address="15 Great Queen St, London WC2B 5TD"
            />

            <ContactCard
              title="United States of America"
              address="770 Pasquinelli Drive, Suite 424, Westmont, IL 60559"
            />

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-cyan-400" />
                <span>+91-8527611337</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="text-cyan-400" />
                <span>info@sofsecure.com</span>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-2">
              Leave a Message
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Title" name="title" value={formData.title} onChange={handleChange} />
              <Input label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />
              <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
              <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
              <Input label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              <Input label="Business Phone" name="phone" value={formData.phone} onChange={handleChange} />
              <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/60"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function ContactCard({ title, address }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition">
      <div className="flex items-start gap-4">
        <MapPin className="text-cyan-400 mt-1" />
        <div>
          <h4 className="font-semibold text-lg mb-1">{title}</h4>
          <p className="text-gray-400 leading-relaxed">{address}</p>
        </div>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/60"
      />
    </div>
  );
}
