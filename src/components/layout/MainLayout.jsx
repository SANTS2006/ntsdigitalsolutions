import Navbar from './Navbar'; import Footer from './Footer'; import FloatingContact from '../ui/FloatingContact'; import CookieNotice from '../common/CookieNotice';
export default function MainLayout({children}){return <div className="flex min-h-screen flex-col"><Navbar/><main className="flex-grow">{children}</main><Footer/><FloatingContact/><CookieNotice/></div>}
