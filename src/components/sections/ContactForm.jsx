import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import Button from "../ui/Button";

const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

function ContactForm() {
    const [status, setStatus] = useState({ type: "", text: "" });
    const [isSending, setIsSending] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    async function onSubmit(data) {
        setIsSending(true);
        setStatus({ type: "", text: "" });
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                data,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );
            setStatus({ type: "success", text: "Thanks — your project brief has been sent. We will get back to you soon." });
            reset();
        } catch (error) {
            console.error(error);
            setStatus({ type: "error", text: "We couldn't send the form right now. Please email hello@ntsdigitalsolutions.com or try again." });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section id="project-form" className="bg-slate-50 py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-6">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-600">Start a project</p>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Tell us what you want to build.</h2>
                    <p className="mt-5 leading-7 text-slate-600">A few details help us understand your goals before the first conversation. You don't need a finished specification — a clear problem is enough to get started.</p>
                    <div className="mt-8 space-y-4">
                        {["We review your goals and requirements", "We recommend a practical technology approach", "We discuss scope, timeline, and next steps"].map((item) => <div key={item} className="flex gap-3 text-sm font-semibold text-slate-700"><FiCheckCircle className="mt-0.5 shrink-0 text-emerald-500" /> {item}</div>)}
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-8">
                    {status.text && <div role="alert" className={`mb-6 rounded-xl p-4 text-sm font-semibold ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>{status.text}</div>}
                    <div className="grid gap-5 md:grid-cols-2">
                        <label className="text-sm font-semibold text-slate-700">Full name<input {...register("name", { required: "Please enter your name." })} className={`${inputClass} mt-2`} placeholder="Your name" />{errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name.message}</span>}</label>
                        <label className="text-sm font-semibold text-slate-700">Email address<input type="email" {...register("email", { required: "Please enter your email." })} className={`${inputClass} mt-2`} placeholder="you@company.com" />{errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email.message}</span>}</label>
                        <label className="text-sm font-semibold text-slate-700">Phone number<input {...register("phone")} className={`${inputClass} mt-2`} placeholder="+232 ..." /></label>
                        <label className="text-sm font-semibold text-slate-700">Organization<input {...register("company")} className={`${inputClass} mt-2`} placeholder="Company / institution" /></label>
                        <label className="text-sm font-semibold text-slate-700">What do you need?<select {...register("service", { required: true })} className={`${inputClass} mt-2`}><option value="">Select a service</option><option>Website Development</option><option>Custom Software</option><option>Mobile Application</option><option>UI/UX Design</option><option>Maintenance & Support</option><option>Not sure yet</option></select></label>
                        <label className="text-sm font-semibold text-slate-700">Project stage<select {...register("stage")} className={`${inputClass} mt-2`}><option>Just an idea</option><option>Planning / requirements</option><option>Ready to build</option><option>Existing system needs improvement</option></select></label>
                        <label className="text-sm font-semibold text-slate-700">Estimated budget<select {...register("budget")} className={`${inputClass} mt-2`}><option>Not sure yet</option><option>Under $500</option><option>$500 – $1,500</option><option>$1,500 – $5,000</option><option>$5,000+</option></select></label>
                        <label className="text-sm font-semibold text-slate-700">Desired timeline<select {...register("timeline")} className={`${inputClass} mt-2`}><option>Flexible</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option></select></label>
                    </div>
                    <label className="mt-5 block text-sm font-semibold text-slate-700">Project description<textarea {...register("message", { required: "Please tell us a little about the project." })} rows="6" className={`${inputClass} mt-2 resize-y`} placeholder="What are you trying to build or improve? What problem should it solve?" />{errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message.message}</span>}</label>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4"><p className="max-w-md text-xs leading-5 text-slate-500">By submitting this form, you are simply starting a project conversation. No commitment is required.</p><Button type="submit" disabled={isSending}>{isSending ? "Sending..." : <>Send Project Brief <FiSend /></>}</Button></div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
