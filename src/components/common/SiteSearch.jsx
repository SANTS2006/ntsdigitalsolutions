import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';

const items = [
  ['About NTS', '/about', 'Company'],
  ['Services', '/services', 'Capabilities'],
  ['Solutions', '/solutions', 'Portfolio'],
  ['Industries', '/industries', 'Sectors'],
  ['Case Studies', '/case-studies', 'Proof'],
  ['Insights', '/insights', 'Articles'],
  ['FAQ', '/faq', 'Questions'],
  ['Security', '/security', 'Trust'],
  ['Resources', '/resources', 'Downloads'],
  ['Support', '/support', 'Support'],
  ['Start a Project', '/start-a-project', 'Contact'],
];

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const results = useMemo(
    () => items.filter((item) => item.join(' ').toLowerCase().includes(q.toLowerCase())),
    [q],
  );

  const close = () => {
    setOpen(false);
    setQ('');
  };

  return (
    <>
      <button
        type="button"
        aria-label="Search site"
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 text-xl text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <FiSearch />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/80 p-5">
          <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">
            <div className="flex items-center gap-3 border-b border-slate-200 p-5 dark:border-slate-800">
              <FiSearch className="text-slate-500" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search NTS..."
                className="flex-1 bg-transparent outline-none dark:text-slate-100"
              />
              <button
                type="button"
                onClick={close}
                aria-label="Close search"
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <FiX />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-3">
              {results.map(([label, to, desc]) => (
                <Link
                  onClick={close}
                  key={to}
                  to={to}
                  className="block rounded-2xl p-4 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <div className="font-extrabold text-slate-950 dark:text-white">{label}</div>
                  <div className="text-sm text-slate-500">{desc}</div>
                </Link>
              ))}

              {!results.length && (
                <p className="p-5 text-sm text-slate-500">No matching NTS pages found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
