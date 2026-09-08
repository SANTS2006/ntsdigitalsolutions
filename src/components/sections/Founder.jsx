import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import founder from "../../data/founder";
import founderImg from "../../assets/images/founder/founderImg.webp";

function Founder() {
    return (
        <section className="bg-white py-24 dark:bg-black">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-6">
                <div className="relative mx-auto w-full max-w-sm transition-transform duration-500 hover:-translate-y-1">
                    <div className="absolute -inset-3 rounded-[2rem] bg-blue-100 dark:bg-blue-950/40" aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-900">
                        <img src={founderImg} alt={founder.name} width="720" height="1279" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover" />
                    </div>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-600 dark:text-cyan-300">Founder perspective</p>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">Technology should make work clearer, faster, and better.</h2>
                    <p className="mt-6 text-lg font-semibold text-slate-700 dark:text-slate-200">{founder.name} · {founder.role}</p>
                    <p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">{founder.description}</p>
                    <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600 dark:text-cyan-300">Learn more about NTS <FiArrowUpRight aria-hidden="true" /></Link>
                </div>
            </div>
        </section>
    );
}

export default Founder;
