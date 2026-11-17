# leodelmiro — personal site

Personal site and blog in English and Portuguese, built with Next.js as a static export.
Both languages share the same URLs: the static HTML is in English, and the **PT/EN** button in the
header switches the language in the browser (the choice is saved in `localStorage`).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build   # static HTML in out/
npm run lint
```

`out/` can be deployed to Vercel, GitHub Pages or any static host.

## Site content

All copy for the home page lives in `src/content/en.ts` and `src/content/pt.ts`, typed by
`src/content/types.ts`. Change the text there; components in `src/components/` only render it.
The resumes served by the download button are in `public/`.

## Blog

Posts are MDX files (Markdown that also accepts JSX) in `src/content/posts/`. Each post is a folder
named after its URL slug, with one file per language:

```
src/content/posts/
└── hello-world/        → /blog/hello-world
    ├── en.mdx
    └── pt.mdx
```

### Writing a new post

1. Create a folder with the slug, in lowercase with hyphens: `src/content/posts/my-new-post/`.
   The slug is the URL, so pick one and don't rename it after publishing.
2. Add `en.mdx` and `pt.mdx`. Each file starts with its metadata:

   ```mdx
   export const metadata = {
     title: "My new post",
     description: "One sentence shown in the post list and in search results.",
     date: "2026-11-20",
   };

   First paragraph of the post…

   ## A section

   More text, **bold**, [links](https://example.com), lists, tables and code blocks.
   ```

   - `title`, `description` and `date` (`YYYY-MM-DD`) are required; the build fails with a clear
     message if one is missing.
   - The date is taken from `en.mdx` (or `pt.mdx` if there is no English version) and orders the list,
     newest first.
   - Start sections at `##`: the post title is already the page's `#`.
3. Run `npm run dev` and open `http://localhost:3000/blog` to review it in both languages.
4. Commit and push. The post appears on `/blog` and at `/blog/<slug>`.

### Only one language?

Both files are recommended, but a post can have just one. Readers of the other language see the
version that exists, with a note saying the post is only available in that language. Add the
translation later by creating the missing file in the same folder.

### What you can use in a post

- Standard Markdown plus GitHub extras (tables, `~~strikethrough~~`, task lists, autolinks) via
  `remark-gfm`.
- Code blocks with a language tag (` ```kotlin `). There is no syntax highlighting yet.
- Images: put the file in `public/blog/<slug>/` and reference it as
  `![Description of the image](/blog/<slug>/diagram.png)`. Always write the description, since it is
  what screen readers read.
- React components: `import { Something } from "@/components/Something"` at the top of the file,
  then `<Something />` in the text.

The styles for each Markdown element (headings, paragraphs, code, tables…) are in
`src/mdx-components.tsx`.

### How it works

| File | Role |
| --- | --- |
| `src/content/posts.ts` | Finds the post folders and loads each language's MDX and metadata at build time. |
| `src/app/blog/page.tsx` | `/blog`, the post list. |
| `src/app/blog/[slug]/page.tsx` | `/blog/<slug>`; one static page per folder, via `generateStaticParams`. |
| `src/components/blog.tsx` | Client components that show the reader's language, with a fallback to the other one. |
| `src/components/useLocale.ts` | The language choice, shared by the home page and the blog. |
| `src/components/SiteShell.tsx` | Header (with the language button), main area and footer for every page. |

## Deploy

The site is deployed on Vercel. With the Vercel project connected to the GitHub repository, every push
to `main` builds and publishes the site, and every other branch or pull request gets a preview URL.
