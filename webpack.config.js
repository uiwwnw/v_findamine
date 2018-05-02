const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + 'dist/'
    },
    devtool: 'source-map', // any 'source-map'-like devtool is possible
    module: {
        loaders: [
            {
                test: /\.scss|css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader', options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader', options: {
                        sourceMap: true
                    }
                }]
            }
            , {
                test: /\.(jpg|png)$/,
                loader: [
                    'file-loader?name=./dist/img/[hash].[ext]'
                ]
            }
            , {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
            , {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                loader: 'file-loader?name=./dist/font/[hash].[ext]'
            }
        ]
    },

};

// if (process.env.NODE_ENV === 'production') {
//     config.devtool = false;
//     config.plugins = [
//         new webpack.optimize.OccurenceOrderPlugin(),
//         new webpack.optimize.UglifyJsPlugin({ comments: false }),
//         new webpack.DefinePlugin({
//             'process.env': { NODE_ENV: JSON.stringify('production') }
//         })
//     ];
// }


module.exports = config;