import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

import { useState } from "react";
import axios from "axios";

export default function ContactModal({ open, onClose }) {


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
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
// console.log("API URL 👉", import.meta.env.VITE_API_URL);
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // ✅ Single API call (MongoDB + Google Sheet + Mail)
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/enquiry`,
      formData
    );

    alert("Enquiry submitted successfully ✅");

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

    onClose();
  } catch (err) {
    console.error(err);
    alert("Something went wrong ❌");
  } finally {
    setLoading(false);
  }
};



 

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mx-auto my-10 w-full max-w-7xl bg-gradient-to-br from-[#0b0f14] via-[#0e131a] to-black rounded-3xl shadow-2xl border border-white/10"
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="px-12 pt-12 pb-8 border-b border-white/10">
              <h2 className="text-4xl font-bold text-white">
                We’re here to help
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl">
                Connect with SofSecure to discuss IT audit, cybersecurity,
                compliance, and enterprise risk advisory services. Our experts
                will guide you with clarity and confidence.
              </p>
            </div>

            {/* BODY */}
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* LEFT – FULL INFO */}
              <div className="p-12 space-y-10 border-r border-white/10 bg-white/5">

                {/* LOCATIONS */}
                <div>
                  <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                    <MapPin className="w-6 h-6 text-[#30C4C1]" />
                    Global Locations
                  </h4>

                  <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-1">India</strong>
                      Unit No. 201–202, 2nd Floor, Tower A, Paras Twin Tower,  
                      Sector-54, Gurugram, Haryana 122011  
                      <div className="mt-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#30C4C1]" />
                        +91-8527611337
                      </div>
                    </div>

                    <div>
                      <strong className="text-white block mb-1">United Kingdom</strong>
                      15 Great Queen Street, London WC2B 5TD  
                      <div className="mt-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#30C4C1]" />
                        +44-7549842444
                      </div>
                    </div>

                    <div>
                      <strong className="text-white block mb-1">
                        United States of America
                      </strong>
                      770 Pasquinelli Drive, Suite 424, Westmont, IL 60559  
                      <div className="mt-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#30C4C1]" />
                        +1-852-761-1337
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
  {[
    { label: "Title", name: "title" },
    { label: "Company Name", name: "companyName" },
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Your Email", name: "email", type: "email" },
    { label: "Business Phone", name: "phone" },
  ].map((field, i) => (
    <input
      key={i}
      type={field.type || "text"}
      placeholder={field.label}

      /* 🔥 BACKEND CONNECTION (ADDED ONLY) */
      name={field.name}
      value={formData[field.name]}
      onChange={handleChange}

      className="w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/50"
    />
  ))}

  <input
    placeholder="Country"

    /* 🔥 BACKEND CONNECTION */
    name="country"
    value={formData.country}
    onChange={handleChange}

    className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/50"
  />

  <textarea
    rows={6}
    placeholder="Tell us about your requirement"

    /* 🔥 BACKEND CONNECTION */
    name="message"
    value={formData.message}
    onChange={handleChange}

    className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-6 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/50 resize-none"
  />

  <div className="sm:col-span-2 pt-4">
    <button
      type="submit"
      className="w-full bg-[#30C4C1] text-black py-5 rounded-full text-lg font-semibold hover:scale-[1.02] transition"
    >
      Submit Enquiry
    </button>
  </div>
</form>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
