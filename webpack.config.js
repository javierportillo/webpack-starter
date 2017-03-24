const path = require('path');

module.exports = {
    entry: {
        main: './src/app.js'
    },

    output: {
        filename: 'bundle.js',
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
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].html'
                        }
                    },
                    {loader: 'extract-loader'},
                    {loader: 'html-loader'},
                    {loader: 'pug-html-loader'}
                ]
            }
        ]
    },

    devServer: {
        publicPath: '/dist/'
    }
}
