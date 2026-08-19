import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/common/SEO';
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiSend,
  FiLoader,
} from 'react-icons/fi';

const steps = [
  {
    title: 'What do you need?',
    fields: [
      [
        'service',
        'Service',
        'select',
        [
          'Website Development',
          'Custom Software',
          'Mobile Application',
          'UI/UX Design',
          'Maintenance & Support',
          'Not sure yet',
        ],
      ],
    ],
  },
  {
    title: 'Tell us about your organization',
    fields: [
      ['company', 'Organization', 'text'],
      [
        'industry',
        'Industry',
        'select',
        [
          'Business',
          'Education',
          'Healthcare',
          'Real Estate',
          'NGO',
          'Government',
          'Other',
        ],
      ],
    ],
  },
  {
    title: 'Project details',
    fields: [
      [
        'stage',
        'Project stage',
        'select',
        [
          'Just an idea',
          'Planning / requirements',
          'Ready to build',
          'Existing system needs improvement',
        ],
      ],
      [
        'timeline',
        'Desired timeline',
        'select',
        [
          'Flexible',
          'Within 1 month',
          '1–3 months',
          '3–6 months',
          '6+ months',
        ],
      ],
      [
        'budget',
        'Estimated budget',
        'select',
        [
          'Not sure yet',
          'Under SLE500',
          'SLE500 – SLE1,500',
          'SLE1,500 – SLE5,000',
          'SLE5,000+',
        ],
      ],
    ],
  },
  {
    title: 'How should we contact you?',
    fields: [
      ['name', 'Full name', 'text'],
      ['email', 'Email address', 'email'],
      ['phone', 'Phone number', 'text'],
      ['message', 'Project description', 'textarea'],
    ],
  },
];

export default function StartProject() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const update = (key, value) => {
    setData((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const next = () => {
    setStep((current) => Math.min(current + 1, steps.length - 1));
    setError('');
  };

  const back = () => {
    setStep((current) => Math.max(current - 1, 0));
    setError('');
  };

  const submit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError('');

    try {
      /*
       * These values should be stored in your .env file:
       *
       * VITE_EMAILJS_SERVICE_ID
       * VITE_EMAILJS_TEMPLATE_ID
       * VITE_EMAILJS_PUBLIC_KEY
       */

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'Email service configuration is missing.'
        );
      }

      /*
       * EmailJS template variables.
       *
       * These names must match the variables in your
       * EmailJS HTML template.
       */
      const templateParams = {
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        company: data.company || '',
        service: data.service || '',
        industry: data.industry || '',
        stage: data.stage || '',
        budget: data.budget || '',
        timeline: data.timeline || '',
        message: data.message || '',
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setDone(true);
    } catch (err) {
      console.error('Project inquiry submission failed:', err);

      setError(
        'We could not send your project brief right now. Please try again or contact NTS directly.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEO
        title="Start a Project | NTS Digital Solutions"
        description="Tell NTS Digital Solutions what you want to build and start a project conversation."
      />

      {/* Hero */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-400">
            Start a project
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Let's turn your idea into something useful.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            A guided project brief helps us understand your goals
            before the first conversation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-6">

          {done ? (
            <div className="rounded-3xl border border-emerald-200 bg-white p-10 text-center shadow-xl">

              <FiCheckCircle className="mx-auto text-5xl text-emerald-500" />

              <h2 className="mt-5 text-3xl font-extrabold text-slate-950">
                Project brief received
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                Thank you for contacting NTS Digital Solutions.
                We've received your project information and will
                review it before getting back to you.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                We look forward to discussing your project with you.
              </p>

              <a
                href="/"
                className="mt-7 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
              >
                Back to Home
              </a>

            </div>
          ) : (
            <form
              onSubmit={submit}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-9"
            >

              {/* Progress */}
              <div className="mb-8">

                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                  <span>
                    Step {step + 1} of {steps.length}
                  </span>

                  <span>
                    {Math.round(
                      ((step + 1) / steps.length) * 100
                    )}
                    %
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    style={{
                      width: `${((step + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>

              </div>

              <h2 className="text-2xl font-extrabold text-slate-950">
                {steps[step].title}
              </h2>

              {/* Fields */}
              <div className="mt-7 grid gap-5 md:grid-cols-2">

                {steps[step].fields.map(
                  ([key, label, type, options]) => (
                    <label
                      key={key}
                      className={`text-sm font-bold text-slate-700 ${
                        type === 'textarea'
                          ? 'md:col-span-2'
                          : ''
                      }`}
                    >

                      {label}

                      {type === 'textarea' ? (
                        <textarea
                          required={key === 'message'}
                          value={data[key] || ''}
                          onChange={(e) =>
                            update(key, e.target.value)
                          }
                          rows="6"
                          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          placeholder="Tell us what you are trying to achieve..."
                        />
                      ) : type === 'select' ? (
                        <select
                          required
                          value={data[key] || ''}
                          onChange={(e) =>
                            update(key, e.target.value)
                          }
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        >
                          <option value="">
                            Select...
                          </option>

                          {options.map((option) => (
                            <option key={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          required
                          value={data[key] || ''}
                          onChange={(e) =>
                            update(key, e.target.value)
                          }
                          type={type}
                          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          placeholder={label}
                        />
                      )}

                    </label>
                  )
                )}

              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {error}
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 flex justify-between gap-3">

                <button
                  type="button"
                  disabled={step === 0 || sending}
                  onClick={back}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-bold transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiArrowLeft />
                  Back
                </button>

                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                  >
                    Continue
                    <FiArrowRight />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {sending ? (
                      <>
                        <FiLoader className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Project Brief
                        <FiSend />
                      </>
                    )}
                  </button>
                )}

              </div>

            </form>
          )}

        </div>
      </section>
    </>
  );
}