


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, ChevronDown, X } from "lucide-react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { Plus, Minus } from "lucide-react";
// import ContactModal from "../Componants/ContactModal";



// import ServicesMegaMenu from "./ServicesMegaMenu";
// import CompanyMegaMenu from "./CompanyMegaMenu";

// import logo from "/logo/Sofsecure logo.svg";

// export default function Navbar() {
//   const location = useLocation();

//   // DESKTOP STATES
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [companyOpen, setCompanyOpen] = useState(false);
//   // const [searchOpen, setSearchOpen] = useState(false);
//   const [contactOpen, setContactOpen] = useState(false);

//   // MOBILE STATES
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileServices, setMobileServices] = useState(false);
//   const [mobileCompany, setMobileCompany] = useState(false);

//   const servicesActive = location.pathname.startsWith("/services");

//   /* ✅ ADD: close mega menus helper */
//   const closeMegaMenus = () => {
//     setServicesOpen(false);
//     setCompanyOpen(false);
//   };

//   /* ✅ ADD: auto close on route change */
//   useEffect(() => {
//     setServicesOpen(false);
//     setCompanyOpen(false);
//   }, [location.pathname]);

//   const navClass = ({ isActive }) =>
//     `relative font-semibold transition ${
//       isActive ? "text-[#30C4C1]" : "text-gray-300 hover:text-white"
//     }`;

//   return (
//     <header className="fixed top-0 left-0 w-full z-[9999]">
//       {/* ================= TOP BAR ================= */}
//       <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

//         {/* LOGO */}
//        {/* LOGO */}
       
// <Link
//   to="/"
//   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//   className="flex items-center gap-3"
// >
//   <div className="w-11 h-11 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
//     <img
//       src={logo}
//       className="w-6 h-6"
//       alt="SofSecure IT Audit and Cybersecurity Consulting"
//     />
//   </div>
//   <span className="text-xl font-bold text-white">
//     Sof<span className="text-[#30C4C1]">Secure</span>.
//   </span>
  
// </Link>


//         {/* ================= DESKTOP NAV ================= */}
//         <div className="hidden lg:flex items-center gap-8 px-8 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/15">

//           <nav className="flex items-center gap-6 text-[15px]">
//             <NavLink
//               to="/"
//               end
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className={navClass}
//             >
//               Home
//             </NavLink>

//             <NavLink to="/about" className={navClass}>Who we are</NavLink>

//             {/* SERVICES */}
//             <div
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >
//               <button
//                 className={`flex items-center gap-1 ${
//                   servicesActive ? "text-[#30C4C1]" : "text-gray-300"
//                 }`}
//               >
//                 Services <ChevronDown size={16} />
//               </button>

//               {/* ✅ UPDATED */}
//               <ServicesMegaMenu
//                 open={servicesOpen}
//                 onItemClick={closeMegaMenus}
//               />
//             </div>

//             {/* COMPANY */}
//             <div
//               className="relative"
//               onMouseEnter={() => setCompanyOpen(true)}
//               onMouseLeave={() => setCompanyOpen(false)}
//             >
//               <button className="flex items-center gap-1 text-gray-300">
//                 Company <ChevronDown size={16} />
//               </button>

//               {/* ✅ UPDATED */}
//               <CompanyMegaMenu
//                 open={companyOpen}
//                 onItemClick={closeMegaMenus}
//               />
//             </div>

//             <NavLink to="/careers" className={navClass}>Careers</NavLink>
//           </nav>

//           {/* <Link
//             to="/contact"
//             className="px-5 py-2 rounded-full bg-[#30C4C1] text-black font-semibold"
//           >
//             Contact Us
//           </Link> */}
//           <button
//   onClick={() => setContactOpen(true)}
//   className="px-5 py-2 rounded-full bg-[#30C4C1] text-black font-semibold"
// >
//   Contact Us
// </button>

//         <button
//   onClick={() => setSearchOpen(true)}
//   className="text-white"
//   aria-label="Open search"
// >
//   <Search size={18} aria-hidden="true" />
// </button>
            
