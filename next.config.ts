import type { NextConfig } from "next";

const repoName = 'sametcolak-portfolio';
// GitHub Actions'da hangi branşta olduğumuzu anlamak için (Opsiyonel ama garanti)
const isStaging = process.env.GITHUB_REF_NAME === 'dev';

const nextConfig: NextConfig = {
  output: 'export',
  // Eğer staging (dev) ise path: /repo/dev, değilse (main) : /repo
  basePath: isStaging ? `/${repoName}/dev` : `/${repoName}`,
  assetPrefix: isStaging ? `/${repoName}/dev/` : `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;