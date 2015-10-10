
/**
 * assert stack.length >= 2
 */

const operator = function ( compute , stack , token ) {

	const b = stack.pop( ) ;
	const a = stack.pop( ) ;
	stack.push( compute( token , a , b ) ) ;

} ;

exports.operator = operator ;
