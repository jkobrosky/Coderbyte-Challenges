// phrase to be entered into reverseString function
var phrase = prompt("Enter phrase to be reversed: ");

// function to take the phrase, add them into the array in a reverse 
// order and then join them together in the console log.
var reverseString = function(phrase) {
    var reversed = [];
    for (var i = phrase.length; i >= 0; i--) {
        reversed.push(phrase[i]);
    }
    
    console.log(reversed.join(""));

// calls the function
reverseString(phrase);