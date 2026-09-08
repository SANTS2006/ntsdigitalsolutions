import { FiMail, FiPhone } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";

function ContactCTA() {
  return (
    <section className="px-5 py-20 lg:px-6 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[rgba(8,199,245,.16)] bg-gradient-to-br from-[#fffaf5] via-[#f7efe6] to-[#eee3d7] px-7 py-12 shadow-xl shadow-[rgba(4,28,105,.06)] dark:border-white/10 dark:from-zinc-950 dark:via-[#17110d] dark:to-black md:px-12 md:py-14 lg:px-14">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[rgba(8,199,245,.10)] blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[rgba(4,28,105,.10)] blur-3xl" aria-hidden="true" />

        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan">
            <FiMessageSquare aria-hidden="true" />
            Have a business challenge?
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-5xl">
            Let’s turn your idea into a useful digital solution.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
            Tell us what you’re trying to improve, and we’ll help you identify a practical technology approach. We’re ready to help.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@ntsdigitalsolutions.com"
              className="brand-gradient inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white shadow-lg brand-shadow transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
            >
              <FiMail aria-hidden="true" />
              Email Us
            </a>

            <a
              href="tel:+23231034604"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 font-bold text-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-400/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400/40 dark:hover:bg-white/10"
            >
              <FiPhone aria-hidden="true" />
              +232 31 034 604
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
