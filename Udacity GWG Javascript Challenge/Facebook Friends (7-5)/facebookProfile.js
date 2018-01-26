/*************** Programming Quiz: Facebook Friends (7-5) ***************

Create an object called facebookProfile.The object should have 3 properties:

*  your name
*  the number of friends you have, and
*  an array of messages you 've posted (as strings)
*  The object should also have 4 methods:
*
*  postMessage( message ) - adds a new message string to the array
*  deleteMessage( index ) - removes the message corresponding to the index provided
*  addFriend() - increases the friend count by 1
*  removeFriend() - decreases the friend count by 1
 =========================================================================*/
var facebookProfile = {
  name: "Tony",
  friends: 515,
  messages: [
    "I love Mike Rowe!! You have to read this!!!",
    "Hundreds of miles beneath the Earth, there's water—a lot of it.",
    "Merry Christmas to all my family and friends! I really miss my brother"
  ],
  postMessage: function( message ) {
    this.messages.push( message );
  },
  deleteMessage: function( index ) {
    this.messages.splice( index, 1 );
  },
  addFriend: function() {
    this.friends += 1;
  },
  removeFriend: function() {
    this.friends -= 1;
  }
};