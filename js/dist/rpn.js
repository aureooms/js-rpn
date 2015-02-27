(function(exports, undefined){

	'use strict';


/* js/src/operand.js */

var operand = function ( token , stack ) {

	stack.push( token ) ;

} ;

exports.operand = operand ;

/* js/src/operator.js */

/**
 * assert stack.length >= 2
 */

var operator = function ( compute , token , stack ) {

	var a , b ;

	b  = stack.pop( ) ;
	a  = stack.pop( ) ;
	stack.push( compute( token , a , b ) ) ;

} ;

exports.operator = operator ;

})(typeof exports === 'undefined' ? this['rpn'] = {} : exports);
