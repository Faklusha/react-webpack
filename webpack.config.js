const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    const isProd = env === 'production';

    return {
        context: __dirname,
        devtool: isProd ? "none" : "source-map",
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.(css)$/,
                    use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})

                },
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                },
                {
                    test: /\.js?$/,
                    exclude: /(node_modules)/,
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin("bundle.css"),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            open: true,
            progress: true,
            hot: true
        },
        resolve: {
            modules: ['node_modules'],
            extensions: [".js", ".json", ".jsx", ".css"]
        },
        watch: !isProd
    };
};