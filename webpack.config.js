const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('./src/styles/main.pcss');

const sourcePath = `${__dirname}/src`;
const outputPath = `${__dirname}/dist`;
const entry = `${sourcePath}/index.js`;


const config = {
  entry: { main: entry },
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.pug$/, use: 'pug-loader' },
      {
        test: /\.pcss$/,
        include: [sourcePath],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMaps: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
    ],
  },
  plugins: [

    new ExtractTextPlugin('[name].css'),
  ],
};

module.exports = config;
