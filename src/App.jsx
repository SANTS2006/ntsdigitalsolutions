import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './components/layout/MainLayout';
import PageLoader from './components/common/PageLoader';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const SolutionDetails = lazy(() => import('./pages/SolutionDetails'));
const Industries = lazy(() => import('./pages/Industries'));
const Contact = lazy(() => import('./pages/Contact'));
const StartProject = lazy(() => import('./pages/StartProject'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetails = lazy(() => import('./pages/InsightDetails'));
const Resources = lazy(() => import('./pages/Resources'));
const Legal = lazy(() => import('./pages/Legal'));
const Security = lazy(() => import('./pages/Security'));
const Support = lazy(() => import('./pages/Support'));
const Careers = lazy(() => import('./pages/Careers'));
const ClientPortal = lazy(() => import('./pages/ClientPortal'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:id" element={<SolutionDetails />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/start-a-project" element={<StartProject />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetails />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/security" element={<Security />} />
            <Route path="/support" element={<Support />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}
