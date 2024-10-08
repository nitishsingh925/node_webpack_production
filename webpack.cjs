const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, ".prod.env") });

module.exports = {
  mode: "production",
  target: "node",
  devtool: "source-map",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "index.cjs", // Updated to reflect production build
  },
  plugins: [new webpack.EnvironmentPlugin(Object.keys(process.env))],
  optimization: {
    minimize: true, // Enable minification
  },
  ignoreWarnings: [
    {
      module: new RegExp("node_modules/express/lib/view.js"),
      message: / the request of a dependency is an expression/,
    },
  ],
};
