

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, ChevronDown, X } from "lucide-react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import ServicesMegaMenu from "./ServicesMegaMenu";
// import CompanyMegaMenu from "./CompanyMegaMenu";

// import { ShieldCheck } from "lucide-react";
// import logo from "/logo/Sofsecure logo.svg";


// export default function Navbar() {
//   const location = useLocation();

//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [companyOpen, setCompanyOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileServices, setMobileServices] = useState(false);
//   const [mobileCompany, setMobileCompany] = useState(false);

//   const servicesActive = location.pathname.startsWith("/services");
//   const companyActive =
//     location.pathname === "/about" ||
//     location.pathname === "/careers" ||
//     location.pathname === "/contact";

//   const navClass = ({ isActive }) =>
//     `relative font-semibold transition ${
//       isActive
//         ? "text-[#30C4C1] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#30C4C1] after:content-['']"
//         : "text-gray-300 hover:text-white"
//     }`;

//   return (
//     <header className="fixed top-0 left-0 w-full z-[9999]">
//       <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

//         {/* LOGO */}
//             <Link to="/" className="flex items-center gap-3 group">

//   {/* LOGO IMAGE CARD */}
//   <motion.div
//     initial={{ scale: 0.85, opacity: 0 }}
//     animate={{ scale: 1, opacity: 1 }}
//     transition={{ duration: 0.6, ease: "easeOut" }}
//     whileHover={{ scale: 1.08 }}
//     className="
//       relative
//       w-12 h-12
//       rounded-full
//       flex items-center justify-center
//       bg-gradient-to-br
//       from-[#30C4C1]/25
//       via-[#0b0f14]
//       to-black
//       border border-white/10
//       shadow-[0_0_35px_rgba(48,196,193,0.35)]
//       backdrop-blur-xl
//     "
//   >
//     {/* IMAGE */}
//     <motion.img
//       src={logo}
//       alt="SofSecure Logo"
//       className="w-7 h-7 object-contain"
//       animate={{ rotate: [0, 2, -2, 0] }}
//       transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//     />

//     {/* GLOW */}
//     <div className="absolute inset-0 rounded-full bg-[#30C4C1]/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition" />
//   </motion.div>

//   {/* TEXT */}
//   <motion.span
//     initial={{ x: -8, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ delay: 0.2, duration: 0.5 }}
//     className="text-xl font-bold tracking-wide text-white"
//   >
//     Sof<span className="text-[#30C4C1]">Secure</span>
//   </motion.span>

// </Link>


//         {/* DESKTOP NAVBAR */}
//         <div className="hidden lg:flex items-center gap-8 px-8 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
//           <nav className="flex items-center gap-6 text-[15.5px]">

//             <NavLink to="/" end className={navClass}>Home</NavLink>
//             <NavLink to="/about" className={navClass}>About</NavLink>

//             {/* SERVICES */}
//             <div
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >
//               <button
//                 className={`flex items-center gap-1 transition ${
//                   servicesActive ? "text-[#30C4C1]" : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 Services <ChevronDown size={16} />
//               </button>
//               <ServicesMegaMenu open={servicesOpen} />
//             </div>

//             {/* COMPANY */}
//             <div
//               className="relative"
//               onMouseEnter={() => setCompanyOpen(true)}
//               onMouseLeave={() => setCompanyOpen(false)}
//             >
//               <button
//                 className={`flex items-center gap-1 transition ${
//                   companyActive ? "text-[#30C4C1]" : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 Company <ChevronDown size={16} />
//               </button>
//               <CompanyMegaMenu open={companyOpen} />
//             </div>

//             <NavLink to="/careers" className={navClass}>Careers</NavLink>
//             <NavLink to="/contact" className={navClass}>Contact</NavLink>
//           </nav>

//           {/* CTA */}
//           <Link
//             to="/contact"
//             className="px-5 py-2 rounded-full bg-[#30C4C1] text-black font-semibold hover:scale-105 transition"
//           >
//             Contact Us
//           </Link>

