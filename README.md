# NTS Digital Solutions V2.1

## What's included

- Site-wide Light / Dark mode with saved preference and system preference fallback.
- Theme toggle in desktop and mobile navigation.
- Theme-aware browser color scheme and SEO theme-color metadata.
- Initial theme bootstrapping in `index.html` to reduce theme flash.
- Homepage is eagerly loaded while secondary routes remain code-split.
- Below-the-fold homepage content uses `content-visibility: auto` to reduce initial rendering work.
- Removed Framer Motion from the always-visible navbar menu interaction and replaced it with a lightweight CSS transition.
- Optimized image loading with lazy loading, decoding hints, and reserved dimensions/aspect ratios where appropriate.
- Removed unused source image assets.
- Responsive dark-theme treatment for shared surfaces, forms, cards, borders and text.
- Accessibility/lint cleanup.

## Local setup

```bash
npm install
npm run dev
```

## Production test

```bash
npm run build
npm run preview
```

Run Lighthouse against the `vite preview` URL rather than the development server for the production performance score.

## Environment variables

Keep the existing `.env` values for EmailJS. Do not commit real credentials or secrets.

## Theme behavior

The site first uses a saved `nts-theme` preference when available. If no preference exists, it follows the visitor's system light/dark preference. The visitor can override it with the navbar theme toggle.
