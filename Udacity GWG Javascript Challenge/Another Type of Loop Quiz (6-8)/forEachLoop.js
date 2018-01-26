/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [ 12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Use the forEach method to loop over the test array
test.forEach( function( el, idx, array ) {
  // if the value of the current element is divisable by 3
  if ( el % 3 === 0 ) {
    // add 100 to the value of the element
    el += 100;
    // replace the current element with the new value of the element
    array.splice( idx, 1, el );
  }
} );
console.log( test );