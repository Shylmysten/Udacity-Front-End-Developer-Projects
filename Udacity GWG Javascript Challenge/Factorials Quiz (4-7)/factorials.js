/*
 * Programming Quiz: Factorials (4-7)
 */

// initialize solution with the value to be factorialized
var solution = 12;

// initialize x with the first value below the value to be factorialized
// ((solution - 1 || 12 -1) = 11 in this case) and then loop as long as x is greater than
// or equal to 1 (which is the last number to be multiplied)

for ( var x = solution - 1; x >= 1; x-- ) {

  // for each iteration solution = solution * x
  solution *= x;
}

// when the loop is done print the value in the variable solution to the console
console.log( solution );