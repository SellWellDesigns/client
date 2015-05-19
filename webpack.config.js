'use strict';

var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    output: {
        filename: "js/[name].js",
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css", {
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: "Application",
            hash: true,
            template: './src/index.html'
        }) //,
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // })
    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }, {
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.jade$/,
            loader: 'jade'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        publicPath: "/",
        stats: {
            colors: true
        }
    }
}