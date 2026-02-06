

// import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, Mail, Phone } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function ContactModal({ open, onClose }) {

//   /* ================= FORM STATE ================= */
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

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   /* ================= SUBMIT ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//       try {
//    await axios.post(
//   "/api/enquiry",
//   formData,
//   { headers: { "Content-Type": "application/json" } }
// );


//       alert("Enquiry submitted successfully ✅");

//       setFormData({
//         title: "",
//         companyName: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         country: "",
//         message: "",
//       });

//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= BODY SCROLL LOCK ================= */
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => (document.body.style.overflow = "");
//   }, [open]);

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="
//             fixed inset-0 z-[10000]
//             bg-black/75 backdrop-blur-sm
//             overflow-y-auto
//             pointer-events-auto
//           "
//         >
//           {/* ❌ CLOSE (NAVBAR SAFE) */}
//           <button
//             onClick={onClose}
//             className="
//               fixed top-6 right-6 z-[10002]
//               w-12 h-12 flex items-center justify-center
//               rounded-full bg-white/10 backdrop-blur-xl
//               text-white text-2xl
//               hover:bg-[#30C4C1]/20 hover:text-[#30C4C1]
//               transition pointer-events-auto
//             "
//           >
//             ✕
//           </button>

//           {/* MAIN CARD */}
//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 60, opacity: 0 }}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//             className="
//               relative mx-auto my-10 w-full max-w-7xl
//               bg-gradient-to-br from-[#0b0f14] via-[#0e131a] to-black
//               rounded-3xl shadow-2xl border border-white/10
//               pointer-events-auto
//             "
//           >
//             {/* HEADER */}
//             <div className="px-12 pt-12 pb-8 border-b border-white/10">
//               <h2 className="text-4xl font-bold text-white">
//                 We’re here to help
//               </h2>
//               <p className="text-gray-400 mt-3 max-w-2xl">
//                 Connect with SofSecure to discuss IT audit, cybersecurity,
//                 compliance, and enterprise risk advisory services.
//               </p>
//             </div>

//             {/* BODY */}
//             <div className="grid grid-cols-1 lg:grid-cols-2">

//               {/* LEFT */}
//               <div className="p-12 space-y-10 border-r border-white/10 bg-white/5">
//                 <div>
//                   <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
//                     <MapPin className="w-6 h-6 text-[#30C4C1]" />
//                     Global Locations
//                   </h4>

//                   <div className="space-y-6 text-sm text-gray-300">
//                     <div>
//                       <strong className="text-white block mb-1">India</strong>
//                       Unit No. 201–202, Tower A, Paras Twin Tower, Sector-54,
//                       Gurugram, Haryana 122011
//                       <div className="mt-2 flex items-center gap-2">
//                         <Phone className="w-4 h-4 text-[#30C4C1]" />
//                         +91-92201-22201
//                       </div>
//                     </div>

//                     <div>
//                       <strong className="text-white block mb-1">United Kingdom</strong>
//                       15 Great Queen Street, London WC2B 5TD
//                       <div className="mt-2 flex items-center gap-2">
//                         <Phone className="w-4 h-4 text-[#30C4C1]" />
//                         +44-7881-859661
//                       </div>
//                     </div>

//                     <div>
//                       <strong className="text-white block mb-1">United States of America</strong>
//                       770 Pasquinelli Drive, Suite 424, Westmont, IL 60559
//                       <div className="mt-2 flex items-center gap-2">
//                         <Phone className="w-4 h-4 text-[#30C4C1]" />
//                         +91-92201-22201
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 text-sm text-gray-300">
//                   <Mail className="w-5 h-5 text-[#30C4C1]" />
//                   info@sofsecure.com
//                 </div>

//                 <div className="rounded-2xl overflow-hidden border border-white/10">
//                   <iframe
//                     title="SofSecure Location"
//                     src="https://www.google.com/maps?q=Paras%20Twin%20Tower%20Sector%2054%20Gurgaon&output=embed"
//                     className="w-full h-72 grayscale"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>

//               {/* RIGHT – FORM */}
//               <div className="p-12">
//                 <form
//                   onSubmit={handleSubmit}
//                   className="grid grid-cols-1 sm:grid-cols-2 gap-8"
//                 >
//                   {[
//                     { label: "Title", name: "title" },
//                     { label: "Company Name", name: "companyName" },
//                     { label: "First Name", name: "firstName" },
//                     { label: "Last Name", name: "lastName" },
//                     { label: "Your Email", name: "email", type: "email" },
//                     { label: "Business Phone", name: "phone" },
//                   ].map((f, i) => (
//                     <input
//                       key={i}
//                       type={f.type || "text"}
//                       placeholder={f.label}
//                       name={f.name}
//                       value={formData[f.name]}
//                       onChange={handleChange}
//                       required
//                       className="w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#30C4C1]/50"
//                     />
//                   ))}

//                   <input
//                     placeholder="Country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-white"
//                   />

//                   <textarea
//                     rows={6}
//                     placeholder="Tell us about your requirement"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-white resize-none"
//                   />

//                   <div className="sm:col-span-2 pt-4">
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full bg-[#30C4C1] text-black py-5 rounded-full text-lg font-semibold hover:scale-[1.02] transition disabled:opacity-60"
//                     >
//                       {loading ? "Submitting..." : "Submit Enquiry"}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

/* ✅ REAL CALENDAR */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker-dark.css";

/* ❌ BLOCK FREE EMAIL DOMAINS */
const blockedDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "rediffmail.com",
  "yandex.com",
];

