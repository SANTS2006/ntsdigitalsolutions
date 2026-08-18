function Button({ children, variant = "primary", type = "button", onClick, disabled, className = "" }) {
    const styles = {
        primary: "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5",
        secondary: "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700",
        dark: "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-0.5"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${styles[variant] || styles.primary} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
