var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var ENTRY_FILE = path.resolve(__dirname, 'src/client/index.js');
var NODE_MODULES_FOLDER = path.resolve(__dirname, 'node_modules');
var OUTPUT_FOLDER = path.resolve(__dirname, 'dist/client');

module.exports = {

    entry: {
        client: ENTRY_FILE
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
        new CleanWebpackPlugin(OUTPUT_FOLDER),
        new UglifyJsPlugin()
    ],

    output: {
        path: OUTPUT_FOLDER,
        filename: 'bundle.js'
    }

};