import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* 🔗 SERVICE NAME → ROUTE MAP */
const services = [
  { label: "IT Audit Services", path: "/services/it-audit-services" },
  { label: "SOC Reports", path: "/services/soc-reports" },
  { label: "Cybersecurity Assessment", path: "/services/cybersecurity-assessment" },
  { label: "IT Governance & Compliance", path: "/services/it-governance-compliance" },
  { label: "Agile Internal Audit", path: "/services/agile-internal-audit" },
  { label: "Board & Audit Committee Governance", path: "/services/board-audit-governance" },
  { label: "Enterprise Risk Management", path: "/services/enterprise-risk-management" },
  { label: "ESG & Sustainability", path: "/services/esg-sustainability" },
  { label: "Privacy", path: "/services/privacy" },
  { label: "Regulatory Compliance", path: "/services/regulatory-compliance" },
  { label: "SOX Compliance", path: "/services/sox-compliance" },
];

export default function ServicesMarquee() {
  return (
    <div
      className="
        sticky top-[80px] z-40 -mb-14
        bg-[#1f252d]
        border-t border-white/5
        border-b border-white/5
        py-6
        h-[96px]
        overflow-hidden
      "
    >
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...services, ...services].map((service, i) => (
          <Link
            key={i}
            to={service.path}
            className="
              px-8 py-3
              rounded-full
              bg-white/5
              border border-white/10
              backdrop-blur-md
              text-sm font-medium
              text-gray-200
              hover:bg-teal-500/15
              hover:border-teal-400/40
              hover:text-white
              transition
              whitespace-nowrap
            "
          >
            {service.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
