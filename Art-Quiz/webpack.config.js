const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    // assetModuleFilename: "assets/[name][ext][query]",
  },
  // mode: "development",
  mode: "production",
  devServer: {
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/icon", to: "./assets/icon" },
        { from: "./src/assets/img/category", to: "./assets/img/category" },
        { from: "./src/assets/img/paintings", to: "./assets/img/paintings" },
        // { from: "./src/assets", to: "./assets" },
        // { from: "./src/styles", to: "./styles" },
      ],
    }),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext][query]",
        },
      },
      // Шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // MP3
      {
        test: /.mp3$/,
        type: "asset/resource",
        generator: {
          filename: "assets/audio/[name][ext][query]",
        },
      },
    ],
  },
};
