require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {// see http://vuejs-templates.github.io/webpack for documentation.
var path = __webpack_require__(0);

module.exports = {
  build: {
    env: __webpack_require__(10),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: __webpack_require__(34),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var path = __webpack_require__(0);
var config = __webpack_require__(1);
var ExtractTextPlugin = __webpack_require__(11);

exports.assetsPath = function (_path) {
  var assetsSubDirectory =  false ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
  options = options || {};

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: "development" === 'production',
      sourceMap: options.sourceMap
    }

    // generate loader string to be used with extract text plugin
  };function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader];
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      });
    } else {
      return ['vue-style-loader'].concat(loaders);
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = [];
  var loaders = exports.cssLoaders(options);
  for (var extension in loaders) {
    var loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    });
  }
  return output;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pino__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pino___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pino__);


var l = __WEBPACK_IMPORTED_MODULE_0_pino___default()({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

/* harmony default export */ __webpack_exports__["a"] = (l);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  NODE_ENV: '"production"'
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(0);
var utils = __webpack_require__(4);
var config = __webpack_require__(1);
var vueLoaderConfig = __webpack_require__(35);

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:  false ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('test')],
      options: {
        formatter: __webpack_require__(36)
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test')]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_env__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_server__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(50);




/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1__common_server__["a" /* default */]().router(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */]).listen(process.env.PORT));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);


__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_os__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_cookie_parser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swagger__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logger__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_helmet__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_helmet__);











var Webpack = __webpack_require__(5);
var webpackConfig = __webpack_require__(27);
var compiler = Webpack(webpackConfig);

var app = new __WEBPACK_IMPORTED_MODULE_2_express___default.a();

var ExpressServer = function () {
    function ExpressServer() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ExpressServer);

        var root = __WEBPACK_IMPORTED_MODULE_3_path__["normalize"](__dirname + '/../..');
        app.set('appPath', root + 'src');
        app.use(__WEBPACK_IMPORTED_MODULE_10_helmet___default()());
        app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser__["json"]());
        app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser__["urlencoded"]({ extended: true }));
        app.use(__WEBPACK_IMPORTED_MODULE_7_cookie_parser___default()(process.env.SESSION_SECRET));
        app.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static(root + '/dist'));
        app.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static(root + '/public'));
        app.use(__webpack_require__(48)(compiler, {
            publicPath: webpackConfig.output.publicPath,
            contentBase: helpers('src'),
            hot: true,
            inline: true,
            quiet: false,
            noInfo: false,
            lazy: false,
            stats: {
                chunks: false,
                chunkModules: false,
                colors: true
            }
        }));

        app.use(__webpack_require__(49)(compiler, {
            path: '/__webpack_hmr'
        }));
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ExpressServer, [{
        key: 'router',
        value: function router(routes) {
            Object(__WEBPACK_IMPORTED_MODULE_8__swagger__["a" /* default */])(app, routes);
            return this;
        }
    }, {
        key: 'listen',
        value: function listen() {
            var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.env.PORT;

            var welcome = function welcome(p) {
                return function () {
                    return __WEBPACK_IMPORTED_MODULE_9__logger__["a" /* default */].info('up and running in ' + ("development" || 'development') + ' @: ' + __WEBPACK_IMPORTED_MODULE_6_os__["hostname"]() + ' on port: ' + p + '}');
                };
            };
            __WEBPACK_IMPORTED_MODULE_5_http__["createServer"](app).listen(port, welcome(port));
            return app;
        }
    }]);

    return ExpressServer;
}();

