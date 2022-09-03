const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.scss$/;
const { DefinePlugin } = require('webpack');

module.exports = {
  // этот билд будет приготовлен только для node.js
  // бандл вебпака для node отличается от бандла от браузера
  // отличается тем что не взаймодействует внутри себя с window и документом и делает много разных вещей чтобы работать внутри node.sj
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json',],

  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              onlyLocals: true,
            }
          },
          'sass-loader',
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: [ 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static',
              name: '[path][name].[ext]',
            }
          },
        ],
      },
    ]
  },
  optimization: {
    minimize: false,
  },
  plugins: [ new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`})]
};
