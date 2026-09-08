import { FiArrowLeft, FiCheckCircle, FiLayers } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import solutions from "../data/solutions";
import SolutionGallery from "../components/ui/SolutionGallery";
import SolutionFeatures from "../components/ui/SolutionFeatures";
import TechnologyStack from "../components/ui/TechnologyStack";
import SolutionCTA from "../components/sections/SolutionCTA";
import SEO from "../components/common/SEO";

function SolutionDetails() {
    const { id } = useParams();
    const solution = solutions.find((item) => item.id === id);

    if (!solution) return <section className="px-5 py-32 text-center"><h1 className="text-4xl font-extrabold">Solution not found</h1><Link className="mt-6 inline-block font-bold text-blue-600" to="/solutions">Back to solutions</Link></section>;

    return <>
        <SEO title={`${solution.title} | NTS Digital Solutions`} description={solution.description} />
        <section className="nts-page-hero bg-white py-24 text-slate-950 dark:bg-black dark:text-white">
            <div className="mx-auto max-w-7xl px-5 lg:px-6">
                <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white"><FiArrowLeft /> All solutions</Link>
                <div className="mt-12 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-brand-gold">{solution.category}</p><h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">{solution.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{solution.description}</p></div>
            </div>
        </section>

        <section className="py-20"><div className="mx-auto max-w-7xl px-5 lg:px-6"><div className="grid gap-6 md:grid-cols-3"><div className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">The challenge</p><p className="mt-3 leading-7 text-slate-600">{solution.challenge}</p></div><div className="rounded-2xl border border-blue-100 bg-blue-50 p-6"><p className="text-xs font-bold uppercase tracking-widest text-blue-500">NTS approach</p><p className="mt-3 leading-7 text-slate-700">{solution.solution}</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 dark:bg-black dark:text-white"><FiLayers className="text-2xl text-brand-gold" /><p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">Built with purpose</p><p className="mt-3 leading-7 text-slate-300">A focused system designed around the users, workflows, and operational needs of its intended environment.</p></div></div></div></section>

        <section className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-6"><div className="mb-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">Product view</p><h2 className="mt-2 text-3xl font-extrabold text-slate-950">Screens & interface</h2></div><SolutionGallery images={solution.images} /></div></section>

        <section className="py-20"><div className="mx-auto max-w-7xl px-5 lg:px-6"><div className="grid gap-12 lg:grid-cols-[1fr_.8fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">Capabilities</p><h2 className="mt-2 text-3xl font-extrabold text-slate-950">Key features</h2><div className="mt-8"><SolutionFeatures features={solution.features} /></div></div><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">Engineering</p><h2 className="mt-2 text-3xl font-extrabold text-slate-950">Technology stack</h2><div className="mt-8"><TechnologyStack technology={solution.technology} /></div><div className="mt-8 space-y-3 text-sm font-semibold text-slate-700">{solution.features.map((feature) => <div key={feature} className="flex gap-3"><FiCheckCircle className="mt-0.5 text-emerald-500" /> {feature}</div>)}</div></div></div></div></section>
        <SolutionCTA />
    </>;
}

export default SolutionDetails;
