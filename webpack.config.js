const path = require('path');

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
    }
}