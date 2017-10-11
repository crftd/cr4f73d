const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = `${__dirname}/src`;
const outputPath = `${__dirname}/dist`;
const index = `${sourcePath}/index.pug`;
const styles = `${sourcePath}/styles/main.pcss`;


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
    filename: '[name].js',
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
              query: {
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
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
    ],
  },
  plugins: [
    extractStyles,
    extractHtml,
  ],
};

module.exports = config;
