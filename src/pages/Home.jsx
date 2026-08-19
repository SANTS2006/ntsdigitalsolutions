import Hero from '../components/sections/Hero';
import StatsTrust from '../components/sections/StatsTrust';
import ServicesPreview from '../components/sections/ServicesPreview';
import SolutionsPreview from '../components/sections/SolutionsPreview';
import IndustriesPreview from '../components/sections/IndustriesPreview';
import WhyChoose from '../components/sections/WhyChoose';
import DevelopmentProcess from '../components/sections/DevelopmentProcess';
import SecuritySection from '../components/sections/SecuritySection';
import InsightsPreview from '../components/sections/InsightsPreview';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import Founder from '../components/sections/Founder';
import CTA from '../components/sections/CTA';
import SEO from '../components/common/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="NTS Digital Solutions | Custom Software & Digital Innovation"
        description="NTS Digital Solutions designs and develops modern websites, custom software, mobile applications and digital systems for businesses and organizations."
      />

      <Hero />

      <div className="content-auto">
        <StatsTrust />
        <ServicesPreview />
        <SolutionsPreview />
        <IndustriesPreview />
        <WhyChoose />
        <DevelopmentProcess compact />
        <SecuritySection />
        <Founder />
        <Testimonials />
        <InsightsPreview />
        <CTA />
        <Newsletter />
      </div>
    </>
  );
}
