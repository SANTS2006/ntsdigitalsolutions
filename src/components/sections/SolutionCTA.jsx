import { Link } from "react-router-dom";
import Button from "../ui/Button";

function SolutionCTA() {
    return <section className="px-5 py-20 lg:px-6"><div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 px-6 py-14 text-center text-white md:px-12"><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">Build your own</p><h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Have a similar challenge?</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">We can adapt the thinking behind these solutions to your organization's workflows, users, and requirements.</p><Link to="/contact" className="mt-8 inline-flex"><Button>Start Your Project</Button></Link></div></section>;
}

export default SolutionCTA;
