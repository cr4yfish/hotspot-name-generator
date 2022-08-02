

const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/hotspot-gen/" : "",
}