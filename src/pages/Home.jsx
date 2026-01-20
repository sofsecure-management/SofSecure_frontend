import React from 'react'

import Navbar from '../navbar/Navbar'
import HeroSection from '../Componants/Home_componants/HeroSection'
import AboutInsightsSection from '../Componants/Home_componants/AboutInsightsSection'
import WhyChooseUs from '../Componants/Home_componants/WhyChooseUs'
import AuditInsights from '../Componants/Home_componants/AuditInsights'
import EnterpriseServices from '../Componants/Home_componants/Services'
import Footer from '../navbar/Footer'
import ContactFormHome_page from '../Componants/ContactFormHome_page'
import AgileInternalAudit from './services/AgileInternalAudit'
import HomeFAQs from '../Faqs/FAQs'
import ServicesMarquee from '../Componants/Home_componants/ServicesMarquee'


const Home = () => {
    return (
        <div>
           
            <HeroSection></HeroSection>
            <ServicesMarquee></ServicesMarquee>
            <AboutInsightsSection></AboutInsightsSection>
            <WhyChooseUs></WhyChooseUs>
             <AuditInsights></AuditInsights>
             <EnterpriseServices></EnterpriseServices>
              <HomeFAQs></HomeFAQs>
             {/* <ContactFormHome_page></ContactFormHome_page> */}
           
            
            
            
        </div>
    )
}

export default Home
