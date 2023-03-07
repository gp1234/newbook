/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/_static/build/",
  server: "./server.js",
  serverBuildPath: "server/index.js",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  future: {
    unstable_tailwind: true,
  },
};
