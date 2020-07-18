
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        { 
          test: [/\.(js|jsx)$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    },
    plugins: [
      new Dotenv({
        path: './.env.dev'
      })
    ]
  };