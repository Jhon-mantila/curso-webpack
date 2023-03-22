const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module:{
        rules: [
            {
            test: /\.m?js$/, // Test declara que extensión de archivos aplicara el loader
            exclude: /node_modules/, // Exclude permite omitir archivos o carpetas especificas
            use:{
                loader:'babel-loader' // Use es un arreglo u objeto donde dices que loader aplicaras
                }
            },
            {
            test:/\.css|.styl$/i,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'stylus-loader'
            ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
    ]
}