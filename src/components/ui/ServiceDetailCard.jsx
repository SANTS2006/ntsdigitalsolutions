import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ServiceDetailCard = ({ title, description, features, icon: Icon }) => (
  <motion.article whileHover={{ y: -6 }} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl text-brand-gold dark:bg-black"><Icon /></div>
    <h3 className="mt-6 text-2xl font-black text-slate-950">{title}</h3>
    <p className="mt-3 leading-7 text-slate-600">{description}</p>
    <ul className="mt-6 grid gap-3">{features.map(feature => <li key={feature} className="flex items-start gap-3 text-sm text-slate-700"><FaCheckCircle className="mt-1 shrink-0 text-blue-600" />{feature}</li>)}</ul>
  </motion.article>
);
export default ServiceDetailCard;
