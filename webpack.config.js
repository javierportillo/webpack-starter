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
            }
        ]
    },

    devServer: {
        publicPath: '/dist/'
    }
}
