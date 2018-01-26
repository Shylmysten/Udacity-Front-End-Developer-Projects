/******************* Quiz: Murder Mystery (3-4) ********************
We also know that each weapon corresponds to a particular room, so...
* the poison belongs to the ballroom,
* the trophy belongs to the gallery,
* the pool stick belongs to the billiards room,
* and the knife belongs to the dining room.

And we know that each suspect was located in a specific room at the time of the murder.

* Mr. Parkes was located in the dining room.
* Ms. Van Cleve was located in the gallery.
* Mrs. Sparr was located in the billiards room.
* Mr. Kalehoff was located in the ballroom.

To help solve this mystery, write a combination of conditional statements that:

* sets the value of weapon based on the room and
* sets the value of solved to true if the value of room matches the suspect's room
*******************************************************************/

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if ( suspect === "Mr. Kalehoff" ) {
  if ( room === "ballroom" ) {
    weapon = "poison";
    solved = true;
  }
} else if ( suspect === "Mrs. Sparr" ) {
  if ( room === "billiards room" ) {
    weapon = "pool stick";
    solved = true;
  }

} else if ( suspect === "Ms. Van Cleve" ) {
  if ( room === "gallery" ) {
    weapon = "trophy";
    solved = true;
  }
} else {
  if ( room === "dining room" ) {
    weapon = "knife";
    solved = true;
  }
}

if ( solved ) {
  console.log( suspect + " did it in the " + room + " with the " + weapon + "!" );
}