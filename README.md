# leodelmiro — personal site

Personal site in English (`/`) and Portuguese (`/pt`), built with Next.js as a static export.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static HTML in out/
```

`out/` can be deployed to Vercel, GitHub Pages or any static host.

## Content

All copy lives in `src/content/en.ts` and `src/content/pt.ts`, typed by `src/content/types.ts`. Change the text there; components in `src/components/` only render it. The resumes served by the download button are in `public/`.
