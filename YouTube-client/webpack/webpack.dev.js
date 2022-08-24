const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const publicPath = '/';

module.exports = {
  mode: 'development',
  output: {
    publicPath: publicPath,
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
    compress: true,
  },
  module: {
    rules: [
      // Styles
      {
        test: /\.(scss|sass|css)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.BASENAME': JSON.stringify(publicPath),
    }),
  ],
};
