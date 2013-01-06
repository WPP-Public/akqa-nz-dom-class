
// AMD or browser wrapper for module format
( function( root, factory ) {
	if ( typeof define === 'function' && define.amd ) {
		define( factory );
	} else {
		root.DomClass = factory();
	}
}( this, function() {
	'use strict';

	var Class, wrap, trim, empty = ' ';

	// Helper functions
	wrap = function( str ) {
		return empty + str + empty;
	};
	trim = function( str ) {
		return !str ? '' : str.toString().replace( /^\s+/, '' ).replace( /\s+$/, '' );
	};

	// Constructor
	Class = function( el ) {
		this._el = el;
	};

	Class.has = function( str ) {
		return !!~( this.get() ).indexOf( wrap( str ) );
	};

	Class.get = function() {
		return wrap( this._el.className );
	};

	Class.add = function( str ) {
		if ( !this.has( str ) ) {
			this._el.className += empty + str;
		}
		return this;
	};

	Class.remove = function( str ) {
		this._el.className = trim( ( this.get() ).replace( wrap( str ), empty ) );
		return this;
	};

	return Class;
} ) );