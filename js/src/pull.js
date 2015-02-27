
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
