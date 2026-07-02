import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Static export only at build time — not during dev (causes RSC manifest race conditions)
  ...(isProd ? { output: 'export', distDir: 'out' } : {}),
  trailingSlash: false,
  allowedDevOrigins: ['*.janeway.replit.dev', '*.replit.dev', '*.replit.app'],
};

export default nextConfig;
