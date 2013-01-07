/*jshint browser:true */
( function( define ) { 'use strict';
define( [ 'buster', '../class' ], function( buster, DOMClass ) {

	// Buster setup
	var expect = buster.assertions.expect,
		describe = buster.spec.describe, it = buster.spec.it,
		before = buster.spec.before, after = buster.spec.after;

//
// Tests
//
	describe( 'DOMClass', function() {
		before( function() {
			this.el = document.createElement( 'div' );
		} );

		it( 'is defined', function() {
			expect( DOMClass ).toBeDefined();
			expect( DOMClass ).toBeFunction();
		} );

		it( 'can be initialized via new', function() {
			var dom_class = new DOMClass( this.el );
			expect( dom_class ).toBeObject();
			expect( dom_class instanceof DOMClass ).toBeTrue();
		} );

		it( 'can be initialized via function call', function() {
			var dom_class = DOMClass( this.el );
			expect( dom_class ).toBeObject();
			expect( dom_class instanceof DOMClass ).toBeTrue();
		} );

		describe( 'Get', function() {
			it( '0 classes', function() {
				this.el.className = '';
				var dom_class = new DOMClass( this.el );
				
				expect( dom_class.get() ).toBeString();
			} );

			it( '1 class', function() {
				this.el.className = 'bob';
				var dom_class = new DOMClass( this.el );
				
				expect( dom_class.get() ).toBeString();
				expect( dom_class.get() ).toMatch( 'bob' );
			} );

			it( 'many classes', function() {
				this.el.className = 'bob fran';
				var dom_class = new DOMClass( this.el );
				
				expect( dom_class.get() ).toBeString();
				expect( dom_class.get() ).toMatch( 'bob' );
				expect( dom_class.get() ).toMatch( 'fran' );
			} );
		} );

		describe( 'Has', function() {
			it( '0 of 1 class', function() {
				this.el.className = '';
				var dom_class = new DOMClass( this.el );
				
				expect( dom_class.has( 'bob' ) ).not.toBeTrue();
			} );

			it( '1 of 1 class', function() {
				this.el.className = 'bob';
				var dom_class = new DOMClass( this.el );
				
				expect( dom_class.has( 'bob' ) ).toBeTrue();
			} );

			it( '1 of many classes', function() {
				this.el.className = 'bob fran';
				var dom_class = new DOMClass( this.el );
				
				expect( dom_class.has( 'bob' ) ).toBeTrue();
				expect( dom_class.has( 'fran' ) ).toBeTrue();
			} );
		} );

		describe( 'Add', function() {
			it( 'returns referance to self', function() {
				var dom_class = new DOMClass( this.el ),
					returns = dom_class.add( 'bob' );
				
				expect( returns ).toBeObject();
				expect( returns instanceof DOMClass ).toBeTrue();
				expect( returns._el ).toBe( this.el );
			} );

			it( '1 of 0 classes', function() {
				this.el.className = '';
				var dom_class = new DOMClass( this.el );
				
				dom_class.add( 'bob' );
				expect( this.el.className ).toMatch( 'bob' );
			} );

			it( '1 of 1 classes', function() {
				this.el.className = 'bob';
				var dom_class = new DOMClass( this.el );
				
				dom_class.add( 'harold' );
				expect( this.el.className ).toMatch( 'bob' );
				expect( this.el.className ).toMatch( 'harold' );
			} );

			it( '1 of many classes', function() {
				this.el.className = 'bob fran';
				var dom_class = new DOMClass( this.el );
				
				dom_class.add( 'harold' );
				expect( this.el.className ).toMatch( 'bob' );
				expect( this.el.className ).toMatch( 'fran' );
				expect( this.el.className ).toMatch( 'harold' );
			} );

			it( 'many of 0 classes (chained)', function() {
				this.el.className = '';
				var dom_class = new DOMClass( this.el );
				
				dom_class.add( 'bob' ).add( 'fran' ).add( 'harold' );
				expect( this.el.className ).toMatch( 'bob' );
				expect( this.el.className ).toMatch( 'fran' );
				expect( this.el.className ).toMatch( 'harold' );
			} );

			it( 'many of 0 classes (space delimited)', function() {
				this.el.className = '';
				var dom_class = new DOMClass( this.el );
				
				dom_class.add( 'bob fran harold' );
				expect( this.el.className ).toMatch( 'bob' );
				expect( this.el.className ).toMatch( 'fran' );
				expect( this.el.className ).toMatch( 'harold' );
			} );

			it( 'many of many classes (chained)', function() {
				this.el.className = 'rob john';
				var dom_class = new DOMClass( this.el );
				
				dom_class.add( 'bob' ).add( 'fran' ).add( 'harold' );
				expect( this.el.className ).toMatch( 'bob' );
				expect( this.el.className ).toMatch( 'fran' );
				expect( this.el.className ).toMatch( 'harold' );
			} );

			it( 'many of many classes (space delimited)', function() {
				this.el.className = 'rob john';
				var dom_class = new DOMClass( this.el );
				
				dom_class.add( 'bob fran harold' );
				expect( this.el.className ).toMatch( 'bob' );
				expect( this.el.className ).toMatch( 'fran' );
				expect( this.el.className ).toMatch( 'harold' );
			} );
		} );

		describe( 'Remove', function() {
			it( 'returns referance to self', function() {
				this.el.className = 'bob';
				var dom_class = new DOMClass( this.el ),
					returns = dom_class.remove( 'bob' );
				
				expect( returns ).toBeObject();
				expect( returns instanceof DOMClass ).toBeTrue();
				expect( returns._el ).toBe( this.el );
			} );

			it( '1 of 1 classes', function() {
				this.el.className = 'bob';
				var dom_class = new DOMClass( this.el );
				
				dom_class.remove( 'bob' );
				expect( this.el.className ).not.toMatch( 'bob' );
			} );

			it( '1 of many classes', function() {
				this.el.className = 'bob fran harold';
				var dom_class = new DOMClass( this.el );
				
				dom_class.remove( 'harold' );
				expect( this.el.className ).toMatch( 'bob' );
				expect( this.el.className ).toMatch( 'fran' );
				expect( this.el.className ).not.toMatch( 'harold' );
			} );

			it( 'many of many classes (chained)', function() {
				this.el.className = 'bob fran harold sandy';
				var dom_class = new DOMClass( this.el );
				
				dom_class.remove( 'bob' ).remove( 'fran' ).remove( 'harold' );
				expect( this.el.className ).toMatch( 'sandy' );
				expect( this.el.className ).not.toMatch( 'bob' );
				expect( this.el.className ).not.toMatch( 'fran' );
				expect( this.el.className ).not.toMatch( 'harold' );
			} );
		} );
	} );

} );
} )( typeof define == 'function'
	? define
	: function( deps, factory ) { factory( this.buster, this.DOMClass ); }
	// Boilerplate for AMD, and browser global
);