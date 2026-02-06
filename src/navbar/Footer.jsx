

import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f14] text-gray-400 border-t border-white/10 overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#30C4C1]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[140px]" />
      </div>

      {/* ================= MAIN ================= */}
      <div className="relative max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* ================= BRAND + CONTACT ================= */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Sof<span className="text-[#30C4C1]">Secure.</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  SofSecure helps organizations manage risk, strengthen compliance,
                  and build secure digital foundations through trusted advisory
                  and technology-driven solutions.
                </p>
              </div>

              {/* SOCIAL */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
                <div className="flex gap-4">
                  <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
                    <Facebook size={17} />
                  </a>
                  <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
                    <Instagram size={17} />
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-white font-medium">India</p>
                  <p>Unit No. 201–202, 2nd Floor, Tower A, Paras Twin Tower, Sector-54, Gurugram, Haryana 122011</p>
                  <p className="text-gray-300">+91-92201-22201</p>
                </div>

                <div>
                  <p className="text-white font-medium">United Kingdom</p>
                  <p>15 Great Queen Street, London WC2B 5TD</p>
                  <p className="text-gray-300"> +44-7881-859661</p>
                </div>

                <div>
                  <p className="text-white font-medium">United States of America</p>
                  <p>770 Pasquinelli Drive, Suite 424, Westmont, IL 60559</p>
                  <p className="text-gray-300">+91-92201-22201</p>
                </div>

                <p>
                  Email:{" "}
                  <a href="mailto:info@sofsecure.com" className="text-[#30C4C1] hover:underline">
                    info@sofsecure.com
                  </a>
                </p>
              </div>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#30C4C1]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#30C4C1]">About</Link></li>
              <li><Link to="/services" className="hover:text-[#30C4C1]">Services</Link></li>
              <li><Link to="/careers" className="hover:text-[#30C4C1]">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#30C4C1]">Contact</Link></li>
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/company/leadership-team" className="hover:text-[#30C4C1]">Leadership Team</Link></li>
              <li><Link to="/company/our-clients" className="hover:text-[#30C4C1]">Our Clients</Link></li>
              <li><Link to="/industries" className="hover:text-[#30C4C1]">Industries</Link></li>
              <li><Link to="/support" className="hover:text-[#30C4C1]">Support</Link></li>
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Services
            </h4>

            <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm">

              <div>
                <p className="text-gray-300 uppercase text-xs mb-2">Audit & Assurance</p>
                <ul className="space-y-1">
                  <li><Link to="/services/it-audit-services" className="hover:text-[#30C4C1]">IT Audit Services</Link></li>
                  <li><Link to="/services/soc-reports" className="hover:text-[#30C4C1]">SOC Reports</Link></li>
                  <li><Link to="/services/sox-compliance" className="hover:text-[#30C4C1]">SOX Compliance</Link></li>
                  <li><Link to="/services/agile-internal-audit" className="hover:text-[#30C4C1]">Agile Internal Audit</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-xs mb-2">Cybersecurity & Privacy</p>
                <ul className="space-y-1">
                  <li><Link to="/services/cybersecurity-assessment" className="hover:text-[#30C4C1]">Cybersecurity Assessment</Link></li>
                  <li><Link to="/services/privacy" className="hover:text-[#30C4C1]">Privacy</Link></li>
                  <li><Link to="/services/regulatory-compliance" className="hover:text-[#30C4C1]">Regulatory Compliance</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-xs mb-2">Governance & Risk</p>
                <ul className="space-y-1">
                  <li><Link to="/services/it-governance-compliance" className="hover:text-[#30C4C1]">IT Governance</Link></li>
                  <li><Link to="/services/enterprise-risk-management" className="hover:text-[#30C4C1]">Enterprise Risk</Link></li>
                  <li><Link to="/services/board-audit-governance" className="hover:text-[#30C4C1]">Board Governance</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-xs mb-2">Sustainability</p>
                <ul>
                  <li><Link to="/services/esg-sustainability" className="hover:text-[#30C4C1]">ESG & Sustainability</Link></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10 py-6 text-sm">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SofSecure. All Rights Reserved.</p>
         
        </div>
      </div>

    </footer>
  );
}
