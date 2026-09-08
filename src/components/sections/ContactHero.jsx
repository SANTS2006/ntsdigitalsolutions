import { FiArrowDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import company from "../../data/company";

function ContactHero() {
    return (
        <section className="nts-page-hero text-slate-950 dark:text-white">
            <div className="mx-auto max-w-4xl px-5 text-center lg:px-6">
                <p className="text-xs font-bold uppercase tracking-[.22em] text-brand-cyan">Start a conversation</p>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">Let's build something useful.</h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">{company.contactMotto}</p>
                <Link
                    to="#project-form"
                    className="brand-gradient mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white shadow-lg brand-shadow transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
                >
                    Tell us about your project <FiArrowDown aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}

export default ContactHero;
