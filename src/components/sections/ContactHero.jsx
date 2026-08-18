import { FiArrowDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import company from "../../data/company";

function ContactHero() {
    return (
        <section className="bg-slate-950 py-24 text-white md:py-28">
            <div className="mx-auto max-w-4xl px-5 text-center lg:px-6">
                <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">Start a conversation</p>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">Let's build something useful.</h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{company.contactMotto}</p>
                <Link to="#project-form" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950">Tell us about your project <FiArrowDown /></Link>
            </div>
        </section>
    );
}

export default ContactHero;
