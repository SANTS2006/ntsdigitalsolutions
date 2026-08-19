import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import Logo from '../common/Logo';
import SiteSearch from '../common/SiteSearch';
import { useTheme } from '../../context/useTheme.js';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Solutions', '/solutions'],
  ['Industries', '/industries'],
  ['Insights', '/insights'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const styles = ({ isActive }) =>
    `relative py-2 text-sm font-semibold transition-colors ${
      isActive
        ? 'text-blue-600'
        : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-6"
      >
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={styles}
            >
              {label}
            </NavLink>
          ))}

          <SiteSearch />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-lg p-2 text-xl text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <Link
            to="/start-a-project"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
          >
            Start a Project
            <FiArrowUpRight />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={
            isOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-2xl text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-200 dark:border-slate-800 dark:bg-slate-950 md:hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 border-t-transparent opacity-0'
        }`}
      >
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-5">

              {links.map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={styles}
                >
                  {label}
                </NavLink>
              ))}

              <button
                type="button"
                onClick={toggleTheme}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                {isDark ? <FiSun /> : <FiMoon />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>

              <div className="mt-3 flex gap-3">
                <Link
                  to="/faq"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-center font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  FAQ
                </Link>

                <Link
                  to="/start-a-project"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700"
                >
                  Start a Project
                </Link>
              </div>

            </div>
      </div>
    </header>
  );
}