/* harmony default export */ __webpack_exports__["a"] = (ExpressServer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server/common"))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);



/* harmony default export */ __webpack_exports__["a"] = (function (app, routes) {
  __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware___default()(__WEBPACK_IMPORTED_MODULE_1_path__["join"](__dirname, 'Api.yaml'), app, function (err, mw) {
    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(mw.metadata());
    app.use(mw.files({
      // Override the Express App's case-sensitive 
      // and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false
    }, {
      useBasePath: true,
      apiPath: process.env.SWAGGER_API_SPEC
      // Disable serving the "Api.yaml" file
      // rawFilesPath: false
    }));

    app.use(mw.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }));

    // These two middleware don't have any options (yet)
    app.use(mw.CORS(), mw.validateRequest());

    // Error handler to display the validation error as HTML
    app.use(function (err, req, res, next) {
      // eslint-disable-line no-unused-vars, no-shadow
      res.status(err.status || 500);
      res.send('<h1>' + (err.status || 500) + ' Error</h1>' + ('<pre>' + err.message + '</pre>'));
    });

    routes(app);
  });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server/common/swagger"))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("swagger-express-middleware");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("pino");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var _require$globals = __webpack_require__(28).globals,
    __DEV__ = _require$globals.__DEV__,
    __PROD__ = _require$globals.__PROD__,
    __TEST__ = _require$globals.__TEST__;

module.exports = function () {
    if (__DEV__) {
        return __webpack_require__(31);
    } else if (__PROD__) {
        return __webpack_require__(38);
    } else {
        throw new Error('Please check environment config');
    }
}();

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

var helpers = __webpack_require__(30);

var ENV = "development" || 'development';

module.exports = {
    env: ENV,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    globals: {
        'process.env': {
            'NODE_ENV': __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(ENV)
        },
        NODE_ENV: ENV,
        __DEV__: ENV === 'development',
        __PROD__: ENV === 'production',
        __TEST__: ENV === 'test'
    },
    outDir: helpers('dist'),
    publicPath: ENV === 'production' ? '/' : '/'
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(0);

var base = path.resolve(__dirname, '..');

var root = path.resolve.bind(path, base);

module.exports = root;
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

var utils = __webpack_require__(4);
var webpack = __webpack_require__(5);
var config = __webpack_require__(1);
var merge = __webpack_require__(6);
var baseWebpackConfig = __webpack_require__(12);
var HtmlWebpackPlugin = __webpack_require__(13);
var FriendlyErrorsPlugin = __webpack_require__(37);

// add hot-reload related code to entry chunks
__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  }), new FriendlyErrorsPlugin()]
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__(6);
var prodEnv = __webpack_require__(10);

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(4);
var config = __webpack_require__(1);
var isProduction = "development" === 'production';

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("eslint-friendly-formatter");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("friendly-errors-webpack-plugin");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(0);
var utils = __webpack_require__(4);
var webpack = __webpack_require__(5);
var config = __webpack_require__(1);
var merge = __webpack_require__(6);
var baseWebpackConfig = __webpack_require__(12);
var CopyWebpackPlugin = __webpack_require__(39);
var HtmlWebpackPlugin = __webpack_require__(13);
var ExtractTextPlugin = __webpack_require__(11);
var OptimizeCSSPlugin = __webpack_require__(40);

var env = config.build.env;

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
  // http://vuejs.github.io/vue-loader/en/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': env
  }), new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  }),
  // extract css into its own file
  new ExtractTextPlugin({
    filename: utils.assetsPath('css/[name].[contenthash].css')
  }),
  // Compress extracted CSS. We are using this plugin so that possible
  // duplicated CSS from different components can be deduped.
  new OptimizeCSSPlugin({
    cssProcessorOptions: {
      safe: true
    }
  }),
  // generate dist index.html with correct asset hash for caching.
  // you can customize output by editing /index.html
  // see https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: config.build.index,
    template: 'index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }),
  // keep module.id stable when vender modules does not change
  new webpack.HashedModuleIdsPlugin(),
  // split vendor js into its own file
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function minChunks(module, count) {
      // any required modules inside node_modules are extracted to vendor
      return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0;
    }
  }),
  // extract webpack runtime and module manifest to its own file in order to
  // prevent vendor hash from being updated whenever app bundle is updated
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    chunks: ['vendor']
  }),
  // copy custom static assets
  new CopyWebpackPlugin([{
    from: path.resolve(__dirname, '../static'),
    to: config.build.assetsSubDirectory,
    ignore: ['.*']
  }])]
});

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = __webpack_require__(41);

  webpackConfig.plugins.push(new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
    threshold: 10240,
    minRatio: 0.8
  }));
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = __webpack_require__(47).BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("copy-webpack-plugin");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("optimize-css-assets-webpack-plugin");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(42).default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       MIT License http://www.opensource.org/licenses/mit-license.php
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Author Tobias Koppers @sokra
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _url = __webpack_require__(43);

var _url2 = _interopRequireDefault(_url);

var _async = __webpack_require__(44);

var _async2 = _interopRequireDefault(_async);

var _RawSource = __webpack_require__(45);

