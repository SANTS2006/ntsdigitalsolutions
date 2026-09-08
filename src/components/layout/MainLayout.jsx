import ScrollAnimations from '../common/ScrollAnimations';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from '../ui/FloatingContact';
import CookieNotice from '../common/CookieNotice';

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1" className="flex-grow outline-none">
        <ScrollAnimations />
        {children}
      </main>
      <Footer />
      <FloatingContact />
      <CookieNotice />
    </div>
  );
}
