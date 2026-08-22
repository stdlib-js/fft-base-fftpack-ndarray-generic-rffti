<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# rffti

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Initialize a workspace array for performing a real-valued Fourier transform on a one-dimensional ndarray.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import rffti from 'https://cdn.jsdelivr.net/gh/stdlib-js/fft-base-fftpack-ndarray-generic-rffti@esm/index.mjs';
```

#### rffti( arrays )

Initializes a workspace array for performing a real-valued Fourier transform on a one-dimensional ndarray.

```javascript
import Float64Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-float64@esm/index.mjs';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@esm/index.mjs';
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';
import slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-slice@esm/index.mjs';

var N = 8;
var len = scalar2ndarray( N, {
    'dtype': 'int32'
});

var w = new Float64Vector( ( 2*N ) + 34 );

var out = rffti( [ w, len ] );
// returns <ndarray>

var bool = ( out === w );
// returns true

var twiddleFactors = slice( w, new Slice( N, 2*N ) );
// returns <ndarray>[ ~0.707, ~0.707, 0, 0, 0, 0, 0, 0 ]

var factors = slice( w, new Slice( 2*N, ( 2*N ) + 4 ) );
// returns <ndarray>[ 8, 2, 2, 4 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the length of the sequence to transform.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Let `N` equal the number of elements in the input ndarray. The input ndarray is divided into three sections:

    ```text
              size = N                 N            2+ceil(log2(N)/2)
                   ↓                   ↓                  ↓
        | scratch / workspace | twiddle factors | radix factor table |
                   ↑                   ↑                  ↑
    i = 0         ...         N       ...       2N       ...
    ```

    -   **scratch/workspace**: used as a scratch space when performing transforms. This section is not updated during initialization.
    -   **twiddle factors**: a table of reusable complex-exponential constants stored as cosine/sine pairs.
    -   **radix factor table**: a table containing the sequence length `N`, the number of factors into which `N` was decomposed, and the individual integer radix factors.

-   In general, an input ndarray should have `2N + 34` indexed elements (as `log2(N)/2 ≤ 32` for all `2^64`). During initialization, only the sections for storing twiddle factors and the factorization of `N` are updated.

-   The radix factor table is comprised as follows:

    ```text
    | sequence_length | number_of_factors | integer_factors |
    ```

-   If `N` equals `1`, the function returns early without modifying the input ndarray, as a single data point is its own Fourier transform.

-   If provided an empty one-dimensional input ndarray, the function returns the input ndarray unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float64Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-float64@esm/index.mjs';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import rffti from 'https://cdn.jsdelivr.net/gh/stdlib-js/fft-base-fftpack-ndarray-generic-rffti@esm/index.mjs';

var N = 8;

var w = new Float64Vector( ( 2*N ) + 34 );
console.log( ndarray2array( w ) );

var len = scalar2ndarray( N, {
    'dtype': 'int32'
});

var out = rffti( [ w, len ] );
console.log( ndarray2array( out ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fft-base-fftpack-ndarray-generic-rffti.svg
[npm-url]: https://npmjs.org/package/@stdlib/fft-base-fftpack-ndarray-generic-rffti

[test-image]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fft-base-fftpack-ndarray-generic-rffti?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fft-base-fftpack-ndarray-generic-rffti.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/tree/deno
[deno-readme]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/tree/umd
[umd-readme]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/tree/esm
[esm-readme]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/fft-base-fftpack-ndarray-generic-rffti/blob/main/branches.md

</section>

<!-- /.links -->
