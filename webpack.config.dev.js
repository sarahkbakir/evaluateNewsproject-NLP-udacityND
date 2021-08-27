
// const webpack = require('webpack')
// const HtmlWebPackPlugin = require("html-webpack-plugin")
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const WorkboxPlugin = require('workbox-webpack-plugin');


// module.exports = {
//   entry: "./src/client/index.js",
//   output: {
//     filename: 'main.[contenthash].js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   mode: "development",
//   devtool: "source-map",
  
//   module: {
//     rules: [
//       {
//         // Add babel Loader that match js files as development
//         test: "/.js$/",
//         exclude: /node_modules/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.scss$/,
//         //these loaders are needed for :
//         // Inject styles into DOM
//         // Turns css into commonjs
//         // converting sass => css
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test:/\.html$/,
//         use:['html-loader']
//       }
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./src/client/views/index.html",
//       filename: "./index.html",
//     }),
//     new CleanWebpackPlugin({
//       // Simulate the removal of files
//       dry: true,
//       // Write Logs to Console
//       verbose: true,
//       // Automatically remove all unused webpack assets on rebuild
//       cleanStaleWebpackAssets: true,
//       protectWebpackAssets: false
//   }),
//   new WorkboxPlugin.GenerateSW(),
//   ]
// };
const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [{
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WorkboxPlugin.GenerateSW()
    ]
}