const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}