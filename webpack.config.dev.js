var webpack = require('webpack');
var path = require('path');

var ENTRY_FILE = path.resolve(__dirname, 'src/client/index.js');
var NODE_MODULES_FOLDER = path.resolve(__dirname, 'node_modules');
var OUTPUT_FOLDER = path.resolve(__dirname, 'dist/client');

module.exports = {

    entry: {
        client: [
            'webpack-hot-middleware/client',
            'react-hot-loader/patch',
            ENTRY_FILE
        ]
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: NODE_MODULES_FOLDER,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: NODE_MODULES_FOLDER,
                loader: 'babel-loader'
            }
        ]
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: OUTPUT_FOLDER,
        filename: 'bundle.js',
        publicPath: '/'
    }

};