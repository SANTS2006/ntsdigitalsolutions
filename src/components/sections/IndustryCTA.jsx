import { FiArrowRight, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

function IndustryCTA() {
  return (
    <section className="px-5 py-20 lg:px-6 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[rgba(8,199,245,.16)] bg-gradient-to-br from-[#fffaf5] via-[#f7efe6] to-[#eee3d7] px-7 py-12 shadow-xl shadow-[rgba(4,28,105,.06)] dark:border-white/10 dark:from-zinc-950 dark:via-[#17110d] dark:to-black md:px-12 md:py-14 lg:px-14">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[rgba(8,199,245,.10)] blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[rgba(4,28,105,.10)] blur-3xl" aria-hidden="true" />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan">
            <FiMessageSquare aria-hidden="true" />
            Have an industry challenge?
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-5xl">
            Let’s build a digital solution for your organization.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
            Tell us about the challenge you’re facing, and we’ll help you identify a practical technology approach for your industry.
          </p>

          <Link
            to="/start-a-project"
            className="brand-gradient mt-7 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white shadow-lg brand-shadow transition hover:-translate-y-1"
          >
            Start a Project <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IndustryCTA;
