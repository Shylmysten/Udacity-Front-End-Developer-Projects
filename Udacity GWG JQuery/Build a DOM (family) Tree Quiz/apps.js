/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/
var family2, bruce, madison, hunter, f2el, bel, mel, hel;

// sloppy?
//family2 = '<div id="family2"><h1>Family2</h1><div id="bruce"><h2>Bruce</h2><div id="madison"><h3>Madison</h3></div><div id="hunter"><h3>Hunter</h3></div></div></div>';
//$( family2 ).insertAfter( '#family1' );

// to many variables...
//f2el = '<div id="family2"><h1>Family2</h1></div>'
//bel = '<div id="bruce"><h2>Bruce</h2></div>';
//mel = '<div id="madison"><h3>Madison</h3></div>';
//hel = '<div id="bruce"><h3>Hunter</h3></div>';
//$( f2el ).insertAfter( '#family1' );
//family2 = $( '#family2' );
//family2.append( bel );
//bruce = $( '#bruce' );
//bruce.append( mel );
//bruce.append( hel );

family2 = $( '<div id="family2"><h1>Family2</h1></div>' );
bruce = $( '<div id="bruce"><h2>Bruce</h2></div>' );
madison = $( '<div id="madison"><h3>Madison</h3></div>' );
hunter = $( '<div id="hunter"><h3>Hunter</h3></div>' );
family2.insertAfter( '#family1' );
family2.append( bruce );
//bruce = $( '#bruce' );
bruce.append( madison );
bruce.append( hunter );