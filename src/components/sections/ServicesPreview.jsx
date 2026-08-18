import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import services from "../../data/services";

function ServicesPreview() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-6">
                <SectionTitle subtitle="What we do" title="Digital capabilities built around your goals" description="From a polished public website to a complete internal management system, NTS combines strategy, design, development, and support in one workflow." />
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.title} className={`group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl ${index === 0 ? "lg:col-span-2" : ""}`}>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600"><Icon /></div>
                                    <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                                </div>
                                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">{service.title}</h3>
                                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {service.features.slice(0, 3).map((feature) => <span key={feature} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{feature}</span>)}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-9 text-center">
                    <Link to="/services" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">View all services <FiArrowUpRight /></Link>
                </div>
            </div>
        </section>
    );
}

export default ServicesPreview;
