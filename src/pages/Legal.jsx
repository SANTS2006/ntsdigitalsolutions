import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const EMAIL = 'hello@ntsdigitalsolutions.com';
const LAST_UPDATED = 'October 19, 2026';

const privacy = {
  title: 'Privacy Policy',
  seoDescription:
    'How NTS Digital Solutions collects, uses, shares and protects personal information submitted through our website.',
  intro:
    'NTS Digital Solutions ("NTS", "we", "us") respects your privacy. This policy explains what personal information we collect through ntsdigitalsolutions.com, how we use it, who we share it with, and the choices you have.',
  sections: [
    {
      heading: 'Information we collect',
      body: [
        'Information you give us. When you use our Contact, Start a Project or Support forms, you may provide your name, email address, phone number, company, the service or industry you are interested in, project stage, budget, timeline, request type and your message. If you subscribe to updates, we receive your email address.',
        'Information stored in your browser. We use your browser\'s local storage to remember your light/dark theme preference, whether you have dismissed the cookie notice, and your newsletter email entry. This information stays on your device unless you submit it through a form.',
        'Messages you send us elsewhere. If you contact us through WhatsApp, email or phone, we receive whatever details you share with us in those channels.',
      ],
    },
    {
      heading: 'How we use your information',
      list: [
        'To respond to enquiries, support requests and project proposals.',
        'To discuss, scope, quote and deliver our services.',
        'To send updates or insights you have asked to receive. You can opt out at any time.',
        'To maintain, secure and improve our website and services.',
        'To meet legal, accounting or regulatory obligations.',
      ],
    },
    {
      heading: 'Service providers who process data for us',
      body: [
        'Our website forms are delivered by EmailJS, which passes the details you submit to our email inbox. Fonts are loaded from Google Fonts, which means your browser connects to Google servers and your IP address is visible to them. If you choose to chat through WhatsApp, that conversation is handled by WhatsApp under its own terms and privacy policy.',
        'Our website may also record anonymous usage events (for example, which buttons are clicked) to help us understand how the site is used. We do not sell your personal information, and we do not share it with third parties for their own marketing.',
      ],
    },
    {
      heading: 'Cookies and local storage',
      body: [
        'We do not use advertising cookies. The browser storage described above is used for essential preferences and convenience. You can clear it at any time through your browser settings; doing so will simply reset your preferences.',
      ],
    },
    {
      heading: 'How long we keep information',
      body: [
        'We keep enquiry and project information for as long as needed to respond to you, deliver services and meet our legal and business record-keeping needs. When it is no longer needed, we delete or anonymise it.',
      ],
    },
    {
      heading: 'Security',
      body: [
        'We take reasonable technical and organisational steps to protect the information we hold. However, no method of transmission or storage is completely secure. Please do not send passwords, payment card numbers, government ID numbers or other highly sensitive information through our public forms or messaging channels.',
      ],
    },
    {
      heading: 'Your choices and rights',
      body: [
        `You may ask us to access, correct, update or delete the personal information we hold about you, or to stop sending you updates, by emailing ${EMAIL}. We will respond within a reasonable time and may need to verify your identity first. Depending on where you live, you may have additional rights under local data protection laws.`,
      ],
    },
    {
      heading: 'Children',
      body: [
        'Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children. If you believe a child has given us information, contact us and we will delete it.',
      ],
    },
    {
      heading: 'Third-party links',
      body: [
        'Our site may link to other websites, such as social media or partner pages. We are not responsible for their content or privacy practices.',
      ],
    },
    {
      heading: 'International transfers',
      body: [
        'We are based in Sierra Leone, but our service providers may process data in other countries. By submitting information through our website, you understand that it may be transferred and processed outside your country.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy from time to time. The "Last updated" date at the top shows when it was last revised. Continued use of the website after a change means you accept the updated policy.',
      ],
    },
    {
      heading: 'Contact us',
      contact: true,
    },
  ],
};

