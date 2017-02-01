//Puropose: Create an array and a function
//Signature: () ---> highest number in the array
//Examples: a = {1, 4, 2}

//create an array
var a = [1,4,2]
//create a maximum starting point
var max = 0
//create a function
function highsetnum(array){
//create a function inside that function to loop through the array
  array.forEach(function(element) {
//use an if statement to check if argument is true
      if (element > max) {
        max = element;
      }
  });
      return max
}

//Create an array that finds the lowest number

var a = [1,4,2]

var min = 10

function lowestnum(array){
  array.forEach(function(element) {
      if (element < min) {
        min = element;
      }
  });
      return min
}

//Purpose: Create a function
//Signature: ()  --->  find the smallest number (the closest to zero).
//Examples:


var a = [1,4,2]

var min = .0001

function lowestnum(array){
  array.forEach(function(element) {
      if (element < min) {
        min = element;
      }
  });
      return min
}

//Arrays of Strings
//Sort your siblings names in alphabetical order
//Look at each first character of each sibling's name, and then sort alphabetically.


//Sort your siblings names in alphabetical order
  var siblings = ["Zenith","Fred","Alex","John", "Adam"]
  var parents = ["Josey","Doug"]

  var family = parents.concat(siblings);

function alphabetical(array) {
  array.sort(function(element1, element2) {
      if(element1 < element2) {
        return -1;
      }
      else if(element1 > element2) {
        return 1;

      } else {
        return 0;
      }
    });
    return array
  }

//Sort names in reverse alphabetically
  var siblings = ["Zenith","Fred","Alex","John", "Adam"]
  var parents = ["Josey","Doug"]

  var family = parents.concat(siblings);

function reverseAlphabetical(array) {
  array.sort(function(element1, element2) {
    if(element1 > element2) {
      return -1;
    }
    else if(element1 < element2) {
      return 1;

    } else {
      return 0;
    }
  });
  return array
}
