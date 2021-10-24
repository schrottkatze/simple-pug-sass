const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/scripts/app.ts",
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.pug$/,
        use: ["html-loader", "pug-html-loader"],
      },
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    new HtmlWebPackPlugin({
      template: "./src/pages/index.pug",
      filename: "./index.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/pages/about.pug",
      filename: "./about.html",
    }),
    // add one for each page
  ],
};
