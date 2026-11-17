import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Static HTML in out/, deployable to GitHub Pages, Vercel or any static host.
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    // Plugins go by name so Turbopack can pass them to its Rust side.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
