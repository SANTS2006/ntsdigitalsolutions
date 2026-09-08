import SEO from '../components/common/SEO';
import { FiDownload, FiFileText } from 'react-icons/fi';
import MobileAppDownload from '../components/sections/MobileAppDownload';

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources | NTS Digital Solutions"
        description="Useful resources, company information and the NTS Digital Solutions mobile app."
      />

      <section className="nts-page-hero bg-white py-20 text-slate-950 dark:bg-black dark:text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-400">Resources</p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">Helpful resources for your next digital project.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-4xl gap-7 px-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-zinc-950 md:p-10">
            <FiFileText className="text-3xl text-blue-600" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-extrabold text-slate-950 dark:text-white">NTS Digital Solutions Company Profile</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">A concise overview of our positioning, capabilities, solution areas and approach.</p>
            <a href="/resources/nts-digital-solutions-company-profile.pdf" download className="brand-gradient mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5">
              <FiDownload aria-hidden="true" /> Download company profile
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-white/10 dark:bg-zinc-950 md:p-10">
            <h2 className="font-extrabold text-slate-950 dark:text-white">More resources coming</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">We will add project checklists, digital transformation guides and other practical resources as the NTS library grows.</p>
          </div>
        </div>
      </section>

      <MobileAppDownload compact />
    </>
  );
}
