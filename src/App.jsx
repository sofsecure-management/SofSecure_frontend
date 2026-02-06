import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Componants/ScrollToTop";


// Pages
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

// Services
import AgileInternalAudit from "./pages/services/AgileInternalAudit";
import ITAuditServices from "./pages/services/ITAuditServices";
import SOCReports from "./pages/services/SOCReports";
import SOXCompliance from "./pages/services/SOXCompliance";
import CybersecurityAssessment from "./pages/services/CybersecurityAssessment";
import Privacy from "./pages/services/Privacy";
import RegulatoryCompliance from "./pages/services/RegulatoryCompliance";
import ITGovernanceCompliance from "./pages/services/ITGovernanceCompliance";
import EnterpriseRiskManagement from "./pages/services/EnterpriseRiskManagement";
import BoardAuditGovernance from "./pages/services/BoardAuditGovernance";
import ESGSustainability from "./pages/services/ESGSustainability";

import AboutSofSecure from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import LeadershipTeam from "./pages/LeadershipTeam";
import OurClients from "./pages/OurClients";
import Support from "./pages/Support";


export default function App() {
  return (
   
    <>
      {/*  THIS FIXES FOOTER / SERVICES SCROLL ISSUE */}
      <ScrollToTop />

      <Routes>
        {/* 🔹 LAYOUT ROUTE */}
        <Route element={<MainLayout />}>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<AboutSofSecure />} />

          {/* CAREERS */}
          <Route path="/careers" element={<Careers />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* INDUSTRIES */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/company/leadership-team" element={<LeadershipTeam />} />
          <Route path="/company/our-clients" element={<OurClients />} />
          <Route path="/support" element={<Support />} />

          {/* SERVICES */}
          <Route path="/services/agile-internal-audit" element={<AgileInternalAudit />} />
          <Route path="/services/it-audit-services" element={<ITAuditServices />} />
          <Route path="/services/soc-reports" element={<SOCReports />} />
          <Route path="/services/sox-compliance" element={<SOXCompliance />} />
          <Route path="/services/cybersecurity-assessment" element={<CybersecurityAssessment />} />
          <Route path="/services/privacy" element={<Privacy />} />
          <Route path="/services/regulatory-compliance" element={<RegulatoryCompliance />} />
          <Route path="/services/it-governance-compliance" element={<ITGovernanceCompliance />} />
          <Route path="/services/enterprise-risk-management" element={<EnterpriseRiskManagement />} />
          <Route path="/services/board-audit-governance" element={<BoardAuditGovernance />} />
          <Route path="/services/esg-sustainability" element={<ESGSustainability />} />

        </Route>
      </Routes>
      </>
   
  );
}
