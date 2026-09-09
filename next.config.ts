import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "Quantum_Flashcards";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}` : "",
};

export default nextConfig;
