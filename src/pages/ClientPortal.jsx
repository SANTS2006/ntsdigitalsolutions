import SEO from '../components/common/SEO';
import { FiLock, FiArrowLeft } from 'react-icons/fi';

export default function ClientPortal() {
    return (
        <>
            <SEO
                title="Client Portal | NTS Digital Solutions"
                description="The NTS Digital Solutions client portal is currently under development."
                noIndex
            />

            <section className="min-h-[70vh] bg-white dark:bg-black px-5 py-20 text-white">
                <div className="mx-auto flex max-w-2xl items-center justify-center">

                    <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl md:p-12">

                        {/* Icon */}
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                            <FiLock className="text-3xl" />
                        </div>

                        {/* Label */}
                        <p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-blue-400">
                            Client Portal
                        </p>

                        {/* Heading */}
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                            Coming Soon
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                            The NTS Digital Solutions Client Portal is currently
                            under development.
                        </p>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                            The portal will provide our clients with a secure,
                            centralized space to access project information,
                            communicate with the NTS team, review project
                            progress, access important documents, and stay
                            informed throughout the development process.
                        </p>

                        {/* Features */}
                        <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-5 text-left">

                            <p className="mb-4 text-sm font-bold text-white">
                                Planned portal capabilities
                            </p>

                            <ul className="space-y-3 text-sm leading-6 text-slate-400">

                                <li className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                    Project progress and status updates
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                    Secure project communication
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                    Project documents and resources
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                    Milestones and deliverables
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                    Client project management
                                </li>

                            </ul>
                        </div>

                        {/* Status */}
                        <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/10 px-5 py-4">
                            <p className="text-sm font-semibold text-blue-300">
                                We're building something better for our clients.
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-400">
                                The portal will become available once development
                                and security testing are complete.
                            </p>
                        </div>

                        {/* Back Button */}
                        <a
                            href="/"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
                        >
                            <FiArrowLeft />
                            Back to Home
                        </a>

                    </div>

                </div>
            </section>
        </>
    );
}