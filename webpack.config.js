module.exports = {
  // make sure to include babel-polyfill before /src/app
  // app.ts has a dependency on babel-polyfill because of async await
  entry: ['babel-polyfill', './src/app.ts'],

  // this will create a folder lib with a file bundle.js for us
  // bundle.js contains the babel-polyfill and our bundled application code
  output: {
    path: './lib',
    filename: 'bundle.js'
  },

  module: {
    // with loaders we can learn webpack to handle typescript files
    loaders: [
      { test: /\.ts?$/, loader: 'babel-loader!ts-loader' }
    ]
  }
};  