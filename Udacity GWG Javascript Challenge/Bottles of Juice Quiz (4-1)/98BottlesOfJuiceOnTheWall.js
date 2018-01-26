/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
// declare a variable to be used later
var lyrics;

// while num is greater than or equal to 1
while ( num >= 1 ) {

  // is num greater than 1?
  if ( num > 1 ) { //yes

    // Assign lyrics to a string template
    lyrics = `${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around...`;
    // decrement the value of num
    num--;

    // is num equal to 1 after being decremented?
    if ( num === 1 ) { // yes

      // Singular Bottle
      // Assign lyrics to itself and append a new string with num decremented
      lyrics = lyrics + ` ${num} bottle of juice on the wall!`;

    } else { // num does not equal 1

      // Plural bottles
      // Assign lyrics to itself and append a new string with num decremented
      lyrics = lyrics + ` ${num} bottles of juice on the wall!`;
    }
    // Print the Lyrics to the console
    console.log( lyrics );

  } else { // num is not greater than 1 so it must be 1

    // Singular Bottle
    // Assign lyrics to a string template
    lyrics = `${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around...`;
    // decrement the value of num
    num--;

    // Plural bottles
    // Assign lyrics to itself and append a new string with num decremented
    lyrics = lyrics + ` ${num} bottles of juice on the wall!`;
    // Print the lyrics to the console
    console.log( lyrics );
  }

}