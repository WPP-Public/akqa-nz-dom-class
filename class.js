/** @license MIT License (c) Heyday Digital */

/**
 * An extremely miminal DOM element class manipulator
 *
 * Licensed under the MIT License at:
 * http://heyday.mit-license.org/
 *
 * @version 0.1.0
 */

/*jshint laxbreak:true */
( function( define ) {
define( function() {

	var DOMClass, wrap, trim, EMPTY = ' ';

	/**
	 * Wrap string in whitespace
	 * @private
	 * @param  {String} str String to be wrapped
	 * @return {String}
	 */
	wrap = function( str ) {
		return EMPTY + str + EMPTY;
	};

	/**
	 * Trim additional white space off the start and end of a string
	 * @private
	 * @param  {String} str String to be trimmed
	 * @return {String}
	 */
	trim = function( str ) {
		return !str ? '' : str.toString().replace( /^\s+/, '' ).replace( /\s+$/, '' );
	};


	/**
	 * Constructor for the dom-class manipulator
	 * @param {DOMNode} el Dom node to proform class manpulations on
	 * @constructor
	 */
	DOMClass = function( el ) {
		this.e = el;
	};

	DOMClass.prototype = {

		/**
		 * Check if DOMNode has a specific Class
		 * @param  {String}  str String to be searched for in Class list
		 * @return {Boolean}
		 */
		has: function( str ) {
			return !!~( wrap( this.get() ) ).indexOf( wrap( str ) );
		},

		/**
		 * Get Class names for DOMNode
		 * @return {String}
		 */
		get: function() {
			return trim( this.e.className );
		},

		/**
		 * Add Class to DOMNode Class list if not already added
		 * @param {String} str Class to be added
		 * @return {Class} Referance to itself, for chaining
		 */
		add: function( str ) {
			if ( !this.has( str ) ) {
				this.e.className += EMPTY + str;
			}
			return this;
		},

		/**
		 * Remove Class from DOMNode Class list
		 * @param  {String} str String to be removed
		 * @return {Class} Referance to itself, for chaining
		 */
		remove: function( str ) {
			this.e.className = trim( wrap( this.get() ).replace( wrap( str ), EMPTY ) );
			return this;
		}
	};

	/**
	 * Create new class manipulator wrapping a DOMNode
	 * @param  {DOMNode} el Element to wrap
	 * @return {DOMClass}   Dom class API
	 */
	return function( el ) {
		return new DOMClass( el );
	};
} );
} )( typeof define == 'function'
	? define
	: function( factory ) { this.domClass = factory(); }
	// Boilerplate for AMD, and browser global
);