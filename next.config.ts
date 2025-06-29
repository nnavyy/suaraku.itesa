import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    
    config.resolve.alias = {

      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'), // <- ini penting biar @/* bisa jalan
      '@components': path.resolve(__dirname, 'src/app/components'),
    };
    return config;
  },
};

export default nextConfig;
