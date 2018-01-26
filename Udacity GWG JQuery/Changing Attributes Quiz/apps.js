/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList, listItem, link;

navList = $( '.nav-list' );
//listItem = navList.children( 'li' ).first(); //works too
listItem = navList.children().first();
//link = listItem.children(); // works too
link = listItem.find( 'a' );
link.attr( 'href', '#1' );