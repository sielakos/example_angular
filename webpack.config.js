module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /^src[\w\W]*\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /^src[\w\W]*\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};