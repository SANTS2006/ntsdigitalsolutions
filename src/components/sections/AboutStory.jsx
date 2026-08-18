import { motion } from "framer-motion";
import { FiCompass, FiLayers, FiUsers } from "react-icons/fi";
import company from "../../data/company";

const cards = [
  { icon: FiCompass, title: "Our approach", text: "We start with the problem, understand the people and workflows involved, then choose technology that serves the outcome." },
  { icon: FiLayers, title: "Our craft", text: "We care about clean interfaces, dependable software, maintainable architecture and a delivery process clients can understand." },
  { icon: FiUsers, title: "Our relationship", text: "We aim to be easy to work with—clear in communication, honest about trade-offs and committed to long-term value." },
];

const AboutStory = () => (
  <section className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-6">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-600">Our story</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">A young company with a long-term ambition.</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-600">{company.story}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {cards.map(({ icon: Icon, title, text }) => (
              <motion.article key={title} whileHover={{ y: -5 }} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm"><Icon /></div>
                <h3 className="mt-5 font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutStory;
