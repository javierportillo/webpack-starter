const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './app.js',
        other: './other/other.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    context: path.resolve(__dirname, 'src'),

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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'app.pug',
            filename: 'index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: 'other/other.pug',
            filename: 'other/index.html',
            chunks: ['other']
        }),
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
        })
    ],

    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist')
    },

    devtool: "source-map"
}
