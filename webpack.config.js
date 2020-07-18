const webpack = require('webpack');

module.exports = (env) => {
  
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
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
      new webpack.DefinePlugin(envKeys)
    ]
  }
  };