const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                default: {
                    enforce: true,
                    minChunks: 1,
                }
            },
        },
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin(),
    ],
};
