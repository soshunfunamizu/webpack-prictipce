const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlguin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: './js/script.js',
    },
    module :{
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test : /\.(png|jpg|svg)/,
                type: 'asset/resource',
                generator : {
                    filename: 'img/[name][ext]'
                },
                use: [
                    //{
                    //    loader: 'file-loader',
                    //    options:{
                    //        esModule: false,
                    //        name: 'img/[name].[ext]',
                    //    },
                    //},
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        }),
        new HtmlWebpackPlguin({
            template: './src/templates/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}