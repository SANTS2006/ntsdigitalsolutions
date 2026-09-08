import { FiArrowUpRight, FiDownload, FiSmartphone } from 'react-icons/fi';

const ANDROID_DOWNLOAD_URL = 'https://expo.dev/accounts/newtontambasam/projects/nts-digital-solutions-mobile/builds/24ceb77c-a9f5-4112-a1eb-7dd394d9b019';

export default function MobileAppDownload({ compact = false }) {
  return (
    <section className={compact ? 'px-5 py-12 lg:px-6' : 'px-5 py-24 lg:px-6'}>
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-blue-500/15 bg-gradient-to-br from-[#041c69] via-[#0756e8] to-[#08c7f5] px-7 py-10 text-white shadow-2xl shadow-blue-900/15 md:px-12 md:py-12">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-200/10 blur-3xl" aria-hidden="true" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-cyan-100">
              <FiSmartphone aria-hidden="true" /> NTS Mobile App
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Take NTS Digital Solutions with you.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50 md:text-lg">
              Explore our services and solutions, request a project, contact our team, and get support directly from your Android device.
            </p>
            <p className="mt-3 text-sm font-semibold text-cyan-100">
              Android app · Production build
            </p>
          </div>

          <a
            href={ANDROID_DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#0637c9] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-slate-50 sm:w-auto"
            aria-label="Download the NTS Digital Solutions Android app"
          >
            <FiDownload aria-hidden="true" />
            Download Android App
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
