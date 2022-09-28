const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
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
    //   css: path.resolve(__dirname, '..', './src/assets/styles'),
    //   '@': path.resolve(__dirname, '..', './src/'),
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      favicon: path.resolve(__dirname, '..', './public/favicon.ico'),
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, '..', './public/images/react-logo.jpg') }],
    }),
  ],
  stats: 'errors-only',
};
