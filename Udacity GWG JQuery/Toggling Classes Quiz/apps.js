/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// give the value of article2 the node with the class feature 
article2 = $( '.featured' );
// give the value of article3 the node after article2
article3 = article2.next();
// toggle the feature class off in article2
article2.toggleClass( 'featured' );
// toggle the feature class on in article3
article3.toggleClass( 'featured' );