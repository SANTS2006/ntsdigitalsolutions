import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import company from "../../data/company";
import Button from "../ui/Button";

const ServiceHero = () => (
  <section className="nts-page-hero relative overflow-hidden bg-white text-slate-950 dark:bg-black dark:text-white">
    <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-28">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-300">Services · Strategy · Engineering</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">Digital capabilities that move your organization forward.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{company.serviceMotto} From the first idea to deployment and support, we focus on practical outcomes—not technology for its own sake.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact"><Button>Discuss your project <FiArrowRight /></Button></Link>
          <Link to="/solutions" className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 text-sm font-bold hover:bg-white/10">See what we've built</Link>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
        {["Web & software", "Mobile experiences", "Product design", "Maintenance & support"].map(item => <span key={item} className="flex items-center gap-2"><FiCheckCircle className="text-blue-400" />{item}</span>)}
      </div>
    </div>
  </section>
);
export default ServiceHero;
