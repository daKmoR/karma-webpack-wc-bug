/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

class KarmaSyncPlugin {
  constructor(options) {
    this.karmaEmitter = options.karmaEmitter;
  }

  apply(compiler) {
    compiler.hooks.done.tap('KarmaSyncPlugin', stats => {
      console.log(stats.toString({
        chunks: false,  // Makes the build much quieter
        colors: true    // Shows colors in the console
      }));
      // all files are avaliable via stats.toJson().assets
      this.notifyKarmaAboutChanges();
    });
  }

  notifyKarmaAboutChanges() {
    // this.karmaEmitter.refreshFiles();
  }
}

const webpackOptions = {
  mode: 'development',
  entry: {
    one: path.resolve(__dirname) + '/foo-one.js',
    two: path.resolve(__dirname) + '/foo-two.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname) + '/dist',
  },
  plugins: [
    new KarmaSyncPlugin({ karmaEmitter: true })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
};

class KarmaWebpack {
  constructor() {
    this.bundle();
  }

  bundle() {
    const compiler = webpack(webpackOptions);

    compiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      const info = stats.toJson();
      if (stats.hasErrors()) {
        console.error(info.errors);
      }
      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
    });
  }
}

new KarmaWebpack();
