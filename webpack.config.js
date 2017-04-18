var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './build/index.js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2017']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
//            $: 'jquery',
//            jquery: 'jquery',
//            'window.jQuery': 'jquery',
            jQuery: 'jquery',
            _: 'lodash'
        })
    ]
};
