const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'test'),

    entry: {
        app: './app-test.js'
    },

    output: {
        filename: 'test-bundle.js',
        path: path.resolve(__dirname, 'test/bundle/')
    },

    target: 'node',

    watch: true,

    watchOptions: {
        ignored: /node_modules/
    },

    devtool: 'cheap-source-map'
}
