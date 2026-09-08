import { FiArrowRight, FiLayers } from "react-icons/fi";
import { Link } from "react-router-dom";
import company from "../../data/company";
import Button from "../ui/Button";

const SolutionsHero = () => (
  <section className="nts-page-hero relative overflow-hidden bg-white text-slate-950 dark:bg-black dark:text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,.24),transparent_32%),radial-gradient(circle_at_90%_70%,rgba(14,165,233,.12),transparent_28%)]" />
    <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-28">
      <div className="max-w-4xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300"><FiLayers className="text-xl" /></div>
        <p className="mt-7 text-xs font-bold uppercase tracking-[.25em] text-blue-300">Built by NTS</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Real systems for real operational challenges.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{company.solutionsMotto} Explore selected systems and see how the problem, workflow, interface and technology come together.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact"><Button>Build a similar solution <FiArrowRight /></Button></Link>
          <a href="#solution-library" className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 text-sm font-bold hover:bg-white/10">Explore the library</a>
        </div>
      </div>
    </div>
  </section>
);
export default SolutionsHero;
