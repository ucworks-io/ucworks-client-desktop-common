const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "./lib/examples/index.tsx",
    "./lib/hooks/index.ts",
    "./lib/css/index.ts",
    "./lib/theme/index.ts",
  ],
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