const terms = {
  title: 'Terms of Service',
  seoDescription:
    'The terms that govern use of the NTS Digital Solutions website and the way we engage with clients on digital projects.',
  intro:
    'These Terms of Service ("Terms") govern your use of the NTS Digital Solutions website and our communications with you. By using the website you agree to these Terms. If you do not agree, please do not use it.',
  sections: [
    {
      heading: 'About NTS Digital Solutions',
      body: [
        'NTS Digital Solutions is a technology company based in Sierra Leone providing software development, web and mobile solutions, digital design and related consulting services.',
      ],
    },
    {
      heading: 'Use of the website',
      body: ['You agree to use the website lawfully and not to:'],
      list: [
        'Attempt to gain unauthorised access to the site, its servers or related systems.',
        'Introduce malware, scrape the site at a rate that disrupts it, or otherwise interfere with its operation.',
        'Submit false, misleading or unlawful information through our forms.',
        'Use the website to harass, defraud or harm others.',
      ],
    },
    {
      heading: 'Information on this website',
      body: [
        'The website is provided for general information. We work to keep it accurate, but we do not guarantee that content is complete, current or error-free. Descriptions of services, solutions, pricing guidance and timelines are indicative only and are not an offer or a binding quotation.',
      ],
    },
    {
      heading: 'Enquiries, proposals and projects',
      body: [
        'Submitting a form or contacting us does not create a client relationship or obligate either party to proceed. Services are provided only after both parties agree in writing to a proposal, statement of work or service agreement that sets out scope, fees, payment schedule, timelines, responsibilities, ownership and support terms.',
        'If a signed project agreement conflicts with these Terms, the project agreement takes priority for that project.',
      ],
    },
    {
      heading: 'Client responsibilities',
      body: [
        'For projects, clients agree to provide accurate information, timely feedback, and the content, access and approvals reasonably needed for delivery. Delays in these may affect timelines and costs. Clients are responsible for ensuring they have the rights to any materials they supply to us.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'The NTS Digital Solutions name, logo, website design, text, graphics and code are owned by us or our licensors and may not be copied or reused without permission, except for fair personal or internal business reference.',
        'Ownership of work created for a client is governed by the written project agreement. Unless that agreement says otherwise, we retain ownership of our pre-existing tools, frameworks and know-how, and grant clients the rights needed to use the delivered work once it has been paid for in full.',
      ],
    },
    {
      heading: 'Confidentiality',
      body: [
        'We treat non-public business information that clients share with us for a project as confidential and use it only to deliver the services. Formal confidentiality or non-disclosure terms can be agreed in writing where needed.',
      ],
    },
    {
      heading: 'Third-party services',
      body: [
        'Our work and website may rely on third-party platforms, hosting, APIs and tools. We are not responsible for their availability, changes, fees or terms, and your use of them is subject to their own policies.',
      ],
    },
    {
      heading: 'Disclaimer of warranties',
      body: [
        'To the fullest extent permitted by law, the website is provided "as is" and "as available" without warranties of any kind, express or implied, including fitness for a particular purpose and uninterrupted or error-free operation.',
      ],
    },
    {
      heading: 'Limitation of liability',
      body: [
        'To the fullest extent permitted by law, NTS Digital Solutions is not liable for indirect, incidental, special or consequential loss, or for loss of profits, data or business arising from your use of the website. For project services, liability is limited as set out in the applicable written agreement. Nothing in these Terms excludes liability that cannot be excluded by law.',
      ],
    },
    {
      heading: 'Privacy',
      body: [
        'How we handle personal information is described in our Privacy Policy, which forms part of these Terms.',
      ],
      privacyLink: true,
    },
    {
      heading: 'Changes to the website or Terms',
      body: [
        'We may change, suspend or discontinue any part of the website, and may update these Terms at any time. The "Last updated" date shows the latest revision. Continued use after changes means you accept them.',
      ],
    },
    {
      heading: 'Governing law',
      body: [
        'These Terms are governed by the laws of Sierra Leone. Any dispute that cannot be resolved by good-faith discussion will be subject to the jurisdiction of the courts of Sierra Leone, unless a project agreement states otherwise.',
      ],
    },
    {
      heading: 'Contact us',
      contact: true,
    },
  ],
};

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Legal({ type }) {
  const isPrivacy = type === 'privacy';
  const doc = isPrivacy ? privacy : terms;
  const other = isPrivacy
    ? { to: '/terms', label: 'Terms of Service' }
    : { to: '/privacy', label: 'Privacy Policy' };

  return (
    <>
      <SEO title={`${doc.title} | NTS Digital Solutions`} description={doc.seoDescription} />

      <section className="nts-page-hero bg-white py-20 text-slate-950 dark:bg-black dark:text-white">
        <div className="mx-auto max-w-4xl px-5">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-400">NTS Digital Solutions</p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">{doc.title}</h1>
          <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-16 text-slate-700 dark:text-slate-300">
        <p className="leading-8">{doc.intro}</p>

        <nav
          aria-label={`${doc.title} contents`}
          className="mt-10 rounded-2xl border border-slate-200 p-6 dark:border-white/10"
        >
          <h2 className="text-sm font-bold uppercase tracking-[.15em] text-slate-950 dark:text-white">Contents</h2>
          <ol className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {doc.sections.map((s, i) => (
              <li key={s.heading}>
                <a className="transition hover:text-brand-gold" href={`#${slugify(s.heading)}`}>
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-10 leading-8">
          {doc.sections.map((s, i) => (
            <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-28">
              <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">
                {i + 1}. {s.heading}
              </h2>
              {s.body?.map((p) => (
                <p key={p} className="mt-3">{p}</p>
              ))}
              {s.list && (
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {s.privacyLink && (
                <p className="mt-3">
                  Read the{' '}
                  <Link to="/privacy" className="font-semibold text-brand-gold underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              )}
              {s.contact && (
                <p className="mt-3">
                  Questions about this {isPrivacy ? 'policy' : 'document'}? Email{' '}
                  <a className="font-semibold text-brand-gold underline" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  , call{' '}
                  <a className="font-semibold text-brand-gold underline" href="tel:+23231034604">
                    +232 31 034 604
                  </a>
                  , or reach us at Mile 91, Sierra Leone.
                </p>
              )}
            </section>
          ))}
        </div>

        <p className="mt-14 border-t border-slate-200 pt-6 text-sm dark:border-white/10">
          See also our{' '}
          <Link to={other.to} className="font-semibold text-brand-gold underline">
            {other.label}
          </Link>{' '}
          and{' '}
          <Link to="/security" className="font-semibold text-brand-gold underline">
            Security
          </Link>{' '}
          page.
        </p>
      </article>
    </>
  );
}