//         {/* ================= MOBILE HAMBURGER ================= */}
//         <button
//           onClick={() => setMobileOpen(true)}
//           className="lg:hidden text-white text-2xl"
//         >
//           ☰
//         </button>
//       </div>
      

//       {/* ================= MOBILE DRAWER ================= */}
// <AnimatePresence>
//   {mobileOpen && (
//     <>
//       <motion.div
//         className="fixed inset-0 bg-black/70 z-[9998]"
//         onClick={() => setMobileOpen(false)}
//       />

//       <motion.aside
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.35 }}
//         className="fixed top-0 right-0 h-full w-[92%] max-w-sm bg-[#0b0f14] z-[9999] flex flex-col"
//       >
//         {/* HEADER */}
//         <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
//           <span className="text-lg font-bold text-white">
//             Sof<span className="text-[#30C4C1]">Secure</span>
//           </span>
//           <button onClick={() => setMobileOpen(false)}>
//             <X size={22} className="text-white" />
//           </button>
//         </div>

//        {/* MENU */}
// <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-white">

//   {/* HOME */}
//   <NavLink to="/" onClick={() => setMobileOpen(false)} className="block text-lg font-medium">
//     Home
//   </NavLink>

//   {/* WHO WE ARE */}
//   <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block text-lg font-medium">
//     Who we are
//   </NavLink>

//   {/* ================= SERVICES ================= */}
//   <div>
//     <button
//       onClick={() => setMobileServices(!mobileServices)}
//       className="w-full flex items-center justify-between text-lg font-medium"
//     >
//       Services
//       {mobileServices ? <Minus size={18} /> : <Plus size={18} />}
//     </button>

//     {mobileServices && (
//       <div className="mt-4 space-y-5 pl-4 text-gray-300 text-base">

//         <div>
//           <p className="text-sm font-semibold text-[#30C4C1] mb-2">
//             Audit & Assurance
//           </p>
//           <ul className="space-y-2">
//             <li><Link to="/services/it-audit-services" onClick={() => setMobileOpen(false)}>IT Audit Services</Link></li>
//             <li><Link to="/services/soc-reports" onClick={() => setMobileOpen(false)}>SOC Reports</Link></li>
//             <li><Link to="/services/sox-compliance" onClick={() => setMobileOpen(false)}>SOX Compliance</Link></li>
//             <li><Link to="/services/agile-internal-audit" onClick={() => setMobileOpen(false)}>Agile Internal Audit</Link></li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-sm font-semibold text-[#30C4C1] mb-2">
//             Cybersecurity & Privacy
//           </p>
//           <ul className="space-y-2">
//             <li><Link to="/services/cybersecurity-assessment" onClick={() => setMobileOpen(false)}>Cybersecurity Assessment</Link></li>
//             <li><Link to="/services/privacy" onClick={() => setMobileOpen(false)}>Privacy</Link></li>
//             <li><Link to="/services/regulatory-compliance" onClick={() => setMobileOpen(false)}>Regulatory Compliance</Link></li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-sm font-semibold text-[#30C4C1] mb-2">
//             Governance & Risk
//           </p>
//           <ul className="space-y-2">
//             <li><Link to="/services/it-governance-compliance" onClick={() => setMobileOpen(false)}>IT Governance & Compliance</Link></li>
//             <li><Link to="/services/enterprise-risk-management" onClick={() => setMobileOpen(false)}>Enterprise Risk Management</Link></li>
//             <li><Link to="/services/board-audit-governance" onClick={() => setMobileOpen(false)}>Board & Audit Committee Governance</Link></li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-sm font-semibold text-[#30C4C1] mb-2">
//             Strategy & Sustainability
//           </p>
//           <ul className="space-y-2">
//             <li><Link to="/services/esg-sustainability" onClick={() => setMobileOpen(false)}>ESG & Sustainability</Link></li>
//           </ul>
//         </div>

//       </div>
//     )}
//   </div>

