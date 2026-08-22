/** @license Apache-2.0 */

'use strict';

/**
* Initialize a workspace array for performing a real-valued Fourier transform on a one-dimensional ndarray.
*
* @module @stdlib/fft-base-fftpack-ndarray-generic-rffti
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var Slice = require( '@stdlib/slice-ctor' );
* var slice = require( '@stdlib/ndarray-slice' );
* var rffti = require( '@stdlib/fft-base-fftpack-ndarray-generic-rffti' );
*
* var N = 8;
* var len = scalar2ndarray( N, {
*     'dtype': 'int32'
* });
*
* var w = new Float64Vector( ( 2*N ) + 34 );
*
* var out = rffti( [ w, len ] );
* // returns <ndarray>
*
* var bool = ( out === w );
* // returns true
*
* var twiddleFactors = slice( w, new Slice( N, 2*N ) );
* // returns <ndarray>[ ~0.707, ~0.707, 0, 0, 0, 0, 0, 0 ]
*
* var factors = slice( w, new Slice( 2*N, ( 2*N ) + 4 ) );
* // returns <ndarray>[ 8, 2, 2, 4 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
