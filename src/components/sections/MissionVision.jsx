import { FiEye, FiFlag } from "react-icons/fi";
import company from "../../data/company";

const MissionVision = () => (
  <section className="bg-slate-50 py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-3xl bg-white p-8 text-slate-950 dark:bg-black dark:text-white md:p-10">
          <FiFlag className="text-3xl text-brand-gold" />
          <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-brand-gold">Our mission</p>
          <h2 className="mt-3 text-2xl font-black md:text-3xl">Make technology useful, reliable and human.</h2>
          <p className="mt-5 leading-8 text-slate-300">{company.mission}</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <FiEye className="text-3xl text-blue-600" />
          <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-blue-600">Our vision</p>
          <h2 className="mt-3 text-2xl font-black text-slate-950 md:text-3xl">Build from Sierra Leone. Think beyond borders.</h2>
          <p className="mt-5 leading-8 text-slate-600">{company.vision}</p>
        </article>
      </div>
    </div>
  </section>
);
export default MissionVision;
