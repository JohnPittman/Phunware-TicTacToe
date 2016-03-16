'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.min.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        }]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: true })
    ]
};
