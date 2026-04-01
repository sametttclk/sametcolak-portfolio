import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Statik site çıktısı için şart
  basePath: '/sametcolak-portfolio',
  assetPrefix: '/sametcolak-portfolio', // CSS ve JS yollarını düzeltir
  images: {
    unoptimized: true, // GitHub Pages görsel optimizasyonunu desteklemez
  },
};

export default nextConfig;