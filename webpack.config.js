module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: 'bundle.js',
    path: './docs',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
