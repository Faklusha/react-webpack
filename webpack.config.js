const path = require('path');
var webpack = require('webpack');

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
                    use: [
                        {loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProd
                            }
                        }
                    ]
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
        devServer: {
            open: true,
            progress: true
        },
        resolve: {
            modules: ['node_modules'],
            extensions: [".js", ".json", ".jsx", ".css"]
        },
        watch: !isProd
    };
};