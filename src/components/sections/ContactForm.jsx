import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
    FiCheckCircle,
    FiSend,
    FiArrowLeft,
} from "react-icons/fi";
import Button from "../ui/Button";

const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

function ContactForm() {
    const [status, setStatus] = useState({
        type: "",
        text: "",
    });

    const [isSending, setIsSending] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    async function onSubmit(data) {
        setIsSending(true);

        setStatus({
            type: "",
            text: "",
        });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                data,
                {
                    publicKey:
                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus({
                type: "success",
                text: "Your message has been successfully sent to NTS Digital Solutions.",
            });

            reset();
        } catch (error) {
            console.error("Contact form EmailJS error:", error);

            setStatus({
                type: "error",
                text: "We couldn't send the form right now. Please email hello@ntsdigitalsolutions.com or try again.",
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section
            id="project-form"
            className="bg-slate-50 py-24"
        >
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-6">

                {/* =========================================
                    LEFT CONTENT
                ========================================== */}

                <div>
                    <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-600">
                        Contact NTS
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                        Tell us what you want to build.
                    </h2>

                    <p className="mt-5 leading-7 text-slate-600">
                        A few details help us understand your goals
                        before the first conversation. You don't need
                        a finished specification — a clear problem is
                        enough to get started.
                    </p>

                    <div className="mt-8 space-y-4">
                        {[
                            "We review your goals and requirements",
                            "We recommend a practical technology approach",
                            "We discuss scope, timeline, and next steps",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex gap-3 text-sm font-semibold text-slate-700"
                            >
                                <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>


                {/* =========================================
                    RIGHT SIDE
                ========================================== */}

                {status.type === "success" ? (

                    /* =====================================
                       SUCCESS MESSAGE
                    ====================================== */

                    <div
                        role="status"
                        aria-live="polite"
                        className="flex min-h-[500px] items-center justify-center rounded-3xl border border-emerald-500/40 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-10"
                    >
                        <div className="w-full text-center">

                            {/* Success Icon */}

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                                <FiCheckCircle className="text-4xl text-emerald-500" />
                            </div>


                            {/* Label */}

                            <p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-emerald-600">
                                Message Sent
                            </p>


                            {/* Heading */}

                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                                Thank you for contacting us
                            </h2>


                            {/* Main Message */}

                            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                                Your message has been successfully sent
                                to NTS Digital Solutions. We appreciate
                                you reaching out to us.
                            </p>


                            {/* Follow-up Message */}

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                Our team will review your message and
                                get back to you as soon as possible.
                            </p>


                            {/* Actions */}

                            <div className="mt-8 flex flex-wrap justify-center gap-3">

                                <a
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                                >
                                    <FiArrowLeft />
                                    Back to Home
                                </a>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setStatus({
                                            type: "",
                                            text: "",
                                        })
                                    }
                                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                                >
                                    Send Another Message
                                </button>

                            </div>

                        </div>
                    </div>

                ) : (

                    /* =====================================
                       CONTACT FORM
                    ====================================== */

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-8"
                    >

                        {/* Error Message */}

                        {status.type === "error" && (
                            <div
                                role="alert"
                                aria-live="assertive"
                                className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700"
                            >
                                {status.text}
                            </div>
                        )}


                        <div className="grid gap-5 md:grid-cols-2">

                            {/* Full Name */}

                            <label className="text-sm font-semibold text-slate-700">
                                Full name

                                <input
                                    {...register("name", {
                                        required:
                                            "Please enter your name.",
                                    })}
                                    className={`${inputClass} mt-2`}
                                    placeholder="Your name"
                                />

                                {errors.name && (
                                    <span className="mt-1 block text-xs text-red-600">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>


                            {/* Email */}

                            <label className="text-sm font-semibold text-slate-700">
                                Email address

                                <input
                                    type="email"
                                    {...register("email", {
                                        required:
                                            "Please enter your email.",
                                    })}
                                    className={`${inputClass} mt-2`}
                                    placeholder="Your email address"
                                />

                                {errors.email && (
                                    <span className="mt-1 block text-xs text-red-600">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>


                            {/* Phone */}

                            <label className="text-sm font-semibold text-slate-700">
                                Phone number

                                <input
                                    {...register("phone")}
                                    className={`${inputClass} mt-2`}
                                    placeholder="031034604"
                                />
                            </label>


                            {/* Organization */}

                            <label className="text-sm font-semibold text-slate-700">
                                Organization

                                <input
                                    {...register("company")}
                                    className={`${inputClass} mt-2`}
                                    placeholder="Company / institution"
                                />
                            </label>


                            {/* Industry */}

                            <label className="text-sm font-semibold text-slate-700">
                                Industry

                                <select
                                    {...register("industry", {
                                        required:
                                            "Please select your industry.",
                                    })}
                                    className={`${inputClass} mt-2`}
                                >
                                    <option value="">
                                        Select your industry
                                    </option>

                                    <option value="Business">
                                        Business
                                    </option>

                                    <option value="Education">
                                        Education
                                    </option>

                                    <option value="Healthcare">
                                        Healthcare
                                    </option>

                                    <option value="Real Estate">
                                        Real Estate
                                    </option>

                                    <option value="NGO">
                                        NGO
                                    </option>

                                    <option value="Government">
                                        Government
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>
                                </select>

                                {errors.industry && (
                                    <span className="mt-1 block text-xs text-red-600">
                                        {errors.industry.message}
                                    </span>
                                )}
                            </label>


                            {/* Service */}

                            <label className="text-sm font-semibold text-slate-700">
                                What do you need?

                                <select
                                    {...register("service", {
                                        required:
                                            "Please select a service.",
                                    })}
                                    className={`${inputClass} mt-2`}
                                >
                                    <option value="">
                                        Select a service
                                    </option>

                                    <option>
                                        Website Development
                                    </option>

                                    <option>
                                        Custom Software
                                    </option>

                                    <option>
                                        Mobile Application
                                    </option>

                                    <option>
                                        UI/UX Design
                                    </option>

                                    <option>
                                        Maintenance & Support
                                    </option>

                                    <option>
                                        Not sure yet
                                    </option>
                                </select>

                                {errors.service && (
                                    <span className="mt-1 block text-xs text-red-600">
                                        Please select a service.
                                    </span>
                                )}
                            </label>


                            {/* Project Stage */}

                            <label className="text-sm font-semibold text-slate-700">
                                Project stage

                                <select
                                    {...register("stage")}
                                    className={`${inputClass} mt-2`}
                                >
                                    <option>
                                        Just an idea
                                    </option>

                                    <option>
                                        Planning / requirements
                                    </option>

                                    <option>
                                        Ready to build
                                    </option>

                                    <option>
                                        Existing system needs improvement
                                    </option>
                                </select>
                            </label>


                            {/* Budget */}

                            <label className="text-sm font-semibold text-slate-700">
                                Estimated budget

                                <select
                                    {...register("budget")}
                                    className={`${inputClass} mt-2`}
                                >
                                    <option>
                                        Not sure yet
                                    </option>

                                    <option>
                                        Under SLE1000
                                    </option>

                                    <option>
                                        SLE1000 – SLE1500
                                    </option>

                                    <option>
                                        SLE1500 – SLE5000
                                    </option>

                                    <option>
                                        SLE5000+
                                    </option>
                                </select>
                            </label>


                            {/* Timeline */}

                            <label className="text-sm font-semibold text-slate-700">
                                Desired timeline

                                <select
                                    {...register("timeline")}
                                    className={`${inputClass} mt-2`}
                                >
                                    <option>
                                        Flexible
                                    </option>

                                    <option>
                                        Within 1 month
                                    </option>

                                    <option>
                                        1–3 months
                                    </option>

                                    <option>
                                        3–6 months
                                    </option>

                                    <option>
                                        6+ months
                                    </option>
                                </select>
                            </label>

                        </div>


                        {/* Project Description */}

                        <label className="mt-5 block text-sm font-semibold text-slate-700">
                            Project description

                            <textarea
                                {...register("message", {
                                    required:
                                        "Please tell us a little about the project.",
                                })}
                                rows="6"
                                className={`${inputClass} mt-2 resize-y`}
                                placeholder="What are you trying to build or improve? What problem should it solve?"
                            />

                            {errors.message && (
                                <span className="mt-1 block text-xs text-red-600">
                                    {errors.message.message}
                                </span>
                            )}
                        </label>


                        {/* Submit */}

                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

                            <p className="max-w-md text-xs leading-5 text-slate-500">
                                By submitting this form, you are simply
                                starting a project conversation. No
                                commitment is required.
                            </p>

                            <Button
                                type="submit"
                                disabled={isSending}
                            >
                                {isSending ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Project Brief
                                        <FiSend />
                                    </>
                                )}
                            </Button>

                        </div>

                    </form>
                )}

            </div>
        </section>
    );
}

export default ContactForm;