import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const iconMap = {
  location: FiMapPin,
  email: FiMail,
  phone: FiPhone,
};

const ContactInfoCard = ({ info }) => {
  const Icon = iconMap[info.id] || FiMapPin;
  const isEmail = info.id === "email";
  const isPhone = info.id === "phone";

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient text-2xl text-white shadow-lg brand-shadow transition-transform duration-300 group-hover:scale-105">
          <Icon aria-hidden="true" />
        </div>
        {(isEmail || isPhone) && (
          <FiArrowUpRight
            aria-hidden="true"
            className="mt-1 text-xl text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
          />
        )}
      </div>

      <div className="mt-7">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand-blue dark:text-brand-cyan">
          {info.title}
        </p>
        <p className="mt-2 break-words text-lg font-bold tracking-tight text-slate-950 dark:text-white md:text-xl">
          {info.value}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {isEmail
            ? "Send us an email and our team will get back to you."
            : isPhone
              ? "Call us directly to discuss your project or business challenge."
              : "Based in Sierra Leone, serving clients locally and beyond."}
        </p>
      </div>
    </>
  );

  const className =
    "group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,.07)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_65px_rgba(7,86,232,.12)] dark:border-white/10 dark:bg-[#080808] dark:shadow-[0_18px_55px_rgba(0,0,0,.35)] dark:hover:border-cyan-500/30";

  if (isEmail) {
    return (
      <a href={`mailto:${info.value}`} className={className} aria-label={`Email NTS Digital Solutions at ${info.value}`}>
        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
        {content}
      </a>
    );
  }

  if (isPhone) {
    return (
      <a href="tel:+23231034604" className={className} aria-label="Call NTS Digital Solutions at +232 31 034 604">
        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />
        {content}
      </a>
    );
  }

  return (
    <div className={className}>
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
      {content}
    </div>
  );
};

export default ContactInfoCard;