//           {/* SEARCH */}
//           <button onClick={() => setSearchOpen(true)} className="text-white">
//             <Search size={18} />
//           </button>
//         </div>

//         {/* MOBILE HAMBURGER */}
//         <button
//           onClick={() => setMobileOpen(true)}
//           className="lg:hidden text-white text-2xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* SEARCH OVERLAY */}
//       <AnimatePresence>
//         {searchOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center px-6"
//           >
//             <motion.div
//               initial={{ y: 40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 40, opacity: 0 }}
//               className="relative w-full max-w-3xl"
//             >
//               <button
//                 onClick={() => setSearchOpen(false)}
//                 className="absolute right-0 -top-14 text-white"
//               >
//                 <X size={28} />
//               </button>

//               <input
//                 autoFocus
//                 placeholder="Search services, audits, compliance..."
//                 className="w-full bg-[#0b0f14] border border-white/15 rounded-2xl px-7 py-6 text-xl text-white focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/50"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* MOBILE DRAWER */}
//       {/* <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//               className="fixed inset-0 bg-black/70 z-[9998]"
//             />

//             <motion.aside
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.35 }}
//               className="fixed top-0 right-0 h-full w-[88%] max-w-sm bg-[#0b0f14] z-[9999] flex flex-col"
//             >
//               <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
//                 <span className="text-xl font-bold text-white">
//                   Sof<span className="text-[#30C4C1]">Secure</span>
//                 </span>
//                 <button onClick={() => setMobileOpen(false)} className="text-white text-2xl">✕</button>
//               </div>

//               <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
//                 <NavLink to="/" end onClick={() => setMobileOpen(false)} className={navClass}>Home</NavLink>
//                 <NavLink to="/about" onClick={() => setMobileOpen(false)} className={navClass}>About</NavLink>
//                 <NavLink to="/careers" onClick={() => setMobileOpen(false)} className={navClass}>Careers</NavLink>
//                 <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={navClass}>Contact</NavLink>
//               </div>
//             </motion.aside>
//           </>
//           //  <NavLink to="/industries" className={navClass}>Industries</NavLink>
//         )}
//       </AnimatePresence> */}
// {/* ================= MOBILE DRAWER ================= */}
// <AnimatePresence>
//   {mobileOpen && (
//     <>
//       {/* BACKDROP */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => setMobileOpen(false)}
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
//       />

//       {/* DRAWER */}
//       <motion.aside
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         className="fixed top-0 right-0 h-full w-[92%] max-w-sm bg-[#0b0f14] z-[9999] flex flex-col"
//       >
//         {/* HEADER */}
//         <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
//           <div className="flex items-center gap-3">
//             <img src={logo} className="w-8 h-8" alt="logo" />
//             <span className="text-lg font-bold text-white">
//               Sof<span className="text-[#30C4C1]">Secure</span>
//             </span>
//           </div>

//           <button onClick={() => setMobileOpen(false)} className="text-white">
//             <X size={22} />
//           </button>
//         </div>

//         {/* SEARCH */}
//         <div className="px-6 pt-5">
//           <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-3">
//             <Search size={18} className="text-gray-400" />
//             <input
//               placeholder="Search services, pages..."
//               className="bg-transparent outline-none text-sm text-white w-full"
//             />
//           </div>
//         </div>

//         {/* NAV */}
//         <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

//           {/* BASIC LINKS */}
//           {[
//             { label: "Home", to: "/" },
//             { label: "About", to: "/about" },
//             { label: "Careers", to: "/careers" },
//             { label: "Contact", to: "/contact" },
//           ].map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               onClick={() => setMobileOpen(false)}
//               className="block text-lg font-medium text-white"
//             >
//               {item.label}
//             </NavLink>
//           ))}

