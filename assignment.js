//  https://github.com/Iftakher99/Assignment3-jsProblemSolving

//problem -1 convert kilometer to meter

var convertedMeter = kilometerToMeter(20.45); //take input parameter

function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000; //multiply kilometer by 1000 so it will convert to meter

  //its a trap for negative and blank user input
  if (meter >= 0 && meter != "") {
    return meter;
  } else {
    return "Kilometer can't be a Negative"; // if you fall into trap this message for you in the console
  }
}

//Problem -02 Creat a calculator to calculate the budget

//Main calculation Function
function budgetCalculator(phone, watch, laptop) {
  var totalPhonePrice = phone * 100;
  var totalWatchPrice = watch * 50;
  var totalLaptopPrice = laptop * 500;
  var totalAmount = totalLaptopPrice + totalPhonePrice + totalWatchPrice;
  // condition for a valid input
  if (
    phone >= 0 &&
    phone != "" &&
    laptop >= 0 &&
    laptop != "" &&
    watch >= 0 &&
    watch != ""
  ) {
    return totalAmount; //return for this function
  } else {
    return "submit correctly or don't disturb me"; //if the input not match the condition
  }
}
budgetCalculator(2, 3, 4);

//Problem 03 hotelCost
function hotelCost(numberOfDays) {
  if (numberOfDays >= 0 && numberOfDays != "") {
    if (numberOfDays <= 10) {
      //it will execute if number of day is equal or less than 10
      var spend = numberOfDays * 100;

      return spend;
    } else if (numberOfDays <= 20) {
      //it will execute if number of day is equal or less than 20
      var tenDays = 10 * 100;
      var secondTenDays = numberOfDays - 10;
      var spend = tenDays + secondTenDays * 80;

      return spend;
    } else {
      //it will execute if number of day is over 20
      var tenDays = 10 * 100;
      var secondTenDays = 10 * 80;
      var remainingDays = numberOfDays - 20;
      var totalSpend = tenDays + secondTenDays + remainingDays * 50;
      return totalSpend;
    }
  } else {
    return "Input the correct number of day that you wanna live here";
  }
}

hotelCost(11);

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
