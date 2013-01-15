# dom-class [![Build Status](https://secure.travis-ci.org/heyday/dom-class.png)](http://travis-ci.org/heyday/dom-class)

An extremely miminal DOM element class manipulator, with a simple but featured API. **dom-class** is **under 310bytes** when complied with uglify2 and gzipped, and has a full unit test suite that passes in all popular browsers (and some not so popular browsers including IE6+).

This library is made to be as small as possible so it can be inlined into the head of your html. This means it can be used to bootstrap your application based on predefined classes, set up basic styles for specific environments, and add classes based on basic feature tests – all before your more fully featured html maniplation library (i.e. jQuery) loads.


Quick Start
===========

Three options are available for getting the source:

* [Download the latest release](https://github.com/heyday/dom-class/zipball/master).
* Clone the repo: `git clone git://github.com/heyday/dom-class.git`.
* Install with [Bower](http://twitter.github.com/bower): `bower install dom-class`.

### AMD

1. Configure your loader with a package:

	```javascript
	packages: [
		{ name: 'dom-class', location: 'path/to/dom-class/', main: 'class' },
		// ... other packages ...
	]
	```

1. `define( [ 'dom-class', ... ], function( domClass, ... ) { ... } );` or `require( [ 'dom-class', ... ], function( domClass, ... ) { ... } );`

### Script Tag

1. `<script src="path/to/dom-class/class.js"></script>`
1. `dom-class` will be available as `window.domClass`


API
===========

```javascript
var el_class = domClass( document.documentElement ); // Manipulate the `html` tag

el_class.add( 'no-cookie' ).add( 'loading' )
	.remove( 'no-js' );

el_class.has( 'cookie' ); // returns false - Boolean

el_class.get(); // returns 'no-cookie loading' - String
```

### Creation

###### Browser global:
```javascript
var el_class = window.domClass( domElement );
```

###### AMD enviroment:
```javascript
define( [ 'dom-class' ], function( domClass ) {
	var el_class = domClass( domElement );
} );
```

### Add
Adds the specified class from the html element if it is not already there. This method is chainable

```javascript
el_class.add( 'class-to-add' );

el_class.add( 'class-to-add-1' )
	.add( 'class-to-add-2' )
	.add( 'class-to-add-3' );
```

### Remove
Removes the specified class from the html element if it exists. This method is chainable.

```javascript
el_class.remove( 'class-to-remove' );

el_class.remove( 'class-to-remove-1' )
	.remove( 'class-to-remove-2' )
	.remove( 'class-to-remove-3' );
```

### Has
Check whether an html element has a specific class, returns `true` or `false`.

```javascript
var boolean = el_class.has( 'class-to-check' );
```

### Get
Retrieve the elements `className` property, returns a space delimited list of the elements current classes.

```javascript
var class_list = el_class.get();
```



Common usage
===========

### Replace no-js class with js
Set JavaScript to active for your style, common for the h5bp html template.

```javascript
domClass( document.documentElement )
	.remove( 'no-js' )
	.add( 'js' );
```

### Add loading status with async loader
When asynchronously loading content it may be necessary to define a loading state via css.

```javascript
var el = domClass( document.documentElement )
	.add( 'loading' );

asyncLoad( 'load/some/file.js', function() {
	el.remove( 'loading' );

	// Initalize application
} );
```

Development
===========

# Running the unit tests

1. `npm install` - Install all required dev modules
1. `npm install -g grunt-cli` - Install grunt
1. `grunt test` - Lints all files then runs the unit tests in a Phantomjs instance

# Building the module locally

1. `npm install` - Install all required dev modules
1. `npm install -g grunt-cli` - Install grunt
1. `grunt build` - Runs all tests then builds the production file
