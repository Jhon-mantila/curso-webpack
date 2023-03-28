const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js'],
        alias: {
           '@utils': path.resolve(__dirname, 'src/utils/'),  // para los alias @
           '@templates': path.resolve(__dirname, 'src/templates/'),  // para los alias @
           '@styles': path.resolve(__dirname, 'src/styles/'),  // para los alias @
           '@images': path.resolve(__dirname, 'src/assets/images/'),  // para los alias @
        }
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
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                /*test: /\.(woff|woff2)$/,
                use:{
                    loader: "url-loader",
                    options: {// O LE PASAMOS UN BOOLEANOS TRUE O FALSE
                        limit: false, // Habilita o deshabilita la transformación de archivos en base64
                        mimetype:"aplication/font-woff",// Especifica el tipo MIME con el que se alineará el archivo. // Los MIME Types (Multipurpose Internet Mail Extensions)
                        // son la manera standard de mandar contenido a través de la red.
                        name:"[name].[ext]", // EL NOMBRE INICIAL DEL ARCHIVO + SU EXTENSIÓN // PUEDES AGREGARLE [name]hola.[ext] y el output del archivo seria 
                        outputPath: "./assets/fonts/",// EL DIRECTORIO DE SALIDA (SIN COMPLICACIONES)
                        publicPath: "./assets/fonts/",// EL DIRECTORIO PUBLICO (SIN COMPLICACIONES)
                        esModule: false, // AVISAR EXPLICITAMENTE SI ES UN MODULO
                    }
                }*/
                //apartir de webpack 5.
                test: /\.(woff|woff2)$/i,  // Tipos de fuentes a incluir
                type: 'asset/resource',  // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
                generator: {
                filename: './assets/fonts/[hash][ext][query]',  // Directorio de salida
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        }),
        new Dotenv(),
    ],
   
}