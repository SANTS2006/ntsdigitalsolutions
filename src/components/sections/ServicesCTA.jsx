import { Link } from "react-router-dom";
import Button from "../ui/Button";

function ServicesCTA() {
    return <section className="py-20"><div className="mx-auto max-w-5xl px-5 text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-600">Let's build</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">Not sure which service you need?</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">Start with the problem you're trying to solve. We'll help you identify the right scope and technology approach.</p><Link to="/contact" className="mt-8 inline-flex"><Button>Talk to NTS</Button></Link></div></section>;
}

export default ServicesCTA;
