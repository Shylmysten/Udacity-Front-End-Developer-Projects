/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/* incrementing loop I created because I thought it was not passing because it was
decrementing and a while loop. Then I realised it was scope as I had initialized the variable
outside of the function

function laugh(num) {
  var word = "";
  for (var x = 0; x < num; x++) {
    word += "ha";
  }
  return word + "!";
}

console.log(laugh(2));
*/

function laugh( num ) {
  var word = "";
  while ( num > 0 ) {
    word += "ha";
    num--;
  }
  return word + "!";
}

console.log( laugh( 2 ) );

// function expression

// initialize a variable and set it to an anonymous function that takes one parameter
var laugh = function( num ) {
  // initialize a variable and define its value with an empty string
  var word = "";
  // define a loop that runs as long as the parameter is greater than 0
  while ( num > 0 ) {
    // add whatever is in word to the string "ha" for every iteration of the loop
    word += "ha";
    // decrement the value of num every iteration of the loop
    num--;
  }
  // when the loop is done add the value in word to the exclaimation string ("!")
  return word + "!";
};
// call the anonymous function stored in the variable laugh and print its return to the console
console.log( laugh( 10 ) );