/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// decalre the variables articles, p, and content
var articles, p, content;

// define the articles variable with the node that has the .articles class
articles = $( '.articles' );
// define the p variable with a nodeList of all p takes within the .articles class
p = articles.find( 'p' );
// iterate over every p tag in .articles

p.each( function() {
  // define the variable content with the string value of the test inside the current ("this") p tage
  content = $( this ).text();
  // reassing the contents of the current p tag with its original contents, plus its string.length (character count)
  $( this ).text( `${content} ${content.length}` );
} );