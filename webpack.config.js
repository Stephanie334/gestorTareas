const path = require('path');

module.exports = {
    entry: './src/index.js', //punto de entrada de la aplicacion
    output: {
        filename: 'bundle.js', //nombre del archivo de salida 
        path: path.resolve (__dirname, 'dist'), //carpeta de salida 
     },
module: {
    rules:[
        {
            test: /\.css$/,
            use: ['style-loader'], //loader para procesar un archivo
        },
        {
          test: /\.js%/, //
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
            options: {
                presets: ['@babel/presets-env'],
            },
          },   
        },
    ],
},
devtool: 'source-map',
dedServer: {
    contenBase: path.resolve (__dirname, 'dist'), //carpeta desde el cual el servidor agarra los archivos
    compress: true,
    port: 90000, //puesto del servidor del desarrollo 
  },
};