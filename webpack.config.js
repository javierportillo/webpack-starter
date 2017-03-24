const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// EXTRACT APP ENTRY SASS TO CSS
const extractAppCss = new ExtractTextPlugin('[name].bundle.css')

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
                        presets: ['env', 'stage-3'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.sass$/,
                use: extractAppCss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
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
        extractAppCss
    ],

    devServer: {
        publicPath: '/dist/'
    }
}
