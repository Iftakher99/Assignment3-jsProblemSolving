//largest name in the Array
// main Function
function megaFriend(friendsName) {
  // you cant submit an empty array
  if (friendsName.length > 0) {
    var biggestName = friendsName[0];
    // a loop for test the biggest length
    for (var i = 1; i < friendsName.length; i++) {
      //only string can pass through
      if (typeof friendsName[i] == "string") {
        var element = friendsName[i];
        //largest name will execute from here
        if (biggestName.length < element.length) {
          biggestName = element;
        }
      } else {
        return "You have no choice submit only string "; // it wii be showed if input isn't a string
      }
    }
    return biggestName;
  } else {
    return " oh! write something";
  }
}
