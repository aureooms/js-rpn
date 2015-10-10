const compile = function ( isop , compute , stack , tokens ) {

	for ( let token of tokens ) {

		if ( isop( token ) ) operator( compute , stack , token ) ;

		else operand( stack , token ) ;

	}

	return stack.pop( ) ;

} ;

exports.compile = compile ;