const isProfessionalEmail = (email) => {
  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) return false;
  const domain = email.split("@")[1]?.toLowerCase();
  return domain && !blockedDomains.includes(domain);
};

export default function ContactModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    description: "",
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  /* 📅 CALENDAR STATE */
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* 🔐 reCAPTCHA */
 const executeRecaptcha = async () => {
  if (!window.grecaptcha) {
    throw new Error("reCAPTCHA not loaded");
  }

  await window.grecaptcha.ready();

  return await window.grecaptcha.execute(
    import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    { action: "contact_enquiry" }
  );
};

  /* ✅ FRONTEND VALIDATION */
  const validateForm = () => {
    if (formData.description.trim().length < 30)
      return "Please describe your requirement in at least 30 characters";

    if (!isProfessionalEmail(formData.email))
      return "Only official / business email addresses are allowed";

    if (!selectedDateTime)
      return "Please select a consultation date & time";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const preferredDateTime = selectedDateTime.toISOString();

    setLoading(true);
    try {
      const token = await executeRecaptcha();
      if (!token) throw new Error("Captcha verification failed");

      await axios.post("/api/enquiry", {
        ...formData,
        preferredDateTime,
        recaptchaToken: token,
      });

      alert("Enquiry submitted successfully ✅");
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[10000] bg-black/75 backdrop-blur-sm overflow-y-auto">
          <motion.div className="relative mx-auto my-10 w-full max-w-7xl bg-gradient-to-br from-[#0b0f14] via-[#0e131a] to-black rounded-3xl border border-white/10 shadow-2xl">

            {/* HEADER */}
            <div className="px-12 pt-12 pb-8 border-b border-white/10">
              <h2 className="text-4xl font-bold text-white">
                We’re here to help
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl">
                Connect with SofSecure to discuss IT audit, cybersecurity,
                compliance, and enterprise risk advisory services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT – ADDRESS + MAP */}
              
<div className="p-12 space-y-10 border-r border-white/10 bg-white/5">
  <div>
    <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
      <MapPin className="w-6 h-6 text-[#30C4C1]" />
      Global Locations
    </h4>

    <div className="space-y-6 text-sm text-gray-300">
      {/* INDIA */}
      <div>
        <strong className="text-white block mb-1">India</strong>
        Unit No. 201–202, Tower A, Paras Twin Tower, Sector-54,
        Gurugram, Haryana 122011
        <div className="mt-2 flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#30C4C1]" />
          +91-92201-22201
        </div>
      </div>

      {/* UNITED KINGDOM */}
      <div>
        <strong className="text-white block mb-1">United Kingdom</strong>
        15 Great Queen Street, London WC2B 5TD
        <div className="mt-2 flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#30C4C1]" />
          +44-7881-859661
        </div>
      </div>

      {/* UNITED STATES */}
      <div>
        <strong className="text-white block mb-1">
          United States of America
        </strong>
        770 Pasquinelli Drive, Suite 424,
        Westmont, IL 60559
        <div className="mt-2 flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#30C4C1]" />
          +91-92201-22201
        </div>
      </div>
    </div>
  </div>

  {/* EMAIL */}
  <div className="flex items-center gap-3 text-sm text-gray-300">
    <Mail className="w-5 h-5 text-[#30C4C1]" />
    info@sofsecure.com
  </div>

  {/* MAP */}
  <div className="rounded-2xl overflow-hidden border border-white/10">
    <iframe
      title="SofSecure Location"
      src="https://www.google.com/maps?q=Paras%20Twin%20Tower%20Sector%2054%20Gurgaon&output=embed"
      className="w-full h-72 grayscale"
      loading="lazy"
    />
  </div>
</div>



              {/* RIGHT – FORM */}
              <div className="p-12">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                >
                  <textarea
                    name="description"
                    rows={3}
                    required
                    placeholder="Describe your requirement (minimum 30 characters)"
                    onChange={handleChange}
                    className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-white focus:ring-2 focus:ring-[#30C4C1]/50"
                  />

                  {[
                    ["companyName", "Company Name"],
                    ["firstName", "First Name"],
                    ["lastName", "Last Name"],
                    ["email", "Business Email", "email"],
                    ["phone", "Business Phone"],
                  ].map(([name, label, type]) => (
                    <input
                      key={name}
                      type={type || "text"}
                      name={name}
                      required
                      placeholder={label}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-white focus:ring-2 focus:ring-[#30C4C1]/50"
                    />
                  ))}

                  {/* 📅 REAL PROFESSIONAL CALENDAR */}
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm text-gray-300">
                      Preferred consultation date & time
                    </label>
<DatePicker
  selected={selectedDateTime}
  onChange={(date) => setSelectedDateTime(date)}
  showTimeSelect
  timeIntervals={30}
  timeCaption="Time"
  dateFormat="MMMM d, yyyy h:mm aa"
  minDate={new Date()}
  placeholderText="Select date & time"

  /* ❌ no portal, no popper */
  className="
    w-full rounded-xl
    bg-[#0b0f14] text-white
    border border-white/15
    px-6 py-4
    focus:outline-none
    focus:ring-2 focus:ring-[#30C4C1]/50
  "
/>




                    <p className="text-xs text-gray-400">
                      Monday to Friday, 10:00 AM – 6:00 PM (local time)
                    </p>
                  </div>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Additional message (optional)"
                    onChange={handleChange}
                    className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-white"
                  />

                  {error && (
                    <p className="sm:col-span-2 text-red-400 text-sm">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="sm:col-span-2 w-full bg-[#30C4C1] text-black py-5 rounded-full text-lg font-semibold"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
