export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', name, params);
  if (import.meta.env.DEV) console.debug('[NTS analytics]', name, params);
}
