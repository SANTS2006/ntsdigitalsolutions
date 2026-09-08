import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import solutions from "../../data/solutions";

function SolutionsPreview() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-6">
                <SectionTitle subtitle="Featured solutions" title="Software designed to solve real operational problems" description="Explore selected systems developed by NTS across healthcare, education, property management, and business operations." />
                <div className="grid gap-6 lg:grid-cols-3">
                    {solutions.map((solution, index) => (
                        <article key={solution.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                                <img src={solution.images[0]} alt={`${solution.title} interface`} loading="lazy" decoding="async" width="1280" height="800" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/75 px-3 py-1 text-xs font-bold text-white">0{index + 1} · {solution.category}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-950">{solution.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{solution.description}</p>
                                <Link to={`/solutions/${solution.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">View case study <FiArrowUpRight /></Link>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-10 text-center"><Link to="/solutions" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700">Explore all solutions <FiArrowUpRight /></Link></div>
            </div>
        </section>
    );
}

export default SolutionsPreview;
