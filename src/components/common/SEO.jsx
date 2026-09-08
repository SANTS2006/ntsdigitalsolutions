import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/useTheme.js';

const SITE_URL = 'https://ntsdigitalsolutions.com';
const SITE_NAME = 'NTS Digital Solutions';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

export default function SEO({
  title = 'NTS Digital Solutions | Empowering Businesses Through Digital Innovation',
  description = 'NTS Digital Solutions builds custom digital solutions that help businesses and organizations work better and grow.',
  url,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
}) {
  const { isDark } = useTheme();
  const location = useLocation();

  const pathname = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
  const canonicalUrl = url || `${SITE_URL}${pathname}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/main.webp`,
    description,
    telephone: '+232 31 034 604',
    email: 'hello@ntsdigitalsolutions.com',
    areaServed: {
      '@type': 'Country',
      name: 'Sierra Leone',
    },
    slogan: 'Empowering Businesses Through Digital Innovation',
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };

  const schemas = [organizationSchema, pageSchema];

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'} />
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${title}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="theme-color" content={isDark ? '#000000' : '#ffffff'} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
