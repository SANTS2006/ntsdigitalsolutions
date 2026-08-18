import { FiCheck } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";
import advantages from "../../data/advantages";

function WhyChoose() {
    return (
        <section className="bg-slate-950 py-24 text-white">
            <div className="mx-auto max-w-7xl px-5 lg:px-6">
                <SectionTitle subtitle="Why NTS" title="A practical technology partner, not just a vendor" description="We care about the business problem behind the software. That means clearer communication, thoughtful architecture, and solutions people can actually use." />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {advantages.map((item, index) => {
                        const Icon = item.icon;
                        return <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[.04] p-6 transition hover:bg-white/[.07]">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300"><Icon /></div>
                            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">0{index + 1}</p>
                            <h3 className="mt-2 font-bold">{item.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                        </div>;
                    })}
                </div>
                <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:grid-cols-3">
                    {["Clear communication", "Purpose-built solutions", "Support beyond launch"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200"><FiCheck className="text-emerald-400" /> {item}</div>)}
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
