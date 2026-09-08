import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiZap, FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";
import company from "../../data/company";
import Button from "../ui/Button";

const pillars = [
  { icon: FiTarget, title: "Purpose-built", text: "Technology shaped around real operational needs." },
  { icon: FiShield, title: "Security-minded", text: "Reliable systems designed with responsible engineering practices." },
  { icon: FiZap, title: "Built for growth", text: "Digital foundations that can evolve with your organization." },
];

const AboutHero = () => (
  <section className="nts-page-hero relative overflow-hidden bg-white text-slate-950 dark:bg-black dark:text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,.22),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,.12),transparent_28%)]" />
    <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-6 lg:py-28">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
        <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-300">About NTS Digital Solutions</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Technology with a purpose. <span className="text-blue-400">Built around people.</span></h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{company.motto} We partner with businesses, institutions and organizations to turn operational challenges into useful digital experiences.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/services"><Button>Explore our capabilities <FiArrowRight /></Button></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Start a conversation</Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .1 }} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/[.06] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300"><Icon /></div>
            <h2 className="mt-4 font-bold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
export default AboutHero;
