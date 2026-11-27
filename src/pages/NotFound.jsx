import { FiArrowLeft, FiArrowUpRight, FiBriefcase, FiHome, FiLayers, FiMail, FiTool } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../components/common/SEO";
import HeroScene from "../components/ui/HeroScene";

const quickLinks = [
    { to: "/solutions", icon: FiLayers, title: "Solutions", text: "Explore the live systems we have built." },
    { to: "/services", icon: FiTool, title: "Services", text: "See how we can help your organization." },
    { to: "/about", icon: FiBriefcase, title: "About us", text: "Learn who we are and how we work." },
    { to: "/contact", icon: FiMail, title: "Contact", text: "Tell us what you were looking for." },
];

function NotFound() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    // React Router records the position in this tab's history; 0 means there is nowhere to go back to.
    const canGoBack = window.history.state?.idx > 0;

    return (
        <>
            <SEO
                title="Page Not Found | NTS Digital Solutions"
                description="The page you are looking for could not be found."
                noIndex
            />

            <section className="nts-page-hero text-slate-950 dark:text-white">
                <HeroScene align="center" />
                <div className="mx-auto max-w-7xl px-5 text-center lg:px-6">
                    <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-600">Error 404</p>
                    <p aria-hidden="true" className="nts-404-code">404</p>
                    <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">This page could not be found.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                        The link may be broken, the page may have moved, or the address may have been typed incorrectly.
                    </p>
                    <p className="mt-3 text-sm text-slate-600">
                        Requested address: <code className="break-all font-semibold">{pathname}</code>
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Link to="/" className="brand-gradient brand-shadow inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5">
                            <FiHome aria-hidden="true" /> Back to home
                        </Link>
                        {canGoBack && (
                            <button type="button" onClick={() => navigate(-1)} className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 font-bold transition hover:-translate-y-0.5">
                                <FiArrowLeft aria-hidden="true" /> Go back
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-6">
                    <h2 className="text-center text-2xl font-extrabold text-slate-950 md:text-3xl">Popular pages</h2>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {quickLinks.map(({ to, icon: Icon, title, text }) => (
                            <Link key={to} to={to} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600"><Icon aria-hidden="true" /></span>
                                <span className="mt-5 flex items-center justify-between font-bold text-slate-950">{title} <FiArrowUpRight aria-hidden="true" className="text-blue-600" /></span>
                                <span className="mt-2 block text-sm leading-6 text-slate-600">{text}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;
