const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    hooks: "./lib/hooks/index.ts",
    css: "./lib/css/index.ts",
    theme: "./lib/theme/index.ts",
  },
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname),
    libraryTarget: "umd",
    library: "ucworks",
    globalObject: "this",
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        exclude: "/node_modules/",
        loader: "ts-loader",
      },
      {
        test: /\.svg$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  externals: [
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react",
      },
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom",
      },
      "@emotion/react": "@emotion/react",
    },
  ],
};
