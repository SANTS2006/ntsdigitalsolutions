import { FiArrowRight, FiCheckCircle, FiCode, FiLayers, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const highlights = [
  [FiLayers, 'Business systems', 'Workflows that fit your operation'],
  [FiCode, 'Modern development', 'Reliable web, mobile & software'],
  [FiShield, 'Security-minded', 'Designed with trust in mind'],
];

export default function Hero() {
  return (
    <section id="home-hero" className="relative isolate min-h-[760px] overflow-hidden bg-black text-white sm:min-h-[820px]">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/nts-hero-poster.webp"
        aria-hidden="true"
      >
        <source src="/nts-hero.mp4" type="video/mp4" media="(min-width: 768px)" />
      </video>

      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(23,105,255,.42),transparent_34%),radial-gradient(circle_at_12%_80%,rgba(8,199,245,.24),transparent_30%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/75" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-20 pt-36 sm:min-h-[820px] lg:px-6 lg:pt-40">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-cyan-200 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.9)]" />
              Digital solutions company
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
              Build smarter.
              <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">Operate better.</span>
              <span className="block">Grow digitally.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              NTS Digital Solutions designs and develops modern websites, custom software,
              mobile applications and digital systems around the way your organization actually works.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/start-a-project" className="brand-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white shadow-2xl brand-shadow transition duration-300 hover:-translate-y-1">
                Start a Project <FiArrowRight />
              </Link>
              <Link to="/solutions" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                Explore Solutions <FiArrowRight />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
              {['Purpose-built systems', 'Scalable architecture', 'Security-minded development'].map(item => (
                <span key={item} className="inline-flex items-center gap-2"><FiCheckCircle className="text-cyan-300" /> {item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/15 blur-3xl" aria-hidden="true" />
            <div className="nts-bezel relative rounded-[2rem] p-[2px] shadow-2xl">
              <div className="nts-bezel-inner rounded-[1.8rem] bg-black/80 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div><p className="text-[10px] uppercase tracking-[.2em] text-slate-400">NTS Digital</p><p className="mt-1 font-bold">Digital Growth Blueprint</p></div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">Built for growth</span>
                </div>
                <div className="grid gap-3 py-5">
                  {highlights.map(([Icon, title, text]) => (
                    <div key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[.06] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[.09]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/25 to-cyan-400/20 text-cyan-300"><Icon /></div>
                      <div><p className="font-semibold">{title}</p><p className="mt-1 text-sm leading-6 text-slate-400">{text}</p></div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-gradient-to-r from-[#0637c9] via-[#0868f2] to-[#08c7f5] p-5 text-white shadow-lg shadow-blue-900/30">
                  <p className="text-sm font-semibold text-white/90">From idea to working product</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold"><span>Discover</span><span className="h-px flex-1 bg-white/40" /><span>Build</span><span className="h-px flex-1 bg-white/40" /><span>Launch</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
