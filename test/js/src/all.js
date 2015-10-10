

function operator ( ) { }
function operand ( ) { }

function add ( a , b ) { return a + b ; }
function sub ( a , b ) { return a - b ; }
function mul ( a , b ) { return a * b ; }
function div ( a , b ) { return a / b | 0 ; }
function mod ( a , b ) { return a % b ; }

function integer ( ) { }

add.group = operator ;
sub.group = operator ;
mul.group = operator ;
div.group = operator ;
mod.group = operator ;

integer.group = operand ;

function Token ( type , data ) {

	this.type = type ;
	this.data = data ;

}

function isop ( token ) {

	return token.type.group === operator ;

}

function tokenize ( string ) {

	var i , data , token , tokens = [ ] ;

	for ( i = 0 ; i < string.length ; ++i ) {

		data = string[i] ;

		switch ( data ) {

			case '+' :

				token = new Token( add , add ) ;
				break ;

			case '-' :

				token = new Token( sub , sub ) ;
				break ;

			case '*' :

				token = new Token( mul , mul ) ;
				break ;

			case '/' :

				token = new Token( div , div ) ;
				break ;

			case '%' :

				token = new Token( mod , mod ) ;
				break ;

			case '1' :
			case '2' :
			case '3' :
			case '4' :
			case '5' :
			case '6' :
			case '7' :
			case '8' :
			case '9' :
			case '0' :

				token = new Token( integer , parseInt( data , 10 ) ) ;
				break ;

			default :

				throw new Error( "invalid token '" + data + "' in string '" + input + "' at position " + i ) ;

		}

		tokens.push( token ) ;

	}

	return tokens ;

}

function compute ( op , a , b ) {

	return new Token( integer , op.data( a.data , b.data ) ) ;

}

function compile ( tokens ) {

	return rpn.compile( isop , compute , [ ] , tokens ) ;

}

function t ( string , expected ) {

	var tokens , output ;

	tokens = tokenize( string ) ;

	output = compile( tokens ) ;

	deepEqual( output.data , expected , string + " produces " + expected ) ;

}

test( "all" , function ( ) {


	t( "3" , 3 ) ;
	t( "32+" , 5 ) ;
	t( "32+4-" , 1 ) ;
	t( "32+4-7*" , 7 ) ;
	t( "32+4-9+" , 10 ) ;
	t( "32+4-9+3/" , 3 ) ;
	t( "32+4-9+3%" , 1 ) ;

} ) ;
