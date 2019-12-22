const webpackConfig = require('./webpack.config');

module.exports = function(config) {
	config.set({
		webpack: webpackConfig,

		webpackMiddleware: {
			noInfo: true,
			stats: 'errors-only'
		},

		basePath: './',

		plugins: [
			'karma-webpack',
			'karma-jasmine',
			'karma-coverage',
			'karma-chrome-launcher',
			'karma-jasmine-html-reporter',
			'karma-coverage-istanbul-reporter',
		],

		files: [
    	'src/test.js',
		],

		preprocessors: {
    	'src/test.js': ['webpack'],
		},

		frameworks: ['jasmine'],

		reporters: ['dots'],

		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, './coverage'),
			reports: ['html', 'lcovonly', 'text-summary'],
			fixWebpackSourcePaths: true,
			thresholds: {
				statements: 80,
				branches: 80,
				functions: 80,
				lines: 80,
			}
		},

		customLaunchers: {
			HeadlessChromeLocal: {
				base: 'ChromeHeadless',
				flags: [
					'--disable-gpu',
					'--disable-translate',
					'--disable-extensions',
					'--remote-debugging-port=9223',
				]
			}
		},
		browsers: ['ChromeHeadless'],

		client: {
			clearContext: true
		},

		port: 9876,
		colors: true,
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		restartOnFileChange: true,
		concurrency: Infinity,
		singleRun: true,
		autoWatch: true,
	});
};
