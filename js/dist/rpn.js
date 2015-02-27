(function(exports, undefined){

	'use strict';


/* js/src/pull.js */

var pull = function ( compile , isop , token , stack ) {

	var a , b ;

	if ( isop( token ) ) {

		b  = stack.pop( ) ;
		a  = stack.pop( ) ;
		stack.push( compile( token , a , b ) ) ;

	}

	else {

		stack.push( token ) ;

	}

} ;

exports.pull = pull ;

/* js/src/validate.js */

var validate = function ( isop , token , stack ) {

	return ! isop( token ) || stack.length >= 2 ;

} ;

exports.validate = validate ;

})(typeof exports === 'undefined' ? this['rpn'] = {} : exports);
