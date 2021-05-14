const withImages = require("next-images");

const withPlugins = require("next-compose-plugins");

const nextConfig = {
    images: {
        loader: "imgix",
        path: "/",
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = withPlugins([[withImages]], nextConfig);
