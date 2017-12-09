var path = require('path');
var nodeExternals = require('webpack-node-externals');

var ENTRY_FILE = path.resolve(__dirname, 'src/server/index.js');
var NODE_MODULES_FOLDER = path.resolve(__dirname, 'node_modules');
var DIST_FOLDER = path.resolve(__dirname, 'dist/server');

module.exports = {

    entry: {
        server: ENTRY_FILE
    },

    target: 'node',
    externals: [nodeExternals()],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: NODE_MODULES_FOLDER,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: NODE_MODULES_FOLDER,
                loader: 'babel-loader'
            }
        ]
    },

    output: {
        path: DIST_FOLDER
        filename: 'index.js'
    }

}