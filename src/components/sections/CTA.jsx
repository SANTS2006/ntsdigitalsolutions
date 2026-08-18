import { FiArrowRight, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="px-5 py-24 lg:px-6">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-7 py-14 text-white md:px-14 md:py-16">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-100"><FiMessageSquare /> Have a business challenge?</div>
                        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">Let's turn your idea into a useful digital solution.</h2>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">Tell us what you're trying to improve, and we'll help you identify the right technology approach.</p>
                    </div>
                    <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-700 shadow-xl transition hover:-translate-y-0.5">Start a Project <FiArrowRight /></Link>
                </div>
            </div>
        </section>
    );
}

export default CTA;
