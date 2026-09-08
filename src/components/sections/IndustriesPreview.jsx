import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import industries from "../../data/industries";

function IndustriesPreview() {
  return (
    <section className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionTitle subtitle="Where we can help" title="Industry context changes the product" description="A hospital, school, property business and growing company may all need software—but their users, rules and workflows are different. We design with that context in mind." />
        <div className="grid gap-5 md:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <article key={industry.id} className="rounded-3xl border border-slate-200 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 dark:bg-black dark:text-white"><Icon aria-hidden="true" /></div>
                  <span className="text-sm font-black text-slate-300 dark:text-slate-700">0{index + 1}</span>
                </div>
                <h2 className="mt-7 text-2xl font-black text-slate-950 dark:text-white">{industry.title}</h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{industry.description}</p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">{industry.solutions.map(item => <span key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><FiCheck className="text-blue-600 dark:text-cyan-300" aria-hidden="true" />{item}</span>)}</div>
                <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-blue-600 dark:text-white dark:hover:text-cyan-300">Discuss your industry <FiArrowUpRight aria-hidden="true" /></Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default IndustriesPreview;