//           {/* SERVICES */}
//           <div className="pt-4 border-t border-white/10">
//             <button
//               onClick={() => setMobileServices(!mobileServices)}
//               className="w-full flex justify-between items-center text-lg font-semibold text-white"
//             >
//               Services
//               <ChevronDown
//                 className={`transition ${mobileServices ? "rotate-180" : ""}`}
//               />
//             </button>

//             <AnimatePresence>
//               {mobileServices && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   className="mt-4 ml-3 space-y-3 text-sm text-gray-400"
//                 >
//                   <NavLink to="/services/it-audit-services" onClick={() => setMobileOpen(false)}>IT Audit Services</NavLink>
//                   <NavLink to="/services/soc-reports" onClick={() => setMobileOpen(false)}>SOC Reports</NavLink>
//                   <NavLink to="/services/sox-compliance" onClick={() => setMobileOpen(false)}>SOX Compliance</NavLink>
//                   <NavLink to="/services/agile-internal-audit" onClick={() => setMobileOpen(false)}>Agile Internal Audit</NavLink>
//                   <NavLink to="/services/cybersecurity-assessment" onClick={() => setMobileOpen(false)}>Cybersecurity</NavLink>
//                   <NavLink to="/services/privacy" onClick={() => setMobileOpen(false)}>Privacy</NavLink>
//                   <NavLink to="/services/regulatory-compliance" onClick={() => setMobileOpen(false)}>Regulatory Compliance</NavLink>
//                   <NavLink to="/services/enterprise-risk-management" onClick={() => setMobileOpen(false)}>Enterprise Risk</NavLink>
//                   <NavLink to="/services/board-audit-governance" onClick={() => setMobileOpen(false)}>Board Governance</NavLink>
//                   <NavLink to="/services/esg-sustainability" onClick={() => setMobileOpen(false)}>ESG & Sustainability</NavLink>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* COMPANY */}
//           <div className="pt-4 border-t border-white/10">
//             <button
//               onClick={() => setMobileCompany(!mobileCompany)}
//               className="w-full flex justify-between items-center text-lg font-semibold text-white"
//             >
//               Company
//               <ChevronDown
//                 className={`transition ${mobileCompany ? "rotate-180" : ""}`}
//               />
//             </button>

//             <AnimatePresence>
//               {mobileCompany && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   className="mt-4 ml-3 space-y-3 text-sm text-gray-400"
//                 >
//                   <NavLink to="/company/leadership-team" onClick={() => setMobileOpen(false)}>Leadership Team</NavLink>
//                   <NavLink to="/company/our-clients" onClick={() => setMobileOpen(false)}>Our Clients</NavLink>
//                   <NavLink to="/industries" onClick={() => setMobileOpen(false)}>Industries</NavLink>
//                   <NavLink to="/support" onClick={() => setMobileOpen(false)}>Support</NavLink>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* CTA */}
//           <Link
//             to="/contact"
//             onClick={() => setMobileOpen(false)}
//             className="block mt-8 text-center bg-[#30C4C1] text-black py-3 rounded-xl font-semibold"
//           >
//             Contact Us
//           </Link>

//         </div>
//       </motion.aside>
//     </>
//   )}
// </AnimatePresence>


//     </header>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import ServicesMegaMenu from "./ServicesMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";

import logo from "/logo/Sofsecure logo.svg";

