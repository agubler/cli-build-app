import baseConfigFactory from './base.config';
import webpack = require('webpack');
import * as path from 'path';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer-sunburst').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function webpackConfig(args: any) {
	const config: webpack.Configuration = baseConfigFactory(args);
	const { plugins = [], output = {} } = config;

	config.plugins = [
		...plugins,
		new OptimizeCssAssetsPlugin({ cssProcessorOptions: { map: { inline: false } } }),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
			reportType: 'sunburst',
			generateStatsFile: true,
			reportFilename: '../info/report.html',
			statsFilename: '../info/stats.json'
		}),
		new HtmlWebpackPlugin({ inject: true, chunks: ['main'], template: 'src/index.html' }),
		new UglifyJsPlugin({ sourceMap: true, cache: true })
	];

	config.plugins = config.plugins.map((plugin: any) => {
		if (plugin instanceof ExtractTextPlugin) {
			return new ExtractTextPlugin({
				filename: '[name].[contenthash].bundle.css',
				allChunks: true
			});
		}
		return plugin;
	});

	config.output = {
		...output,
		path: path.join(output.path!, 'dist'),
		chunkFilename: '[name].[chunkhash].bundle.js',
		filename: '[name].[chunkhash].bundle.js'
	};

	return config;
}

export default webpackConfig;
