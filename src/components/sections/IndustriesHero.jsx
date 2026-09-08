import { FiArrowRight, FiBriefcase, FiHeart, FiHome, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";
import company from "../../data/company";
import Button from "../ui/Button";

const focus = [
  [FiHeart, "Healthcare"], [FiBookOpen, "Education"], [FiHome, "Real estate"], [FiBriefcase, "Businesses"],
];

const IndustriesHero = () => (
  <section className="nts-page-hero relative overflow-hidden bg-white text-slate-950 dark:bg-black dark:text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,.24),transparent_34%)]" />
    <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div><p className="text-xs font-bold uppercase tracking-[.25em] text-blue-300">Industries & workflows</p><h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">Technology that fits the way your organization works.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{company.industriesMotto} We learn the context first, then shape the product around the people, processes and outcomes that matter.</p><div className="mt-8"><Link to="/contact"><Button>Tell us about your workflow <FiArrowRight /></Button></Link></div></div>
        <div className="grid grid-cols-2 gap-3">{focus.map(([Icon, label]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[.06] p-5"><Icon className="text-xl text-blue-300" /><p className="mt-8 font-bold">{label}</p></div>)}</div>
      </div>
    </div>
  </section>
);
export default IndustriesHero;
