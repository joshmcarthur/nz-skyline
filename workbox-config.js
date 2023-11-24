module.exports = {
	globDirectory: '.',
	maximumFileSizeToCacheInBytes: 10000000,
	globPatterns: [
		'**/*.{json,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
