var PROD = process.argv.indexOf('-p') >= 0;
var webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 要加两个插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageInfo = require('./package.json');

const outputPath = __dirname + '/gh-pages/';

const minifiyConfig = {
	removeComments: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	collapseBooleanAttributes: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	minifyJS: true,
	minifyCSS: true,
	minifyURLs: true
};

var webpackConfig = {
	entry: {
		index: "./index.js",
		online: "./online.js",
		error: "./error.js",
		score: "./score.js"
	},
	output: {
		path: outputPath, // 输出到版本号目录
		filename: PROD ? '[name]-[hash].min.js' : '[name]-[hash].js'
	},
	//watch:true,
	module: {
		loaders: [{
			test: /\.(png|jpg|jpeg|gif|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=8192'
		}, {
			test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
			loader: 'file'
		}, {
			test: /\.css$/,
			//loader: "style!css?modules!postcss"
			loader: ExtractTextPlugin.extract('style', 'css')
		}, {
			test: /\.json$/,
			loader: "json-loader"
		}]
	},
	postcss: [
		require('autoprefixer')
	],
	plugins: [
		//new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin(PROD ? '[name]-[hash].min.css' : '[name]-[hash].css'),
		new webpack.BannerPlugin('This file is created by realeve'),
		//将公共代码抽离出来合并为一个文件
		//new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.optimize.OccurenceOrderPlugin(),
		//new webpack.optimize.UglifyJsPlugin(),
		/*new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			"window.$": "jquery"
		})*/
	],
	externals: {
		jquery: 'window.$'
	}
	/*devServer: {
		contentBase: "./dist",//本地服务器所加载的页面所在的目录
		colors: true,//终端中输出结果为彩色
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	  }*/
};

for (var key in webpackConfig.entry) {
	const tplPath = './tpl/';
	var plugin = new HtmlWebpackPlugin({
		title: packageInfo.description,
		minify: minifiyConfig,
		template: tplPath+key + '.html',
		filename: key + '.html',
		chunks: [key],
		hash: false
	});
	webpackConfig.plugins.push(plugin);
}

module.exports = webpackConfig;