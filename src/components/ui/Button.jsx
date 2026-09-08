function Button({ children, variant = "primary", type = "button", onClick, disabled, className = "" }) {
    const styles = {
        primary: "brand-gradient text-white shadow-lg brand-shadow hover:-translate-y-0.5",
        secondary: "border border-slate-300 bg-white text-slate-900 hover:border-[rgba(8,199,245,.40)] hover:bg-[rgba(8,199,245,.05)] hover:text-brand-dark dark:border-slate-700 dark:bg-zinc-950 dark:text-white",
        dark: "bg-black text-white shadow-lg shadow-black/20 hover:-translate-y-0.5"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${styles[variant] || styles.primary} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
