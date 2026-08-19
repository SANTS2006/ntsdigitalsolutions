import { Helmet } from 'react-helmet-async';
import { useTheme } from '../../context/useTheme.js';

export default function SEO({
  title = 'NTS Digital Solutions | Empowering Businesses Through Digital Innovation',
  description = 'NTS Digital Solutions builds custom digital solutions that help businesses and organizations work better and grow.',
  url = 'https://ntsdigitalsolutions.com',
  image = '/og-image.webp',
  type = 'website',
}) {
  const { isDark } = useTheme();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NTS Digital Solutions',
    url,
    description,
    telephone: '+232 31 034 604',
    email: 'hello@ntsdigitalsolutions.com',
    areaServed: 'Sierra Leone',
    slogan: 'Empowering Businesses Through Digital Innovation',
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="theme-color" content={isDark ? '#020617' : '#f8fafc'} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
