const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    minChunks: 1,
                }
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};