var _RawSource2 = _interopRequireDefault(_RawSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CompressionPlugin = function () {
  function CompressionPlugin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CompressionPlugin);

    this.asset = options.asset || '[path].gz[query]';
    this.algorithm = options.algorithm || 'gzip';
    this.filename = options.filename || false;
    this.compressionOptions = {};

    if (typeof this.algorithm === 'string') {
      var zlib = __webpack_require__(46);
      this.algorithm = zlib[this.algorithm];

      if (!this.algorithm) {
        throw new Error('Algorithm not found in zlib');
      }

      this.compressionOptions = {
        level: options.level || 9,
        flush: options.flush,
        chunkSize: options.chunkSize,
        windowBits: options.windowBits,
        memLevel: options.memLevel,
        strategy: options.strategy,
        dictionary: options.dictionary
      };
    }
    this.test = options.test || options.regExp;
    this.threshold = options.threshold || 0;
    this.minRatio = options.minRatio || 0.8;
    this.deleteOriginalAssets = options.deleteOriginalAssets || false;
  }

  _createClass(CompressionPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      compiler.plugin('this-compilation', function (compilation) {
        compilation.plugin('optimize-assets', function (assets, callback) {
          _async2.default.forEach(Object.keys(assets), function (file, cb) {
            if (Array.isArray(_this.test)) {
              if (_this.test.every(function (t) {
                return !t.test(file);
              })) {
                return cb();
              }
            } else if (_this.test && !_this.test.test(file)) {
              return cb();
            }
            var asset = assets[file];
            var content = asset.source();

            if (!Buffer.isBuffer(content)) {
              content = new Buffer(content, 'utf-8');
            }

            var originalSize = content.length;

            if (originalSize < _this.threshold) {
              return cb();
            }

            _this.algorithm(content, _this.compressionOptions, function (err, result) {
              if (err) {
                return cb(err);
              }

              if (result.length / originalSize > _this.minRatio) {
                return cb();
              }

              var parse = _url2.default.parse(file);
              var sub = {
                file,
                path: parse.pathname,
                query: parse.query || ''
              };

              var newFile = _this.asset.replace(/\[(file|path|query)\]/g, function (p0, p1) {
                return sub[p1];
              });

              if (typeof _this.filename === 'function') {
                newFile = _this.filename(newFile);
              }
              assets[newFile] = new _RawSource2.default(result);
              if (_this.deleteOriginalAssets) {
                delete assets[file];
              }
              cb();
            });
          }, callback);
        });
      });
    }
  }]);

  return CompressionPlugin;
}();

exports.default = CompressionPlugin;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("webpack-sources/lib/RawSource");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("webpack-bundle-analyzer");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_controllers_examples_router__ = __webpack_require__(51);


function routes(app) {
  app.use('/api/examples', __WEBPACK_IMPORTED_MODULE_0__api_controllers_examples_router__["a" /* default */]);
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller__ = __webpack_require__(52);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_express__["Router"]().post('/', __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */].create).get('/', __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */].all).get('/:id', __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */].byId));

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Controller */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_examples_service__ = __webpack_require__(53);




var Controller = function () {
  function Controller() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Controller);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Controller, [{
    key: 'all',
    value: function all(req, res) {
      __WEBPACK_IMPORTED_MODULE_2__services_examples_service__["a" /* default */].all().then(function (r) {
        return res.json(r);
      });
    }
  }, {
    key: 'byId',
    value: function byId(req, res) {
      __WEBPACK_IMPORTED_MODULE_2__services_examples_service__["a" /* default */].byId(req.params.id).then(function (r) {
        if (r) res.json(r);else res.status(404).end();
      });
    }
  }, {
    key: 'create',
    value: function create(req, res) {
      __WEBPACK_IMPORTED_MODULE_2__services_examples_service__["a" /* default */].create(req.body.name).then(function (r) {
        return res.status(201).location('/api/v1/examples/' + r.id).json(r);
      });
    }
  }]);

  return Controller;
}();
/* harmony default export */ __webpack_exports__["a"] = (new Controller());

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_logger__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_db_service__ = __webpack_require__(54);





var ExamplesService = function () {
  function ExamplesService() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ExamplesService);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ExamplesService, [{
    key: 'all',
    value: function all() {
      __WEBPACK_IMPORTED_MODULE_2__common_logger__["a" /* default */].info(this.constructor.name + '.all()');
      return __WEBPACK_IMPORTED_MODULE_3__examples_db_service__["a" /* default */].all();
    }
  }, {
    key: 'byId',
    value: function byId(id) {
      __WEBPACK_IMPORTED_MODULE_2__common_logger__["a" /* default */].info(this.constructor.name + '.byId(' + id + ')');
      return __WEBPACK_IMPORTED_MODULE_3__examples_db_service__["a" /* default */].byId(id);
    }
  }, {
    key: 'create',
    value: function create(name) {
      return __WEBPACK_IMPORTED_MODULE_3__examples_db_service__["a" /* default */].insert(name);
    }
  }]);

  return ExamplesService;
}();

/* harmony default export */ __webpack_exports__["a"] = (new ExamplesService());

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);




var ExamplesDatabase = function () {
  function ExamplesDatabase() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ExamplesDatabase);

    this._data = [];
    this._counter = 0;

    this.insert('example 0');
    this.insert('example 1');
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ExamplesDatabase, [{
    key: 'all',
    value: function all() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(this._data);
    }
  }, {
    key: 'byId',
    value: function byId(id) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(this._data[id]);
    }
  }, {
    key: 'insert',
    value: function insert(name) {
      var record = {
        id: this._counter,
        name: name
      };

      this._counter += 1;
      this._data.push(record);

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(record);
    }
  }]);

  return ExamplesDatabase;
}();

/* harmony default export */ __webpack_exports__["a"] = (new ExamplesDatabase());

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map