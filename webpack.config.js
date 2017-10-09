const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = `${__dirname}/src/index.js`;
const outputPath = `${__dirname}/dist`;

const config = {
    entry: entry,
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(pug)$/, use: 'pug-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.pug'
    })]
};

module.exports = config;