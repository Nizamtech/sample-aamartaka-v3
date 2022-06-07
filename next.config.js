const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    scope: "/app",
    sw: "/service-worker.js",
  },
  images: {
    domains: ["i.ibb.co"],
  },
});
