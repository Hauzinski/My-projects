const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './src/index.tsx',
  module: {
    rules: [
      // TypeScript and JavaScript
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      // Images and Icons
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'assets/img/[name][ext]'
        // },
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: 'asset/inline',
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
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    // alias: {
    //   css: './src/assets/styles',
    //   '@': './src/',
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new Dotenv(),
    new CopyPlugin({
      patterns: [{ from: './public/images/react-logo.jpg' }],
    }),
  ],
  stats: 'errors-only',
};
