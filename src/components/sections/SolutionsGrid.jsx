import { useMemo, useState } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import solutions from "../../data/solutions";

function SolutionsGrid() {
  const categories = ["All", ...new Set(solutions.map(s => s.category))];
  const [active, setActive] = useState("All");
  const visible = useMemo(() => active === "All" ? solutions : solutions.filter(s => s.category === active), [active]);
  return (
    <section id="solution-library" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionTitle subtitle="Solution library" title="From workflow problems to usable software" description="These selected systems demonstrate how NTS approaches different operational needs. They are starting points for understanding what we can build—not fixed templates." />
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => <button key={category} onClick={() => setActive(category)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${active === category ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"}`}>{category}</button>)}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {visible.map((solution, index) => (
            <motion.article key={solution.id} layout initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden bg-slate-900"><img src={solution.images[0]} alt={`${solution.title} interface`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">{solution.category}</span></div>
              <div className="p-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">Selected build · 0{index + 1}</p><h2 className="mt-3 text-2xl font-black text-slate-950">{solution.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{solution.description}</p><div className="mt-5 space-y-2">{solution.features.slice(0, 3).map(feature => <p key={feature} className="flex items-center gap-2 text-sm text-slate-700"><FiCheck className="text-blue-600" />{feature}</p>)}</div><Link to={`/solutions/${solution.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950 group-hover:text-blue-600">View case study <FiArrowUpRight /></Link></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SolutionsGrid;
