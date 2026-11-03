# Aqinode · Link Index

The official Aqinode link page: products, platforms, and a single signal line for
what is currently in build.

**Live:** [aqinode-links.vercel.app](https://aqinode-links.vercel.app)

Built as a static React app with Vite. No backend, no UI framework, no icon
package. Fonts are self-hosted Geist and Geist Mono.

## Development

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
pnpm preview
```

## Structure

- `src/data.ts` is the only content source. Edit products and official
  platforms here; counts in the section headers update automatically.
- `src/components/ProductCard.tsx` renders a link when a product has a `url` and
  a static row when it does not. Products without a destination are deliberately
  not clickable.
- `src/lib/analytics.ts` sends outbound clicks to Plausible, Umami, or a
  GTM-style `dataLayer` if one is present. Add the provider script to
  `index.html` to turn it on. Nothing is sent otherwise.
- `src/styles.css` holds the design tokens, layout, and motion. The only
  saturated colours are the live and in-build status dots.

## Deployment

The project is linked to the GitHub repository and deploys to production on every
push to `main`. If the domain changes, update the canonical, `og:url`, and social
image URLs in `index.html`.

Optionally add the analytics provider script before deploying.

## Brand assets

The mark, wordmark treatment, and palette are derived from
[aqinode.com.ng](https://aqinode.com.ng). The page uses the official logo only;
no additional imagery is required.
