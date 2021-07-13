module.exports = (env) => {
  const devConfig = require("./webpack.dev");
  const prodConfig = require("./webpack.prod");
  return env.dev ? devConfig : prodConfig;
};
