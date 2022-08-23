const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', './build'),
    publicPath: '',
    filename: '[name].[contenthash].bundle.js',
    // assetModuleFilename: '[path][name][ext]',
    clean: true,
  },
  target: 'browserslist',
  devtool: 'source-map',
  module: {
    rules: [
      // Styles
      {
        test: /\.(scss|sass|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BASENAME': JSON.stringify('/My-projects/YouTube-client-react/'), //github repository (for deploy)
    }),
    // new BundleAnalyzerPlugin(),
  ],
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
