var path = require('path');
var nodeExternals = require('webpack-node-externals');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var ENTRY_FILE = path.resolve(__dirname, 'src/server/index.js');
var NODE_MODULES_FOLDER = path.resolve(__dirname, 'node_modules');
var DIST_FOLDER = path.resolve(__dirname, 'dist');
var OUTPUT_FOLDER = path.resolve(__dirname, 'dist/server');

module.exports = {

    entry: {
        server: ENTRY_FILE
    },

    target: 'node',
    externals: [nodeExternals()],

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
        new CleanWebpackPlugin(DIST_FOLDER),
        new UglifyJsPlugin()
    ],

    output: {
        path: OUTPUT_FOLDER,
        filename: 'index.js'
    }

};