//   {/* ================= COMPANY ================= */}
//   <div>
//     <button
//       onClick={() => setMobileCompany(!mobileCompany)}
//       className="w-full flex items-center justify-between text-lg font-medium"
//     >
//       Company
//       {mobileCompany ? <Minus size={18} /> : <Plus size={18} />}
//     </button>

//     {mobileCompany && (
//       <ul className="mt-4 space-y-3 pl-4 text-gray-300 text-base">
//         <li><Link to="/company/leadership-team" onClick={() => setMobileOpen(false)}>Leadership Team</Link></li>
//         <li><Link to="/company/our-clients" onClick={() => setMobileOpen(false)}>Our Clients</Link></li>
//         <li><Link to="/industries" onClick={() => setMobileOpen(false)}>Industries</Link></li>
//         <li><Link to="/support" onClick={() => setMobileOpen(false)}>Support</Link></li>
//       </ul>
//     )}
//   </div>

//   {/* CAREERS */}
//   <NavLink to="/careers" onClick={() => setMobileOpen(false)} className="block text-lg font-medium">
//     Careers
//   </NavLink>

//   {/* CONTACT */}
//   <button
//   onClick={() => {
//     setMobileOpen(false);
//     setContactOpen(true);
//   }}
//   className="mt-8 w-full text-center bg-[#30C4C1] text-black font-semibold py-3 rounded-full"
// >
//   Contact Us
// </button>
// </div>

//       </motion.aside>
//     </>
//   )}
// </AnimatePresence>
// <ContactModal
//   open={contactOpen}
//   onClose={() => setContactOpen(false)}
// />
    
//     </header>
//   );
// }


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import ContactModal from "../Componants/ContactModal";

import ServicesMegaMenu from "./ServicesMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";

import logo from "/logo/Sofsecure logo.svg";

