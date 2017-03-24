const isProduction = process.env.NODE_ENV === 'production';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// EXTRACT APP ENTRY SASS TO CSS
const extractAppCss = new ExtractTextPlugin({
    filename: '[name].bundle.css',
    disable: !isProduction
});

module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {modules: false}], 'stage-3'],
                        plugins: ['transform-runtime', 'check-es2015-constants']
                    }
                }
            },
            {
                test: /\.sass$/,
                use: isProduction ? extractAppCss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }) : ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/app.pug',
            filename: 'app.html'
        }),
        extractAppCss,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],

    devServer: {
        publicPath: '/dist/',
        hot: true
    }
}
