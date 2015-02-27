
var validate = function ( isop , token , stack ) {

	return ! isop( token ) || stack.length >= 2 ;

} ;

exports.validate = validate ;
