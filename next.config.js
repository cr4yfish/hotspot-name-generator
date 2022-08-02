

const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");

const isProd = process.env.NODE_ENV === "production";

module.exports = withPlugins([
  [withPWA], 
  {
    pwa: {
      dest: 'public',
    },
     reactStrictMode: true,
  },
  assetPrefix: isProd ? "/hotspot-gen/" : "",
 
])
