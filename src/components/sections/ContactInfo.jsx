import contactInfo from "../../data/contact";
import ContactInfoCard from "../ui/ContactInfoCard";

function ContactInfo() {
    return (
        <section className="bg-white py-20 dark:bg-black md:py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-6">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand-blue dark:text-brand-cyan">
                        Contact NTS
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                        Let’s connect.
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                        Reach us through the channel that works best for you.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {contactInfo.map((info) => (
                        <ContactInfoCard key={info.id} info={info} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;
