import type { MDXComponents } from "mdx/types";

// Styles for the HTML that Markdown produces in blog posts. The post title is the page's <h1>,
// so posts start their sections at `##`.
const components = {
  h2: (props) => <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight" {...props} />,
  h4: (props) => <h4 className="mt-6 mb-2 font-semibold" {...props} />,
  p: (props) => <p className="my-5 text-lg leading-relaxed" {...props} />,
  a: (props) => (
    <a className="font-medium text-accent underline decoration-1 underline-offset-4 hover:decoration-2" {...props} />
  ),
  ul: (props) => <ul className="my-5 list-disc space-y-2 pl-6 text-lg marker:text-accent" {...props} />,
  ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-6 text-lg marker:text-muted" {...props} />,
  li: (props) => <li className="leading-relaxed pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-6 border-l-2 border-accent pl-5 text-muted italic" {...props} />
  ),
  hr: (props) => <hr className="my-12 border-border" {...props} />,
  // Inline code; code blocks reset these styles through the `pre` below.
  code: (props) => <code className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[0.9em]" {...props} />,
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[1em]"
      // Scrollable regions must be reachable by keyboard (WCAG 2.1.1).
      tabIndex={0}
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-base" {...props} />
    </div>
  ),
  th: (props) => <th className="border-b border-border px-3 py-2 font-semibold" {...props} />,
  td: (props) => <td className="border-b border-border px-3 py-2 align-top" {...props} />,
  img: ({ alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element -- static export has no image optimizer.
    <img alt={alt ?? ""} className="my-8 h-auto max-w-full rounded-lg border border-border" {...props} />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
