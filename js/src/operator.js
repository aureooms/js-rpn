
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
