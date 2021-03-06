const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = `${__dirname}/src`;
const outputPath = `${__dirname}/dist`;
const index = `${sourcePath}/index.pug`;
const styles = `${sourcePath}/styles/main.pcss`;

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const devServerPort = 3000;

const extractStyles = new ExtractTextPlugin('[name].css');
const extractHtml = new ExtractTextPlugin('[name].html');

const config = {
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false,
  },
  entry: { index, styles },
  output: {
    path: outputPath,
    publicPath: isProd ? '/cr4f73d/' : `//localhost:${devServerPort}/`,
    filename: '[name].js',
  },
  devServer: {
    contentBase: sourcePath,
    host: 'localhost',
    publicPath: `//localhost:${devServerPort}/`,
    port: devServerPort,
    compress: isProd,
    inline: !isProd,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: true,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      watchContentBase: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: extractHtml.extract({
          use: [
            { loader: 'html-loader' },
            {
              loader: 'pug-html-loader',
              query: {
                pretty: true,
                exports: false,
              },
            },
          ],
        }),
      },
      {
        test: /\.pcss$/,
        include: [sourcePath],
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: isProd,
                modules: false,
                sourceMaps: true,
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              minimize: isProd,
            },
          },
        }),
      },
      {
        test: /\.woff$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.png$/,
        use: [
          'url-loader?limit=10000',
          {
            loader: 'img-loader',
            options: {
              enabled: true,
              pngquant: {
                floyd: 0.7,
                speed: isProd ? 2 : 10,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    extractStyles,
    extractHtml,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
