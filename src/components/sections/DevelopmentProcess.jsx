import SectionTitle from "../ui/SectionTitle";
import process from "../../data/process";

function DevelopmentProcess({ compact = false }) {
    return (
        <section className={`${compact ? "py-16" : "py-24"} bg-slate-50`}>
            <div className="mx-auto max-w-7xl px-5 lg:px-6">
                <SectionTitle subtitle="Our process" title="From business challenge to working product" description="A clear delivery process keeps expectations aligned and turns complex ideas into manageable steps." />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {process.map((step, index) => {
                        const Icon = step.icon;
                        return <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon /></div><span className="text-sm font-extrabold text-slate-300">0{index + 1}</span></div>
                            <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                        </div>;
                    })}
                </div>
            </div>
        </section>
    );
}

export default DevelopmentProcess;
