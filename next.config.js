/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  env: {
    INI_ENV: process.env.INI_ENV
  }
};

module.exports = nextConfig;
