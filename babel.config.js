// there is a bug on babel-loader, it can be used with webpack and jest with configuration on webpack.config.js

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		]
	]
};
