import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, deployable to GitHub Pages, Vercel or any static host.
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
