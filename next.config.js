const withTM = require("next-transpile-modules")(["gsap"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withTM({ nextConfig });
