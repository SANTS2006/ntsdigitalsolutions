import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import founder from "../../data/founder";
import founderImg from "../../assets/images/founder/founderImg.webp";

function Founder() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-6">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative mx-auto w-full max-w-sm">
                    <div className="absolute -inset-3 rounded-[2rem] bg-blue-100" />
                    <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
                        <img src={founderImg} alt={founder.name} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover" />
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-600">Founder perspective</p>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Technology should make work clearer, faster, and better.</h2>
                    <p className="mt-6 text-lg font-semibold text-slate-700">{founder.name} · {founder.role}</p>
                    <p className="mt-5 max-w-2xl leading-8 text-slate-600">{founder.description}</p>
                    <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600">Learn more about NTS <FiArrowUpRight /></Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Founder;
