import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import services from "../../data/services";

const ServicesList = () => (
  <section className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-6">
      <SectionTitle subtitle="What we do" title="A focused set of digital capabilities" description="Choose the capability you need today. We can combine them into one tailored engagement when your project requires it." />
      <div className="space-y-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article key={service.title} whileHover={{ y: -3 }} className="group grid gap-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl md:grid-cols-[80px_1fr_auto] md:items-start md:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-2xl text-blue-300"><Icon /></div>
              <div>
                <div className="flex flex-wrap items-center gap-3"><span className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">0{index + 1}</span><h2 className="text-2xl font-black text-slate-950">{service.title}</h2></div>
                <p className="mt-3 max-w-3xl leading-7 text-slate-600">{service.description}</p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.features.map(feature => <span key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-700"><FiCheck className="text-blue-600" />{feature}</span>)}
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 self-end text-sm font-bold text-slate-950 transition group-hover:text-blue-600">Discuss this service <FiArrowUpRight /></Link>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);
export default ServicesList;
