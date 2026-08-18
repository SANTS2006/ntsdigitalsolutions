function SectionTitle({ subtitle, title, description, align = "center" }) {
    const alignment = align === "left" ? "text-left" : "text-center mx-auto";

    return (
        <div className={`max-w-3xl mb-12 ${alignment}`}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                {subtitle}
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;
