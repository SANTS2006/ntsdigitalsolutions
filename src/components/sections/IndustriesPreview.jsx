import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import industries from "../../data/industries";

function IndustriesPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionTitle subtitle="Where we can help" title="Industry context changes the product" description="A hospital, school, property business and growing company may all need software—but their users, rules and workflows are different. We design with that context in mind." />
        <div className="grid gap-5 md:grid-cols-2">
          {industries.map((industry, index) => { const Icon = industry.icon; return <motion.article key={industry.id} whileHover={{ y: -5 }} className="rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-xl"><div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon /></div><span className="text-sm font-black text-slate-300">0{index + 1}</span></div><h2 className="mt-7 text-2xl font-black text-slate-950">{industry.title}</h2><p className="mt-3 leading-7 text-slate-600">{industry.description}</p><div className="mt-6 grid gap-2 sm:grid-cols-2">{industry.solutions.map(item => <span key={item} className="flex items-center gap-2 text-sm text-slate-700"><FiCheck className="text-blue-600" />{item}</span>)}</div><Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-blue-600">Discuss your industry <FiArrowUpRight /></Link></motion.article>; })}
        </div>
      </div>
    </section>
  );
}
export default IndustriesPreview;
