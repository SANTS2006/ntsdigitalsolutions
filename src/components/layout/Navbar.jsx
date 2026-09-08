import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { FiArrowUpRight, FiMoon, FiSun, FiX, FiMenu } from 'react-icons/fi';
import Logo from '../common/Logo';
import { useTheme } from '../../context/useTheme.js';

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'],
  ['Solutions', '/solutions'], ['Industries', '/industries'],
  ['Insights', '/insights'], ['Contact', '/contact'],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const mobileNavId = 'nts-mobile-navigation';

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    // The hero controls the navbar's contrast on the home page.
    // Once the viewport moves beyond the hero, the navbar becomes
    // a cleaner translucent surface with high-contrast text.
    if (!isHome) {
      setIsPastHero(true);
      return;
    }

    const updateNavbar = () => {
      const hero = document.getElementById('home-hero');
      if (!hero) {
        setIsPastHero(window.scrollY > 80);
        return;
      }

      const headerHeight = 76;
      setIsPastHero(window.scrollY >= hero.offsetHeight - headerHeight);
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', updateNavbar);

    return () => {
      window.removeEventListener('scroll', updateNavbar);
      window.removeEventListener('resize', updateNavbar);
    };
  }, [isHome, location.pathname]);

  // The home hero is dark, so light-mode navigation is white while it is
  // over the hero. Once the user scrolls beyond the hero, it returns to black.
  // Dark mode stays white for reliable contrast.
  const onHomeHero = isHome && !isPastHero;
  const lightModeHeroText = onHomeHero && !isDark;

  const styles = ({ isActive }) => {
    const base = 'relative py-2 text-sm font-semibold transition-colors duration-300';
    if (isDark || lightModeHeroText) {
      return `${base} ${isActive ? 'text-cyan-300' : 'text-white hover:text-cyan-200'}`;
    }
    return `${base} ${isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'}`;
  };

  const themeButtonClass = lightModeHeroText || isDark
    ? 'text-white hover:bg-white/10'
    : 'text-black hover:bg-black/5';

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-all duration-500 ease-out" 
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-6"
      >
        <Logo />

        <div
          className={`nts-nav-glass hidden items-center gap-5 rounded-2xl border px-3 py-2 shadow-lg transition-all duration-500 backdrop-blur-xl backdrop-saturate-150 md:flex ${
            lightModeHeroText || isDark
              ? 'border-white/15 bg-black/25'
              : 'border-black/10 bg-white/55'
          }`}
        >
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'} className={styles}>
              {label}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`rounded-xl p-2 text-xl transition duration-300 ${themeButtonClass}`}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <Link
            to="/start-a-project"
            className="brand-gradient inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white shadow-lg brand-shadow transition duration-300 hover:-translate-y-0.5"
          >
            Start a Project <FiArrowUpRight />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(v => !v)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls={mobileNavId}
          className={`rounded-xl border p-2 text-2xl shadow-sm transition-colors duration-300 md:hidden ${
            lightModeHeroText || isDark
              ? 'border-white/20 text-white hover:bg-white/10'
              : 'border-black/10 text-black hover:bg-black/5'
          }`}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div
        id={mobileNavId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`nts-nav-glass overflow-hidden border-t shadow-xl backdrop-blur-xl backdrop-saturate-150 transition-[max-height,opacity] duration-300 md:hidden ${
          lightModeHeroText || isDark
            ? 'border-white/10 bg-black/35'
            : 'border-black/10 bg-white/65'
        } ${
          isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 border-t-transparent opacity-0'
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
            className={`mt-3 inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${
              lightModeHeroText || isDark
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-black/10 text-black hover:bg-black/5'
            }`}
          >
            {isDark ? <FiSun /> : <FiMoon />} {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>

          <Link
            to="/start-a-project"
            onClick={() => setIsOpen(false)}
            className="brand-gradient mt-3 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-center font-bold text-white"
          >
            Start a Project <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </header>
  );
}
