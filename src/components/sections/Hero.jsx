import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCode, FiLayers, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,.28),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,.12),transparent_30%)]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:52px_52px]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-6 lg:py-28">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-blue-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" /> Digital Solutions Company
                    </div>
                    <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                        Build smarter. <span className="text-blue-400">Operate better.</span> Grow digitally.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        NTS Digital Solutions designs and develops modern websites, custom software, mobile applications, and digital systems built around the way your organization actually works.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">
                            Start a Project <FiArrowRight />
                        </Link>
                        <Link to="/solutions" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                            Explore Solutions
                        </Link>
                    </div>
                    <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                        {["Purpose-built systems", "Scalable architecture", "Security-minded development"].map((item) => (
                            <span key={item} className="inline-flex items-center gap-2"><FiCheckCircle className="text-emerald-400" /> {item}</span>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="relative mx-auto w-full max-w-md">
                    <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />
                    <div className="relative rounded-[2rem] border border-white/10 bg-white/[.06] p-4 shadow-2xl backdrop-blur-xl">
                        <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-6">
                            <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                <div><p className="text-xs uppercase tracking-[.18em] text-slate-500">NTS Digital</p><p className="mt-1 font-bold">Solution Architecture</p></div>
                                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Built for growth</span>
                            </div>
                            <div className="grid gap-3 py-5">
                                {[[FiLayers, "Business systems", "Workflows that fit your operation"], [FiCode, "Modern development", "Reliable web, mobile & software"], [FiShield, "Security-minded", "Designed with trust in mind"]].map(([Icon, title, text]) => (
                                    <div key={title} className="flex gap-4 rounded-xl border border-white/5 bg-white/[.03] p-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300"><Icon /></div>
                                        <div><p className="font-semibold">{title}</p><p className="mt-1 text-sm leading-6 text-slate-400">{text}</p></div>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5">
                                <p className="text-sm font-semibold text-blue-50">From idea to working product</p>
                                <div className="mt-4 flex items-center gap-2 text-xs font-bold"><span>Discover</span><span className="h-px flex-1 bg-white/40" /><span>Build</span><span className="h-px flex-1 bg-white/40" /><span>Launch</span></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
