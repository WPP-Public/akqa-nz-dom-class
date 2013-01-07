var config = module.exports;

config[ 'browser global' ] = {
	environment: 'browser',
	rootPath: '../',
	tests: [
		'test/*-test.js'
	],
	sources: [
		'class.js'
	]
};

config[ 'browser AMD' ] = {
	environment: 'browser',
	rootPath: '../',
	libs: [
		'node_modules/requirejs/require.js'
	],
	tests: [
		'test/*-test.js'
	],
	resources: [
		'class.js'
	],
	extensions: [
		require( 'buster-amd' )
	]
};