export default function Navbar() {
  const location = useLocation();

  // DESKTOP STATES
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // ✅ ADDED THIS LINE
  const [contactOpen, setContactOpen] = useState(false);

  // MOBILE STATES
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileCompany, setMobileCompany] = useState(false);

  const servicesActive = location.pathname.startsWith("/services");

  /* ✅ ADD: close mega menus helper */
  const closeMegaMenus = () => {
    setServicesOpen(false);
    setCompanyOpen(false);
  };

  /* ✅ ADD: auto close on route change */
  useEffect(() => {
    setServicesOpen(false);
    setCompanyOpen(false);
  }, [location.pathname]);

  const navClass = ({ isActive }) =>
    `relative font-semibold transition ${
      isActive ? "text-[#30C4C1]" : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
  {/* LOGO */}
  <Link
    to="/"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="flex items-center gap-3"
  >
    {/* Logo Icon */}
    <div className="w-11 h-11 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
      <img
        src={logo}
        alt="SofSecure"
        className="w-10 h-10"
      />
    </div>

    {/* Brand Text */}
    <div className="flex flex-col justify-center leading-tight">
      <span className="text-[30px] font-semibold text-white tracking-tight">
        Sof<span className="text-[#30C4C1]">Secure</span>.
      </span>
    <span className="mt-[1px] text-[10px] font-semibold tracking-wide text-white">
  Be secure with SofSecure.
</span>
    </div>
  </Link>


   

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/15">
          <nav className="flex items-center gap-6 text-[15px]">
            <NavLink
              to="/"
              end
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              Who we are
            </NavLink>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 ${
                  servicesActive ? "text-[#30C4C1]" : "text-gray-300"
                }`}
              >
                Services <ChevronDown size={16} />
              </button>

              {/* ✅ UPDATED */}
              <ServicesMegaMenu
                open={servicesOpen}
                onItemClick={closeMegaMenus}
              />
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

              {/* ✅ UPDATED */}
              <CompanyMegaMenu open={companyOpen} onItemClick={closeMegaMenus} />
            </div>

            <NavLink to="/careers" className={navClass}>
              Careers
            </NavLink>
          </nav>

          {/* SEARCH BUTTON */}
          <button
            onClick={() => setSearchOpen(true)}
            className="text-white"
            aria-label="Open search"
          >
            <Search size={18} aria-hidden="true" />
          </button>

          {/* CONTACT BUTTON */}
          <button
            onClick={() => setContactOpen(true)}
            className="px-5 py-2 rounded-full bg-[#30C4C1] text-black font-semibold"
          >
            Contact Us
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

              {/* MENU */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-white">
                {/* HOME */}
                <NavLink
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium"
                >
                  Home
                </NavLink>

                {/* WHO WE ARE */}
                <NavLink
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium"
                >
                  Who we are
                </NavLink>

                {/* ================= SERVICES ================= */}
                <div>
                  <button
                    onClick={() => setMobileServices(!mobileServices)}
                    className="w-full flex items-center justify-between text-lg font-medium"
                  >
                    Services
                    {mobileServices ? <Minus size={18} /> : <Plus size={18} />}
                  </button>

                  {mobileServices && (
                    <div className="mt-4 space-y-5 pl-4 text-gray-300 text-base">
                      <div>
                        <p className="text-sm font-semibold text-[#30C4C1] mb-2">
                          Audit & Assurance
                        </p>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/services/it-audit-services"
                              onClick={() => setMobileOpen(false)}
                            >
                              IT Audit Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/soc-reports"
                              onClick={() => setMobileOpen(false)}
                            >
                              SOC Reports
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/sox-compliance"
                              onClick={() => setMobileOpen(false)}
                            >
                              SOX Compliance
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/agile-internal-audit"
                              onClick={() => setMobileOpen(false)}
                            >
                              Agile Internal Audit
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#30C4C1] mb-2">
                          Cybersecurity & Privacy
                        </p>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/services/cybersecurity-assessment"
                              onClick={() => setMobileOpen(false)}
                            >
                              Cybersecurity Assessment
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/privacy"
                              onClick={() => setMobileOpen(false)}
                            >
                              Privacy
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/regulatory-compliance"
                              onClick={() => setMobileOpen(false)}
                            >
                              Regulatory Compliance
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#30C4C1] mb-2">
                          Governance & Risk
                        </p>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/services/it-governance-compliance"
                              onClick={() => setMobileOpen(false)}
                            >
                              IT Governance & Compliance
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/enterprise-risk-management"
                              onClick={() => setMobileOpen(false)}
                            >
                              Enterprise Risk Management
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/board-audit-governance"
                              onClick={() => setMobileOpen(false)}
                            >
                              Board & Audit Committee Governance
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#30C4C1] mb-2">
                          Strategy & Sustainability
                        </p>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/services/esg-sustainability"
                              onClick={() => setMobileOpen(false)}
                            >
                              ESG & Sustainability
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* ================= COMPANY ================= */}
                <div>
                  <button
                    onClick={() => setMobileCompany(!mobileCompany)}
                    className="w-full flex items-center justify-between text-lg font-medium"
                  >
                    Company
                    {mobileCompany ? <Minus size={18} /> : <Plus size={18} />}
                  </button>

                  {mobileCompany && (
                    <ul className="mt-4 space-y-3 pl-4 text-gray-300 text-base">
                      <li>
                        <Link
                          to="/company/leadership-team"
                          onClick={() => setMobileOpen(false)}
                        >
                          Leadership Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/company/our-clients"
                          onClick={() => setMobileOpen(false)}
                        >
                          Our Clients
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/industries"
                          onClick={() => setMobileOpen(false)}
                        >
                          Industries
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/support"
                          onClick={() => setMobileOpen(false)}
                        >
                          Support
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* CAREERS */}
                <NavLink
                  to="/careers"
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium"
                >
                  Careers
                </NavLink>

                {/* CONTACT */}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setContactOpen(true);
                  }}
                  className="mt-8 w-full text-center bg-[#30C4C1] text-black font-semibold py-3 rounded-full"
                >
                  Contact Us
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* CONTACT MODAL */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}