import { FiPhone, FiMail } from "react-icons/fi";

function ContactCTA() {
    return (
        <section className="bg-slate-950 py-20">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 text-white md:flex-row md:items-center md:justify-between lg:px-6">
                <div><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">Prefer direct contact?</p><h2 className="mt-2 text-3xl font-extrabold">We're ready when you are.</h2></div>
                <div className="flex flex-col gap-3 text-sm font-semibold text-slate-300 sm:flex-row"><a href="mailto:hello@ntsdigitalsolutions.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5"><FiMail /> hello@ntsdigitalsolutions.com</a><a href="tel:+23231034604" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5"><FiPhone /> 031034604</a></div>
            </div>
        </section>
    );
}

export default ContactCTA;
