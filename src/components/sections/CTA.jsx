import { useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiMail, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    localStorage.setItem('nts-newsletter', email.trim());
    setDone(true);
  };

  return (
    <section className="px-5 py-24 lg:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[rgba(8,199,245,.15)] bg-gradient-to-br from-[#fffaf5] via-[#f7efe6] to-[#eee3d7] px-7 py-12 shadow-xl shadow-[rgba(4,28,105,.05)] dark:border-white/10 dark:from-zinc-950 dark:via-[#17110d] dark:to-black md:px-14 md:py-14">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[rgba(8,199,245,.10)] blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[rgba(4,28,105,.10)] blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold"><FiMessageSquare /> Have a business challenge?</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-5xl">Let's turn your idea into a useful digital solution.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">Tell us what you're trying to improve, and we'll help you identify a practical technology approach.</p>
            <Link to="/start-a-project" className="brand-gradient mt-7 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white shadow-lg brand-shadow transition hover:-translate-y-1">Start a Project <FiArrowRight /></Link>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/65 p-6 shadow-lg dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-gold">NTS Insights</p>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">Stay ahead of digital innovation.</h3>
            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">Get occasional practical ideas on software, digital transformation and technology.</p>
            {done ? (
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300"><FiCheckCircle /> You're on the list. Thank you.</div>
            ) : (
              <form onSubmit={submit} className="mt-5 flex flex-col gap-2 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">Email</label>
                <div className="flex flex-1 items-center rounded-xl border border-slate-200 bg-white px-4 text-slate-500 dark:border-white/10 dark:bg-black/30"><FiMail /><input id="newsletter-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="w-full bg-transparent px-3 py-3 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white" /></div>
                <button className="brand-gradient rounded-xl px-5 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