export default function Navbar() {
  const location = useLocation();

  // DESKTOP STATES
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // MOBILE STATES
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileCompany, setMobileCompany] = useState(false);

  const servicesActive = location.pathname.startsWith("/services");

  const navClass = ({ isActive }) =>
    `relative font-semibold transition ${
      isActive
        ? "text-[#30C4C1]"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
            <img src={logo} className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white">
            Sof<span className="text-[#30C4C1]">Secure</span>
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/15">

          <nav className="flex items-center gap-6 text-[15px]">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 ${servicesActive ? "text-[#30C4C1]" : "text-gray-300"}`}>
                Services <ChevronDown size={16} />
              </button>
              <ServicesMegaMenu open={servicesOpen} />
            </div>

            {/* COMPANY */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300">
                Company <ChevronDown size={16} />
              </button>
              <CompanyMegaMenu open={companyOpen} />
            </div>

            <NavLink to="/careers" className={navClass}>Careers</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-[#30C4C1] text-black font-semibold"
          >
            Contact Us
          </Link>

          <button onClick={() => setSearchOpen(true)} className="text-white">
            <Search size={18} />
          </button>
        </div>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ================= SEARCH OVERLAY (DESKTOP + MOBILE) ================= */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-0 -top-14 text-white"
              >
                <X size={28} />
              </button>

              <input
                autoFocus
                placeholder="Search services, pages..."
                className="w-full bg-[#0b0f14] border border-white/15 rounded-2xl px-7 py-6 text-xl text-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-[9998]"
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-[92%] max-w-sm bg-[#0b0f14] z-[9999] flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="text-lg font-bold text-white">
                  Sof<span className="text-[#30C4C1]">Secure</span>
                </span>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={22} className="text-white" />
                </button>
              </div>

              {/* SEARCH */}
              <div className="px-6 pt-5">
                <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-3">
                  <Search size={18} className="text-gray-400" />
                  <input
                    placeholder="Search..."
                    className="bg-transparent outline-none text-sm text-white w-full"
                  />
                </div>
              </div>

              {/* NAV LINKS */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

                {["Home", "About", "Careers", "Contact"].map((label) => (
                  <NavLink
                    key={label}
                    to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-medium text-white"
                  >
                    {label}
                  </NavLink>
                ))}

                {/* SERVICES */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setMobileServices(!mobileServices)}
                    className="w-full flex justify-between text-lg font-semibold text-white"
                  >
                    Services
                    <ChevronDown className={mobileServices ? "rotate-180" : ""} />
                  </button>

                  {mobileServices && (
                    <ul className="mt-4 ml-4 space-y-2">
                      {[
                        ["IT Audit Services", "/services/it-audit-services"],
                        ["SOC Reports", "/services/soc-reports"],
                        ["SOX Compliance", "/services/sox-compliance"],
                        ["Agile Internal Audit", "/services/agile-internal-audit"],
                        ["Cybersecurity", "/services/cybersecurity-assessment"],
                        ["Privacy", "/services/privacy"],
                        ["Regulatory Compliance", "/services/regulatory-compliance"],
                        ["Enterprise Risk", "/services/enterprise-risk-management"],
                        ["Board Governance", "/services/board-audit-governance"],
                        ["ESG & Sustainability", "/services/esg-sustainability"],
                      ].map(([label, link]) => (
                        <NavLink
                          key={label}
                          to={link}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-4 py-2 border-l border-white/10 text-sm text-gray-300 hover:text-[#30C4C1]"
                        >
                          {label}
                        </NavLink>
                      ))}
                    </ul>
                  )}
                </div>

                {/* COMPANY */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setMobileCompany(!mobileCompany)}
                    className="w-full flex justify-between text-lg font-semibold text-white"
                  >
                    Company
                    <ChevronDown className={mobileCompany ? "rotate-180" : ""} />
                  </button>

                  {mobileCompany && (
                    <ul className="mt-4 ml-4 space-y-2">
                      {[
                        ["Leadership Team", "/company/leadership-team"],
                        ["Our Clients", "/company/our-clients"],
                        ["Industries", "/industries"],
                        ["Support", "/support"],
                      ].map(([label, link]) => (
                        <NavLink
                          key={label}
                          to={link}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-4 py-2 border-l border-white/10 text-sm text-gray-300 hover:text-[#30C4C1]"
                        >
                          {label}
                        </NavLink>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-8 text-center bg-[#30C4C1] text-black py-3 rounded-xl font-semibold"
                >
                  Contact Us
                </Link>

              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
