import type { NextConfig } from "next";

// GitHub Pages'te klasör ismimiz
const repoName = 'sametcolak-portfolio';

const nextConfig: NextConfig = {
  output: 'export',
  // Sadece build sırasında (GitHub'da) bu yolları kullan
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;