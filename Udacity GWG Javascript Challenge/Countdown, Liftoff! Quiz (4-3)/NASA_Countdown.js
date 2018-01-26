/********************* Quiz: Countdown, Liftoff! (4-3) ******************
NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

* Orbiter transfers from ground to internal power (T-50 seconds)
* Ground launch sequencer is go for auto sequence start (T-31 seconds)
* Activate launch pad sound suppression system (T-16 seconds)
* Activate main engine hydrogen burnoff system (T-10 seconds)
* Main engine start (T-6 seconds)
* Solid rocket booster ignition and liftoff! (T-0 seconds)

Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.
====================================================================*/
// initialize the variable countdown with the value of 60
var countdown = 60;

// as long as countdown is greater than or equal to 0
while ( countdown >= 0 ) {

  // evaluate each case against the value of the variable countdown
  switch ( countdown ) {
    // when the value of countdown is 50
    case 50:
      // Print this string to the console.
      console.log( "Orbiter transfers from ground to internal power" );
      // stop evaluating countdown and return the loop
      break;
      // when the value of countdown is 31
    case 31:
      // Print this string to the console.
      console.log( "Ground launch sequencer is go for auto sequence start" );
      // stop evaluating countdown and return the loop
      break;
      // when the value of countdown is 16
    case 16:
      // Print this string to the console.
      console.log( "Activate launch pad sound suppression system" );
      // stop evaluating countdown and return the loop
      break;
      // when the value of countdown is 10
    case 10:
      // Print this string to the console.
      console.log( "Activate main engine hydrogen burnoff system" );
      // stop evaluating countdown and return the loop
      break;
      // when the value of countdown is 6
    case 6:
      // Print this string to the console.
      console.log( "Main engine start" );
      // stop evaluating countdown and return the loop
      break;
      // when the value of countdown is 0
    case 0:
      // Print this string to the console.
      console.log( "Solid rocket booster ignition and liftoff!" );
      // stop evaluating countdown and return the loop
      break;
      // when the value of countdown matches nothing else
    default:
      // Print this string to the console
      console.log( `T-${countdown} seconds` );
  }
  // decrement countdown
  countdown--;
}