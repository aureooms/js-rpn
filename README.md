[js-rpn](http://aureooms.github.io/js-rpn)
==

Reverse polish notation code bricks for JavaScript.

```js
compile( isop , compute , [ ] , [ "1" , "2" , "+" , "4" , "*" ] ) ; // 12
```

[![NPM license](http://img.shields.io/npm/l/@aureooms/js-rpn.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-rpn/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/@aureooms/js-rpn.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-rpn)
[![Bower version](http://img.shields.io/bower/v/@aureooms/js-rpn.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-rpn)
[![Build Status](http://img.shields.io/travis/aureooms/js-rpn.svg?style=flat)](https://travis-ci.org/aureooms/js-rpn)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-rpn.svg?style=flat)](https://coveralls.io/r/aureooms/js-rpn)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-rpn.svg?style=flat)](https://david-dm.org/aureooms/js-rpn#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-rpn.svg?style=flat)](https://david-dm.org/aureooms/js-rpn#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-rpn.svg?style=flat)](https://codeclimate.com/github/aureooms/js-rpn)
[![NPM downloads per month](http://img.shields.io/npm/dm/@aureooms/js-rpn.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-rpn)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-rpn.svg?style=flat)](https://github.com/aureooms/js-rpn/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-rpn.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-rpn)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-rpn
# or
jspm install npm:@aureooms/js-rpn
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-rpn
```

### bower
```terminal
bower install @aureooms/js-rpn
```

### ender
```terminal
ender add @aureooms/js-rpn
```

### jam
```terminal
jam install @aureooms/js-rpn
```

### spm
```terminal
spm install @aureooms/js-rpn --save
```

### npm
```terminal
npm install @aureooms/js-rpn --save
```

## Require
### jspm
```js
let rpn = require( "github:aureooms/js-rpn" ) ;
// or
import rpn from '@aureooms/js-rpn' ;
```
### duo
```js
let rpn = require( "aureooms/js-rpn" ) ;
```

### component, ender, spm, npm
```js
let rpn = require( "@aureooms/js-rpn" ) ;
```

### bower
The script tag exposes the global variable `rpn`.
```html
<script src="bower_components/@aureooms/js-rpn/js/dist/rpn.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-rpn" ] , function ( rpn ) { ... } ) ;
```

## Use

See [test file](https://github.com/aureooms/js-rpn/blob/master/test/js/src/all.js).
