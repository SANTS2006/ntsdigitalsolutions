import SEO from '../components/common/SEO';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    FiAlertCircle,
    FiCheckCircle,
    FiLoader,
    FiSend,
} from 'react-icons/fi';

const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10';

export default function Support() {
    const [sent, setSent] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        requestType: 'Bug report',
        message: '',
    });

    const updateField = (field, value) => {
        setFormData((current) => ({
            ...current,
            [field]: value,
        }));

        if (error) {
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSending) return;

        setIsSending(true);
        setError('');

        try {
            const serviceId =
                import.meta.env.VITE_EMAILJS_SERVICE_ID;

            const templateId =
                import.meta.env.VITE_EMAILJS_SUPPORT_TEMPLATE_ID ||
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

            const publicKey =
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    'EmailJS configuration is missing.'
                );
            }

            const templateParams = {
                name: formData.name,
                email: formData.email,
                company: formData.company,
                requestType: formData.requestType,
                message: formData.message,
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                {
                    publicKey,
                }
            );

            // Only show success after EmailJS confirms delivery
            setSent(true);

            setFormData({
                name: '',
                email: '',
                company: '',
                requestType: 'Bug report',
                message: '',
            });

        } catch (err) {
            console.error(
                'Support request submission failed:',
                err
            );

            setError(
                "We couldn't send your support request right now. Please check your internet connection and try again. If the problem continues, email hello@ntsdigitalsolutions.com."
            );

            setSent(false);

        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <SEO
                title="Support | NTS Digital Solutions"
                description="Submit a technical support or maintenance request to NTS Digital Solutions."
            />

            {/* Hero */}
            <section className="bg-slate-950 py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center">

                    <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-400">
                        Support
                    </p>

                    <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
                        Need technical help?
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                        Submit a support request for an existing NTS
                        project or start a maintenance conversation.
                    </p>

                </div>
            </section>

            {/* Support Form */}
            <section className="bg-slate-50 py-16">
                <div className="mx-auto max-w-2xl px-5">

                    {sent ? (

                        /* =========================
                           SUCCESS MESSAGE
                        ========================= */

                        <div
                            role="status"
                            aria-live="polite"
                            className="rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-xl md:p-10"
                        >

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                                <FiCheckCircle
                                    className="text-4xl text-emerald-500"
                                />
                            </div>

                            <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-emerald-600">
                                Request submitted
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                                Support request received
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                                Thank you for contacting NTS Digital
                                Solutions. Your support request has
                                been successfully sent to our team.
                            </p>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                We'll review your request and get back
                                to you as soon as possible.
                            </p>

                            <a
                                href="/"
                                className="mt-7 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
                            >
                                Back to Home
                            </a>

                        </div>

                    ) : (

                        /* =========================
                           FORM
                        ========================= */

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 md:p-9"
                        >

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">
                                    Support request
                                </p>

                                <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
                                    Tell us how we can help.
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Provide as much detail as possible
                                    so our team can understand and
                                    resolve the issue efficiently.
                                </p>
                            </div>

                            {/* Error Message */}

                            {error && (
                                <div
                                    role="alert"
                                    aria-live="assertive"
                                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                                >
                                    <FiAlertCircle className="mt-0.5 shrink-0 text-lg" />

                                    <div>
                                        <p className="font-bold">
                                            Submission unsuccessful
                                        </p>

                                        <p className="mt-1 leading-6">
                                            {error}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Name */}

                            <label className="block text-sm font-semibold text-slate-700">
                                Name

                                <input
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        updateField(
                                            'name',
                                            e.target.value
                                        )
                                    }
                                    className={`${inputClass} mt-2`}
                                    placeholder="Your name"
                                />
                            </label>

                            {/* Email */}

                            <label className="block text-sm font-semibold text-slate-700">
                                Email address

                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        updateField(
                                            'email',
                                            e.target.value
                                        )
                                    }
                                    className={`${inputClass} mt-2`}
                                    placeholder="Your email address"
                                />
                            </label>

                            {/* Organization */}

                            <label className="block text-sm font-semibold text-slate-700">
                                Project / Organization

                                <input
                                    value={formData.company}
                                    onChange={(e) =>
                                        updateField(
                                            'company',
                                            e.target.value
                                        )
                                    }
                                    className={`${inputClass} mt-2`}
                                    placeholder="Company / institution"
                                />
                            </label>

                            {/* Request Type */}

                            <label className="block text-sm font-semibold text-slate-700">
                                Support request type

                                <select
                                    value={formData.requestType}
                                    onChange={(e) =>
                                        updateField(
                                            'requestType',
                                            e.target.value
                                        )
                                    }
                                    className={`${inputClass} mt-2`}
                                >
                                    <option>
                                        Bug report
                                    </option>

                                    <option>
                                        Maintenance request
                                    </option>

                                    <option>
                                        Feature request
                                    </option>

                                    <option>
                                        Security concern
                                    </option>

                                    <option>
                                        General support
                                    </option>
                                </select>
                            </label>

                            {/* Description */}

                            <label className="block text-sm font-semibold text-slate-700">
                                Describe the issue

                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) =>
                                        updateField(
                                            'message',
                                            e.target.value
                                        )
                                    }
                                    rows="7"
                                    className={`${inputClass} mt-2 resize-y`}
                                    placeholder="Please describe the issue, error, or support you need..."
                                />
                            </label>

                            {/* Submit */}

                            <div className="flex justify-end pt-2">

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
                                >

                                    {isSending ? (
                                        <>
                                            <FiLoader className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Submit Request
                                            <FiSend />
                                        </>
                                    )}

                                </button>

                            </div>

                        </form>
                    )}

                </div>
            </section>
        </>
    );
}