const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const publicPath = '/My-projects/YouTube-client-react/';

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', './build'),
    publicPath: publicPath,
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    // assetModuleFilename: '[path][name][ext]',
    clean: true,
  },
  target: 'browserslist',
  devtool: 'source-map',
  module: {
    rules: [
      //* Styles
      {
        test: /\.(sa|s?c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.css',
      chunkFilename: '[name].[chunkhash].chunk.css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BASENAME': JSON.stringify(publicPath),
    }),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
