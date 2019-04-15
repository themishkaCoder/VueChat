const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const LiveReloadPlugin = require("webpack-livereload-plugin")
const WebpackDevServer = require("webpack-dev-server")
const webpack = require("webpack")

module.exports = {
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    module: {
        rules:[
            {
                test: /\scss\.scss$/,
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: ["css-loader", MiniCssExtractPlugin, "sass-loader"]
                // }),
                use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                include: [
                    path.resolve(__dirname, 'src/scss/style.scss'),
                ]
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin('style.css')
        // new MiniCssExtractPlugin("style.css")
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new webpack.HotModuleReplacementPlugin(),

    ],
    optimization: {
        minimizer: [ new OptimizeCSSAssetsPlugin({})],
    },
    devServer: {
        // contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
        contentBase: './dist',
        hot: true,
        // hotOnly: true,
        inline: true,
        watchContentBase: true,
        publicPath: '/',
      } 
}