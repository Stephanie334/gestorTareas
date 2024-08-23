const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //punto de entrada de la aplicacion
  output: {
    filename: 'bundle.js', //nombre del archivo de salida 
    path: path.resolve(__dirname, 'dist'), //carpeta de salida 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], //loader para procesar un archivo
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 90000, //puesto del servidor del desarrollo 
  },
};