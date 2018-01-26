/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine( length ) {
  var line = "";
  for ( var j = 1; j <= length; j++ ) {
    line += "* ";
  }
  return line + "\n";
}

// define a function called buildTriangle that takes on parameter
function buildTriangle( num ) {
  // initialize the line variable inside the function scope and set its value to an empty string
  var line = "";
  // create a loop with a maximum of whatever number is passed in the parameter and begin that loop at 1 so it doesn't print an empty line
  for ( x = 1; x <= num; x++ ) {
    // call makeLine() and add it to whatever line currently is with each iteration of the loop
    line += makeLine( x );
  }
  // return the string stored in line so that it can be used
  return line;
}


// call buildTriangle with an argument of 10 and print the results to the console
console.log( buildTriangle( 10 ) );