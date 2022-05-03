const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) =>
  isDev
    ? {
        devServer: {
          open: true,
          port: 8080,
          hot: true,
          historyApiFallback: true,
          compress: true,
          // contentBase: path.resolve(__dirname, "./dist"), // Для статической директории
        },
      }
    : {};

module.exports = ({ development }) => ({
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[path][name][ext]',
  },
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  ...devServer(development),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './src/assets/icon', to: './src/assets/icon' },
        { from: './src/assets/img/toys', to: './src/assets/img/toys' },
        { from: './src/assets/audio', to: './src/assets/audio' },
      ],
    }),
    new ESLintPlugin({
      extensions: ['.tsx', '.ts', '.js'],
      exclude: 'node_modules',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      // JavaScript
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ["babel-loader"],
      // },

      // JavaScript TS Bable
      {
        test: /\.(js|jsx|tsx|ts)$/i,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },

      // Изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'assets/img/[name][ext]'
        // },
      },

      // Шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: 'asset/inline',
      },

      // CSS, PostCSS, Sass
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          development ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      // MP3
      {
        test: /.mp3$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'assets/audio/[name][ext]',
        // },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.tsx', '.ts', '.js', '.jsx'],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
